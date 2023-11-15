from PIL import Image
import pytesseract

def extract_text_from_image(image_path):
    text = pytesseract.image_to_string(Image.open(image_path), lang='eng+kor')
    return text


print(extract_text_from_image("/Users/ojunseo/dev/stokers/backend/image.jpeg"))