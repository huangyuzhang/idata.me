---
sidebar: auto
---

# Sample Dataset and R commands

## Default.rda dataset

```r
# assign two subsets to a variable name (using database default)
default.yes = subset(Default,default=="Yes")
default.no = subset(Default,default=="No")

# plot a chart then add another set of data on the chart
plot(default.no$balance,default.no$income,col="blue")
points(default.yes$balance,default.yes$income,col="red")

# use Generalized Linear Model glm() function
default.reg=glm(Default ~ balance, family=binomial)
summary(default.reg)

# gives the default probability when balance is 10000
predict(default.reg,data.frame(balance=10000),type="response")

range(balance)

# input for the predict function
xvals=seq(0.2660,length=100)

yvals=predict(default.reg,data.frame(balance=xvals),type="response")

# plot the chart and a line
plot(xvals,yvals)
plot(xvals,yvals,type="l")
abline(0.5,0,col="red")

# use the generalized linear model
default.lreg=glm(Default ~ income + blance + student,family=binomial)
summary(default.lreg)

predict(default.lreg,data.frame(balance=1000,student="Yes"),type="response")
predict(default.lreg,data.frame(balance=2000,student="Yes"),type="response")
predict(default.lreg,data.frame(balance=1000,student="No"),type="response")
predict(default.lreg,data.frame(balance=2000,student="No"),type="response")

# Train model

# split training set and test set
testindex=sample(1:10000,3000)
default.train=Default[-testindex,]
default.test=Default[testindex,]

# only use the training set for glm() model
default.lreg=glm(Default ~ balance + student,family=binomial,data=default.train)

summary(default.lreg)

# prediction on test set (in the regression)
testprob=predict(default.lreg,default.test,type="response")

# compare the results from prediction and test set,
# the performance of the model (error)

# example
testpred=rep(0,3000)
testpred[testprob>0.5]=1 # set the threshold as 0.5
testpred

# actual
testval=rep(0,3000)
testval[default.test$default=="Yes"]=1
mean(testval==testpred)
mean(testval!=testpred)
# output: [1]0.025

# the problem is there are too few 0 in the data set (3%)
# alternatively we can use the 1 events (not default) to train the model

mean(testpred[default.test$default=="Yes"])
# output: [1]0.326087

# change the threshold
testpred[testprob>0.2]=1
```
