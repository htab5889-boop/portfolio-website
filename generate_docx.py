import zipfile
import os

def create_docx(filename):
    content_types = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">
  <Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>
  <Default Extension="xml" ContentType="application/xml"/>
  <Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>
  <Override PartName="/word/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.styles+xml"/>
</Types>"""

    package_rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>
</Relationships>"""

    doc_rels = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">
  <Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/>
</Relationships>"""

    styles_xml = """<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:styles xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:docDefaults>
    <w:rPrDefault>
      <w:rPr>
        <w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/>
        <w:sz w:val="22"/>
        <w:color w:val="222222"/>
      </w:rPr>
    </w:rPrDefault>
    <w:pPrDefault>
      <w:pPr>
        <w:spacing w:after="120" w:line="260" w:lineRule="auto"/>
      </w:pPr>
    </w:pPrDefault>
  </w:docDefaults>
</w:styles>"""

    # Build document.xml
    body_elements = []

    def p(text="", bold=False, italic=False, size=22, color="222222", space_after=120, space_before=0, bullet=False, align="left", border_bottom=False):
        b_tag = "<w:b/>" if bold else ""
        i_tag = "<w:i/>" if italic else ""
        jc_tag = f'<w:jc w:val="{align}"/>' if align != "left" else ""
        sp_tag = f'<w:spacing w:before="{space_before}" w:after="{space_after}" w:line="260" w:lineRule="auto"/>'
        
        pPr = f"<w:pPr>{jc_tag}{sp_tag}"
        if bullet:
            pPr += '<w:ind w:left="400" w:hanging="240"/>'
        if border_bottom:
            pPr += '<w:pBdr><w:bottom w:val="single" w:sz="12" w:space="4" w:color="00A3C4"/></w:pBdr>'
        pPr += "</w:pPr>"

        bullet_prefix = ""
        if bullet:
            bullet_prefix = '<w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="18"/><w:color w:val="00A3C4"/></w:rPr><w:t>▪ </w:t></w:r>'

        # Escape xml
        safe_text = (text.replace("&", "&amp;")
                         .replace("<", "&lt;")
                         .replace(">", "&gt;"))
        
        rPr = f"<w:rPr>{b_tag}{i_tag}<w:sz w:val=\"{size}\"/><w:color w:val=\"{color}\"/></w:rPr>"
        run = f"{bullet_prefix}<w:r>{rPr}<w:t xml:space=\"preserve\">{safe_text}</w:t></w:r>"
        return f"<w:p>{pPr}{run}</w:p>"

    def multi_run_p(runs, space_after=120, space_before=0, bullet=False, border_bottom=False):
        sp_tag = f'<w:spacing w:before="{space_before}" w:after="{space_after}" w:line="260" w:lineRule="auto"/>'
        pPr = f"<w:pPr>{sp_tag}"
        if bullet:
            pPr += '<w:ind w:left="400" w:hanging="240"/>'
        if border_bottom:
            pPr += '<w:pBdr><w:bottom w:val="single" w:sz="12" w:space="4" w:color="00A3C4"/></w:pBdr>'
        pPr += "</w:pPr>"

        bullet_prefix = ""
        if bullet:
            bullet_prefix = '<w:r><w:rPr><w:rFonts w:ascii="Arial" w:hAnsi="Arial"/><w:sz w:val="18"/><w:color w:val="00A3C4"/></w:rPr><w:t>▪ </w:t></w:r>'

        runs_xml = bullet_prefix
        for text, bold, italic, size, color in runs:
            b_tag = "<w:b/>" if bold else ""
            i_tag = "<w:i/>" if italic else ""
            safe_text = (text.replace("&", "&amp;")
                             .replace("<", "&lt;")
                             .replace(">", "&gt;"))
            rPr = f"<w:rPr>{b_tag}{i_tag}<w:sz w:val=\"{size}\"/><w:color w:val=\"{color}\"/></w:rPr>"
            runs_xml += f"<w:r>{rPr}<w:t xml:space=\"preserve\">{safe_text}</w:t></w:r>"

        return f"<w:p>{pPr}{runs_xml}</w:p>"

    # Header
    body_elements.append(p("PRINCE AHIRWAR", bold=True, size=40, color="0B132B", align="center", space_after=40))
    body_elements.append(p("Professional Video Editor & DaVinci Resolve Colorist", bold=True, size=24, color="00A3C4", align="center", space_after=60))
    body_elements.append(p("Current Location: Bhopal, Madhya Pradesh, India  |  princeahirwar.8127@gmail.com", size=20, color="4A5568", align="center", space_after=30))
    body_elements.append(p("Portfolio: https://portfolio-website-three-gamma-95.vercel.app/  |  Instagram: @prince_editz_308", size=20, color="4A5568", align="center", space_after=180))

    # Summary
    body_elements.append(p("PROFESSIONAL SUMMARY", bold=True, size=24, color="0B132B", space_before=140, space_after=80, border_bottom=True))
    body_elements.append(p("Driven and results-focused freelance Video Editor and Colorist currently based in Bhopal, specializing in DaVinci Resolve post-production, commercial promo editing, and motion design. Proven history of delivering viral social campaigns accumulating over 80,000 organic views and generating direct revenue for business clients in hospitality, tourism, and construction. Recognized for precision timeline cutting, high-impact storytelling hooks, node-based cinematic color grading, and a 100% client satisfaction and repeat retention rate.", size=21, color="2D3748", space_after=140))

    # Core Technical Skills
    body_elements.append(p("CORE TECHNICAL SKILLS", bold=True, size=24, color="0B132B", space_before=140, space_after=80, border_bottom=True))
    body_elements.append(multi_run_p([("Primary Software: ", True, False, 21, "0B132B"), ("DaVinci Resolve Studio (Cut, Edit, Color, Fusion FX, Fairlight Audio)", False, False, 21, "2D3748")], bullet=True, space_after=50))
    body_elements.append(multi_run_p([("Cinematic Color Grading: ", True, False, 21, "0B132B"), ("Node-based grading, Scopes (Waveform/Vectorscope), Primary/Secondary nodes, Rec.709 & HDR workflows, Shot Matching, Skin-tone tuning, Custom LUT creation", False, False, 21, "2D3748")], bullet=True, space_after=50))
    body_elements.append(multi_run_p([("Motion Graphics & VFX: ", True, False, 21, "0B132B"), ("Fusion FX, Kinetic typography, Upward rising word-by-word text animation, Lower thirds, Title sequences, Logo reveals", False, False, 21, "2D3748")], bullet=True, space_after=50))
    body_elements.append(multi_run_p([("Audio Engineering & SFX: ", True, False, 21, "0B132B"), ("Beat-synced cutting, Dialogue enhancement, Atmospheric sound design, Audio mastering, L/J cut transitions", False, False, 21, "2D3748")], bullet=True, space_after=50))
    body_elements.append(multi_run_p([("Production & Commercial Strategy: ", True, False, 21, "0B132B"), ("End-to-end shoot coordination, Social-first video hooks, Rapid revision turnaround, Multi-cam assembly", False, False, 21, "2D3748")], bullet=True, space_after=140))

    # Experience
    body_elements.append(p("WORK EXPERIENCE & COMMERCIAL ENGAGEMENTS", bold=True, size=24, color="0B132B", space_before=140, space_after=80, border_bottom=True))
    
    # Freelance Header
    body_elements.append(multi_run_p([("Freelance Video Editor & Colorist", True, False, 22, "0B132B"), ("  |  Current Base: Bhopal, MP (Remote & On-Site Projects)", False, True, 20, "718096")], space_after=40))
    body_elements.append(p("Self-Employed  |  2024 – Present", bold=True, size=20, color="00A3C4", space_after=60))
    body_elements.append(p("Provide complete video post-production solutions for commercial businesses, local enterprises, and digital creators. Manage the full editing lifecycle from raw footage ingestion and cutting to visual effects, color grading, and final delivery.", size=21, color="2D3748", space_after=70))

    # Projects
    body_elements.append(multi_run_p([("Dubey / Dubai Resort — Commercial Promotional Campaign", True, False, 21, "0B132B"), (" (Hospitality & Tourism)", False, True, 20, "718096")], space_after=40))
    body_elements.append(p("Executed complete end-to-end video production, managing shooting, multi-track editing, motion graphics, and a vibrant color grade.", bullet=True, size=21, color="2D3748", space_after=30))
    body_elements.append(multi_run_p([("Delivered viral campaign generating ", False, False, 21, "2D3748"), ("80,000+ views", True, False, 21, "0B132B"), (" and directly driving thousands of rupees in profit through increased resort ticket sales.", False, False, 21, "2D3748")], bullet=True, space_after=30))
    body_elements.append(p("Client awarded 5-star rating and re-engaged for subsequent commercial media projects.", bullet=True, size=21, color="2D3748", space_after=80))

    body_elements.append(multi_run_p([("Hotel Ramvan — Brand Promotional Ad", True, False, 21, "0B132B"), (" (Commercial Hospitality)", False, True, 20, "718096")], space_after=40))
    body_elements.append(p("Formulated a captivating opening hook and structured pacing that boosted audience retention.", bullet=True, size=21, color="2D3748", space_after=30))
    body_elements.append(multi_run_p([("Achieved ", False, False, 21, "2D3748"), ("30,000+ views", True, False, 21, "0B132B"), (", expanding regional customer footfall and inquiries for the hotel venue.", False, False, 21, "2D3748")], bullet=True, space_after=30))
    body_elements.append(p("Applied professional lighting correction and color warmth to enhance dining and hospitality visuals.", bullet=True, size=21, color="2D3748", space_after=80))

    body_elements.append(multi_run_p([("A.R. Construction — Corporate Brand Video", True, False, 21, "0B132B"), (" (Real Estate & Infrastructure)", False, True, 20, "718096")], space_after=40))
    body_elements.append(p("Crafted high-impact commercial edit with precision cuts, punchy transitions, and bold informational motion text callouts.", bullet=True, size=21, color="2D3748", space_after=30))
    body_elements.append(p("Completed project ahead of schedule with 100% satisfaction, resulting in a repeat engagement agreement.", bullet=True, size=21, color="2D3748", space_after=140))

    # Portfolio Highlights
    body_elements.append(p("FEATURED CREATIVE PROJECTS", bold=True, size=24, color="0B132B", space_before=140, space_after=80, border_bottom=True))
    body_elements.append(multi_run_p([("Truth of Life (Motion Graphics Showcase): ", True, False, 21, "0B132B"), ("Engineered complex kinetic typography, stylized camera transitions, and visual narrative storytelling entirely inside DaVinci Resolve Fusion.", False, False, 21, "2D3748")], bullet=True, space_after=50))
    body_elements.append(multi_run_p([("Bhojpur Temple (Cinematic Travel & Architecture): ", True, False, 21, "0B132B"), ("Documentary-style edit featuring golden-hour color grading, historical asset presentation, and immersive environmental sound design.", False, False, 21, "2D3748")], bullet=True, space_after=140))

    # Key Strengths
    body_elements.append(p("KEY ACHIEVEMENTS & DIFFERENTIATORS", bold=True, size=24, color="0B132B", space_before=140, space_after=80, border_bottom=True))
    body_elements.append(multi_run_p([("100% Client Retention: ", True, False, 21, "0B132B"), ("Every commercial business worked with has rated the experience 5/5 stars and returned for repeat projects.", False, False, 21, "2D3748")], bullet=True, space_after=40))
    body_elements.append(multi_run_p([("Results-Driven Editing: ", True, False, 21, "0B132B"), ("Focus on real business metrics—watch-time, audience retention, and conversion rather than just aesthetics.", False, False, 21, "2D3748")], bullet=True, space_after=40))
    body_elements.append(multi_run_p([("Rapid Turnaround: ", True, False, 21, "0B132B"), ("Efficient post-production pipeline delivering polished cuts and responsive revision cycles within 24-48 hours.", False, False, 21, "2D3748")], bullet=True, space_after=40))

    doc_xml = f"""<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main">
  <w:body>
    {''.join(body_elements)}
    <w:sectPr>
      <w:pgSz w:w="12240" w:h="15840"/>
      <w:pgMar w:top="1080" w:right="1080" w:bottom="1080" w:left="1080" w:header="720" w:footer="720" w:gutter="0"/>
    </w:sectPr>
  </w:body>
</w:document>"""

    with zipfile.ZipFile(filename, 'w', zipfile.ZIP_DEFLATED) as z:
        z.writestr('[Content_Types].xml', content_types)
        z.writestr('_rels/.rels', package_rels)
        z.writestr('word/_rels/document.xml.rels', doc_rels)
        z.writestr('word/styles.xml', styles_xml)
        z.writestr('word/document.xml', doc_xml)

    print(f"Successfully generated {filename}")

if __name__ == "__main__":
    create_docx(r"c:\Users\panka\OneDrive\Desktop\PORTFOLIO\Prince_Ahirwar_Resume.docx")
