# Lecture 2: Probability

Date: 2018.10.1

(ppt.23)
Assume we use 65% and 35% of parts from suppliers 1 and 2
Assume historical qualiy levels have been as follows:

|           | good | bad |
| --------- | ---- | --- |
| supplier1 | 98%  | 2%  |
| supplier2 | 95%  | 5%  |

If a part is bad, what is the probability it came from supplier 1?

P(1|B)= (P(B|1)*P(1))/P(B)
=(P(B|1)*P(1))/(P(B|1)*P(1)+P(B|2)*P(2))
=(0.02*0.65)/(0.02*0.65+0.05\*0.35)
≈0.43
