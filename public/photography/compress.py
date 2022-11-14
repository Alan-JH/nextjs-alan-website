import cv2, os

dir = input("Enter directory to compress: ")
ls = os.listdir("./" + dir)
st = set(ls)
for imgname in ls:
    if "_compressed" not in imgname and imgname[:imgname.index(".")] + "_compressed" + imgname[imgname.index("."):] not in st:
        img = cv2.imread("./" + dir + "/" + imgname, cv2.IMREAD_UNCHANGED)
        print(imgname)
        print('Original Dimensions : ',img.shape)
        scale_percent = 10 # percent of original size
        width = int(img.shape[1] * scale_percent / 100)
        height = int(img.shape[0] * scale_percent / 100)
        dim = (width, height)
        
        # resize image
        resized = cv2.resize(img, dim, interpolation = cv2.INTER_AREA)
        cv2.imwrite("./" + dir + "/" + imgname[:imgname.index(".")] + "_compressed" + imgname[imgname.index("."):], resized)
        
