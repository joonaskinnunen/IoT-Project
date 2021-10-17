#!usr/bin/env python
from time import sleep
import serial
import datetime
import re
import numpy as np
import warnings

from pymongo import MongoClient
from pprint import pprint
client = MongoClient('')
db=client.HomeMonitor

serverStatusResult=db.command("serverStatus")
pprint(serverStatusResult)

ser = serial.Serial(
    port='/dev/ttyACM0',
    baudrate = 9600,
    parity=serial.PARITY_NONE,
    stopbits=serial.STOPBITS_ONE,
    bytesize=serial.EIGHTBITS,
    timeout=0)

while 1:
    sleep(60)
    line = ser.readline()
    print(line)
    values = re.findall('\d+', line.decode('utf-8'))
    print(values)
    if len(values) > 1:
        result = db.data.insert_one({'time': datetime.datetime.now(), 'humidity': int(values[0]), 'temperature': int(values[1])})
        print(result)
