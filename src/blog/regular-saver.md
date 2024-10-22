---
title: Regular Savings Accounts
author: Matt McCorry
date: 2024-08-12
tags: Savings,Interest
---

# Regular Savings Accounts

In the UK, it is common for banks to offer loss leader regular savings accounts. Normally you can pay in a set amount per month at a high interest rate. For example at time of writing, Virgin Money offer 10.4% on £250 a month.

## Methodology

You can only pay in a set amount a month, so you could express the potential interest the average value of the account, multiplied by the interest rate, e.g.:

`£250 * 6.5 * 0.104 = £169`

That works as an estimate, but the average value varies by when the account is opened, and when the deposit is made. Consider opening the account on the first of the month, and making the deposits on the first:

| Deposit | Date     | Deposit | Monthly Interest | Total Value |
| ------- | -------- | ------- | ---------------- | ----------- |
| 1       | 01/09/24 | £250.00 | £0.00            | £250.00     |
| 2       | 01/10/24 | £250.00 | £1.97            | £501.97     |
| 3       | 01/11/24 | £250.00 | £4.08            | £756.05     |
| 4       | 01/12/24 | £250.00 | £5.95            | £1,011.99   |
| 5       | 01/01/25 | £250.00 | £8.23            | £1,270.22   |
| 6       | 01/02/25 | £250.00 | £10.33           | £1,530.55   |
| 7       | 01/03/25 | £250.00 | £11.23           | £1,791.78   |
| 8       | 01/04/25 | £250.00 | £14.57           | £2,056.34   |
| 9       | 01/05/25 | £250.00 | £16.17           | £2,322.52   |
| 10      | 01/06/25 | £250.00 | £18.88           | £2,591.40   |
| 11      | 01/07/25 | £250.00 | £20.38           | £2,861.78   |
| 12      | 01/08/25 | £250.00 | £23.26           | £3,135.05   |
|         | 30/08/25 | £0.00   | £24.66           | £3,159.71   |

Total interest due: **£159.71**.

If we open the account on the last day of the month, make the first payment on the same day, and then make the second payment on the next day, we will now have space for a 13th payment for one month minus one day.

| Deposit | Date     | Deposit | Monthly Interest | Total Value |
| ------- | -------- | ------- | ---------------- | ----------- |
| 1       | 31/08/24 | £250.00 | £0.00            | £250.00     |
| 2       | 01/09/24 | £250.00 | £0.07            | £500.07     |
| 3       | 01/10/24 | £250.00 | £3.93            | £754.00     |
| 4       | 01/11/24 | £250.00 | £6.13            | £1,010.13   |
| 5       | 01/12/24 | £250.00 | £7.95            | £1,268.07   |
| 6       | 01/01/25 | £250.00 | £10.31           | £1,528.38   |
| 7       | 01/02/25 | £250.00 | £12.42           | £1,790.81   |
| 8       | 01/03/25 | £250.00 | £13.14           | £2,053.95   |
| 9       | 01/04/25 | £250.00 | £16.70           | £2,320.65   |
| 10      | 01/05/25 | £250.00 | £18.25           | £2,588.90   |
| 11      | 01/06/25 | £250.00 | £21.05           | £2,859.94   |
| 12      | 01/07/25 | £250.00 | £22.50           | £3,132.44   |
| 13      | 01/08/25 | £250.00 | £25.46           | £3,157.90   |
|         | 30/08/25 | £0.00   | £24.01           | £3,181.91   |

Total interest due: **£181.91**.

Calculate the monthly interest with`=(((1+DailyInterestRate)^DATEDIF(LastMonthDate, TodayDate, "d"))-1)\*LastMonthTotal`
