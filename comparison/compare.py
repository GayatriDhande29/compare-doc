import sys
import difflib
from PyPDF2 import PdfReader

def extract_text(pdf_path):
    reader = PdfReader(pdf_path)
    text = ""
    for page in reader.pages:
        text += page.extract_text()
    return text

def generate_suggestions(original, user):
    diff = difflib.unified_diff(original.splitlines(), user.splitlines(), lineterm="")
    suggestions = "\n".join(diff)
    return suggestions

def main(user_file):
    # Standard document path
    standard_path = "standard.pdf"
    standard_text = extract_text(standard_path)
    user_text = extract_text(user_file)

    suggestions = generate_suggestions(standard_text, user_text)
    print("Comparison Result:\n")
    print(suggestions)

if _name_ == "_main_":
    user_file_path = sys.argv[1]
    main(user_file_path)