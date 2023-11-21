---
title: Train Commuting Optimisation
author: Matt McCorry
date: 2023-04-15
tags: Train Ticket,Commute,Pain,Misery
---

## Problem

Train tickets to London from Brighton are expensive. There are annual season tickets, but are they really worth it?

## Back in the day

A long time ago, my wife had her first job London, and we were living in Brighton. I forget what a season ticket cost back then, but safe to say it was a very large portion of her modest salary at the time.

We spent some time thinking about the cheapest way to make the trip.

## How Often do I really go to work?

In order to determine the per trip cost of the tickets, we need to know how many trips there are in the year. At the time, she was in the office 5 days a week, less bank holidays and leave.

(52 \* 5) - 8 - 26 = 226 Trips a year

## What are the ticket options?

Options these days (2023 prices, Brighton to London Bridge peak hours)
| Ticket Type | Face Price | Cost Per Return Trip|
| ------ | --- | --- |
|Return Ticket|£50.10|£50.10|
|Single Tickets on a Network Railcard|£43.15|£43.15|
|Split Tickets on a Network Railcard|£38.65|£38.65|
|Weekly Season ticket|£118.60|£23.75|
|Carnet ticket|£350.70|£43.83|
|Monthly Season ticket|£455.50|£21.02 (assumes 21.7 weekdays in a month, no allowance for bank holidays or holidays)|
|Annual Season ticket|£4744.00|£18.25 (assuming 5 days a week every week) or £20.99 (assumes 226 trips a year)|

Eagle eyed readers will notice that the carnet ticket are about £5 a return more than buying a splitter on a railcard. There may be a case where they make sense, but not in the use case listed here.

## What is the optimal solution?

We found that the difference between Monthly and Annual tickets was not much. The monthly ticket can have extra days tacked on to the end of it. This allows extending the ticket out to end on Friday, reducing the average cost, e.g. £20.07/Trip for a 1 month 3 day ticket. By taking a month + a few days ticket, starting on a Monday, ending on a Friday, or starting/ending at a holiday we can reduce the cost per trip to below the cost of a annual ticket.

## What are the downsides to a split ticket?

When you buy a split, the website takes a cut. The prices given here include it, so in theory you could set up a journey favourite and save a few pounds more. It is after all, a journey you make repeatedly.

Train delay repayments are slightly complicated. I have found that when my train is delayed, it's normally only half the journey that is delayed, so I can only get the 25% refund on that portion of the spit.

## What about Annual Season ticket extras?

They do come with a Gold Railcard, partner Gold Railcard for £10, and railcard style Oyster discounts.

## Other Ideas

Curiously, a split fare from Brighton to London Bridge is cheaper than one from Preston Park to London Bridge. It's worth looking into the rules about starting late/ leaving early. [StackExchange Question related](https://travel.stackexchange.com/questions/103127/uk-train-can-i-board-at-a-different-station).
