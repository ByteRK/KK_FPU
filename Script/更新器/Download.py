import urllib.request
import os
import datetime
import time

def Update(url):

	filename = os.path.basename(url)
	request = urllib.request.Request(url)
	time_start=time.time()
	try:
		response = urllib.request.urlopen(request)
		if (response.getcode() == 200):
			host = "../lxk0301/" + filename
			with open(host, "wb") as f:
				f.write(response.read()) # 将内容写入图片


		now_time = datetime.datetime.now().strftime('%Y/%m/%d %T')
		time_end=time.time()
		t = time_end-time_start
		with open("Update.log","a+") as log:
			log.write(now_time + " [Success] " + filename + " t：" + str(t)  + "\n")
		print(now_time + " [Success] " + filename)

	except:

		now_time = datetime.datetime.now().strftime('%Y/%m/%d %T')
		time_end=time.time()
		t = time_end-time_start
		with open("Update.log","a+") as log:
			log.write(now_time + " [failed] " + filename + " t：" + str(t)  + "\n")
		print(now_time + " [failed] " + filename)

def Date(Address):
	with open(Address,'r', encoding="utf-8") as date:
		while 1:
			line = date.readline()
			line = line.strip('\n')  
			if not line:
				break
			if(line[0]=='#'):
				continue
			Update(line)

def main():
	Date('lxk0301.rki')

if __name__ == '__main__':
	main()