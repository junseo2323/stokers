import pytesseract
from PIL import Image
import pytesseract
from PIL import ImageEnhance
import re


def ocr(path,word):
    image = Image.open(path)
    enhancer = ImageEnhance.Contrast(image)
    image = enhancer.enhance(2.0)  # 조절할 대비값 설정
    image = image.convert('L')
    image.save('preprocessed_image.jpeg')
    text = pytesseract.image_to_string(image, lang='kor', config='--oem 3')
    word_pattern = re.compile(r'\b\w+\b')
    words = word_pattern.findall(text)
    res = ''.join(list(words))

    return word in res


