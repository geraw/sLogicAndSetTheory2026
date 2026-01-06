import xml.etree.ElementTree as ET

ns = {'svg': 'http://www.w3.org/2000/svg'}
ET.register_namespace('', ns['svg'])
ET.register_namespace('xlink', 'http://www.w3.org/1999/xlink')

file_path = r'c:\Users\geraw\courses\sLogicAndSetTheory2026\images\KantorBernstein.svg'

try:
    tree = ET.parse(file_path)
    root = tree.getroot()

    # Find the group for the specific cell
    # data-cell-id is an attribute, but usually not in the svg namespace for the attribute name itself?
    # Or is it? In the file content it was data-cell-id="...".
    
    # We need to search all 'g' elements
    target_cell_found = False
    
    for g in root.findall('.//{http://www.w3.org/2000/svg}g'):
        if g.get('data-cell-id') == 'GMjDjYn8yaWfEYwVLVmB-4':
            print("Found cell group")
            target_cell_found = True
            
            # Find the switch element inside
            switch = g.find('.//{http://www.w3.org/2000/svg}switch')
            if switch is not None:
                print("Found switch element")
                
                # Find foreignObject and text
                fo = switch.find('{http://www.w3.org/2000/svg}foreignObject')
                text = switch.find('{http://www.w3.org/2000/svg}text')
                
                if fo is not None:
                    print("Removing foreignObject")
                    switch.remove(fo)
                
                if text is not None:
                    print(f"Updating text from '{text.text}' to 'f[A]'")
                    text.text = "f[A]"
                    # Make it italic to look like math
                    text.set("font-style", "italic")
                    # Remove potential math delimiters if present in other attributes (unlikely for text element)
            else:
                 print("Switch element not found in cell group")
            break
            
    if target_cell_found:
        tree.write(file_path, encoding='UTF-8', xml_declaration=True)
        print("Successfully updated SVG")
    else:
        print("Target cell GMjDjYn8yaWfEYwVLVmB-4 not found")

except Exception as e:
    print(f"Error: {e}")
