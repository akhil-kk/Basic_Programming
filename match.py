import re

sub = input("Enter the subtitile filename ......... NB: Must include file extention ::  ")
try:
    sample_names = open(sub, encoding='utf-8')
    data = sample_names.read()
    sample_names.close()
    line = re.search(r'(?P<code>(^[\d{,4]+$)', data)
    #line1 = re.findall(r'(?P<time_stamp>[\d{2}:\d{2}:\d{2},\d{3}]+ --> [\d{2}:\d{2}:\d{2},\d{3}]+)', data)
    print(line1)
except UnicodeDecodeError:
    print("The file is not UTF-8 encoded ")