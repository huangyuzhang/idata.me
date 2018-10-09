# Notes

## Chapter 2

## Things before start

First, you need to frame the problem: is it **supervised**, **unsupervised**, or **Reinforcement** Learning? Is it a **classification** task, a **regression** task, or something else? Should you use **batch learning** or **online learning** techniques?

首先，你需要划定问题：**监督学习**或**非监督学习**，还是**强化学习**？这是个**分类任务**、**回归任务**，还是其它的任务？

## Create a Test Set (创建测试集)

It may sound strange to voluntarily set aside part of the data at this stage. After all, you have only taken a quick glance at the data, and surely you should learn a whole lot more about it before you decide what algorithms to use, right? This is true, **but your brain is an amazing pattern detection system, which means that it is highly prone to overfitting**: if you look at the test set, you may stumble upon some seemingly interesting pattern in the test data that leads you to select a particular kind of Machine Learning model. When you estimate the generalization error using the test set, your estimate will be too optimistic and you will launch a system that will not perform as well as expected. This is called data snooping bias.

在这个阶段就分割数据，听起来很奇怪。毕竟，你只是简单快速地查看了数据而已，你需要再仔细调查下数据以决定使用什么算法。这么想是对的，**但是人类的大脑是一个神奇的擅于发现规律的系统，这意味着大脑非常容易发生过拟合**：如果你查看了测试集，就会不经意地按照测试集中的规律来选择某个特定的机器学习模型。再当你使用测试集来评估误差率时，就会导致评估过于乐观，而实际部署的系统表现就会差。这称为数据透视偏差。
