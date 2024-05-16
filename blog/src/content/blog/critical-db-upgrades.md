---
title: 'Performing critical database upgrades'
description: 'Learning to perform critical major version upgrades with less knowledge'
pubDate: 'May 16 2024'
heroImage: '/aurora-rds-logo.png'
---

I accidentally discovered that we have to do critical database upgrades for 6 services since their RDS versions were going EOL in a few months.

### How did I get here?
I was investigating an ops issue where the database of a service restarted at night (yikes), with VictorOps pinging the on-call person and others at 3AM their time. This was due to a minor version upgrade on the database, but we specifically disabled a minor version upgrade on the particular service. 

_So why did it happen?_


_Additionally, why weren't we notified of this maintenance?_ Even if there was a override of the Auto minor version upgrade setting.

Digging further, I learnt that we had a slackbot that let us know of these upgrades - but searching through Slack gave me nothing.

I finally ended up on the AWS health dashboard and saw that we indeed did have a notice issued to us for this mandatory AWS security patch on the service's database -- but the slackbot had a blip and didn't let us know. This answers my questions above.

*This is when I saw another health notice.*

6 services (some slightly legacy and not exactly revenue generating) were running on a `11.x` version of Aurora that was going to be sunset (End of Life'd) in a few more months by AWS. 

I let my team know immediately and alerted the teams owning these.

My team owned a few of the services and I picked up the task of upgrading them.

_Now, how do we actually start upgrading them?_

### Upgrading the databases

After pouring over AWS docs (team docs on this were limited at the time), I put together the deploy plan for the first service. I had no idea how upgrades worked, and being solely a full-stack software engineer - this world was new to me. 

But within a week of me digging through details such as:
- when to do the upgrade, 
- how long does it take, where to monitor when we upgrade  (step by step as the upgrade progresses)
- how to minimize downtime,
- what is the rollback plan, 
- what are the pre and post upgrade steps,
- communicating to the right stakeholders of when the service may be unavailable when the upgrade is happening 

The list is endless. But once approved by lead engineers and other stakeholders & sufficient testing with different non-prod environments, went forward with it successfully. This upgrade served as the base to the other services and what considerations we should have while doing them and I was able to oversee those upgrades as well answering any questions that the team had.

This made me feel very empowered overall as I took on a complicated task of discovery and execution in a domain that was very new to me and did it successfully.

We upgraded 3 services successfully and I took a bit of a break after that haha.

I gained a lot of valuable knowledge from this journey and after that, raised my hand first for these types of tasks and the team trusted me with them since I had gone through many successful (and unsuccessful haha - that's a story for later) upgrades. It also helped us get a lot of updated documentation for thought processes involved for these upgrades.

### Biggest takeaway

To be good at something unknown and intimidating, the first step is to actually be brave and pick it up and go through the process of doing it cause otherwise you'll always be in the comfort zone and not grow your skills.
