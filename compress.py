import cv2, os
import imutils
import time

dir = input("Enter directory to compress: ")

images = []
with open("./public/" + dir + "/list.txt") as f:
    count = 1
    for line in f:
        ls = line.strip().split(", ")
        link, descr = ls[0], ", ".join(ls[1:])
        try:
            img = imutils.url_to_image(link)
        except:
            time.sleep(20)
            img = imutils.url_to_image(link)

        print('Original Dimensions : ',img.shape)
        scale_percent = 25 # percent of original size
        width = int(img.shape[1] * scale_percent / 100)
        height = int(img.shape[0] * scale_percent / 100)
        dim = (width, height)

        # resize image
        resized = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)
        cv2.imwrite("./public/" + dir + "/" + str(count) + ".jpg", resized)

        images.append((dir, link, str(count) + ".jpg", img.shape[1], img.shape[0], descr))
        count += 1
        #time.sleep(0.2)

f = open("./public/" + dir + "/list.js", "w")
f.write("import {image} from '../../../components/gallery-elements'\n")
f.write("export const images = [\n")
for i in images:
    f.write(f"""\timage("{i[0]}", "{i[1]}", "{i[2]}", {i[3]}, {i[4]}, "{i[5]}"),\n""")
f.write("];")
f.close()