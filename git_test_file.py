## The below function reads the subtitles lines where numbers are present and stores in a list. Then move the odd elements to another list
#then check if seq1[i] == seq[i] + 1 . if yes, list is continious ie 1,2,3,4,5,6,7.  Then there is no break in sequence

def sequence_check():
    seq = []
    seq1 = []
    for line in lines:
        if line.isnumeric() == True:
            seq.append(line)
            continue
    print("\n The subttitle sequences are \n\n ", seq)
    seq1 = seq[1::2]
    #print(seq1)
    del seq[1::2]
    #print(seq)
    success = True
    for i in range(len(seq)):
        if int(seq1[i]) == int(seq[i]) + 1:
            continue
        else:
            success = False
            print("\n \n OOPS!!!.. There is a sequence error in the {}th line of subtitle".format((i*2)+1))
            break
    if success:
        print("\n All subtitle sequences are continuous and in order..... Sequence check ....COMPLETE.....")

# Below function get the time stamps from the subtitle by checking each line for digits using isnumeric
# function and printing the next line if digit is found, which is the needed time stamp

def get_time_stamp():
    sequence_check()
    stamps = []
    for line in lines:
        if line.isnumeric() == True:
            a = lines.index(line)
            stamps.append(lines[a + 1])
            continue
    print("\n", stamps)

# The below block of code reads a subtitle file to a list using splitlines() function 
# and checks if it is UTF-8 encoded. If not, error message is displayed
## This is where the program begins

sub = input("Enter the subtitle name: ")
try:
    with open(sub, encoding ='utf-8') as f:
        lines = f.read().splitlines()
except UnicodeDecodeError:
    print("The file is not UTF-8 encoded ")

get_time_stamp()



