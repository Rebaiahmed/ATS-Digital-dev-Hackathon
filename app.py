import requests

res = requests.get('http://hackathon.internal.ats-digital.com:3333/api/nuggets/discover?token=30c052c9-13d2-43e4-b2ba-3805a64dff19')
data = res.json()

print("hello")

CALCULS = [x for x in myList if x.type == "CALCULUS"] 
PRIME = [x for x in myList if x.type == "PRIME"] 
MAX = [x for x in myList if x.type == "MAX"] 


print("data" + data[0])
#-----------------
