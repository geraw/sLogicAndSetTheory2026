import sys
import importlib.util
import os

def check_install(package):
    spec = importlib.util.find_spec(package)
    return spec is not None

def extract_text(pdf_path):
    if not os.path.exists(pdf_path):
        print(f"Error: File not found at {pdf_path}")
        return

    text = ""
    if check_install('pypdf'):
        try:
            from pypdf import PdfReader
            reader = PdfReader(pdf_path)
            for i, page in enumerate(reader.pages):
                page_text = page.extract_text()
                if page_text:
                    text += f"--- Page {i+1} ---\n{page_text}\n"
        except Exception as e:
            print(f"Error using pypdf: {e}")
            return
    elif check_install('PyPDF2'):
        try:
            import PyPDF2
            with open(pdf_path, 'rb') as f:
                reader = PyPDF2.PdfReader(f)
                for i, page in enumerate(reader.pages):
                    page_text = page.extract_text()
                    if page_text:
                        text += f"--- Page {i+1} ---\n{page_text}\n"
        except Exception as e:
            print(f"Error using PyPDF2: {e}")
            return
    else:
        print("No suitable PDF library found (pypdf or PyPDF2). Please install one via pip.")
        return

    # Write output to a file to avoid console buffer issues if large
    output_file = "pdf_content.txt"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write(text)
    print(f"Successfully extracted text to {output_file}")

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python extract_pdf_text.py <pdf_path>")
    else:
        extract_text(sys.argv[1])
