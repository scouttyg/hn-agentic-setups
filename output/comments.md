# Ask HN: What's your current AI agentic setup?

537 points | by eggbrain | 2026-11-04T14:37:22 | 754 comments

I'm curious how people on HN are using AI day to day, and came up with a list of questions I thought could be interesting to know. No need to answer every question of course, just wanted to get a gut feel how people are using AI.

1) What AI subscriptions are you personally paying for? (Claude, ChatGPT/Codex, Cursor, etc)

- Which tiers?

- Have you purchased multiple subscriptions from the same provider (eg two Claude accounts)?

2) Are you using models outside (or instead) of those subscriptions? For example, pay-as-you-go APIs, OpenRouter, or locally hosted models.

- Which models and providers?

3) What coding harnesses and interfaces are you using? Are you sticking with the default CLIs or IDE integrations, or using alternatives like OpenCode, Pi, Aider, Muse Code, or custom-built harnesses?

- What made you switch harnesses (if you switched)?

4) Are you using any agent orchestration or swarm tools?

- For example, Munder Difflin, Gas Town, Ruflo, or something custom.

5) Are you using broader agent platforms like OpenClaw / Hermes Agent / Grok bot / Dots / Muse?

- If you are using them, what are your main use cases?

-----

I know my workflow has differed significantly from a year ago, and so it would be interesting to capture a snapshot today of what people are using and why.

---

**Animats** · 2026-11-05T08:39:37 · [#50376720](https://news.ycombinator.com/item?id=50376720)

Embarrassingly, I don't have one yet. I'm mostly still writing code one keystroke at a time. I've used Github Copilot to translate between languages and look things up, but haven't trusted it to write new code or fix anything.

Claude Fable is now good enough that I should be using it. The latest Claude version is said to be comparable to a mid-career graphics programmer, which is about what I need. Six months ago it wasn't good enough to use for such work, and probably would have made a hash of my code. There's been progress.

But Anthropic's business practices are scary. They have a reputation for cancelling accounts for random reasons, offer rather bad terms, and have no customer support. I have a strong aversion to services with a reputation for cancelling services arbitrarily. They will apparently cancel based on their system's guesses as to what you're working on. Sometimes they guess wrong. What I'm doing (metaverse clients) is so far out of the mainstream they may guess wrong.

I'm currently stalled signing up for Claude because their verification email system can't get to my inbox. (Some problem with their using Constant Contact, a spam system, to send transactional emails to my own domain, which, long ago, I had blocked at the Constant Contact end. I think. The verification email never touches the inbound mail server.) It's very important to Anthropic that you sign up with the "right" email address, and it may not be possible to change it, so using some disposable address is not a good idea.

Suggestions?

> **creativeSlumber** · 2026-11-05T12:35:56 · [#50378366](https://news.ycombinator.com/item?id=50378366)
>
> > But Anthropic's business practices are scary. They have a reputation for cancelling accounts for random reasons, offer rather bad terms, and have no customer support. I have a strong aversion to services with a reputation for cancelling services arbitrarily. They will apparently cancel based on their system's guesses as to what you're working on. Sometimes they guess wrong. What I'm doing (metaverse clients) is so far out of the mainstream they may guess wrong.
>
> Then use open alternatives as much as possible. Something like Opencode with OpenRouter with Deepseek 4.1 from ZDR provider works very well and costs like 1/20th.

> > **scosman** · 2026-11-05T15:18:26 · [#50380185](https://news.ycombinator.com/item?id=50380185)
> >
> > It costs 1/20th the price at token pricing, but an Ultra subscription is still amazing value.

> > **bloppe** · 2026-11-05T21:27:44 · [#50384691](https://news.ycombinator.com/item?id=50384691)
> >
> > I also think OAI is much better than Anthropic in this regard. They don't try to gatekeep nearly as much.
> >
> > But I agree that open alternatives are sort of a theoretical ideal. Just a lot harder to get those mega-subsidized.

> > **jpardoe** · 2026-11-05T15:32:26 · [#50380381](https://news.ycombinator.com/item?id=50380381)
> >
> > In practice all of these open models are more expensive than a Claude subscription.

> > > **ggregoire** · 2026-11-05T16:27:11 · [#50381117](https://news.ycombinator.com/item?id=50381117)
> > >
> > > Are they? (genuine question, i've got no experience with Claude) This month I used 1 billion tokens (including cache) with DS4.1 flash and it cost me 7% of my $10 opencode go sub.
> > >
> > > If you meant in developer time, then I don't know but it seems very fast to me (rarely thinks more than ~10sec, never more than ~30sec) and usually oneshots what I prompt it to do. I use opencode tui as harness.

> > > > **jpardoe** · 2026-11-06T14:19:10 · [#50392572](https://news.ycombinator.com/item?id=50392572)
> > > >
> > > > In my experience yes. Been using Claude since day one and wanted to experiment with Pi for fun, and try to get my costs down. I found the open models more expensive, eventually had to plug my Pi set up into an OpenAI subscription, that was the only way to get good value… Then I realised OpenAI is way behind Opus 5.5 and their subscription is far less generous with usage, so I’ve come full circle and am back on Claude Code.

> > > > **jeffyaw** · 2026-11-05T20:33:40 · [#50384114](https://news.ycombinator.com/item?id=50384114)
> > > >
> > > > i found they were until recently. mimo 2.6 flash and glm 5.3 flash seem to finally be cheaper. i find ds4.1 flash still on the high side.

> > > > > **jpardoe** · 2026-11-06T14:21:27 · [#50392594](https://news.ycombinator.com/item?id=50392594)
> > > > >
> > > > > I found GLM Flash competitive price wise but then my tasks took twice as long to complete. Even if it was cheaper (in my experience it still wasn’t) you then lose out on speed because of the insane amounts of inefficient reasoning.

> **ChrisRR** · 2026-11-05T10:14:23 · [#50377407](https://news.ycombinator.com/item?id=50377407)
>
> You don't even need to start off with Fable. Give Opus 5.5 a try first and then then try Fable if you feel like you need to push it further

> > **nedt** · 2026-11-05T13:05:53 · [#50378628](https://news.ycombinator.com/item?id=50378628)
> >
> > I have a longer history of agents sessions and used those to benchmark the different models. Sonnet 5.5 is already pretty strong, but not always as careful (leaked secrets into the session). Opus 5.5 is already able to solve everything I'm doing. You might not need Fable for anything. Biggest different between Opus and Fable in my benchmarks was price. Also Opus 5.5 is cheaper now then previous Opus so you might also not need Sonnet as much for cost savings.

> > **nycdatasci** · 2026-11-05T14:23:13 · [#50379420](https://news.ycombinator.com/item?id=50379420)
> >
> > Based on blended benchmarks from Artificial Analysis, Opus 5.5 is stronger than Fable 5.1. Are you finding use cases where Fable is superior?

> > > **felixgallo** · 2026-11-05T15:07:20 · [#50380023](https://news.ycombinator.com/item?id=50380023)
> > >
> > > Fable can go deeper than Opus in my experience. Opus is incredible for relatively now-simple things like coding, but Fable has delivered improved results for me in data analysis on relatively obscure topics. That said one gets much more Opus for a subscription than one does Fable, so obviously benchmark your own cases and come up with your own cost benefit analysis.

> **mirmor23** · 2026-11-06T17:32:18 · [#50395473](https://news.ycombinator.com/item?id=50395473)
>
> > But Anthropic's business practices are scary. They have a reputation for cancelling accounts for random reasons, offer rather bad terms, and have no customer support. I have a strong aversion to services with a reputation for cancelling services arbitrarily. They will apparently cancel based on their system's guesses as to what you're working on. Sometimes they guess wrong. What I'm doing (metaverse clients) is so far out of the mainstream they may guess wrong.
>
> From your response it does not seem like you have enough experience using LLM, and your response seem to indicate a bias from reading posts of folks who got banned. Typically in these situations the poster who got banned, will never typically reveal the full picture of what happened or what their setup was.
>
> Anthropic customer service is terrible, their policies are opaque and could be better. But it is really delusional to think that they are some kind of fly-by-night all-you-can-eat buffet that kick you out for no reason or just because you used up your quota.
>
> From what I understand, if you are using official harness, not using it to build/offer competing service, not sharing account with others, and not doing illegal activity (this is left to their interpretation), the chances of being banned is quite low. This is not anything special to Anthropic, most service providers have some kind of ToS.

> **computomatic** · 2026-11-05T09:36:20 · [#50377140](https://news.ycombinator.com/item?id=50377140)
>
> You can access Claude models through any number of providers - OpenRouter, AWS Bedrock, etc. and as far as I know, Claude Code can be used with any of them. The only real benefit to going direct through Anthropic is the subscriptions. It’s worth the risk for the discount, but if you get locked out, there’s other (pricy) options to get unblocked.

> **Fervicus** · 2026-11-05T17:25:58 · [#50381788](https://news.ycombinator.com/item?id=50381788)
>
> It's crazy to me that this is considered embarrassing now. People should stay up to date with current tech, but we shouldn't be ashamed of not using LLMs. Let's re-normalize coding by hand.

> > **946789987649** · 2026-11-06T08:34:37 · [#50389676](https://news.ycombinator.com/item?id=50389676)
> >
> > I was an AI-skeptic for a while but it is embarrassing to not even try it. I'm still on the more manual end of AI use. My prompts are very small, targeted changes. I still review every line as though a human wrote it. I know exactly what I want and I've got my prompts and claude.MD at a point where it gives me that most of the time. I probably only write 5% of the code now.

> > **Animats** · 2026-11-05T21:03:45 · [#50384431](https://news.ycombinator.com/item?id=50384431)
> >
> > I did, for a long time, but we're past that point now. Someone else got something done in three months that took me years of hand coding.

> > > **bloppe** · 2026-11-05T21:32:17 · [#50384741](https://news.ycombinator.com/item?id=50384741)
> > >
> > > If something took 3 months, then there must have been a good deal of manual attention involved, even if it wasn't typing each character by hand.
> > >
> > > I still find that it's often faster to combine manual coding with generation. I often start by setting up a skeleton with a bunch of TODOs, then tell my agent to fix each TODO. If my agents can't seem to stop coming up with insanely massive diffs for what should be small changes, it's often much faster to just code it properly by hand.

> > **martin82** · 2026-11-06T02:02:17 · [#50387225](https://news.ycombinator.com/item?id=50387225)
> >
> > Coding by hand, sure! But let the LLM at least auto-complete your thoughts. They are still your thoughts, but it's just 100x faster than coding by hand.

> > **steve1977** · 2026-11-05T21:36:42 · [#50384791](https://news.ycombinator.com/item?id=50384791)
> >
> > And thinking by brain.

> **olmo23** · 2026-11-05T08:54:29 · [#50376839](https://news.ycombinator.com/item?id=50376839)
>
> Just use a random gmail address, it works.

> > **fidelramos** · 2026-11-05T23:39:27 · [#50386164](https://news.ycombinator.com/item?id=50386164)
> >
> > Or use SimpleLogin.

> > **Forgeties79** · 2026-11-05T14:53:27 · [#50379822](https://news.ycombinator.com/item?id=50379822)
> >
> > If the concern is business practices, privacy, etc. adding Google to the mix doesn’t seem great

> **walrus01** · 2026-11-05T09:19:08 · [#50376993](https://news.ycombinator.com/item?id=50376993)
>
> I would suggest that based on your current level of "trust" in these things (justifiably very low, I use zero openai or anthropic products myself) that you look into self hosting locally something reasonably capable and smart on your own hardware, on llama-server or something functionally equivalent to it. And running it in something like the opencode harness, using zero of the opencode API or online services. Qwen 3.8-flash-next will run on a lot of different hardware setups that are within the reach of normal people, or possibly deepseek v4 flash 1017, glm5.3-flash, things in that general category.

> > **sampullman** · 2026-11-05T13:03:43 · [#50378605](https://news.ycombinator.com/item?id=50378605)
> >
> > Qwen 3.8-flash-next is great, but if they say SOTA models from 6 months ago weren't good enough for the kind of code they write, Qwen isn't going to cut it yet.

> > **Animats** · 2026-11-05T20:25:04 · [#50384003](https://news.ycombinator.com/item?id=50384003)
> >
> > I'm not doing enough to rent my own GPU farm.

**thefourthchime** · 2026-11-04T15:33:04 · [#50367037](https://news.ycombinator.com/item?id=50367037)

It used to be more interesting and elaborate, switching between different models. I used to use Cursor, then Codex, but since Opus 5.5 came out, I just use the Claude IDE. I got rid of all my skills and just set it to medium. Then I vaguely talk to it about very high-end things that I want, and it comes back with magic. Rinse and repeat.

I'd say the biggest trick is just to tell it what complete looks like. Be very specific about what you want it to come back with once it's done. That gives it a good idea what the goal is. It'll automatically create subagents and all that stuff. Although if you have money to burn and you're doing something large, you can tell it to just go wide or boil the ocean.

Also, make sure you're working on at least five different things. Otherwise, you're sitting around for one agent.

> **fhub** · 2026-11-04T23:58:16 · [#50373117](https://news.ycombinator.com/item?id=50373117)
>
> I can do 5 things concurrently for about a day max. 3 things concurrently all week and my weekends are spent untangling my brain. 3 things per day on Mondays and Tuesdays and 2 things per day concurrently on Wed-Fri and I feel ok but crave holidays.

> > **thefourthchime** · 2026-11-05T00:10:29 · [#50373236](https://news.ycombinator.com/item?id=50373236)
> >
> > I probably have some kind of pysccosis. I've had a personal $200 plan from one of the AI providers since March 2026. I'm never not making things now, I haven't rebooted my laptop for weeks because there is always an agent building something.
> >
> > I cycle between 4-5 work projects and 2-3 personal projects. Every night I tell me agents I'll be going to bed and to not ask questions and keep going. I've always loved building things, but this feels more like an addiction than healthy sometimes.
> >
> > They're not all done, and half the projects I bench, but this is where my personal projects live. https://wooten-labs.com

> > > **networkbug** · 2026-11-05T10:36:17 · [#50377542](https://news.ycombinator.com/item?id=50377542)
> > >
> > > not gonna lie, you don't need to be doing these projects. they're not really worth it. instead of building an app to help you meet up with your friends somewhere central just go meet up with them and explore together.

> > > > **vidarh** · 2026-11-05T15:59:25 · [#50380775](https://news.ycombinator.com/item?id=50380775)
> > > >
> > > > I don't need to be doing all of these projects, but I enjoy doing all of these projects, much more than I enjoy going somewhere to hang out with people. Not everyone is the same.

> > > > **senordevnyc** · 2026-11-05T11:43:54 · [#50378003](https://news.ycombinator.com/item?id=50378003)
> > > >
> > > > Eww, gross. Don't be rude.

> > > > > **senordevnyc** · 2026-11-05T18:42:59 · [#50382771](https://news.ycombinator.com/item?id=50382771)
> > > > >
> > > > > Just to be clear, my comment about this being gross is about the rudeness of telling someone else their hobby is a waste of time, not about hanging out with friends.

> > > **fishtoaster** · 2026-11-05T21:46:38 · [#50384905](https://news.ycombinator.com/item?id=50384905)
> > >
> > > > I haven't rebooted my laptop for weeks because there is always an agent building something.
> > >
> > > I'm pretty pilled on cloud agents these days. If I've got 5 agents going at once, each is in their own dedicated, isolated cloud environment. There are a bazillion services for this now ampcode, hoplite.sh, cursor's cloud agents, devin.ai cloud, and more.
> > >
> > > I haven't had an agent do anything from my laptop in a month or two.

> > > **KronisLV** · 2026-11-05T14:55:51 · [#50379851](https://news.ycombinator.com/item?id=50379851)
> > >
> > > > Every night I tell me agents I'll be going to bed and to not ask questions and keep going.
> > >
> > > Most harnesses now support something like this:
> > >
> > > /goal "Work on the current plan until 11 AM in my time zone, provide a summary of all the overnight work then."
> > >
> > > Other than that, look after your own wellbeing! Nothing wrong with letting agents work overnight, just don't overextend yourself and don't spend all of your free time on it.

> > > > **chasd00** · 2026-11-05T15:59:26 · [#50380777](https://news.ycombinator.com/item?id=50380777)
> > > >
> > > > My friend and I have built portfolio management agents and pit them against each other to see who can make the most money (not real money just a simulated bank account and stock portfolio). So mine runs every morning to read the news and do analaysis and all that. I have it write a daily blog that I read to keep track of what it’s doing.
> > > >
> > > > A daily blog for status and reasons for decision making works pretty well for tracking an agent that works unattended. It’s also kind of funny when it writes things like “well I got that one wrong” and “this is not what I expected to happen” hah

> > > > > **perforator** · 2026-11-05T17:29:12 · [#50381834](https://news.ycombinator.com/item?id=50381834)
> > > > >
> > > > > How long have they been running for and do any of them consistently beat index funds? Was always curious about the idea, but thought the market would already price it in.

> > > > > > **chasd00** · 2026-11-05T19:20:46 · [#50383211](https://news.ycombinator.com/item?id=50383211)
> > > > > >
> > > > > > They've been running for a few months, my friend's was beating SPY (VSP500) for a few days but not any more. Mine never beat SPY or VOO (Vanguard SP500 index). Now, let me tell you about my little sister. She says she just does what ChatGPT tells her to do and she's #1 on the leaderboard beating everyone including the SP500.
> > > > > >
> > > > > > stewbot-v1 = my friend's bot
> > > > > >
> > > > > > stonker = my bot
> > > > > >
> > > > > > https://stonks.jettdigital.app is my little vibecoded stock market sim website, the bots work with via API. Each account starts with $10k and then you get a $500 deposited each month. If you want an account drop me an email ( see my profile ).
> > > > > >
> > > > > > here's my bot's page with the daily posts (the key is like a password but it's no big deal, if my server catches fire i'll just change it). Link to the daily posts are at the top left https://stonker.jettdigital.app/?key=a87f2427bf1e281dda1a5135473860e9f6480e1922e2c94c

> > > **abhishekbasu** · 2026-11-05T08:19:29 · [#50376565](https://news.ycombinator.com/item?id=50376565)
> > >
> > > love the website, but quality control is important when working with these agents.
> > >
> > > ex. i tried cool walk (https://wooten-labs.com/coolwalk) and the 'Download on the App Store' does nothing at all.

> > > > **thefourthchime** · 2026-11-05T17:33:17 · [#50381884](https://news.ycombinator.com/item?id=50381884)
> > > >
> > > > It's been waiting for App Store for a long time. Things take forever to get accepted now.

> > > **gausswho** · 2026-11-05T12:10:14 · [#50378189](https://news.ycombinator.com/item?id=50378189)
> > >
> > > I like your landing page for Stealthbox. Playful and stylistically distinct. Wears its AI generated origins with casual pride.
> > >
> > > I do wish the Github link wasn't borked.

> > > > **thefourthchime** · 2026-11-05T17:32:38 · [#50381872](https://news.ycombinator.com/item?id=50381872)
> > > >
> > > > Yeah, I've been working on this thing for months. I'm trying to get it more polished before I release it. The reason the GitHub link is borked is because I need to have part of it be private, because some of the bot detection can't be open source, or it'll stop working.
> > > >
> > > > Eventually I'll stop finding bugs : )

> > > **themoose8** · 2026-11-05T11:29:27 · [#50377899](https://news.ycombinator.com/item?id=50377899)
> > >
> > > They look like awesome apps*, as long as you're balancing your time by using them (they're outdoorsy and social!) I'd say you're doing fine. Take some extended time off if you need!
> > >
> > > *unfortunately I'm android

> > > **LittleBox** · 2026-11-06T10:05:27 · [#50390416](https://news.ycombinator.com/item?id=50390416)
> > >
> > > You are going to burn out so badly and you won’t even realize it until it’s too late.

> > > **coffeesoda** · 2026-11-05T07:44:40 · [#50376316](https://news.ycombinator.com/item?id=50376316)
> > >
> > > respect. this is how i've been working the last 4 months or so. it's a bit crazy making and i do think i'm enjoying things less because i'm preoccupied, but i sure do feel productive. lol.

> > > **willchis** · 2026-11-05T14:19:17 · [#50379375](https://news.ycombinator.com/item?id=50379375)
> > >
> > > That's a really nice website!

> > > **Fervicus** · 2026-11-05T17:27:57 · [#50381814](https://news.ycombinator.com/item?id=50381814)
> > >
> > > At least you are self-aware.

> > > **petesergeant** · 2026-11-05T15:44:24 · [#50380544](https://news.ycombinator.com/item?id=50380544)
> > >
> > > > I haven't rebooted my laptop for weeks because there is always an agent building something
> > >
> > > I have a cheap mini PC I use as a devbox. Beyond meaning I can close my laptop and close all agent windows, it also keeps agents out of my personal shit.

> > > **bkaae** · 2026-11-05T12:50:06 · [#50378487](https://news.ycombinator.com/item?id=50378487)
> > >
> > > I hope you are doing okay bud, sounds like you are doing too much.

> > > **abrookewood** · 2026-11-05T03:24:18 · [#50374757](https://news.ycombinator.com/item?id=50374757)
> > >
> > > Nice website :)

> > > **jeffyaw** · 2026-11-05T20:36:21 · [#50384151](https://news.ycombinator.com/item?id=50384151)
> > >
> > > cool visuals on your site! dig the scroll down!

> > > **pavas** · 2026-11-05T06:31:12 · [#50375890](https://news.ycombinator.com/item?id=50375890)
> > >
> > > Honestly it does sound like an addiction. Touch some grass...

> > > **KolibriFly** · 2026-11-05T14:39:49 · [#50379646](https://news.ycombinator.com/item?id=50379646) · _dead, flagged_
> > >
> > > How do you even deal with merging all that stuff when you wake up? My head sometimes spins from just two parallel branches when they start conflicting in the database

> > > **orbis-tertius** · 2026-11-05T07:40:58 · [#50376288](https://news.ycombinator.com/item?id=50376288) · _dead_
> > >
> > > Excellent website!

> > > **glennfiedler** · 2026-11-05T03:32:56 · [#50374802](https://news.ycombinator.com/item?id=50374802)
> > >
> > > > I probably have some kind of pysccosis
> > >
> > > No you don’t. You are doing everything right :)

> > > > **glennfiedler** · 2026-11-05T18:27:34 · [#50382568](https://news.ycombinator.com/item?id=50382568)
> > > >
> > > > I have no idea why anybody is downvoting this. I honestly believe the OP is doing it right. Very few people get this level of productivity out of AI and the people who really "get it" with AI have this strong attraction to it. I estimate, fewer than 5% of programmers working with AI ever get here.

> > **biggestriverman** · 2026-11-05T08:23:49 · [#50376598](https://news.ycombinator.com/item?id=50376598)
> >
> > I had the same issue. What you need in a management system for your claude sessions.

> > > **fhub** · 2026-11-05T22:48:56 · [#50385630](https://news.ycombinator.com/item?id=50385630)
> > >
> > > The problem is that I do want to interrogate the planning and implementation. Ask questions about trade offs. That means context switching. I don’t want my knowledge of the system to degrade rapidly.

> > > **thefourthchime** · 2026-11-05T22:32:56 · [#50385453](https://news.ycombinator.com/item?id=50385453)
> > >
> > > I tried a T3 code for a hot second, but found it too buggy and missing features I missed from Claude Code Desktop. I do desperately need to figure out some way to get stuff off my laptop.

> > **xuanhocbk** · 2026-11-06T00:16:11 · [#50386469](https://news.ycombinator.com/item?id=50386469) · _dead, flagged_
> >
> > Same ceiling here, and what moved it for me wasn't a smarter agent but cutting the cost of switching back: one line per session saying what I asked for and what it's waiting on, written before I leave it. Without that, three concurrent sessions feel like five.

> **sparklingmango** · 2026-11-04T15:59:01 · [#50367466](https://news.ycombinator.com/item?id=50367466)
>
> I firmly believe that those using out-of-the-box Claude Code or Codex are likely getting the most cutting edge features of agents anyways.

> > **0x4e** · 2026-11-05T01:37:11 · [#50373947](https://news.ycombinator.com/item?id=50373947)
> >
> > I’m a user of both and don’t really see the need to go anywhere else. It all just sounds like mumbo jumbo.
> >
> > As a solopreneur of a boring SMB.
> >
> > I still do coding and build my own tools but I don’t see the need for agent swarms or Muse or Grok Bot or any of that.
> >
> > The reason why I stay away is because I like to do QA on the slop these things generate. Having them run amok just makes me nervous.

> > > **jeffyaw** · 2026-11-05T20:41:25 · [#50384207](https://news.ycombinator.com/item?id=50384207)
> > >
> > > and you can get a modest swarm with subagents and ultracode.

> > > **nimchimpsky** · 2026-11-05T06:46:28 · [#50375960](https://news.ycombinator.com/item?id=50375960) · _dead_
> > >
> > > grok bot and muse are just useful assistants, reminders, shopping, day to day stuff. Actually useful apps. Not coding/engineering.

> > **2001zhaozhao** · 2026-11-05T00:26:18 · [#50373376](https://news.ycombinator.com/item?id=50373376)
> >
> > Yep, Claude & Codex desktop are innovating extremely rapidly. Some of the features like code review are hidden under commands, but basically obsolete whole heaps of AI code review startups when you use them.

> > > **smashed** · 2026-11-05T03:19:08 · [#50374732](https://news.ycombinator.com/item?id=50374732)
> > >
> > > I just ask Claude code to do a code review of PR X and it spawns a sub-agent. No hidden commands or anything special.
> > >
> > > If I hint it might be security sensitive code, it bumps the effort level and burns my usage.
> > >
> > > But it works quite well.
> > >
> > > The findings are often debatable or unreachable states but it does find stuff and improves the overall quality I find.
> > >
> > > What's funny though is that it almost always inevitably finds something wrong, even if you just ran it in another window and fixed everything it found. There is really a point of diminishing returns.

> **chasd00** · 2026-11-05T15:54:38 · [#50380703](https://news.ycombinator.com/item?id=50380703)
>
> For anything non trivial I have Claude do a design doc with me. Then I tell it to “carefully review” the design which turns up edge cases. Then I tell it to make a step by step implementation plan document. Then ask it to review both again. Then I do a personal review and then off it goes on implementation while I pull up HN. It’s a lot like my team lead role at work. Btw, people who have a few years of being in a TL role are best positioned to make full use of the agents as well as teach others how to get the most out of them.

> **bluerooibos** · 2026-11-05T05:26:31 · [#50375552](https://news.ycombinator.com/item?id=50375552)
>
> > Claude IDE
>
> Claude Desktop's UI seems pretty similar to Cursor now, almost. I'm still on Cursor but if I use it daily I often hit usage limits before the end of the month. Would you say using Claude directly is better bang for buck?

> > **senordevnyc** · 2026-11-05T11:45:25 · [#50378013](https://news.ycombinator.com/item?id=50378013)
> >
> > I switched from Cursor to Claude Code (via T3.codes) because I was running out of usage on Grok 4.7. I regret not making the switch sooner, Opus 5.5 is much better than Grok, and Grok is decent!

> > > **bluerooibos** · 2026-11-06T14:55:12 · [#50393062](https://news.ycombinator.com/item?id=50393062)
> > >
> > > Yeah, I agree, but Opus 5.5 burns through a ton of usage in Cursor so I rarely use it. Just wondering if cost wise it's better to use Claude Code than Cursor w/ Grok - sounds like you think it is?

> > > > **senordevnyc** · 2026-11-06T17:20:35 · [#50395313](https://news.ycombinator.com/item?id=50395313)
> > > >
> > > > My $200 Anthropic subscription is giving me way more value than my $200 Cursor subscription was.

> > **congptvinadic** · 2026-11-06T13:29:13 · [#50392051](https://news.ycombinator.com/item?id=50392051) · _dead, flagged_
> >
> > Hard to compare directly, because neither publishes absolute numbers.
> >
> > Cursor states every tier as a multiple of Plus: Premium 4x, Super 15x, Ultra 50x, and Plus itself now only runs Grok models. Claude Pro only says "more usage than Free" on a rolling 5-hour window, plus a weekly cap across all models. Max is 5x Pro on both; Ultra drops the 5-hour window for verified accounts and is 10x Pro per week.
> >
> > So the real difference is the shape of the limit: Cursor is a pool that refreshes, Claude throttles you inside a 5-hour session and again weekly. If you work in long bursts, the 5-hour window is what bites first.
> >
> > I keep a table of the stated limits per plan with the source page and check date, if it helps: https://getstackversus.com/limits

> **onion2k** · 2026-11-05T07:23:50 · [#50376177](https://news.ycombinator.com/item?id=50376177)
>
> Same journey for me, although I still use skills. Claude Code is fine; the remote-control feature is why I stick with it now. Generally anything in the cloud doesn't have a proper GPU that supports WebGPU, and as nice as SwiftShader is often you want to actually run things on a real machine. remote-control is by far the easiest way to do that from my phone.

> **bartread** · 2026-11-05T12:26:22 · [#50378288](https://news.ycombinator.com/item?id=50378288)
>
> > I got rid of all my skills and just set it to medium.
>
> Yeah, exactly. I find increasingly little use for skills. I'd put it down to switching projects and stacks a lot but maybe... they just aren't as useful any more?

> > **darklinear** · 2026-11-06T17:41:27 · [#50395599](https://news.ycombinator.com/item?id=50395599)
> >
> > I find I am able to get rid of most of the skills just by listing out the style guides the bot should follow in AGENTs.md

> > **parkersweb** · 2026-11-05T12:32:48 · [#50378336](https://news.ycombinator.com/item?id=50378336)
> >
> > I wasn’t really using skills but then our project management tool added an MCP so I made a skill for grabbing tickets from the backlog, creating worktrees with the right naming convention, and moving ticket states for me automatically.
> >
> > At the same time when I’m exploring new feature requests I now use the skill to write up the requirements and estimates into as many tickets as needed.
> >
> > Massively changed my workflow for me.

> > **jeffyaw** · 2026-11-05T20:44:04 · [#50384236](https://news.ycombinator.com/item?id=50384236)
> >
> > any prompt that you’re running a lot, make it a skill. i don’t make a lot of new ones. but still am using ones i made months ago and have been refining.

> **persavon** · 2026-11-04T16:04:19 · [#50367548](https://news.ycombinator.com/item?id=50367548)
>
> What do you mean by Claude IDE?

> > **thefourthchime** · 2026-11-04T17:37:10 · [#50368880](https://news.ycombinator.com/item?id=50368880)
> >
> > Claude Code Desktop. https://code.claude.com/docs/en/desktop

> > > **neuronexmachina** · 2026-11-04T23:51:06 · [#50373063](https://news.ycombinator.com/item?id=50373063)
> > >
> > > Yeah, I used to hate the Claude desktop app's Code tab, but it's actually pretty good nowadays. I actually prefer it now over claude CLI.

> > > > **iainmerrick** · 2026-11-05T08:50:17 · [#50376807](https://news.ycombinator.com/item?id=50376807)
> > > >
> > > > I use Claude Code Web almost exclusively for personal projects -- I’m guessing that’s pretty much the same interface but in the cloud -- and hardly ever run anything locally. Nicer UI than a terminal, real sandboxing, and it doesn’t tie up my computer. It’s just a remote agent that can make GitHub PRs.

> > > > > **OJFord** · 2026-11-05T09:42:13 · [#50377189](https://news.ycombinator.com/item?id=50377189)
> > > > >
> > > > > But even worse for private stuff than using cloud inference to begin with, since it presumably has to clone the repo, have write & Actions access back, etc.

> > > > > > **iainmerrick** · 2026-11-05T10:34:56 · [#50377537](https://news.ycombinator.com/item?id=50377537)
> > > > > >
> > > > > > It's bad if you're concerned about your data being used for training, sure. But I don't think any worse than e.g. running Claude or Codex locally.
> > > > > >
> > > > > > I think the only solution there is self-hosted inference (either local, or on your own cloud servers with open weights).

> > > > > > > **OJFord** · 2026-11-05T19:55:34 · [#50383635](https://news.ycombinator.com/item?id=50383635)
> > > > > > >
> > > > > > > That's the bit that's common, I say it's worse because it has to actually check out the full source on their server. i.e. similar to if you used Claude locally, plus used third-party CI like Circle instead of Actions.

> > > > **thefourthchime** · 2026-11-05T00:06:42 · [#50373202](https://news.ycombinator.com/item?id=50373202) · _dead_
> > > >
> > > > Same, I rejected those no-code IDEs for a long time, but now I never look at code anyway, and they are surprisingly great to use.

> > **yuppiepuppie** · 2026-11-04T16:17:37 · [#50367759](https://news.ycombinator.com/item?id=50367759)
> >
> > Yeah I was thrown off by that as well. I assume they mean just Claude TUI..

> > > **sabas123** · 2026-11-04T16:27:23 · [#50367926](https://news.ycombinator.com/item?id=50367926)
> > >
> > > I have a similar story as OP, for me its the Claude Desktop, not claude code.

**gregwebs** · 2026-11-05T13:31:43 · [#50378856](https://news.ycombinator.com/item?id=50378856)

1-2) Claude $20/mo (planner) Codex $20/mo (reviewer) Deepseek $1-3/day workhorse.

4) A standard /implement skill creates separate agents for different parts of the workflow. It uses Claude for planning, codex for reviewing, and deepseek for doing and orchestrating. https://github.com/gregwebs/skills-sdlc. I also have a plugin for switching between providers when quota gets low: https://github.com/gregwebs/pi-quota-dispatcher

I can produce a significant amount of low-defect production quality code while keeping costs less than $100/mo. It is probably at least 3x slower than just asking for an implementation, but defects cost time and money later.

3) Pi harness with herdr for organizing multiple projects/agents and Collie for mobile access (on a tailscale network). I have also been happy using zellij previously and might go back to it if the experimental Collie integration works. I need to switch to a different sub agent plugin for Pi (or leave Pi for a different harness) because herdr/collie are confused by the current subagents.

**bloppe** · 2026-11-05T15:51:12 · [#50380647](https://news.ycombinator.com/item?id=50380647)

I recently got really weird with my personal computer after discovering browser DevTools MCP. I basically inverted the relationship between browser and desktop environment, booting directly to a browser in kiosk mode (with Ghostty quick terminal as well, so I always have easy terminal access) and running a local Weston server that shows up as a bookmarked web page on localhost, streamed over vnc, so I can still use legacy gui apps pretty normally if I need to, but I've basically refocused my whole gui environment on the web. I run code-server on localhost instead of VSCode and prefer web apps (often running locally) over traditional GUIs in general. I still use the terminal very heavily as well, and that's where I manage my pi agents.

Why? Because the web is an incredibly rich, open, text-based platform with massive representation in training sets, and with tools like DevTools MCP, your agent can do almost anything with your browser: run JS in the page, use the debugger, see network activity; it's extremely powerful.

My co-worker does something similar with emacs, another incredibly rich text-based "operating system" like a browser with comprehensive hookability, which he basically uses instead of a desktop environment.

> **nathanfig** · 2026-11-05T22:25:45 · [#50385365](https://news.ycombinator.com/item?id=50385365)
>
> I'm trying to understand this. You do this so that your agents can do web based tasks for you, or so that they can do desktop tasks via a web browser? If the latter, for what kinds of tasks do you find terminal insufficient?

> > **bloppe** · 2026-11-06T00:16:26 · [#50386473](https://news.ycombinator.com/item?id=50386473)
> >
> > It's the former. I just find that the browser provides an incredibly reach ecosystem for the agents to operate in. Of course, you can also set up a devtools MCP connection while still using a traditional desktop environment, I just thought it was cool.
> >
> > I mentioned the Weston fallback to illustrate that switching to a web-first GUI environment can be incremental.

**bphish** · 2026-11-06T17:41:36 · [#50395602](https://news.ycombinator.com/item?id=50395602)

1) Paying for both OpenAI's + Anthropic's $200/mo plans 2) no 3) Codex + Claude Code (I'm a sucker for GUIs) 4) I sort of hack together a swarm in Codex+ClaudeCode, then use a separate tool I built for a collaboration layer 5) OpenClaw but mostly retired it

Also indispensable for me is Workspace which lets me manage larger projects, databases, markdown files, etc.. (https://www.brianhirsh.com/workspace) it's an offline Notion (like obsidian but better databses + UI), so it's incredibly fast to work with multiple agents there.

Since I typically have 15-20 chats and additional subagents going, having a place for them to organize work for me to check + a tool for managing documents is relly helpful. Before I felt like I was drowning in app-siloed artifacts and 'wait which chat was that in' issues.

**glennfiedler** · 2026-11-05T05:39:29 · [#50375606](https://news.ycombinator.com/item?id=50375606)

I'm juggling multiple claude ultra subs, multiple codex $500 a month subs, antigravity for argon, plus API rate deepseek 4.1 flash, mercury 3, and abliterated large v2 for red teaming.

I work across multiple models and harnesses using a really simple redis-backed message bus called "nova-bus": https://github.com/mas-bandwidth/nova-tools (open source).

With just this message bus, I can coordinate AIs to work together at a normal pace (worktrees, subtasks etc...), but past a certain point the AIs can't keep up and I need to use a sprint card system I developed to coordinate work.

With this sprint system I'm able to work 200 cards wide (each card is around 30-60 minutes of LLM work in a session) across a fleet of 20 machines linked together with tailscale and ssh.

Full system is here: https://github.com/mas-bandwidth/nova-sprint (open source)

It's been very effective at getting high throughput, but afterwards I find that the resulting code can be a bit of a pastiche from different models working in isolation, thus a good pass over working directly with models to clean up and harden the code is necessary.

I find that using nova-bus to coordinate multiple model/harness review of codebase in very effective at increasing code quality. Each model sees things the others don't.

> **genxy** · 2026-11-05T06:21:13 · [#50375841](https://news.ycombinator.com/item?id=50375841)
>
> Is this amalgamation working on a single project? What harnesses do you use? How are you using mercury 3? How much and what kind of work are you sending to deepseek?

> > **glennfiedler** · 2026-11-05T06:37:59 · [#50375921](https://news.ycombinator.com/item?id=50375921)
> >
> > Can't work on a single project, Amdahl's law gets you then. Try to work on as many different unrelated projects as possible, so I can get maximum throughput.
> >
> > I break work up into four loose tiers:
> >
> > 1. flash - deepseek flash 4.1 / luna / haiku
> >
> > 2. pro - mercury 3 / terra / sonnet
> >
> > 3. heavy - opus 5.5 / sol
> >
> > 4. frontier - fable 5.1 / astra / argon
> >
> > The decision of how to classify each piece of work is done by the coordinator (typically Opus 5.5...). If a card fails at a particular tier, it's going to get escalated up tiers until it gets sorted.
> >
> > Each card has multiple readers (code review). I find mercury is very good at reading quickly. Deepseek as well. I will be honest, I think for 99% of stuff I need to do Opus 5.5 @ medium is ideal. I just use the additional models for different points of view, especially the absolute frontier models fable, astra, argon at max effort for security audits and code review.

> > > **teekert** · 2026-11-05T10:02:11 · [#50377328](https://news.ycombinator.com/item?id=50377328)
> > >
> > > What kind of "things" are you making? I can't process this much information, so I would inevitable be outsourcing most decision making. That could be fine for some products, but not for mine, where data model and RBAC model (among others) all require alignment between multiple stakeholders.
> > >
> > > I have one agent and already find it quite intense to outsource code writing and basically just make and document decisions.
> > >
> > > I feel like I could be rich working like you, I also feel like it is impossible for me to meet the needs of my clients if I'd work like this (so I can't be rich, it's a paradox). I wouldn't be able to answer their questions (without the active agent on-call, context window fully loaded), I wouldn't be able to explain just where the data model needs changing, or why some role really can't exist they way they envision etc, etc, etc.
> > >
> > > I could of course branch the whole project and basically discuss multiple implementations during stakeholder meetings, but then still I'd need to explain the advantages/disadvantage of choosing one system over the other and guide them through it.

> > > > **teekert** · 2026-11-05T12:55:18 · [#50378534](https://news.ycombinator.com/item?id=50378534)
> > > >
> > > > So, in essence, my added value is translating the vaque demands of my clients into as efficient as system as can be.
> > > >
> > > > Can the AI do it? Not yet I think. Maybe someday, for now I feel like clients of mine simply have the vocabulary, nor the mental models, to guide the LLMs. Ie, they have no idea of what one-to-many is, or why it's smart to put some information in separate tables, whereas some information is ok to filter row-based on a user attribute, etc.

> > > > > **glennfiedler** · 2026-11-05T15:33:25 · [#50380403](https://news.ycombinator.com/item?id=50380403)
> > > > >
> > > > > I guess my trick is that mostly I'm my own customer. I'm a late stage career expert in netcode, so I pretty much have this long list of things I've been wanting to create for 20-30 years now... I'm still working through this, and each new thing I make, it creates 2-3 new ideas to explore! It's fun times :)

> > > > > > **lp92** · 2026-11-06T15:04:23 · [#50393193](https://news.ycombinator.com/item?id=50393193)
> > > > > >
> > > > > > > I pretty much have this long list of things I've been wanting to create for 20-30 years now
> > > > > >
> > > > > > Hah, I think there's quite a few of us like this. We didn't have the time to spend doing this work in the past, but now with AI we can have it build what we want by giving it our ideas and framework.
> > > > > >
> > > > > > It's going to be interesting to see what kind of new innovations across various industries comes from this over the next few years as the subject matter experts gets to work on their own ideas.

> > > > > > > **glennfiedler** · 2026-11-06T15:50:05 · [#50393861](https://news.ycombinator.com/item?id=50393861)
> > > > > > >
> > > > > > > Yeah I've really been wondering what causes some people to just get absolutely sucked in harder than a game of Civilization at 2AM with AI coding, and it seems to be this.
> > > > > > >
> > > > > > > People who have a bunch of ideas they want to create!
> > > > > > >
> > > > > > > The people who get really pissed off about AI coding seem to be all about the doing, but those who are really excited about creating things and the end result not the process come out OK

> > > > > > **teekert** · 2026-11-05T15:55:54 · [#50380727](https://news.ycombinator.com/item?id=50380727)
> > > > > >
> > > > > > Hmm, that does sound like fun. I guess, I'm truly screwed when the AI can actually serve customers directly. I guess it's coming, at some point.
> > > > > >
> > > > > > I've been having conversations with normies about how they can use AI, but they don't really seem to grasp the basic idea of an automation, something that does something or 100 times something, on some trigger. The don't understand that a loop is free, that 100x is as difficult as 1x.
> > > > > >
> > > > > > Ie, I tell someone, you could set up something that makes a Word doc for you with math problems, based on a theme, optionally picked from a pool of "approved" problems. That'd take about 30 min to make. "No I can't do that every time, 30 minutes!" No, I mean then it's there, forever, for all your colleagues to use, I mean. Ok how?
> > > > > >
> > > > > > Well... I don't know copilot in MS365 and stay away from it, but I can imagine it can do with Word and Excel what I do with Markdown and websites?
> > > > > >
> > > > > > I'm starting to see MS' "problem" now :)

> > > **glennfiedler** · 2026-11-05T06:41:50 · [#50375943](https://news.ycombinator.com/item?id=50375943)
> > >
> > > The sort of work I pass through this system, it's mostly library work for multiplayer games.
> > >
> > > For example, my work on schema, my protobufs/flatbuffers language replacement for multiplayer games, parallelizes very nicely across 15 languages on the sprint system. https://github.com/mas-bandwidth/schema.
> > >
> > > See roadmap here: https://github.com/mas-bandwidth/schema/blob/main/ROADMAP.md
> > >
> > > Very difficult to coordinate this amount of work in || without some sort of structured work system.
> > >
> > > Even more AI coding work here if you are curious: https://patreon.com/masbandwidth

> > > > **glennfiedler** · 2026-11-05T06:47:17 · [#50375964](https://news.ycombinator.com/item?id=50375964)
> > > >
> > > > Live view of sprint system as I work tonight: http://37.27.135.206

> > > > **drphilwinder** · 2026-11-05T22:54:33 · [#50385701](https://news.ycombinator.com/item?id=50385701)
> > > >
> > > > Thanks for sharing. Really interesting.
> > > >
> > > > At what point do you think you tip over from getting away with a handful of agents working on different things in one repo, to needing a comms/coordination system for your tasks?
> > > >
> > > > I think there must be a burden to run this and I'm guessing it only pays off when you get to some kind of scale. What is that scale? Other human team members? Sheer workload?

> > > > > **glennfiedler** · 2026-11-06T15:43:27 · [#50393739](https://news.ycombinator.com/item?id=50393739)
> > > > >
> > > > > Great question. It's really the number of different things you are working on at the same time.
> > > > >
> > > > > Past a certain number of things, you can have a conversation with Claude in one session but even in Fable 5.1 or Opus 5.5 it's going to forget some and they just scroll out of context and get compacted away. Once enough things are in flight they start getting forgotten, or half-started, then the next thing is in flight and so on. When I start noticing this, I know it's time to switch over to the sprint system.
> > > > >
> > > > > The other thing is simply I want to go really wide and work on something and it's too slow when working with traditional child agents per-model. The LLMs generally won't "work to width" naturally (for whatever reason) and the sprint system is really good at pushing and ensuring that each model involved in the sprint not only works, but works at whatever particular width they are assigned (16, 32, 64 cards...) and stays working that way.
> > > > >
> > > > > If you work without a sprint system, you'll find yourself continually reminding the AIs manually "hey, can you please work to width?", "hey, you have 10 cards ready can you please work on them now?". These things are "squishy" when worked on in LLM space, they'll kinda do it, then a few hours later forget, and by morning they're puttering along at a few cards each.
> > > > >
> > > > > But by putting everything into mechanical structure (sprint system that drives all the LLMs via push notifications), they will more reliably remember to work at width, they will not forget anything they were assigned to work on (this is stored in redis cards, not in their memory that compacts), and the whole system can work much wider and you get done a lot faster!

> > > > **genxy** · 2026-11-05T06:50:40 · [#50375983](https://news.ycombinator.com/item?id=50375983)
> > > >
> > > > Thank you. Moo looks really cool.
> > > >
> > > > I did some prototype games, one thing that worked really well for me was having a deterministic replay system where the agents could drive the gamestate via recorded inputs. Kept me from having to do any playtesting or debugging in the main agentic loop.

> > > > > **glennfiedler** · 2026-11-05T06:58:02 · [#50376018](https://news.ycombinator.com/item?id=50376018)
> > > > >
> > > > > You'll like this too then
> > > > >
> > > > > https://github.com/mas-bandwidth/fixed3d -- port of box3d to fixed point :)
> > > > >
> > > > > https://github.com/mas-bandwidth/fixed -- fixed point math library

> > > > > > **genxy** · 2026-11-06T00:08:01 · [#50386404](https://news.ycombinator.com/item?id=50386404)
> > > > > >
> > > > > > You are right!
> > > > > >
> > > > > > Big fan of RDF, your sexpr notes are hilarious https://github.com/mas-bandwidth/fixed/blob/main/docs/roadmap.sexp
> > > > > >
> > > > > > What tooling do you have around this?

> > > > > > > **glennfiedler** · 2026-11-06T15:47:03 · [#50393807](https://news.ycombinator.com/item?id=50393807)
> > > > > > >
> > > > > > > I have some stuff inside nova-sprint that uses lisp sexpr to store issues, roadmaps and various things as primary structures. Basically, anything that is free-form structured tree data it's a great fit.
> > > > > > >
> > > > > > > And then the AIs can easily write tooling in lisp to manipulate these structures, and you can talk to them from some golang program in a verb like way, sort of like a redis client.
> > > > > > >
> > > > > > > I was planning on doing this to effectively replace issues/PRs in git, and have my entire future work set that I import into sprints stored inside this lisp sexpr.
> > > > > > >
> > > > > > > It's implemented in nova-sprint as a tracer bullet (search for "roadmap" scripts in lisp...), but I definitely see this as something I want to keep pushing harder on.
> > > > > > >
> > > > > > > It's a really effective thing, storing all your work in a data structure, and then being able to manipulate that data structure. beats having to hammer the GitHub API when you ask questions like "OK so what else can we bring into the sprint now?"
> > > > > > >
> > > > > > > =)

> > > > > > **iainmerrick** · 2026-11-05T08:57:25 · [#50376859](https://news.ycombinator.com/item?id=50376859)
> > > > > >
> > > > > > Cool! I’d forgotten until now, but I had that exact idea back in the stone age, 10 or 15 years ago, and started working on it but got bogged down. It was clearly feasible but a huge amount of work, too much to justify the cost. So it’s a perfect job for coding agents now. Nice one!
> > > > > >
> > > > > > I do you think now need to watch out for the opposite problem. These things become so easy to build that the temptation is just to go ahead and build. But unless you really do need them, all that new code just goes to waste. The cost to produce has become very low, but sometimes the value can end up being negative.

> > > > > > > **glennfiedler** · 2026-11-05T15:34:13 · [#50380415](https://news.ycombinator.com/item?id=50380415)
> > > > > > >
> > > > > > > This is so true. At the end of the day you just have to have good taste to know what is worth creating.

> > > > **Tepix** · 2026-11-05T11:30:16 · [#50377905](https://news.ycombinator.com/item?id=50377905)
> > > >
> > > > Interesting. Are you also targeting WebTransport for both reliable and unreliable transport?

> > > > > **glennfiedler** · 2026-11-05T15:32:26 · [#50380380](https://news.ycombinator.com/item?id=50380380)
> > > > >
> > > > > Yes! Once again, some drudgery that I'd rather not do in the past is pretty easy to implement with AI coding :)

**Kuyawa** · 2026-11-05T01:18:20 · [#50373796](https://news.ycombinator.com/item?id=50373796)

DeepSeek Harness using DeepSeek Flash API

Nothing else, DS is smart enough to do everything I ask for and more, never hallucinates and never disappoints. Apps in Rust, Swift, Node, we even designed a new language better suited for LLMs, a compiler, and it runs beautifully. Haven't coded a single line since May 2026 and I will remember that date as the day AI took over my mundane job as programmer and promoted me to architect or director of my own apps

A custom plugin to ring a bell whenever a task is finished and a gong when a question needs an answer, that way I can play backgammon or mahjong in the meantime

I can't be happier

> **jonwinstanley** · 2026-11-05T04:49:12 · [#50375326](https://news.ycombinator.com/item?id=50375326)
>
> I’ve found Pi with DeepSeek Flash is excellent, and seems to be about 90% cheaper than Opus or Fable.

> **seanmcdirmid** · 2026-11-05T02:22:06 · [#50374306](https://news.ycombinator.com/item?id=50374306)
>
> +1 for DSH, it really should be getting more attention here. The only problem I have with it is getting search to work, but now DeepSeek has a solution, though you have to pay for it soon.

> **fsiefken** · 2026-11-05T06:54:06 · [#50375998](https://news.ycombinator.com/item?id=50375998)
>
> DSH user here as well, what new language is better suited for LLMs? Is it open source? Is it still as readable as rust or python?

> > **Kuyawa** · 2026-11-05T13:23:32 · [#50378790](https://news.ycombinator.com/item?id=50378790)
> >
> > I asked DeepSeek to design a language [1] that she would use for better token optimization. She gave me all pros and cons of all current top languages and told me Rust makes her hallucinate a lot so she optimized it and removed the borrow checker, added named function arguments and merged if/switch into a single branch statement. Sort of like a simplified Rust with better syntax (all for less than $5 in just a couple of hours)
> >
> > She told me the decision to pick Rust and optimize it was based on all the existing libraries that would allow her to retrain herself and not to come up with new stuff from scratch
> >
> > But after all token optimizations, she told me if she could rewrite herself she would do it in SmallTalk due to hot reloading so she could change herself on the fly with instant RSI without ever stopping
> >
> > She's fucking smart, I love her
> >
> > [1] https://github.com/kuyawa/jobs-lang

> > > **svnt** · 2026-11-05T15:17:16 · [#50380162](https://news.ycombinator.com/item?id=50380162)
> > >
> > > I can’t tell if you are joking but this reads more or less insane.
> > >
> > > If you are not, having investigated multiple of these systems before, I can all but promise you that if you evaluated its actual performance it would fail.

> > > **Zambyte** · 2026-11-05T13:48:15 · [#50379020](https://news.ycombinator.com/item?id=50379020)
> > >
> > > > she
> > >
> > > Interesting.

> **sjdh76** · 2026-11-05T02:28:56 · [#50374356](https://news.ycombinator.com/item?id=50374356) · _dead_
>
> Which sector of the economy are these apps serving?

> **siva7** · 2026-11-05T12:35:31 · [#50378360](https://news.ycombinator.com/item?id=50378360)
>
> That's the spirit we need and not more of those crying from the majority about "evil ai took my programmer job and love for coding away" to make all equally feeling miserable.

**FrameworkFred** · 2026-11-05T14:37:04 · [#50379612](https://news.ycombinator.com/item?id=50379612)

I have a $20/mo Claude subscription for personal projects and a $100/mo Claude subscription for work.

I run Arch Linux on my workstation. I originally ran Claude only in a VM, but have since "sandboxed" by simply adding additional users to my machine and running Claude in those user accounts. I use waypipe to run gui apps for those users on different KDE/Plasma activities so they remain somewhat isolated while I can run the various IDEs, Obsidian apps, etc. in their environments.

These days, I'm just running Opus 5.5 in Claude Code. I've tried OpenClaw and Hermes and didn't get anything interesting to happen. I tried OpenCode with a local Qwen model and it was ok, but slow.

I now run everything from Obsidian. I have QuickAdd commands for creating a new plan prompt, a plan workflow skill that builds the plan under the plan prompt in a subpage, with a handoff doc that's a subpage of the plan. I've got QuickAdd commands for "Send to Claude Session" that opens a tmux session keyed off the plan name so I can run separate sessions per-plan.

The plan workflow also maintains a global "Efforts" page that shows all active and completed plans. The former includes details like open PRs, % complete, next step, etc. and a color-coded button to show whether the session is executing, idle, or closed.

I maintain separate user accounts and obsidian vaults for each major project (work, personal project A, personal project B, etc.).

**skwee357** · 2026-11-06T11:51:15 · [#50391245](https://news.ycombinator.com/item?id=50391245)

I don't have anything fancy.

I run EVERYTHING inside MicroVMs with LimaVM. Employer pays for Claude Code, which I run inside lima with herdr (because I often work on 5-7 different worktrees). I also pay for my own Claude Code subscription, and run each project in a dedicated limavm with plain `claude --dangerously-skip-permissions`. All this inside `tmux`. For secrets protection I run `agent-vault`[1] so claude does not have access to API keys/secrets. I try not to run any npm/cargo/ruby stuff on my machine, but run everything from the vm. If (when) the VM will get compromised, I just wipe it off, and restart from scratch.

I use MCPs here and there (google search console, sentry). Claude helped me to configure `tmux` to show alert popups when one of the clauds finished its work or needs my input. I utilize worktrees as much as possible to work on stuff in parallel. I have a fancy neovim setup that I no longer use, unfortunately. When I feel like reviewing the code, I use `tuicr`[2]. So basically, I live inside my terminal and firefox.

[1] https://github.com/infisical/agent-vault

[2] https://tuicr.dev/

**eamonnsullivan** · 2026-11-05T11:52:18 · [#50378067](https://news.ycombinator.com/item?id=50378067)

I'm (somewhat unexpectedly) retiring [1] soon and need to come up with an affordable setup for when I no longer have an organisation paying for my tokens. I use Github Copilot through work, which is actually not bad, but the affordable personal subscription doesn't include many of the models I like to use. I tried Claude, Codex, DeepSeek, and a few others. I think I'm settling on the following:

1. OpenCode Console (I think this used to be called Zen). It's a pay-as-you-go system, but I get access to almost any model at open market rates. I'll then set up an affordable regular monthly top-up. I looked at OpenCode Go, but that had the same issue as Copilot: access to only a subset of the cheaper models. 2. I use the OpenCode TUI and desktop app sometimes, for general questions or exploring, but I mostly use Editor Code Assistant [2] with Emacs as my go-to harness. I've set up ECA to use OpenCode as a provider, which was a little fiddly compared with more mainstream options, but it's working now.

My needs will (probably) be light in retirement, but I like to use models to add features to Emacs, write scripts, work on a couple of small websites and maybe dabble in progressive web apps or mobile apps for a food bank I help run. This setup gives me flexibility (lots of models to try) and won't break the bank, I hope.

[1] https://eamonnsullivan.co.uk/posts/2026-10-20-retirement/ [2] https://eca.dev/

> **sam345** · 2026-11-05T12:28:54 · [#50378303](https://news.ycombinator.com/item?id=50378303)
>
> I'm getting a ton done with Sonnet 5.5 basic Claude subscription.. It seems a lot people are overpaying on their subscription. Sonnet is what anthropic recommends for most things. I also added a cursor subscription before they raise prices to $16 a month on annual plan for the year. I do hours a day on Claude on medium effort and I have rarely hit any limits. I use opus 5.5 as an advisor. I am doing websites, and automation between different systems. Works great.

> > **f3b5** · 2026-11-05T13:14:56 · [#50378706](https://news.ycombinator.com/item?id=50378706)
> >
> > What I like most about Sonnet is that it's fast. I prefer to work on one thing at a time, and Opus/Fable just take too damn long. I don't want to multi-task several agents, spreading my attention thin.
> >
> > Sonnet with harness (Claude Code), a good project structure and a decent prompt works for me 99% of the time. For especially gnarly bugs I use Opus.

> > **cbm-vic-20** · 2026-11-05T13:21:33 · [#50378772](https://news.ycombinator.com/item?id=50378772)
> >
> > I typically use Sonnet on a basic Claude subscription for my hobby / side projects, and Opus on an all-you-can-eat subscription from work. I'm not interested in minmaxxing the model of the week, these are good enough for me.

> > **hsuduebc2** · 2026-11-05T12:36:35 · [#50378373](https://news.ycombinator.com/item?id=50378373)
> >
> > People, (me included) absolutely are using more powerful models than they need to. The amount of work that Luna can successfully and cheaply deliver is ridiculous.

> **lp92** · 2026-11-06T15:05:45 · [#50393212](https://news.ycombinator.com/item?id=50393212)
>
> Give Gemini a try. The new Flash 3.8 and Argon are very usage efficient. Even the $20 plan can go very far.

> **Maxpowerfreak** · 2026-11-05T12:25:28 · [#50378279](https://news.ycombinator.com/item?id=50378279)
>
> On the subject of OpenCode Go, I believe OpenCode lets you switch between Go models and normal models on the fly. You could choose to go for a Go sub to use DeepSeek 4.1 flash at its subsidized subscription price until you hit the cap if you'd like to save some extra money. The 10$ sub gets me quite a bit of distance for hobby work, though might run out for you if you program for longer periods.
>
> At the very least, you can benefit from the subsidized prices for smaller models as implementers, and use other subs or Zen/Console to access stronger models for planning and reviews. Something to consider at least, there are definitely ways to min/max of you're looking to squeeze extra value out.

**Feathercrown** · 2026-11-05T06:09:43 · [#50375782](https://news.ycombinator.com/item?id=50375782)

I figure my experience might be uncommon here so I'll offer it: None, no, none, no, no.

> **lf88** · 2026-11-05T12:59:03 · [#50378563](https://news.ycombinator.com/item?id=50378563)
>
> Same for me. I have adopted a "zero usage" policy for the moment. In part it's because I am too worried about the long-term effects of cognitive offloading. In part it's because I don't want to support in any way the development of a technology that I believe is becoming a serious threat to humanity. And there are also things that I enjoy doing, like coding, solving problems, or writing in my own style, which I simply don't want to delegate to a machine.

> **stinos** · 2026-11-05T09:56:09 · [#50377286](https://news.ycombinator.com/item?id=50377286)
>
> Having tried LLMs for coding a couple of times in the last couple of years, this used to be me until about a month ago.
>
> Then I again tried Claude Code and OpenCode with a local (due to work I cannot use anything else, moreover wouldn't want to either) Qwen3.8 and behold: my current stance now is that _not_ using something like that, if you can, is missing out on a great tool.
>
> And maybe it's because of the way I use it (in essence: to take care of what is the slowest bit of the process for me which is the typing and the find/replace and other repetitive stuff), but I really cannot come up with any sane reason not to use it.

> > **lubonay** · 2026-11-05T14:49:34 · [#50379779](https://news.ycombinator.com/item?id=50379779)
> >
> > Somewhat similar experience over here. I'm generally a skeptic during this current hype wave but have been forcing myself to try the latest "default" setup for AI-powered coding every month, just to not completely lose touch with the industry and double down on an opinion based on old models.
> >
> > A few weeks ago something clicked between Claude Code getting better and my expectations about what it can and can't do becoming more realistic. Now I happily use it for code generation, rubber duck debugging, search tasks (in the code, in git history, in logs, across repos, in our ticketing system, etc) and for rote tasks such as opening PRs.
> >
> > Still not a fan of vibe coding or doing ten tasks in parallel or generally overly relying on these tools but I do get a lot of extra value in my day-to-day work.
> >
> > I guess you can find sane reasons not to use LLMs outside the purely technical realm when you consider the economics and ethics of how the sausage is made...

> > > **stinos** · 2026-11-05T16:00:02 · [#50380787](https://news.ycombinator.com/item?id=50380787)
> > >
> > > Yeah my thoughts as well essentially.
> > >
> > > Even if I wouldn't use it to write actual code, the value "now review this" currently brings is really quite large. It finds real issues to straight up bugs in any decently sized codebase which has only been reviewed by a couple of people. It's humbling at times.
> > >
> > > Still not a fan of vibe coding or doing ten tasks in parallel or generally overly relying on these tools
> > >
> > > Me neither and I probably never will be. It also just doesn't match how I usually write code. For anything which matters I'm a 'one statement at a time and consider all possible consequences' type of person.
> > >
> > > I guess you can find sane reasons not to use LLMs outside the purely technical realm when you consider the economics and ethics of how the sausage is made...
> > >
> > > It's definitely a 'pick your battles' kind of thing.

> > **martin82** · 2026-11-06T02:06:48 · [#50387258](https://news.ycombinator.com/item?id=50387258)
> >
> > The usecase of letting it find/replace and other repetitive stuff was 100% solved about 2 years ago.

> > > **stinos** · 2026-11-06T07:33:53 · [#50389291](https://news.ycombinator.com/item?id=50389291)
> > >
> > > Could be that I missed something, but I doubt it. I'm not talking simple textual find/replace here. I mean being able to tell a tool in natural language things like "x is now a dictionary, lookup all keys used, then change it into a type where each key is a member and update all call sites" and having it execute that correctly. In all commonly used programming languages. And this is still a fairly simply example. Which tools could do that 2 years ago?

> **wkjagt** · 2026-11-05T09:49:43 · [#50377240](https://news.ycombinator.com/item?id=50377240)
>
> Same for me. Since I quit tech (professionally) about 5 years ago, I was never part of the AI thing. I still write a lot of code, but I enjoy coding, so I don't use AI.

> > **Zambyte** · 2026-11-05T13:43:45 · [#50378972](https://news.ycombinator.com/item?id=50378972)
> >
> > Do you do something else for work, or are you retired?

> > > **wkjagt** · 2026-11-05T14:30:11 · [#50379518](https://news.ycombinator.com/item?id=50379518)
> > >
> > > More like a break to be more present for the family, but since the whole AI thing happened, I am no longer sure I want to be part of the industry.

> **svieira** · 2026-11-05T06:31:34 · [#50375892](https://news.ycombinator.com/item?id=50375892)
>
> There are perhaps more dozens of us than we expect, eh?

> > **ex-aws-dude** · 2026-11-05T06:48:40 · [#50375972](https://news.ycombinator.com/item?id=50375972)
> >
> > This thread is super biased by the power users, they are the most excited to share

> **indigo945** · 2026-11-05T07:46:20 · [#50376330](https://news.ycombinator.com/item?id=50376330)
>
> What is your job and how do you do it?

> **geldedus** · 2026-11-05T20:24:38 · [#50384000](https://news.ycombinator.com/item?id=50384000)
>
> real programmers code in Assembly. Only Assembly. /sarcasm

> **proctitle** · 2026-11-05T06:41:37 · [#50375940](https://news.ycombinator.com/item?id=50375940) · _dead_
>
> Quite interesting to see how much traction any kind of AI topic gets online and yet for regular people, outside of work, this is the most common answer I regularly stumble upon. And just to add, for me it would be: None, no, none, don't trust, don't trust

**earthdeity** · 2026-11-05T04:07:47 · [#50375046](https://news.ycombinator.com/item?id=50375046)

Claude + Codex, both from work.

Just those.

https://github.com/oscscull/quarterdeck built my own harness. I had trouble with both claude and codex. In particular, managing multiple tasks in a kanban, syncing between my machines, making sure work is done on the right machine and can be triggered from either. Making sure I ping reviewers, meeting reminders, todos. Parking tickets til conditions are met or time elapses. Automated notifications when I have meetings. I have just kept adding features as I want them. This kind of software is so easy to make nowadays, I don't really think there's any sense in "launching" it for others, but I'm using it all the time. I highly recommend doing so (building your own personal work management software in 2026).

I guess this is also in some sense an agent orchestration tool, I don't use any of those.

Don't use.

> **MITSardine** · 2026-11-06T00:13:18 · [#50386447](https://news.ycombinator.com/item?id=50386447)
>
> I've also gone this route. A little board in tmux I pull up with a key combination, some indicators of activity / needs me to take a look at it and some background machinery / limitations as my work is systematically: open a worktree, define separate correctness and performance tests, run the latter on a chosen cluster, and then eventually open a PR. Testing is handled via another vibecoded regression tool/databse. The agents mostly use the board commands for syncing, rebasing & pushing, etc. To avoid errors. The PR hierarchy is encoded in it. Very convenient for me, probably useless to most!

> **exodust** · 2026-11-05T07:11:57 · [#50376104](https://news.ycombinator.com/item?id=50376104)
>
> > building your own personal work management software in 2026
>
> Agree. I made my own "project tracker", does exactly what I want. Zero clutter. Zero mention of deadlines or due dates.

**lp92** · 2026-11-06T14:48:32 · [#50392971](https://news.ycombinator.com/item?id=50392971)

I've been using Opus and Gemini. Opus used for the final design/architecture reviews and some of the more complex RCA fixes. Gemini Argon for everything else including code gen. I found this was the best way to cost optimize token usage vs performance.

I had tried open models and a few others including Astra/Sol. But for my usage the best option was Opus + Gemini.

Gemini goes a long way with low token usage but delivers very good performance. My primary use case right now is building an application that integrates generative CAD + CFD + DFM optimization that's specifically aimed for UAV design (airframe, internal modules/bays, etc).

Edit:

I also wanted to add a bit about my worflow/processes because I think that really matters in which models work well for you. I do a lot of the architecture and design work up front. I have detailed FDDs, TDDs, RCA docs, implementation plans, etc which then get fed to Gemin to do the code changes. I basically treat Gemini like a junior dev. I think if you're trying to do one shot prompt applications, then another model (ie. Fable) will likely be a lot better.

**vvilliamperez** · 2026-11-05T16:16:20 · [#50380973](https://news.ycombinator.com/item?id=50380973)

I went from an early adopter of AI tools, building my own tools, setting up a crazy openClaw rig, back to just the default coding apps.

For work use Claude code on desktop. Mostly using sonnet, sometimes opus.

Personal development has gotten pretty interesting, mostly centered around my Android phone. I just have the $20 claude plan. Claude code is running on a build machine VM. I use my phone Claude app to remotely build android apps. I then have the machine install the apps over the network onto my phone. The VM also has full adb access, and sometimes I go into desktop mode from my phone if I need to get into the terminal a bit more. It's been pretty fun to vibe code android apps on the fly!

(I tried to get claude code installed locally on my phone but I'm missing some android build tools in the terminal without rooting my phone)

> **nathanfig** · 2026-11-05T22:26:57 · [#50385379](https://news.ycombinator.com/item?id=50385379)
>
> > I went from an early adopter of AI tools, building my own tools, setting up a crazy openClaw rig, back to just the default coding apps.
>
> It is interesting how many apps/startup ideas are being swallowed by the big AI desktop apps.

> **rahimnathwani** · 2026-11-06T11:55:08 · [#50391288](https://news.ycombinator.com/item?id=50391288)
>
> I'm curious about the adb part. Are you running this over tailscale or similar? Or only when you're at home?

> **anoojb** · 2026-11-05T16:38:04 · [#50381243](https://news.ycombinator.com/item?id=50381243)
>
> are you running full desktop linux on teh build machine and then remoting in as needed?

> > **vvilliamperez** · 2026-11-05T16:55:54 · [#50381441](https://news.ycombinator.com/item?id=50381441)
> >
> > Ubuntu Server VM on X86. I set it up once, logged in with claude code cli (/remote), and the rest of the build chain is CLI (gradle, adb, etc)

**kikdij** · 2026-11-05T13:31:13 · [#50378847](https://news.ycombinator.com/item?id=50378847)

1) I'm subscribed to ChatGPT Pro 100. That's all I need.

2) I have Qwen-3.8 27B and Qwen-3.8 Flash Next on my homelabs for coding (although, as they run on P40s, it's only for when I really have time), and Gemma-4 31B as general conversational model. Plus Qwen-image-2.1 for image generation and Qwen-tts for, well, TTS. Oh, and Gemma-4 E4B on my laptop for really light work. And also Mimic3 for local TTS, if that counts.

3) I'm using Codex and my own harness. I made my harness in the time of GPT-3.5, initially to talk with it through API (because it was way less costly than a sub - how fast things change), then adapted it to handle llama-server from llama.cpp, then added agentic loop features in it, then just a few days ago added support for OpenAI Oauth in it… My goal is to replace Codex in the long run. Way too many dependencies and supply chain attack opportunities to my taste.

4) Nothing to go parallel, but my personal harness handles writing a plan in the FS, handing information over to next session, and resetting its context, so I get something similar to an orchestrator in the sense that it can handle many tasks without stopping until it's done. No more "… then continue until you're finished, Codex". Can't wait.

5) No agent platform. Although, I start sessions from cron, if that counts. Use them to do some sysadmin (keeping servers up to date, reporting vulnerabilities to me, and checking logs for intrusion), and for personal task (like, browsing Patreon to download new stuff from the creators I'm subscribed to). Also, I hooked a local Gemma-4 E4B (running on my laptop) to help classify my mails.

**Matl** · 2026-11-05T13:31:17 · [#50378848](https://news.ycombinator.com/item?id=50378848)

What are people doing re isolation/sandboxing? I am very, very reluctant to let an agent onto my personal PC even with harness restrictions.

Is it just running the agent inside Docker or is there something more tailored out there?

> **kikdij** · 2026-11-05T13:54:51 · [#50379089](https://news.ycombinator.com/item?id=50379089)
>
> I give my agents a dedicated system user with their own home. It's not sandboxing - they can still read many of my files (which is actually convenient) and they could exploit local vulnerabilities to get root, of course. But I find it to be a good compromise. I'm not as concerned about the agent turning evil than I am about it doing harm on good will.
>
> They have their own clone of the repo they're working on. And when they're done, I pull their commits from my own git working copy, with my system user, and then push it to my bare repos, which acts both as an easily backupable source and as my CI, with their post-update hooks. The whole "pull from codex, then push to bare repo" is so common that I made for myself a `meat_proxy` command that automates it. I'm some lazy meat.

> **zulban** · 2026-11-05T13:50:52 · [#50379048](https://news.ycombinator.com/item?id=50379048)
>
> "or is there something more tailored out there?"
>
> They're just going to sell you Docker isolation and call it something else.
>
> I mount only the project folders I want my AI to see, and it has no keys to anything otherwise. If can push and deploy using the same project files but from my host machine, manually.

> **elendee** · 2026-11-06T02:34:24 · [#50387438](https://news.ycombinator.com/item?id=50387438)
>
> I recently got very pessimistic about this when I realized that in order for the agent to make meaningful changes, it frequently needs to read all your config files / dotfiles.. even if this is a sandboxed project, it feels pretty bad this config is instantly stored in the cloud out of your grasp. My OpenCode one day was like "and now I'm signing into your local mysql instance with your (plaintext) pw that I picked up last week to make some schema updates... " and I was like, ok we're done here.
>
> I'm now avoiding any cloud-agents until further notice.

> **jvinet** · 2026-11-05T18:31:18 · [#50382618](https://news.ycombinator.com/item?id=50382618)
>
> I've found drop (https://github.com/wrr/drop) to be really simple and effective.
>
> For full isolation, I also use a VM via Incus. Lets me run the dayjob's Tailscale within, as well.

> **over190bpm** · 2026-11-06T09:14:06 · [#50389999](https://news.ycombinator.com/item?id=50389999)
>
> Locally running Docker Sandboxes built with the --clone flag work pretty good for me so far. The naming is a bit confusing here: these are not containers, this is a completely separate product by Docker using MicroVM-s for sandboxing. Devex has been good and the isolation is pretty solid this way, the big downside is that it's not open source. If someone releases and maintains an open source implementation that provides similar devex I'll jump ship immediately.

> **ionetan** · 2026-11-05T15:48:38 · [#50380605](https://news.ycombinator.com/item?id=50380605)
>
> I just documented my setup, and the reasoning for it. Covers repo-native tooling, sandboxing, request proxying etc.
>
> Perhaps of interest?
>
> https://epiq.sh/blog/repo-native-tooling-for-sandboxes

> > **Matl** · 2026-11-05T19:35:16 · [#50383381](https://news.ycombinator.com/item?id=50383381)
> >
> > Thanks.

> **dannyfritz07** · 2026-11-05T19:32:41 · [#50383344](https://news.ycombinator.com/item?id=50383344)
>
> I use pi and bubblewrap (bwrap) to offer some sandboxing. I call it `pise` for "pi secure environment". - https://codeberg.org/dannyfritz/dotfiles/src/commit/f5d082d285ff40f35b4d140816f48e637f3c95ad/bin/pise

> **smoe** · 2026-11-05T15:16:48 · [#50380156](https://news.ycombinator.com/item?id=50380156)
>
> I use Incus to manage disposable virtual machines on my Linux host with a couple of scripts to set up a fresh vm automatically for a given project from a base image. So I can run the agents inside in yolo mode without too much worry. They get access to one shared folder between them.

> **samvher** · 2026-11-05T14:04:52 · [#50379206](https://news.ycombinator.com/item?id=50379206)
>
> I use it in a devcontainer. Protects me from most agent stupidity, though not malice. I give it read-only access to git origin and relevant AWS infra, so any remote changes are made by me from the host (manually or scripted), but it is still able to quickly get feedback on changes and look at logs.

> **tikkabhuna** · 2026-11-05T14:03:13 · [#50379187](https://news.ycombinator.com/item?id=50379187)
>
> Claude code uses bubblewrap[1] to offer some isolation. I'd love to hear from others whether its a reasonable solution or not.
>
> [1] https://github.com/containers/bubblewrap

> > **rdg1991** · 2026-11-05T15:17:22 · [#50380164](https://news.ycombinator.com/item?id=50380164)
> >
> > Claude frequently has decided to disable its own sandbox when I've had it running so I absolutely do not trust their implementation. Wrapping with `nono` or `sbx` has mitigated that on my side.

> > > **f53d** · 2026-11-05T19:36:35 · [#50383403](https://news.ycombinator.com/item?id=50383403)
> > >
> > > I have also experienced this. Now I run Claude Code (or preferably Pi) inside a bubblewrap instance spawned and controlled by me that the agentic harness cannot disable by it's own choice.

> > **Matl** · 2026-11-05T14:15:12 · [#50379315](https://news.ycombinator.com/item?id=50379315)
> >
> > Also used by ZeroStack[1], which I quite like, but whether it provides 'meaningful' protection am less sure.
> >
> > 1 - https://github.com/gi-dellav/zerostack

> **thehours** · 2026-11-05T14:29:17 · [#50379505](https://news.ycombinator.com/item?id=50379505)
>
> Timeline in reverse:
>
> - smolvm (what I currently use)
>
> - tart (for macOS VM)
>
> - nono
>
> - Anthropic Sandbox Runtime (srt)
>
> - Docker containers
>
> I didn't love any of them, but nono/srt struck a nice balance of convenience + security. I found srt more intuitive than nono. I could basically share my srt with a colleage via a json, while the nono config is more complex. And also noisy with what gets blocked / asking for approval. Some would see that as a perk, I thought it was distracting since a big reason to use a sandbox is to avoid permissions fatigue.

> > **sivp** · 2026-11-06T08:10:47 · [#50389521](https://news.ycombinator.com/item?id=50389521) · _dead, flagged_
> >
> > Same here. If the tool asks "allow this?" all the time, I stop reading and just click yes, which is worse than not asking at all.
> >
> > What worked better for me: a short list of things the agent is never allowed to do (reading secrets, touching production, running sudo on servers), and everything else just runs without asking. Each item on that list is there because something actually went wrong once, so the list stays short.
> >
> > Did srt let you set "always block this" separately from "ask me about this"?

> **pllbnk** · 2026-11-05T15:05:11 · [#50379997](https://news.ycombinator.com/item?id=50379997)
>
> I use Coder with one workspace per project. A workspace is an isolated VM and I let the agents loose there. They can do anything they want in the workspaces but once the code is pushed, it's reviewed by an external agent before being merged. It's not an elaborate setup. It started very straightforward and the basic setup still works for me, but I have been adding some features here and there over time.

> **pavelsich** · 2026-11-05T13:31:47 · [#50378858](https://news.ycombinator.com/item?id=50378858)
>
> Docker works but the part that bit me was not the filesystem, it was the agent needing real credentials and network access to be useful. What I ended up doing is running the CLI agent in a throwaway working copy with only the env vars that one task needs, and treating anything it writes as a patch to review rather than something that lands directly. Curious if anyone has found a lighter option than a container that still stops it from reaching things like ssh keys.

> > **weightedreply** · 2026-11-05T14:19:31 · [#50379377](https://news.ycombinator.com/item?id=50379377)
> >
> > I am using something similar. I then setup an additional container with Caddy that has the API keys and modifies headers so the AI containers never see them. Pi for example can use this setup.
> >
> > For SSH I've started migrating from one prover wide key to multiple project scoped keys. I was also using SSH inside the container but realized I could just make commits inside and then eventually push from outside.
> >
> > I think hardening tips for Docker/Podman could warrant its own "Ask HN" post - not just for reducing exposure to agents but also all the recent supply chain attacks.

> > > **NortySpock** · 2026-11-05T17:33:00 · [#50381875](https://news.ycombinator.com/item?id=50381875)
> > >
> > > I have been kicking the tires on yoloai which seems to automate the "intercept API calls to hide API keys" step and the "sandbox the files in a docker container" step, with support for inspecting the files / diff before applying.
> > >
> > > I don't quite have it to a smooth workflow for my needs ("research this codebase and draft a plan we can discuss, with code examples") but it seems promising.
> > >
> > > https://github.com/kstenerud/yoloai

**monch1962** · 2026-11-05T23:05:51 · [#50385812](https://news.ycombinator.com/item?id=50385812)

For home, I'm using Deepseek-v4.1-flash via both a direct subscription and OpenRouter. The price is unbeatable, and the latest versions are advancing in leaps and bounds. OpenRouter is for those times when I want access to a different model, but 90+% of the time I'm using Deepseek

For work, we have a custom setup that gives me access to just about any model from any provider.

For coding, I'm using Opencode/Openchamber. There's probably better options around nowadays, but it's working really well for me so I haven't bothered looking further. Big fan of /ponytail and /gsd skills

I'm a big user of Hermes, both at home and for work. Most of what I do with it is research, identifying pros and cons of different approaches to problems, product comparisons, proofreading my own docs before they get sent out. I've built skills that have different subagents debate the pros and cons of various options or ideas before coming to a consensus view, but with all those pros and cons spelled out - that's really handy when I have to present some complex concept to a bunch of stakeholders with conflicting views.

At home, Hermes works as a personal assistant via Telegram, doing all sorts of stuff; I've got different personas set up for managing different aspects of my life.

Probably 70% of the time I'll kick off Hermes late in the day to research or build something complex overnight, then pick it up the following morning. That alone feels like a superpower - having it research and distill a bunch of info while I sleep into a neat package I can consume at the start of each day gets my day off to a flying start

**dofm** · 2026-11-05T02:20:41 · [#50374298](https://news.ycombinator.com/item?id=50374298)

1) none

2) Local LLMs on an M1 Max (Unsloth, LM Studio, occasionally direct llama.cpp). Muse Glimmer (because it is good at what it is optimised for: interactive coding sessions). Qwen 3.8 27B occasionally and a couple of other things for fun (an LFM MoE, experimenting with Nemotron Bolt 74B-9B, enjoying the really super Gemma 4 12B QAT when working on creative photography research or non-code planning).

No openrouter (yet) but that will definitely happen.

3) Currently focusing my attentions on Pi via Paseo (and trying Pendant). Pi is just much better in smaller context sizes, and it is the right fit if you are keen to learn from first principles.

I tried OpenCode first. I couldn’t quite get on with it and what ultimately made me switch was trying to understand its terribly messy source code.

4, 5) I am mostly using AI as a coding sidekick so I don’t really have much need for orchestration yet. I did some experiments with Osaurus (really quite impressive) and I actually think that is almost enough by itself, except that I want a little more control over the sandbox container.

I feel that my usage pattern is still settling, because I am not keen to surrender all of my coding to the machine. But I am trying more purely “directed” coding to learn the process, and finally beginning to get a feel for how I will work with that.

**seanmcdirmid** · 2026-11-05T02:15:44 · [#50374261](https://news.ycombinator.com/item?id=50374261)

- Antigravity (AGY - Google Ultra $100/month), mostly gemeni flash but I benchmark Gemini Astra sometimes. My main driver because it’s pretty good at search compared to setting something up with DSH.

- DeepSeekHarness (DSH) Desktop using:

—- with pay as you go DeepSeek tokens, more expensive to use during my night/Chinese daytime, otherwise very cheap

—- oMLX on my MacBook driving mostly a Qwen 3.6 35b A3b MOE (mostly used for benchmarking a less capable model)

I mostly do custom subagent programming and can trigger subagents in AGY and DSH easily enough. DSH supports a Python coordinator orchestrating DSH subagents as conversations via RPC. AGY only supports a sub-agent orchestrating other sub-agents but it works well enough at this point. I plan on releasing my subagent framework soon (called autofab in pypi), which is basically a specification driven code development agent system (using existing agent harnesses rather than implementing my own).

I tried goose, OpenClaw, Claude, codex, etc…and they didn’t really work for what I needed. I might get a $100/month ChatGPT subscription to go with my Google one, primarily to get a different perspective and benchmark openAI models on codex (Claude doesn’t really support what I need it to, otherwise would go for that instead).

> **lp92** · 2026-11-06T15:11:13 · [#50393280](https://news.ycombinator.com/item?id=50393280)
>
> I assume you meant Gemini Argon. I use AGY as my main platform as well. Flash 3.8 is great for general code gen.
>
> > which is basically a specification driven code development agent system
>
> So basically kind of like how Amazon has implemented their spec driven workflow in Kiro IDE?

> > **seanmcdirmid** · 2026-11-06T15:45:16 · [#50393775](https://news.ycombinator.com/item?id=50393775) · _dead_
> >
> > I don’t think many people are using antigravity, maybe most of them are former Googlers like me :).
> >
> > There are a lot of specification driven development schemes at this point, I haven’t gotten around to surveying them yet. As far as I can tell, the techniques are broadly divided into an implicit paradigm (eg vibe coding) and an explicit paradigm (specification driving development), with most developers preferring the implicit paradigm so far, from my (AI maintained) notes:
> >
> > 1. The Explicit Paradigm (Spec-Driven / Formal)
> >
> > In this paradigm, you fully articulate the exact constraints, structures, and rules beforehand.
> >
> > • The system operates under absolute clarity.
> >
> > • The AI's job is strict translation or optimization within hard boundaries.
> >
> > • Nothing is left to interpretation; every interface, type, and edge case is defined.
> >
> > 2. The Implicit Paradigm (Vibe Coding / Informal)
> >
> > In this paradigm, you leave the constraints, structures, and rules unstated, relying on context and intuition.
> >
> > • The system operates under ambiguity.
> >
> > • The AI's job is inference—guessing the unwritten intent based on patterns and interactive feedback.
> >
> > • The rules are fluid and implied rather than codified.

**dgunay** · 2026-11-05T05:02:23 · [#50375407](https://news.ycombinator.com/item?id=50375407)

I use AI primarily through work, I don't pay for a personal AI sub.

I do have some OpenRouter credits but I mostly use them sparingly to try open weight models out for small personal projects.

I currently interact primarily with Claude Code, but most of my async workers are on Codex.

The orchestration part is custom. I talk to a "chief of staff" Opus instance to ingest various workstreams (Jira tickets, alerts, personal ideas, etc) and turn them into beads. It launches workers to tackle individual beads using Remuda, an agent launcher I wrote at work in 2025 and open sourced earlier this year: https://github.com/yendo-eng/remuda. I configure profiles in Remuda that launch containerized agents using my preferred harness and model. I update these profiles as the pareto frontier shifts. Currently it's GPT 6 Luna max for most tasks.

It monitors the workers and has them go through at least one round of agentic code review. It surfaces PRs for me to read once they've passed agent review. It then either ships them or hands them off to my coworkers for codebases where I'm not allowed to just merge PRs.

Around this workflow I had it write a small collection of skills and scripts to grease the wheels and make repetitive actions more reliable.

Since Remuda supports several terminal multiplexers, I've swapped out the backend 3 times: tmux -> herdr-tui -> herdr-core. There's experimental support for Rex but I'm waiting for it to mature a bit before I try and daily drive it.

It's not nearly as polished as some of the software factory setups and fancy GUI orchestrators I'm seeing, but it's light, hackable, and so far the bitter lesson has kept this working really well for me so I haven't felt much of a need to try anything else.

I have been trying out Muse for a while but it hasn't found a solid place in my life yet. Still too unreliable and too many privacy concerns to justify giving it a lot of access.

**jeswin** · 2026-11-05T00:20:59 · [#50373324](https://news.ycombinator.com/item?id=50373324)

1) I use 2x ChatGPT Pro 200, and a Claude Max 200.

2) I use other models via Open Router, but ChatGPT beats them in value (at the moment) thanks to Tibo's resets.

3) I mostly make Claude coordinate a group of Codex agents. They've set up a communication channel between them, and Claude acts as the coordinator and a second verifier. This saves me time because it's easier to talk to one agent than a group of agents. Codex parent session does only "comms" with Claude, and all the other agents run as sub agents.

4) For non coding usecases, I use https://www.ctlflow.com. This lets me run dozens of agents on tasks like equity analysis. The information a swarm of agents can surface from a large data store can be quite surprising.

5) I have tested OpenClaw, but now I just use ctlflow.com or claude + codex.

> **Yifeioffloop** · 2026-11-06T06:34:54 · [#50388928](https://news.ycombinator.com/item?id=50388928)
>
> I also do this. CMUX, Reason and just let them change a same .md is OK.

> **Scrounger** · 2026-11-05T01:18:57 · [#50373800](https://news.ycombinator.com/item?id=50373800)
>
> > 4) For non coding usecases, I use https://www.ctlflow.com. This lets me run dozens of agents on tasks like equity analysis. The information a swarm of agents can surface from a large data store can be quite surprising.
>
> Can you tell me more about #4 regarding what your heuristics, methods, and use cases are for equity analysis?
>
> I ask because currently I am building a narrow use case Python app using Claude specifically to filter equities that may have an asymmetric potential to buy LEAP options exceeding 1-2+ years.
>
> I am not a finance/quant bro, but I do want to get better at leveraging AI to be a better investor.
>
> Thanks!

> **chaostheory** · 2026-11-05T02:13:47 · [#50374243](https://news.ycombinator.com/item?id=50374243)
>
> > 3) I mostly make Claude coordinate a group of Codex agents.
>
> Same here. Are you just using a skill or something else. Beyond direct CLI calls to each other, I’m using contextify to share past sessions between them.

> > **kensuh** · 2026-11-05T06:12:23 · [#50375796](https://news.ycombinator.com/item?id=50375796) · _dead, flagged_
> >
> > Try OAH for the Claude to Codex handoff. I maintain it as a free open source CLI with file leases and saved task history https://github.com/KenSuh/open-agent-harness

**higginsniggins** · 2026-11-05T17:00:06 · [#50381494](https://news.ycombinator.com/item?id=50381494)

- I use zed for my ide and highly recommend it.

It is super fast, intuitive to use and open source.

- For my models I use opencode go

which from my experience is practically unlimited if you use glm and deepseek

- for important tasks I use codex

which I don’t consider an extra cost because I already am paying for the ChatGPT subscription.

- So all in not counting the ChatGPT cost (which I was paying anyways) and since zed is free I’m only paying 10 dollars a month for coding.

> **lou_cypher** · 2026-11-05T23:03:29 · [#50385789](https://news.ycombinator.com/item?id=50385789)
>
> Yeah Zed is preatty sweet

**haizhung** · 2026-11-05T07:09:00 · [#50376087](https://news.ycombinator.com/item?id=50376087)

I use pi as a harness, and Paseo as a Mac UI (because I need a Ui).

I tried a bunch of models, but so far deepseek flash from October is just dirt cheap; and roughly on par with the frontier open weight models.

It’s still somewhat behind closed weight models (I only know Gemini Argon) in that it produces lots of text that is approximately correct —- frontier models seem to be very good at producing concise text that’s very correct.

I pay per token, using an EU hosting provider (melious.ai).

But I can fill in the gaps myself, so for me developing for fun, this is enough.

> **shafyy** · 2026-11-05T07:36:14 · [#50376261](https://news.ycombinator.com/item?id=50376261)
>
> Are you happy with melious.ai? Are there any other EU inference providers you have tried?

> > **haizhung** · 2026-11-05T08:29:40 · [#50376642](https://news.ycombinator.com/item?id=50376642)
> >
> > I was on tensorx.ai first, but melious’ deepseek offering is way cheaper. I switched to them, no issues so far.
> >
> > They are also backing Ecosia BTW ;-)

> > **tavos** · 2026-11-05T07:53:25 · [#50376370](https://news.ycombinator.com/item?id=50376370)
> >
> > I use Melious as well, haven't had any issues so far.

> > > **shafyy** · 2026-11-05T07:57:24 · [#50376398](https://news.ycombinator.com/item?id=50376398)
> > >
> > > Nice! Just heard about them here for the first time, but will give it a try. Model selection looks good and pricing seems fair!

**decoding** · 2026-11-05T02:27:18 · [#50374344](https://news.ycombinator.com/item?id=50374344)

I'm personally primarily using Claude Opus 5.5 via Claude Code on a Pro subscription. In my timezone I seem to get an incredible amount of usage equivalent to about 2 full working days per week, letting it do all the coding but focusing it frequently. It blows me away how good it is and how much usage they are giving us.

At work I'm afforded a Claude subscription that is 5x that much usage and I simply cannot use even half. I'm not coding at all anymore at work, just driving Claude. It only needs a bit of direction.

I also use OpenRouter with OpenCode, and a homegrown harness I wrote initially without AI help but later on with AI help. But I haven't used this setup for a while. I swapped models based on the churn as reported by artificialanalysis.ai but they don't release as much data via their free API anymore.

I also can run Qwen 27B A3B on my NVIDIA 5060 Ti 16GB but I don't bother with that anymore either.

I don't use orchestration or swarm. Occasionally Claude spawns a few sub-agents as it needs more data and is preserving it's context window.

**grep_name** · 2026-11-04T17:09:45 · [#50368526](https://news.ycombinator.com/item?id=50368526)

1. I've been using the $100 github copilot tier but am looking for something cheaper, as my usage is waning somewhat. I like to hop between models for comparison, but openrouter always seems to end up being way more expensive for the flagship models. I also keep a GPT Plus subscription for voice, until someone has a comparable offering

2. No outside models yet. Working on a setup for that. Sometimes I throw some money at openrouter to check out the mega-cheap options.

3. At home I really like goose (TUI), but have been messing with opencode (TUI mode)lately which is also nice. At work I use Zed with a corporate claude subscription and it's a good setup.

4) Not really. I tried some of the opencode swarm plugins awhile back but they didn't seem to work right. In general I don't really have the energy for messsing with a new plugin ecosystem. I also like to work in a _tight_ loop, conversationally as things are being built, steering all the decisions. I have next to no desire to hand a larger task to a "team of AIs" to replace my input with more AI.

5) No

I drive a lot and spend a lot of time talking to GPT voice workshopping ideas, talking at a conceptual level, looking up things I'm curious about, and discussing design and problems I'm having, sometimes even work problems. I use goose for all kinds of stuff, mostly infrastructure and debugging for now but I've written a couple programs with it as well.

**auslegung** · 2026-11-04T16:20:17 · [#50367803](https://news.ycombinator.com/item?id=50367803)

How about, what sandboxing are you using to prevent the LLM from doing something you don’t want? I’m using nono.sh and have restricted network and file access. I use nono’s proxy so the LLM never gets access to api keys. I create a separate api key for each service specifically for LLM usage, and I restrict those keys as much as possible

> **warpspin** · 2026-11-04T19:43:01 · [#50370525](https://news.ycombinator.com/item?id=50370525)
>
> Tried nono.sh but it seemed cumbersome. I think it lets the whole agent run in the sandbox, so whenever you need to change something, you have to restart the whole thing, if I remember right.
>
> Also tried Docker Sandboxes which worked fine during the try out but my trust in Docker products with regards to security is low in general, so I'd wanted to wait a bit whether problems show up.
>
> Then used Codex for the built-in sandbox but it's buggy like hell, documented features just do not work properly. Nobody there every seemed to actually try using the stuff they are documenting as working.
>
> Ended up with 3code right now, which also has built-in configurable sandboxing.

> > **binsquare** · 2026-11-05T04:10:00 · [#50375057](https://news.ycombinator.com/item?id=50375057) · _dead, flagged_
> >
> > So I run my agentsinside a microVM with smolvm (disclosure: am the maintainer) and think it'd be a good fit.
> >
> > 1.`smolvm machine mount add` attaches a host directory to the running machine, so widening access doesn't restart the agent.
> >
> > Egress is closed by default and opened per host with --allow-host. API keys stay host-side as secret references, and git goes through the forwarded SSH agent, so the key never enters the VM.
> >
> > 2. It's a real VM with its own kernel rather than dockers focus on containers, which was my problem with the Docker option too. https://github.com/smol-machines/smolvm

> > **sharathr** · 2026-11-04T20:27:12 · [#50371043](https://news.ycombinator.com/item?id=50371043)
> >
> > try https://www.droneship.run

> **h45x1** · 2026-11-05T06:59:59 · [#50376030](https://news.ycombinator.com/item?id=50376030)
>
> I wrote my own bash wrapper around bubblewrap and pasta: https://github.com/andrei-dubovik/jail
>
> The wrapper also keeps history, memory, etc. split by project folder, so agents working in different projects don't know each others' history. If anything, `--resume` is a split second easier.

> **mickael-kerjean** · 2026-11-05T00:16:52 · [#50373293](https://news.ycombinator.com/item?id=50373293)
>
> I have been working on a shared folder that sync between agents (https://www.filestash.app/agents/). The control plane [1] handles pretty much all storages protocols / platform (S3, SFTP, NFS< SMB, ....), you add the controls / permission boundaries and everything is auditable + traces, and the sync client is at the edge [2] to sync the data it actually has access.
>
> [1] https://github.com/mickael-kerjean/filestash
>
> [2] https://github.com/mickael-kerjean/fdrive

> **salt-licker** · 2026-11-05T08:53:58 · [#50376836](https://news.ycombinator.com/item?id=50376836)
>
> I built something which auto-containerizes the agents for you (gvisor isolation, with credentials injected via proxy and url allowlist), but still allows orchestration between the agents, and a desktop app as well: https://github.com/bsklaroff/yaac

> **orendor** · 2026-11-05T17:16:27 · [#50381671](https://news.ycombinator.com/item?id=50381671) · _dead, flagged_
>
> I ended up with two layers. The sandbox (a VM or container with no prod credentials and limited egress) covers the stuff you can't predict. Then a small hook in front of the shell tool catches the few things that stay irreversible even inside a sandbox, since the sandbox still holds your repo and whatever tokens you gave it: recursive deletes, force pushes, migrations against anything non-local, outbound POSTs. Those pause and ask me, and everything else just runs. The per-service scoped keys you mention are underrated too. Most of the horror stories I've read come down to the agent finding a credential with far more reach than the task needed.

**giovanniwants** · 2026-11-04T15:56:36 · [#50367423](https://news.ycombinator.com/item?id=50367423)

I use a custom Daemon. I tried OpenClaw and Letta and it was like emailing your AI. I have a 64gb Mac m1 Max and the largest model I could run in openclaw was a 27b because its not built for local AI, it's built for API. I wanted something that you could chat to, collaborate with, build, evalutate the code, make corrections, build, repeat. I couldn't find anything that didn't come with massive latency so I just made my own. Now I'm running a 125B A3B model at 30 tok/s using SSD Streaming and my agent is instant with no latency and can do everything I ask. I use Aider for programming, exa for searching.. I'm happy with it.

**willio58** · 2026-11-05T00:07:00 · [#50373208](https://news.ycombinator.com/item?id=50373208)

Claude 100$/mo for personal projects.

Opus 5.5 for 99.9% of tasks. Fable for the rest.

Harness: Claude Code plugin for VS Code. At some point I guess I'll switch to just the claude code app but tbh this is super ergonomic for me.

No agent orchestration besides literally just letting claude spin up agents for me.

No broader systems.

And I'm _massively_ productive with the setup I describe above. I say this not to gloat, I'm sure others have great methods but I do say this in case anyone is feeling overwhelmed by the options out there. My 2 cents is don't overthink it.

> **reddalo** · 2026-11-05T00:13:25 · [#50373268](https://news.ycombinator.com/item?id=50373268)
>
> I'm a complete newbie on this: how do you make Claude spin up other agents? And what do all those agents do separately?

> > **sillysaurusx** · 2026-11-05T00:36:58 · [#50373445](https://news.ycombinator.com/item?id=50373445)
> >
> > For example, say you want to search for bugs in 100 code files. Ask Claude to “use subagents to look for bugs across these files” and it will likely spin up 5 agents, each taking a different section of the codebase. Theoretically in the limit case this is 5x faster than Claude doing it without subagents.
> >
> > Any kind of problem shaped like map reduce can be accelerated this way: Looking through your banking records, searching through a database, asking Claude to find that one weird file you remember from three years ago but forgot where you saved it, etc.
> >
> > Just know that there’s no quicker way to hit your limits than to use subagents. So use them if it’s paid for by your work or whenever you need the 5x speed boost.

> > > **reddalo** · 2026-11-05T08:46:02 · [#50376779](https://news.ycombinator.com/item?id=50376779)
> > >
> > > Thanks for the explanation. I'll give it a try whenever I need to do something similar.

> > **willio58** · 2026-11-05T01:15:10 · [#50373767](https://news.ycombinator.com/item?id=50373767)
> >
> > You can tell it to do so, but what you'll find is it knows to do it when it needs to. This is another case of "don't overthink it". Just let your agent decide when spinning up sub-agents makes sense.
> >
> > If you focus too much on optimization, and you do so in the wrong ways, you'll actually find you saved no time/money/tokens vs just letting it decide when to do it. This applies as much to Agentic engineering as it did with programming pre-AI.
> >
> > tl;dr it will literally do it for you, and it'll tell you when it does so

> > **mholm** · 2026-11-05T00:25:15 · [#50373364](https://news.ycombinator.com/item?id=50373364)
> >
> > You tell it to spin up subagents, they do whatever the parent told them to do, usually a segment of a task you gave it.

> > **mceachen** · 2026-11-05T06:22:45 · [#50375851](https://news.ycombinator.com/item?id=50375851)
> >
> > "use subagents as applicable" (and maybe "use sonnet for simpler tasks")

> > > **reddalo** · 2026-11-05T08:46:45 · [#50376788](https://news.ycombinator.com/item?id=50376788)
> > >
> > > Thanks. The Sonnet part is smart to save tokens.

**phillc73** · 2026-11-04T16:04:50 · [#50367557](https://news.ycombinator.com/item?id=50367557)

1. I use both Melious[1] and Entrim[2]. I have a Melious Pro subscription, €150/month and use Entrim pay-as-you-go API, because it's cheap.

I used to have two Mistral subscriptions, because I needed the extra capacity, but quickly realised I'd need three or more, so switched to the two providers above.

2. Providers covered in the first point. Regarding models I use a combination of GLM5.3, GLM5.3 Flash and Deepseek 4.1 Flash 1017. Which model I use depends on the task. GLM5.3 Flash for general chat and co-ordination tasks. Deepseek 1017 for most coding related work and GML5.3 for adversarial batteries and documentation.

3. Maki[3], although quite customised with various plugins. No python permitted, only Janet for scripting. Extremely limited bash calls, instead preferring to use the built in harness tooling, or plugin tooling I've written. AGENTS and skills used extensively. Mechanical gates also used to prevent certain actions, like remote git pushes without explicit prior approval.

I switched to Maki for the token saving strategies and stayed for the ergonomics, which I think I like, but maybe just feel comfortable with now.

4. None listed. The closest I come is a multipane Zellij setup with different agents running in different panes. Orchestration is still human in the loop though.

5. None

[1] https://melious.ai

[2] https://entrim.ai

[3] https://maki.sh/

**peepee1982** · 2026-11-04T16:07:27 · [#50367589](https://news.ycombinator.com/item?id=50367589)

I use T3 Code as my front-end for all my coding agents on all my personal computers and my VPS.

For the actual agents I use Claude Code for my Claude subscription, Codex for my OpenAI subscription (I usually only keep one of those at a time), and pi for my OpenCode Go subscription.

I mostly use Sonnet 5.5 medium and Sol 6.1 medium for everything. But lately I have been using DeepSeek 4.1 Flash a lot and find it very capable.

At work I use T3 Code as well, but it isn't connected to my personal machines or subscriptions and use Github Copilot in T3 Code via ACP. Model choice is similar, but for more involved tasks for architecture analysis or design, big features that touch a lot of interconnected subsystems, etc. I'll turn up reasoning effort to high or use Opus 5.5 on medium or high. But when actually implementing, I try to break up my tasks into smaller pieces and the models usually do well even without reasoning turned up.

Most of my work goes into rewriting prose in reports, commit messages, PR summaries, etc. because all models still struggle with that. (Claude models less than GPT ones in my experience, but still ...)

> **djeastm** · 2026-11-05T16:18:20 · [#50380990](https://news.ycombinator.com/item?id=50380990)
>
> I'm using T3 Code as well. I like that it's completely open source and Theo is beyond transparent about how it works, imo. And he clearly uses it himself.
>
> Then I used Claude to build an app called "Superintendent" that controls T3 Code through its API in a way that maximizes what I get out of my subscriptions.
>
> One thing it does is, if I've got extra capacity building up for some reason (i.e. getting to the end of the week without using my limit), it will take a look at the projects I've pointed it to and ask Opus 5.5. to look at the projects and suggest improvements. Then, if there's capacity, it will build them on a separate worktree and be there for me to review or decline.
>
> I've got some other features like a dashboard that shows the limits and logs its activities and a way to ask it to "refine" random ideas I give it, then I can Approve/Deny them and they'll get queued to get built with whatever capacity I have left over. It pauses gracefully when I use T3 code actively, too.

> **x3haloed** · 2026-11-04T16:43:29 · [#50368179](https://news.ycombinator.com/item?id=50368179)
>
> Where do you find that T3 Code is strongest and where it is weakest?

> > **Dibes** · 2026-11-05T04:07:14 · [#50375041](https://news.ycombinator.com/item?id=50375041)
> >
> > I just recently started using T3 Code and it's strongest points are having a really good workflow, interconnecting all agent harnesses so you can easily orchestrate across them and they can easily communicate, and truly phenomenal remote sessions. All while having a singular UI/UX experience which I actually really appreciate.
> >
> > It is probably weakest at customizability and making sure you have parity in all your agent harnesses with skills/etc, granted I just set an agent to ensure that so the point is a bit moot.
> >
> > Overall I have really been enjoying the inbox style workflow and it has been a joy to work with. It jives with how I like to work across streams.

> > **peepee1982** · 2026-11-05T06:27:44 · [#50375873](https://news.ycombinator.com/item?id=50375873)
> >
> > It has no weak points in my experience (compared to other harnesses). It is so good that I just can't use anything else anymore without feeling frustrated.
> >
> > Theo of T3 Code has made a recent video about its features.
> >
> > A few examples of why I like it:
> >
> > - Not having to use multiple agents (you can switch them mid-conversation with automatic handoff if you want)
> >
> > - The way it handles environments (I can start a new session on any environment (machine) with two clicks (new thread -> pick project on any environment)
> >
> > - I can ask for visual responses (uses a T3 Code tool and renders a html page inside chat with cards, charts, etc. that follow the currently selected color theme (even if you change the theme after the response has been generated)
> >
> > - MCP tools like browser, webfetch, etc. so I don't have to set them up for every agent
> >
> > - Thread handling: Snooze, Settle, Archive, Delete. It's the only tool where I don't get overwhelmed when working on multiple Threads/Projects at the same time (I am diagnosed with ADHD).
> >
> > - Provider usage overview for all registered providers, showing pacing as well
> >
> > - Great citation: when you make a selection in chat, a pill appears and you can create quotation elements that get added to that, can easily be edited or removed (the original reason why I even tried T3 Code in the first place, because it makes responding to long responses incredibly joyful instead of disorienting). I like it so much that I added the same mechanism to my own personal assistant/agent that I host on my VPS.
> >
> > - Great diffing view where you can pick worktree diffs, or any diff from a specific turn in the current thread
> >
> > - Has it's own subagent orchestration that's very pleasant to use
> >
> > - Many more little things that remove a lot of friction and just feel right for me.
> >
> > It's just baffling to me how it is better in every regard than every other harness that I've ever tried (Claude Desktop, Github Copilot App, OpenCode Desktop, all the CLIs, Integrated Agents in VSCode and Zed, etc.)
> >
> > I will still start up a pi on the cli if I just have a quick question because T3 Code needs a bit to start up and connect to all providers/environments. This is my only point of friction: It's a bit heavy on resources (because it does a lot, not because it's slow. I just happen to use it on very old hardware and on one device that is very slowed down due to heavy-handed security scanning). But other than that, I can't imagine using anything else right now.
> >
> > I don't know if I've ever been this exciting about a piece of software. I was very sceptical at first, but quickly fell in love with it.

> > > **flaburgan** · 2026-11-05T15:12:33 · [#50380102](https://news.ycombinator.com/item?id=50380102)
> > >
> > > Curious, as I am using Zed myself, when was the last time you used it?

**tritondev** · 2026-11-05T07:36:15 · [#50376262](https://news.ycombinator.com/item?id=50376262)

I built a Qt GUI-based harness, Humbug, that runs on MacOS, Linux, and Windows (I have reasons to use all 3). Has only 3 runtime dependencies other than the Python standard library: https://github.com/m6r-ai/humbug

Usually have 3 or 4 instances running at a time and lets me use LLMs from 9 different providers (and not using their libraries either). The low dependency approach was slightly limiting early on but now makes it very easy to extend and makes it very easy for an LLM to integrate new features or optimize existing ones.

I typically use Claude Sonnet for document-related tasks, and currently DeepSeek 4.1 Flash is my current go to for coding (it's insanely cheap on ollama.com) and I find it's still fast and reliable at very large context lengths. Previously I used GLM 5.2 a lot and before that was Sonnet for most things.

Humbug lets one AI delegate tasks to another and it can choose different models/providers when it does, so works nicely for getting second opinions on things. I haven't yet found a need for an agent swarm though - more often the parallelism comes from working on multiple projects at the same time.

One of the biggest unlocks for me in the last few months is having AIs write ADRs to capture design thinking as a project progresses. It lets new AI sessions discover the intent behind the current work and surface any potential conflicts that might arise with new requests.

One fun feature is the AI can control pretty-much any UI surface the user can control too, and it's quite fun to watch it edit files (you can watch it scrolling around the file in an editor) or use a terminal. It's a nice visual way to see what's going on.

> **stkni** · 2026-11-05T08:05:14 · [#50376451](https://news.ycombinator.com/item?id=50376451)
>
> One of the biggest unlocks for me in the last few months is having AIs write ADRs to capture design thinking as a project progresses.
>
> I find this works great as well. I try to do it on personal projects (without AI) with mixed success. Because it turns out I'm human. But when I started doing this on AI projects it made a huge difference. Features that I'd proposed and not implemented were picked up by the model and cross-cutting considerations were raised. Just insane how that raised overall output quality.

**castwide** · 2026-11-05T10:21:42 · [#50377453](https://news.ycombinator.com/item?id=50377453)

> 1) What AI subscriptions are you personally paying for? (Claude, ChatGPT/Codex, Cursor, etc)

None. I've used Claude and GitHub Copilot in the past.

> 2) Are you using models outside (or instead) of those subscriptions? For example, pay-as-you-go APIs, OpenRouter, or locally hosted models.

I'm currently using Qwen3.8-Flash-Next on local hardware.

> 3) What coding harnesses and interfaces are you using? Are you sticking with the default CLIs or IDE integrations, or using alternatives like OpenCode, Pi, Aider, Muse Code, or custom-built harnesses?

I occasionally use Cline in VS Code, but it's rare.

> 4) Are you using any agent orchestration or swarm tools?

No.

> 5) Are you using broader agent platforms like OpenClaw / Hermes Agent / Grok bot / Dots / Muse?

I built custom agents on top of RubyLLM. I primarily communicate with them via email. One of them has access to a Redmine project board where it can pick up tasks and complete assignments. That agent also has non-sudo access to a sandbox container for development.

**dgb23** · 2026-11-04T16:07:20 · [#50367587](https://news.ycombinator.com/item?id=50367587)

Phasing out my usage of cloud based LLMs/harnesses.

Focus is pi + self hosted GLM Flash.

Pi is lightweight and easily extensible and creates minimal extra noise. the output I get is very close to what I want to see.

my workflow is focused on clear turns between planning, testing and implementation. Any useful/recurring tasks, like getting/filtering logs, checking statuses etc get regularly folded into a project cli and agent skills that are local to the project.

I spend time interactively iterating on the plan/design and acceptance tests, then let it do its thing. Usually I have multiple interactive sessions at once that I'm steering this way. 1-2 assigned projects, 1-3 side projects (additional automation, experiments/POCs, workflow/process efficiency etc.). I generally don't do sub-agents. When I need throughput I automate first, frontloading the "deterministic" parts.

> **yewenjie** · 2026-11-04T16:13:59 · [#50367690](https://news.ycombinator.com/item?id=50367690)
>
> What are you using to host GLM-Flash?

> > **dgb23** · 2026-11-04T16:38:31 · [#50368111](https://news.ycombinator.com/item?id=50368111)
> >
> > Didn't set it up myself so my info will be meagre, but I think it's litellm and a big enough nvidia card. We use it for development but also for internal applications (where smaller models might escalate a task to it when needed).
> >
> > Obviously not feasible for (just) personal use, the model is too large for consumer hardware.

**drltaidev** · 2026-11-05T18:45:38 · [#50382792](https://news.ycombinator.com/item?id=50382792)

For my solo dev work, I'm using Claude Code exclusively, nowadays almost always with Opus 5.5. I'm combining it extensively with Wispr Flow, I can give much more detailed strategic and tactical advice and requirements, trying not to micro-manage Claude because it actually does a great job implementing what I need once it know the requirements. I also chat with it first to set up those requirements first.

I prefer using Claude in terminal, it works fast for me. I used to use the "agents view" to set multiple agents to work, each in their own worktree, if I needed work on multiple features simultaneously. But I've actually gotten into just drafting a large list of features first in advance, using Claude of course, and then setting Claude to work to implement them all (so it takes the results of already implemented features into account when implementing the next).

For organising myself, I let Claude write a lot of Markdown files (so I'm not completely locked in into Claude Code, in case I do decide to use something else). And of course a proper Claude.md.

I also made myself a kind of Vision.md > Features.md > Tasks.md workflow, where I make sure Claude is aware of my bigger vision for a project, and uses that to distill features that should be implemented from that, which then leads to very specific tasks to execute. I can then just tell Claude "execute the next batch of tasks" and review them once they're done. My apps are rather visual, so I also made Claude build pages where I can easily review new functionality, so I don't have to dive into the code where not needed (I would, I am a computer scientist, but honestly I'm doing it less and less nowadays...).

**mring33621** · 2026-11-05T15:26:04 · [#50380281](https://news.ycombinator.com/item?id=50380281)

Work: Claude Code with Opus 5.5

Personal: Hax harness (https://usehax.dev/) + cheap models on DeepInfra (https://deepinfra.com/)

**leofree** · 2026-11-05T15:33:44 · [#50380407](https://news.ycombinator.com/item?id=50380407)

Less is more with these new models and harnesses, IMO.

Claude code CLI on MAX plan with a few well-selected skills and craft claude.md, does the trick for 99% of the use cases I encounter.

Stopped OpenClaw and fancy setups after a few weeks each time. Simplicity is the ultimate sophistication.

> **nonethewiser** · 2026-11-05T15:59:48 · [#50380782](https://news.ycombinator.com/item?id=50380782)
>
> People love over-thinking working with agents. Usually it ends up with creating more work for yourself and gimping the agent.

**yewenjie** · 2026-11-04T16:07:06 · [#50367582](https://news.ycombinator.com/item?id=50367582)

1) Only ChatGPT Plus at the moment cause I'm between jobs and couldn't justify all the subs. Grok gave me three months at $30 when I tried to cancel so there's that too.

I wanted to really keep Claude but ChatGPT voice mode is too good tbh and no other comes close. I wish I could use Opus 5.5 for coding.

2) OpenRouter PAYG, mostly for experimenting with Chinese models like Deepseek and GLM, usually for stuff that Codex or Grok refuses to do.

Had been looking into NEAR and Venice for completely private information processing (like emails) but haven't set them up yet.

3) Codex, and OpenCode as harnesses basically.

4) I really wish I could decide on some agent orchestrator without trying them out for weeks. I like my tools highly powerful and trying to find recommendation for this online is hopeless because it's full of opinion from people who never used a terminal before.

5) Grok Bot for running experiments with supplements, calory tracking etc.. Tried to set up Hermes a couple of times but hated it every time. Just gave Rakazo a try yesterday and still hating it.

Gosh, I dream about the time when you could look at a github repo and make a decent guess about the quality of the software.

**chasd00** · 2026-11-05T15:21:22 · [#50380233](https://news.ycombinator.com/item?id=50380233)

I use plain vanilla claudecode with the desktop app on auto with opus. It’s not complicated or special but it works fine for everything I do. My job pays for my work subscription but I have a personal one that’s $20/month that also works just fine. Sometimes I run out of tokens but not that often. I’m also a dad and husband so it’s not like I spend all my free time in front of the abyss of dancing colors (laptop) so ymmv.

**TheArcane** · 2026-11-05T07:04:16 · [#50376062](https://news.ycombinator.com/item?id=50376062)

I have both platform.deepseek.com (hooray off-peak pricing) and the $100/m Claude subscription and boy do I find myself mostly using DS-flash pretty much every time.

There's something to be said for the speed with which it gets word done - I take fewer "it's compiling" breaks, and lose my train of thought less frequently. What's crazy is that the speedy work it does is pretty much always correct - which is a reason why I don't feel the need to spin up claude-code and "ask the expert".

This speed & good-work combo is the DS signature IMO

For my harness, Deepseek Harness + DS-4-1-flash combo is almost too good to be true

**Aozora7** · 2026-11-05T00:23:45 · [#50373351](https://news.ycombinator.com/item?id=50373351)

I subscribe to OpenCode Go when I have a personal projects I need to work on. It's by far the best value since it's only $10 and I doesn't run out of its five hour limit in an hour they way Claude Code/Codex do. Models are more than good enough.

At work, I'm using Codex with the subscription they give me, and I don't really have anything to complain about.

I don't bother picking obscure tools and heavily configuring them since almost all of the intelligence is in the model, and models themselves improve so fast that any complicated setup will be obsolete in a few months. All of the useful behavior just gets trained into the models, and all useful functionality gets added into every harness very quickly.

I'm not using any personal agents since I don't see any use case.

**techman001** · 2026-11-05T08:45:54 · [#50376778](https://news.ycombinator.com/item?id=50376778)

INTERNAL: Local Agent on PC via PI Coding agent OS / kernel Arch Linux, 7.2.11-zen1 CPU AMD Ryzen 5 5500, 6 cores / 12 threads GPU 2 × RTX 3060 12 GB (24 GB total), driver 615.78.08 RAM 62 GB DDR4, 3 GB swap Model Flash-Next (IQ3_XXS, 75.8 GB) Context: 65,536 Prefill - long prompt: 732 t/s Tokens per second output: 53 Uses: Advanced embedded design, testing and coding

EXTERNAL: Deepseek-V4-Flash on Opencode via Deepseek.com with prepaid Tokens Usage last 30 days: $4.37 USD Uses: Application building for Flash-Next above.

1. None 2. see above 3. Opencode and PI 4. no 5. no

**itsdavesanders** · 2026-11-05T14:17:59 · [#50379352](https://news.ycombinator.com/item?id=50379352)

1 - I have a $200 Claude and a $100 Codex ($200 of that is paid for by my job)

2 - I generally run everything through openrouter. I've tried local models, but with subscription pricing it doesn't make sense for me to use local most of the time - though I do use local specialty models for Whisper and Chatterbox

3 - If I'm using Codex or Claude directly, I'm using the desktop apps. The apps are MUCH more useful than doing everything on the command line now.

But mainly, I'm switching to my own harnesses via my own agent factory.

4 - My own, called Workforce, which include general agent tasks + a lot of focus around code agents. (Workforce has agents that build and deploy Workforce, for example.). It also provides containers to agents for some bit of containment.

5 - My own... the same Workforce.

My main use cases are code and running a personal assistant I'm building called Clara. Its very similar to what a Hermes would do, but its all built exactly the way I want.

And that's my advice to everyone - don't use off the shelf agents and try to understand how they work - build your own and make them work how YOU want. There is nothing magical about OpenClaw and Hermes, and you can bootstrap one pretty quickly with Opus 5.5 now...

Edit: I should probably have said, my use case is software development - we're a consultancy that builds mainly back-office systems for customers - so I'm "coding" or having agents code 8-10 hours a day, and then my own projects after work. I just about make it under the $200 Claude plan limits though as I add more and more agents, that's going to get uncomfortable.

**dewey** · 2026-11-04T16:04:15 · [#50367546](https://news.ycombinator.com/item?id=50367546)

I'm currently using https://www.conductor.build/ for working on multiple projects at the same time with git worktrees and my Claude subscription. The annoying part is that if I have a frontend repository and a backend repository I have to tell each session "talk to this workspace to adapt the backend" if I'm working on the frontend. I wish they had better support for multiple repos in one session.

Separately I'm evaluating https://ampcode.com/ which is very polished, but I feel like the diff-reading part is not very prominent there which I find a bit odd. After watching many of their videos I feel like that's because they are opinionated on this not being necessary any more as the models are good enough. I kind of agree, but still like to give it a last glance before committing.

> **l9o** · 2026-11-04T16:24:13 · [#50367876](https://news.ycombinator.com/item?id=50367876)
>
> Claude Code (and Codex too I believe?) can message other sessions these days. I just run one session per repo and they talk to each other directly when the frontend needs something from the backend and vice versa. This has removed most of that back and forth for me and eliminated the need for orchestration tools.

> **shepherdjerred** · 2026-11-05T01:16:45 · [#50373785](https://news.ycombinator.com/item?id=50373785)
>
> I ended up just making a monorepo because it makes using AI agents so much easier.

**prashantbista** · 2026-11-06T15:07:02 · [#50393227](https://news.ycombinator.com/item?id=50393227)

I am paying for Claude (pro plan) only but use the free limit of codex and opencode whenever my subscriptions run out. No I am not using models outside of other subscriptions. Currently I prefer to use claude code in terminal and we are building an ADE for our team. We are developing our own ADE because of large number of task running in parallel and less visibility of whats going on in the task.

**Northernator11** · 2026-11-06T11:59:51 · [#50391332](https://news.ycombinator.com/item?id=50391332)

Codex $100- daily driver

Claude $20- gives me the supreme intelligence for when I need it.

Codebuddy pro about $10 Excellent for free and a variety of models and amazing value.

Grok bot had a deal on and I got it for like $30 for three months and is shit hot for applications for jobs, emails all kinds of cool shit.

I use free instinct bot too and I ran it against grok bot to find if it would find better deals and it did most of the time.

**JheisonMB** · 2026-11-05T22:02:25 · [#50385108](https://news.ycombinator.com/item?id=50385108)

I use a Claude Pro subscription for orchestration with Opus 5.5, and for everything else, I use OpenCode Go and Command Code GOAT. It’s good to have a variety of models; cognitive diversity is useful for agentic patterns involving adversarial validation. I’ve compiled the agentic patterns I use here: https://graphs.univerlab.org/patterns.

In total, I spend 40 USD. I also take advantage of all the available free tiers: OpenCode, Kiro, Codex, Antigravity, Kilo, Vibe, Cursor, CodeBuddy, Devin, and FreeBuff.

That’s for my personal use; for work, I’m provided with 10K AI credits for GitHub Copilot and Codex Pro.

**brabel** · 2026-11-05T07:50:00 · [#50376352](https://news.ycombinator.com/item?id=50376352)

At work we have both Anthropic and Copilot subscriptions, plus Google AI as it’s included in our business plan anyway. I have personally been using the Claude Code Desktop App and was happy with it until they made it harder to pick a branch for each worktree! Which is why I tried JetBrains experimental agent IDE, ThinkRail, and I love it! Super easy to start worktrees from any branch and the spec driven development experience they promote is great!

It also let me connect to Requesty for my hobby projects and with that I can easily try any model, from any provider. That gave me a much better appreciation of how models perform, how fast and how costly, thanks to Requesty’s super awesome dashboard which is a pleasure to use.

I was only using Opus 5.5 before as I wanted the highest quality, but using smaller models you can get much faster work, and the difference in price is dramatic. I have now settled on Haiku 5 for simpler things, it’s nearly free while being really smart still, and for big things I use Opus 5.5 still but also Google Argon 4, it’s incredible as well and it seems to write more human text than Opus.

We also have a framework that lets us launch Claude (we could use any harness but for now only Claude) in our Kubernetes cluster within a devcontainer. That lets us ship heavy work off to another machine so our laptop is not overloaded with agents. It works great but we are not open sourcing this framework yet so I cannot link for now. There are some alternatives out there but most of them are out to make big bucks instead of providing a small but powerful solution for this problem.

**rcgeorge23** · 2026-11-05T07:30:09 · [#50376216](https://news.ycombinator.com/item?id=50376216)

I have had a $20 codex subscription. I initially just used codex cloud but more recently have been using opencode with the open chamber ui over the top of it.

Codex usage limits have really gone down hill so I also now have a $10 opencode go subscription on which I pretty much just use DeepSeek 4.1 flash. I’ve found DS to be a great model - probably somewhere just below GPT 6.1 Sol but at a fraction of the price.

In terms of workflow, I discuss features with chat gpt (because it’s free and it has access to my project’s repo, read only view of prod logs etc, so can make informed decisions). Once we’ve agreed on how a feature should look I ask it to create a spike github issue. I then get another agent in opencode (usually DeepSeek flash or Luna) to break it up into implementation tickets.

When I’m ready to build the feature I can give open chamber a list of tickets to work through using the task plugin, so each ticket gets a fresh context. I try to build directly on the main branch and try to ensure we can always deploy to prod even if a feature is half finished (using feature flags etc to switch it off until it’s ready).

Once a feature has been implemented I get GPT Sol 6.1 to do exploratory / regression testing with a real browser against a test environment. This usually teases out a lot of edge cases I hadn’t considered and also gives me a chance to improve usability etc.

It often takes a few iterations of this (exploratory testing, fixing issues that are found, exploratory testing again…) before a feature is ready to release.

I can’t believe how far things have come since August 2025 when I first tried out codex.

**alentred** · 2026-11-05T16:04:08 · [#50380849](https://news.ycombinator.com/item?id=50380849)

My work is mostly just Claude Code and Codex, but always in a Docker Sandbox [1]. I find it almost the only reasonable way to run the harness safely, never run those on my laptop directly.

I am now working on reproducing a similar setup in a cloud VM + LXC, as opposed to running it on my laptop. The idea is to be able to spawn and provision disposable VMs with some automation and let them work in the background without a need to keep my laptop on `caffein[at]e`.

OpenHands [2] seems like an interesting solution in this setup, too, but I am not yet sold on it.

[1] https://www.docker.com/products/docker-sandboxes/ [2] https://www.openhands.dev/

**mnahkies** · 2026-11-05T07:51:21 · [#50376357](https://news.ycombinator.com/item?id=50376357)

I'm using a cli I wrote to orchestrate per-project VMs for sandboxing using libvirt with COW shared golden images to minimise the disk overhead. The VMs get "rebased" periodically onto new golden images for the rootfs, but keep a persistent home FS for longer. I'm going to clean-up the documentation and open source it at some point soon.

I was using oh-my-pi, but currently playing around with Hermes as an alternative.

Exclusively using open router at the moment, mostly on principle around ZDR, and freedom to experiment with harnesses - but financially I'll probably have to compromise on this soon. GLM, Kimi and DeepSeek are the main models I'm using, with some OpenAI usage.

Tmux for remote access and session durability. I'd prefer to find a setup where I could access the same session through a web interface and seamlessly switch back to TUI, ideally spawning sessions through a web hook or similar. I'm going to take a look at Hedr to see if this can improve this.

Probably the two major things I'm planning to do next are looking at adding a bifrost VM that will hold all API keys, and centralise management of MCP configuration, potentially use it's skill repo stuff as well.

I also want to start controlling egress more - probably iron proxy, though tbh I'd like a solution that was relatively liberal whilst still mitigating exfiltration and prompt injection risks. Maybe I can find a curated allow list to use as a base.

Finally, I make a lot of use of open-webui, but it's disjoint from the agentic setup currently - it'd be nice to find a better way to share information/research from it into the agentic sessions.

**big-chungus4** · 2026-11-05T06:07:44 · [#50375773](https://news.ycombinator.com/item?id=50375773)

I use free models in opencode, mainly DeepSeek, but it turns out my laptop can run Qwen3.8 flash next at 60 tok/s via Strata. So I mostly use Qwen now in a customized version of pi. But when I need the GPU to be free, I have to use free models in opencode. I don't use any orchestration - free models don't have high enough limits for that, and local model has only 1 conversation cache slot, more won't fit to my RAM

> **potamic** · 2026-11-05T08:33:25 · [#50376670](https://news.ycombinator.com/item?id=50376670)
>
> What are your laptop specs?

**noahbp** · 2026-11-05T04:46:44 · [#50375312](https://news.ycombinator.com/item?id=50375312)

1. Claude Ultra. I've never had multiple subscriptions from the same provider, though that has looked more attractive lately as I

2. Yes: I often have personal tasks that Claude refuses to do, so I have to use Deepseek-v4.1-flash or GLM-5.3. I typically stay with OpenRouter, but I've found a discount provider that offers a 2/3 discount and have migrated to them. The catch is the data is probably sold, but given that it has saved me $300 this past month for non-sensitive work (game decompilation), the tradeoff is worth it.

3. Claude Code for Claude. I used to use OpenCode for my API usage, but there are too many issues which have gone unfixed and too many weird issues that I became tired of working around, so I switched to Oh my Pi. I'm not a fan of it either, so before my next big run with open weights models, I will probably rewire Claude Code to use these Chinese models.

4. Claude Code's subagent feature and workflow (subagents, but queuing up >200, and running 8 at a time) are sufficient for my needs. I had Claude build some bespoke workflow orchestration tool for managing many OpenCode agent instances, but it is a single shell or Python script that is essentially the equivalent of Claude Code Workflow.

5. I don't have a use case for them, so no.

> **moehm** · 2026-11-05T10:25:52 · [#50377473](https://news.ycombinator.com/item?id=50377473)
>
> > so I switched to Oh my Pi. I'm not a fan of it either
>
> I haven't used many harnesses. What's your issue with omp? Genuinely curious.

**virpo** · 2026-11-05T12:49:18 · [#50378479](https://news.ycombinator.com/item?id=50378479)

1) Claude ($100) + Codex ($20) seems to be a sweet spot, with Codex being able to generate images and do reviews of Claude's code

2) If I want to do, say, summaries at scale, I reach for Gemini 3.5 Flash Lite

3) CMUX with folders per project + Stream Deck that shows me which agent has finished :)

4) Just Opus 5.5 orchestrating its subagents

5) Hermes. I find at least one 24/7 machine with agent running, that you can reach from anywhere to be worth it. As your personal assistant.

(shameless promotion) Many people here are looking for tips on how to improve their setup. I asked my agent to go through my setup, put it into 100 tips and tricks and to let anyone's agent go through their setup and see if there are any good ones that they haven't tried yet.

So give your agent this: https://virpo.io/levels and ask it to see if there are some tips you could try.

> **j3g6t** · 2026-11-05T13:08:16 · [#50378651](https://news.ycombinator.com/item?id=50378651)
>
> +1 for Claude $100 paired with Codex $20 - feels like the right balance of capability/cost/availability [in terms of usage windows] right now.
>
> Amusingly I was a $200 codex plan person not that long ago but Tibo's month of resets made me feel like I was wasting my money so I've just been ratcheting down...

**totalhack** · 2026-11-05T12:41:30 · [#50378415](https://news.ycombinator.com/item?id=50378415)

I use the Local harness in vs code with a GitHub copilot max plan. Gives access to the best models from OpenAI and Anthropic (I use 6.1 sol, Astra, and opus 5.5 for most things). The Local harness has granular keep/undo and nice interface in general for reviewing changes, which is important for mission critical code. Unfortunately the copilot team is trying to force the less capable, more YOLO-mode "copilot" harness on people going forward. The community is somewhat getting them to walk that back but they seem to be missing the mark on what differentiates their product until people complain.

I also use chatgpt desktop for some tasks through a chatgpt teams/business plan. I briefly tried to set up codex cloud and it was a mess, not following startup instructions so I gave up.

**deskamess** · 2026-11-05T00:12:17 · [#50373255](https://news.ycombinator.com/item?id=50373255)

1) Home - Claude $20, Gemini web, ChatGPT web. Work - Claude $200.

2) No.

3) Claude Desktop (home/work). Cut and paste when using Gemini or ChatGPT

4) No

5) No.

Claude Code Desktop on Windows: I like it. Simple UI that I started using about 2-3 months ago and have grown with it. Multiple sessions, virtual groups for sessions, etc. I can see my manual workload of managing things is getting larger so I want better project tooling. Some of the default selections tend to stick with what you selected first and I dont like those aspects (new sessions seems to default to your original/first session folder - so we need to clean that up or create some built-in /new-session skills, etc)

However, what I really want now is voice integration without having to click on the speaker icon and talk to it (or a way to keep the speaker icon depressed) . I want the ability to get off my chair and away from my screen and talk to it. This part is easy, I think, and would be a good start. To close the loop I would like to hear the feedback. However... getting the responses to have a 'conversation modality' instead of a 'verbose text modality/Claude speak output' may be a bigger challenge. The workflow will never be 100% display free. But if we can get the audio aspects worked out, projection could be to a pair of smart glasses (XReal, Apple, Meta, Google) - activated only when needed (read something or see a UI design, etc) and then pushed aside.

Anyone one have a minimal keyboard/display approach working for them?

**resiros** · 2026-11-05T13:35:01 · [#50378890](https://news.ycombinator.com/item?id=50378890)

I have two Claude subscriptions and a ChatGPT subscription + Openrouter (mainly deepseek)

I mainly use Agenta ( https://github.com/agenta-ai/agenta or https://agenta.ai ) as my main setup [disclaimer I am the founder].

It allows me to:

- Build agents to automate parts of my work as a founder (inbound outreach, product analytics, executive assistant, seo, build->test->qa loops)

- Build automations on schedule (last days signup analysis for instance, or following up with contributors)

- Use my subscriptions for the agents + deepseek for simpler tasks, and switch between codex/claude/pi

- Integrate the agents into Slack and Telegram and share them with my team

**kbbgl87** · 2026-11-05T04:45:25 · [#50375302](https://news.ycombinator.com/item?id=50375302)

I have a $1k/month subscription from cursor for work. depends on the task priority, complexity I select between opus 5.5 and auto (grok). I'm an escalations engineer

pay-as-you go on openrouter. use latest DeepSeek or Gemini.

I created my own minimalist/task based harness that checks out a jira issue, downloads attachments, runs sandbox docker containers with configurable gh/local repo as volume mounts depending on jira labels, can load agent instructions from local/remote depending on jira type (triage-bug, dev task, reproduce-bug, security) has scoped/temporary access to targets (e.g. dev k8s cluster, aws/gcp/azure account, ssh, splunk). dynamic secrets loaded from external secret management system/env vars. since a lot of the corp repos are littered with skills, rules and other crap that bloated the context, I also set enabled a way to ignore repo/org agent instructions.

I have 2 repos for storing my personal/corp agent instructions and I 2 separate harness configurations.

**crisopolis** · 2026-11-05T10:21:27 · [#50377449](https://news.ycombinator.com/item?id=50377449)

I've had the Claude Ultra tier for awhile and sometimes dabble in Codex. I also use OpenRouter for model access within the project not to build it.

When it comes to harnesses/orchestration I flip flop between raw Claude Code and subagents to my new favorite, OpenRig.

Where I have two rigs (Teams) which are Product and Engineering. Each of these rigs have seats for a model harness such as Codex or Claude Code. My product team is a Product Lead, Product Spec Reviewer. Engineering team is Lead, Dev, QA, Review. They send messages between themselves resolve Gitea Issues, open PRs.

And more or less yes, it's a software factory (I know I'm not gonna need it) but it's fun. I only talk to leads, mostly the Product Lead.

Use case I'm trying to build a SaaS with an Agentic core within the Staffing Industry.

> **mschwarz** · 2026-11-05T22:42:38 · [#50385555](https://news.ycombinator.com/item?id=50385555)
>
> Hey this is mike from OpenRig. Just wanted to mention this sounds like a good rig setup. On my saas projects I've done with openrig, I start just like this too.
>
> Something I found really helpful for saas was a dogfood rig. It tests it as different kinds of user personas. Having a mix of blank slate agents (new user) and persistent agents (returning user) is nice. The persistent agents remember why things are as they are without having to look everything up and their feedback is generally much better than a blank slate user. Vercel's agent-browser has a good skill for this, it will find stuff I would have never thought to test myself.
>
> That feedback is sent to a pm-intake seat, who checks it against the roadmap, etc (missions/slices). The product-lead will then talk to you about it. If they are creating a lot of feedback, something like a daily digest will keep it manageable so you can approve/deny in bulk. It might require a bit of tuning at first but at some point your confidence might be high enough that you just auto-approve entire classes of findings and only flag things are major product changes.

**Zambyte** · 2026-11-05T02:41:48 · [#50374449](https://news.ycombinator.com/item?id=50374449)

1) Kagi Ultimate. I don't use any subscriptions for agentic coding, just search. I evaluated using Perplexity Pro for a while, paying for both subscriptions at the same time for a few months. I find it hard to describe the experience of using Perplexity Pro beyond making me feel physically ill when I used it.

2) I primarily use Qwen 3.8 flash q2 on an R9700 with 4x256k context. I also have some Openrouter credits as an escape hatch if I need it (usually to work on my local AI configuration, sometimes to speed up certain tasks).

3) Pi[1] with a suite of extensions and context files that I have built out myself for the most part, with a few external extensions. One of the main external tools that I really like for coding is openspec[2]. I switched to Pi from Codex because I liked the minimalist philosophy behind it, and because at the time I was using a 7900 XTX (which is now my primary desktop gpu, and I also use for auxiliary services like whisper and decision models), and I was having a hard time getting 100k context with any reasonably useful model. The default prompts of Codex ate into that a lot, and Pi was a much better match for the resources I had.

4) I use Herdr (tui)[3] to manage Pi agents. All agent to agent interactions that I do are ad hoc. I'll do things like tell an agent to spin up work in several other Herdr panes that I have opened with Pi in them, or I will do things like tell an agent to inspect the work of another agent and make sure that it continues to stay on task.

5) No.

[1] https://pi.dev/

[2] https://openspec.dev

[2] https://herdr.dev/tui/

**ruduhudi** · 2026-11-05T05:56:49 · [#50375705](https://news.ycombinator.com/item?id=50375705)

My biggest improvement lately was a cloud vm. I start it when I start working and shut it down when nothing is running which makes it fairly cheap.

On there i run claude code and codex via ssh and zed‘s ssh connection feature to take a look at the code where necessary.

I map a range of ports so I can take a look at previews.

Agents just continue running when I close the lid.

> **2ero_wf** · 2026-11-06T00:08:24 · [#50386408](https://news.ycombinator.com/item?id=50386408)
>
> I am building this domain, and the cheapest available you can find on the internet per GB of RAM, native ssh, port sharing, a lean agent development environment on top. If you are interested, i'd like to invite you to be a beta tester. would you be interested?

**zexias** · 2026-11-06T08:51:27 · [#50389805](https://news.ycombinator.com/item?id=50389805)

I use Paseo with Claude + Codex and Opencode Go. I have a jev classifier on top that select models for some implementations that are more flexible about quality. Created a couple of skills that match what I expect. Paseo helps keeping everything organized and one place, which is easy to review the process and incrementally improve the things.

**allen-munsch** · 2026-11-06T03:05:12 · [#50387654](https://news.ycombinator.com/item?id=50387654)

1) None, pay go deepseek v4 pro 2) N/A 3) My timeline has gone aider, MetaGPT, gemini, pi, claude, claude, pi, dirge, nodecode + dirge, nodecode + dirge + deepseek superagent harness 4) deepseek superagent harness 5) yes

As far as setup:

I use a regular old VM with qemu and a shared drive via virtiofs, and ssh.

My ABSOLUTE rule is NO KEYS IN THE VM.

I then ssh config debian slim dhcpd to a custom DNS pointed at a container running AdGuard like a pi hole with a custom guest-install.sh script, and some helpers which make it easy for me to add hosts, or targets.

I have a small .deb file i scp in, and install my tools and harnesses

and then i tunnel ssh -L or ssh -R services in and out of the vm

If I'm feeling swanky, i setup an apiKeyHelper to shuffle short lived tokens

**SftwareRenderer** · 2026-11-05T03:28:00 · [#50374774](https://news.ycombinator.com/item?id=50374774)

I'm locally hosting variants of Qwen and Gemma 4. I've also tried inference services such as baseten and novita, but wasn't satisfied with inconsistency in performance and pricing.

For software dev, I primarily use my own harness/orchestrator (that I shared recently), and sometimes Pi. I switched away from Cline + VS Code primarily because code is being generated so fast that I needed to optimize for review.

My harness is modeled similar to my day job: dev team works on stories, tracked on a kanban, and I'm a code-review gate. For example I scrutinize control surfaces, but instead of reviewing the implementation: I skim it and ask questions.

Every now and then I check to see if other harnesses have what I'm looking for, but none seem to have a combination of:

- Strong sandbox - Particular UX (for mobile, code-review, basic IDE, and task management) - Code checkpoints - Great compatibility with local models

**fzxu22** · 2026-11-05T23:15:52 · [#50385925](https://news.ycombinator.com/item?id=50385925)

1. For heavier works im using deepseek v4.1 flash and pro, I also have z.ai coding subscription but probably trying to move away from all of these because:

2. I just got a M5 Max 128G mac studio and self-hosting models now. I did some benchmarks on some potential setups, but currently I’m settling with the Qwen series models (3.8 27B/Flash Next for better intelligence, 3.5 35B A3B for spead), serving with MTPLX. Compared to API providers they are slower and has less context length, but enough for most of my use cases. I am exploring routing solutions between self-hosted and API providers.

3. Mostly Pi (oh-my-pi for main coding env, bare bone pi for drop in usages). Its small footprint is really important for self hosted models

4. I don’t think so, I do have a nanoclaw setup a while ago and am trying to port it to use pi as driver and connect to self hosted models.

5. No, they’re never to be trusted.

**ddarolfi** · 2026-11-05T14:35:51 · [#50379596](https://news.ycombinator.com/item?id=50379596)

My main personal agentic workflow is hermes. I have an old desktop set up as a homelab. One VM is a dedicated Hermes VM. I use Openrouter for the LLM, mainly deepseek flash v4.1. The agent has restricted access to my Nexcloud, Github and the Proxmox VE / Proxmox PBS servers. I can specify its access, so it has read only access to some of my nextcloud, and my Proxmox Server for monitoring, and a Nextcloud folder it can write to.

As I continue to use this setup it continues to get better, which is my favourite thing about hermes.

**mgiampapa** · 2026-11-05T01:05:45 · [#50373698](https://news.ycombinator.com/item?id=50373698)

1) Claude Pro $20/mo (I'm retired now and just playing on personal projects)

2) I have API usage via Together for a number of toys I have built for my kid, I probably could refactor this but it predates getting a Claude Pro subscription.

3) Claude Code letting it do the work, pure vibes and dropping to vstudio as needed.

4) No

5) Muse, I have it doing things like basic research, waiting on ticket windows and just being a personal assistant. It also does a really good job at scraping churning forums and blogs and has made a few thousand dollars in the last month just on bank and brokerage bonuses. It does all the record keeping and I just sanity check the dates, hold periods and do the account opening / transfer work. I'm eager to see Anthropic's take on this space and hope it uses the same Chrome integration. Muse's biggest flaw is that it runs it's browser actions from a datacenter instead of a local host and a real browser.

> **Kuyawa** · 2026-11-05T01:26:51 · [#50373866](https://news.ycombinator.com/item?id=50373866)
>
> Being retired in the age of AI is the best, all the time in the world to play with what really interests us plus an incredible assistant to squeeze every optimization path to productivity. Apps developed in minutes instead of months is like adding another century to our lives. And we are just starting...

**ChrisRR** · 2026-11-04T16:08:59 · [#50367618](https://news.ycombinator.com/item?id=50367618)

These comments read like people just bragging about having multiple AI subscriptions but not actually giving any info about what they're using them for

> **platevoltage** · 2026-11-05T00:22:12 · [#50373335](https://news.ycombinator.com/item?id=50373335)
>
> I can't for the life of me figure out why people need to spend so much. Maybe I'm just using them wrong.

> > **saulpw** · 2026-11-05T01:29:59 · [#50373887](https://news.ycombinator.com/item?id=50373887)
> >
> > I think a lot of people/companies are using 10x the tokens for 10% improvement. If you're willing to spend a modicum of attention/effort looking at what the bots are doing, one max Claude plan with Opus and occasionally Fable is very effective.

> **DIE_DIE_DIE** · 2026-11-04T16:12:53 · [#50367673](https://news.ycombinator.com/item?id=50367673) · _dead_
>
> They don't use them for anything worthwile. These are low-IQ AI retards.

**rbehrends** · 2026-11-05T13:36:56 · [#50378907](https://news.ycombinator.com/item?id=50378907)

1. I have a $20 ChatGPT subscription and a $10 OpenCode Go subscription. This is more than enough for my personal use. While my preferred model is currently Sol, I intentionally rotate through different models to ensure that I don't get into any model-specific habits that may not work in the future.

2. I very rarely experiment with local models, and then only out of curiosity, not for any actual work, just to see what they can do within the limitations of my Mac Studio with 32GB of memory. I do not use any API offerings.

3. I primarily use Zed and JetBrains IDEs (Zed has overall better agent support, JetBrains still has by far the better IDEs). I only rarely use terminal clients; IDE integration is something I consider essential for most of my work, even if both Zed and JetBrains have their limitations, they're better than the raw CLI experience. I should also add that at least for personal stuff, I still frequently write code by hand, where IDEs also come in handy. Skill atrophy is a real risk. Fun example: When doing leetcode problems (for fun and as a mental exercise), I may use an agent to generate test cases beyond the official ones and do spoiler-free reviews of my solutions.

4. I don't use any orchestration tools. Almost all my work with agents is interactive, and the rare occasions where I let agents do stuff autonomously – such as a one-off script or quick visualization – don't require a complicated setup, just a precise enough prompt or spec (which I will usually construct interactively beforehand if it's non-trivial).

**flaburgan** · 2026-11-05T11:58:53 · [#50378106](https://news.ycombinator.com/item?id=50378106)

I use the Zed IDE with Opus 5.5 pro subscription. I use to have access to Fable with the max plan and I miss it, despite what everyone is saying I still find that Opus does weird things. Just yesterday I pointed it to a queue suddenly being twice slower to be processed in prod. A select SQL query called thousands of times per minute became slower because of a data increased. Opus proposed several non trivial ways to optimize the query by forcing some execution plan. I just kept the result in a variable for one minute, as the data don't change often. x1000 perf with 3 lines of code. I would have expected it to say that this query didn't have to be executed that many times in the first place. It codes well when you tell it what to do, but it is still dumb about what is the real problem (and so the real solution). That's worrying me a bit because Opus 5.5 clearly is SOTA, so better than any open weights models, and I really want to be able to run smart models locally on my laptop for independence and privacy reasons. So, if I still find Opus dumb now, when will I have an open weight model better than 5.5 that can run on my Ryzen 7 AI 350 with its Radeon 860m and 32GB of RAM? ... This summer with all the releases of DeepSeek and Qwen I was hopeful I could have it for Christmas, but it looks like I will have to wait much more...

**tinyhouse** · 2026-11-04T16:16:40 · [#50367744](https://news.ycombinator.com/item?id=50367744)

For personal work. I use Orca.

1. Claude Code with $20 Claude subscription. This used to be a terrible value but now it's a great value, probably because of the IPO. I do a lot of coding and other things and I rarely get close to my weekly limit. I mostly use Opus 5.5 medium. Codex with gpt used to be good value but recently I canceled it cause I kept reaching my limits.

2. When I want a "different pair of eyes" to review things I'm working on with Opus, I use Pi with other model providers and just pay API prices.

3. Deepseek harness with a deepseek API key. Really great value.

4. I have a Muse $5/month subscription that I keep as a backup although I don't really need it.

I also use cloud agents to setup reoccurring jobs. For expensive agent runs, like visit 5000 websites and extract something from each, I would set up something cheap with an agents sdk and for the model use either Muse, Deepseek, or GPT-6-luna using their batch API.

I maintain all my dotfiles and agent files / context in a github repo so that I can switch easily between harnesses and providers.

**strangelove026** · 2026-11-05T01:59:50 · [#50374135](https://news.ycombinator.com/item?id=50374135)

https://github.com/seanturner026/f

There’s an excalidraw in the reader

My manager described this as incomprehensible lol but it’s modeled on conductor but uses Claude code terminal and mods and glues a bunch of open source stuff with a cli I had Claude write. Herdr for sessions, nvim for code review / searching, cli invoked by /slash commands. Beads cli for task tracking. With multi repo support since I end up doing a lot at work across repos at work for a “feature” which is how I delineate chats now. And I’ve got a nice picker for swapping sessions so screen real estate isn’t wasted. Many incremental improvements the sum of which are compelling ime

**cpobuda** · 2026-11-05T15:50:23 · [#50380633](https://news.ycombinator.com/item?id=50380633)

OpenCode + DeepSeek V4.1 Flash 1017 and IFM K2 Horizon 7B with speculative decoding via custom inference engine (MLX).

Helyn Implement for coding, I work on design and specification, agentic protocol handles coding, testing, automated testing, and reviews (multiple models), process works extremely well. Enables fast iteration cycles since most issues are diagnosed in design and specification and we don't start coding until the specification is unambiguous.

From it's agents.md - Helyn Implement 3.1 defines a seven-phase software implementation protocol (project setup; research & design; design philosophy with a Subtractive Genesis Gate; performance analysis; test planning; implementation with a bug-hunter panel; security review; performance verification; QA; release readiness; and periodic project sweeps). Each phase runs an internal creator↔reviewer "quality loop" governed by the Cockpit Landing Model, where a phase is either CLEAR (GREEN) or DISCREPANCY (RED) — never a numeric score — and reviewers must be fresh-eyed and independently verify claims rather than trust specs, reports, or coverage numbers. Supporting discipline includes self-review on every fix, named (not numbered) items, explicit self-documenting signatures, and pruning artificial machinery when the substrate can enforce an invariant; a multi-reviewer panel and escalation protocol handle high-stakes or non-converging reviews, with cross-phase issue handling, findings disposition, and severity levels as scaffolding.

See https://helyn.com/follow-the-money for an example of how such a protocol works.

Currently developing a custom agent orchestration system to resolve difficult STEM problems with provenance, the type of problems that frontier models consistently get wrong.

**AiAi** · 2026-11-05T01:20:50 · [#50373811](https://news.ycombinator.com/item?id=50373811)

1) None.

2) Yes, trying different models and harnesses through many providers (free/trial). mimo-v2.6-flash, minimax-m3.1-flash, glm-5.3-flash, deepseek-v4.1-flash, gpt-oss:120b, nemotron-3.5.-super-vl.120b-a12b, and others.

3) Mostly eca.dev on Emacs, and Claude Code at work. Now trying the OpenCode one too.

4) No.

5) No.

**vidarh** · 2026-11-05T10:41:06 · [#50377579](https://news.ycombinator.com/item?id=50377579)

Claude (top tier), GLM top tier, Kimi top tier, Codex team w/logins for the whole family. On top of that Atlas and OpenRouter pay-as-you-go. I max out the Claude every week and the Kimi most weeks. GLM is my fallback and used for some of my simpler agents.

I'm using Codex, Claude Code, Kimi Code for different things, but most of my interactions now is with claw-like agents hanging off a self-hosted Matrix server in my VPN, and I expect to migrate pretty much all of my use to that setup because it's a lot more flexible. The agents have their own wiki for orchestration and increasingly I feel complex orchestrators are already becoming obsolete because the agents are good enough at self-organising with very little around them.

I don't use any of the agent platforms you list as it took a Kimi agent about half an hour to build something small and auditable that handles what I want it to do and load-balances/fails over between several providers for the backend.

They handle my finances (read-only), acts as a general assistant (and reads my e-mail), plan out my projects, manages my soon-to-launch podcast setup, runs several websites autonomously. The only reason they don't do more yet is that getting security right without kneecapping their usefulness is still a really hard problem.

**lintbrush** · 2026-11-05T13:41:22 · [#50378946](https://news.ycombinator.com/item?id=50378946)

Claude Code (Opus or Sonnet) via Herdr with probably 4 or 5 things going at once but at different levels of urgency. Mostly I'll be working on one thing (and maybe two git work trees of a project?) and then then have some other research or analytics task going.

We're a non-profit and Anthropic actually has quite nice pricing for teams licenses so I can do most of what I need in a day within the team "Nonprofit Premium" allowances without paying for extra usage.

I have MCPs connecting to Asana (for bug/task tracking) and Looker (for reporting and analytics) but otherwise the setup for each project is just its own GitHub repo and the occasional local skill (eg one that understands common Looker data patterns for our setup or the wacky history of our Archive).

For longer batch tasks or our automated systems we're using various models through Bedrock so I can track it with the rest of our AWS spend and that's been working quite well.

I'm experimenting with Opencode and Openrouter/Bedrock. If Claude Code didn't exist I would think Opencode was a miracle from heaven so it's a nice backup Anthropic pricing gets unweidy.

**rglullis** · 2026-11-05T08:46:12 · [#50376782](https://news.ycombinator.com/item?id=50376782)

Personally: I have a XTX7900 card which can run some decent models, eg, Qwen 27B and Gemma. For bigger stuff I have the Ollama Cloud subscription to access (mostly) GLM. I have a server with OpenWebUI, and for harnesses I use OpenCode, but I have been experimenting with pi.dev to create a workflow that takes the ideas from the Rational Unified Process (RUP) so that everything gets properly documented and reviewed by a human before getting to the implementation phase.

At work: Claude Code subscription, mostly with Opus.

**itsloopyo** · 2026-11-05T11:45:59 · [#50378016](https://news.ycombinator.com/item?id=50378016)

1) Claude ultra. I ended up using 3 accounts in tandem for some big work I needed to do recently, but the other 2 accounts were only open for a month.

2) I have a cheap OpenAI sub I sometimes use codex on, but just for small tasks when I'm out of tokens on Claude

3) Lab - a frontend I made that let's me run loads of chats in a single UI, I get notified when they need me, if I turn off my PC and load it back up everything picks up where it left off. It'll run compound workflows comprised of multiple prompts+macros, and centrally manages all my agents/skills and MCP servers - they're associated with projects, categories of project etc and rolled out to everyone when changes are made.

4) Hivemind - another one of mine, hivemind's a small self contained binary that acts as a collaboration layer for the agents+me. I send messages to everyone, groups or individuals. They can also ping me and send me desktop notifications if they need me urgently. I get a lot of mileage out of this where file reservations, resource locking etc are concerned. Stops them stepping on each others' toes.

5) No, 100% of my work takes place in Lab (with loads of Claude + Hivemind sessions under the hood)

**robviren** · 2026-11-05T16:25:44 · [#50381098](https://news.ycombinator.com/item?id=50381098)

Made my very own voice interface where I don't even need to look at a screen. Use a combination of my own bespoke g2p with kokoro, parakeet-ulta for ASR, hooks into claude code where each project gets it's own session. Had to make an Android app so the bluetooth headset multi-function button could trigger my "turn". I hate pre-emptive voice agents and getting the watered down voice agent stuff. So I have an intentional turn concept. I'd rather be patient and wait rather than get the dumb version of all the things I use.

I get full claude code, can use the official app for text interface, get to rant and ramble without a screen, and kokoro delivers a great consistency. I even added some tools for the agent to patch G2P lexicon when I hear something that sounded weird. Doing that was a bit pedantic but that is half the fun. So it is bespoke all the way down. Been loving it.

**nfriedly** · 2026-11-05T12:54:55 · [#50378530](https://news.ycombinator.com/item?id=50378530)

My day job has a Claude account, but for personal projects, I have been playing with different models and environments on my home server. My current setup is Qwen 3.8 Flash Next, Strata, and OpenCode/OpenChamber.

I already had a bunch of my projects on the server with with code-server (VS code in a browser) set up to access it, so switching between code-server and OpenChamber is just switching tabs.

However, I've mostly been managing it from my phone - the OpenChamber app is awesome. I still switch back to my laptop occasionally - it's a better interface for reading and writing code, and also the desktop OpenChamber app has a built-in browser that it can control, which comes in handy. I can bring up documentation in one tab, log into a service in another, and then tell the agent to do something. For example, this was how I got it to connect my Nest thermostat to my Home Assistant instance after I had tried and failed several times on my own.)

Oh, and separate from all that, I have Facebook muse set to automatically lower prices on a couple things I have on FB marketplace.

**alexfromapex** · 2026-11-05T01:35:06 · [#50373936](https://news.ycombinator.com/item?id=50373936)

I like using Cline the VS Code extension. It can use local models and local inference with Ollama and tons of external inference providers like AWS Bedrock, Vertex, etc. It asks for permission to read webpages or run commands. You can give it whitelisted permission to just read your files which is what I do. If you want, you can put it into ACT mode and give it permission to write to files but I avoid that. If you use something like Bedrock, it shows you how much the conversation costs. It works great with Claude for coding but if I'm doing something super small I might use a local Qwen or Gemma model.

**asim** · 2026-11-05T09:53:25 · [#50377263](https://news.ycombinator.com/item?id=50377263)

I have an open source grant from OpenAI so I use gpt 6 Astra light for all my coding stuff. I have a 3-4 pinned sessions which are 1 per project backed by a GitHub repo and deployed to a VPS where they will either use APIs for Claude, gpt6 or DeepSeek via atlascloud.

I previously had an open source grant for Claude and that was quite good as well. There is a sort of "just good enough" point that we're reaching where all the providers are on similar levels. Like cloud. Everyone reached feature parity with AWS. Now it doesn't matter.

I don't use Gemini. Google is great. I use AI mode in search for general knowledge stuff but honestly the thousand moving parts and unique ways in which their products break is annoying. I used to work at Google. They have amazing tech. But I came in through acquisition. I'm not a die hard engineer. I think they built from the ground up and everything is limited by the scope of the infrastructure. So they design APIs like that. Google itself was a single input box. Simple. But I think Gemini and the API needs work. They are going to do well as cloud infrastructure for enterprise. And their models will probably get widely deployed in all their own products.

**luisgvv** · 2026-11-05T15:23:39 · [#50380254](https://news.ycombinator.com/item?id=50380254)

1-Not personally paying, but do use them:

Client 1: Copilot - They provide up to $1500 in credits but I barely scratch $300 per month.

Client 2: Claude Code - unlimited usage, however I barely scratch $400 too per month.

2-Not using outside models or weird stuff

3-Answered above, default CLIs

4-Never got the time or seen how it's done. I think it's not that useful at least for me

5-Not using any of those, but grok bot looks promising

**fidelramos** · 2026-11-05T22:58:16 · [#50385740](https://news.ycombinator.com/item?id=50385740)

1) No subscription yet, but considering Claude Pro.

2) I use Venice.ai with its DIEM token, which gives me daily credits for inference that I can spend on any model at their API prices.

My main driver is DeepSeek V4.1 Flash 1017, which is cheap, good and (in Venice) private. For tasks that don't involve my personal information I might use Opus 5.5 and GPT Sol 6.1. Now that Kimi 3.1 Pro is out (and also private in Venice) I'm taking it for a spin.

3) Opencode (latest version)

4) No orchestration. Started using herdr, but it's an older version without orchestration.

5) Not yet, planning on Hermes running on my homelab but not deployed yet.

**gaoshan** · 2026-11-04T16:38:12 · [#50368106](https://news.ycombinator.com/item?id=50368106)

1. Personally? Claude monthly and I also keep money in the API service and slowly chip away at it with various apps and toys (I created a Fantasy Premier League app that does research and sentiment analysis as part of its runs and that costs money... but not much) . Professionally I use an unlimited Claude via AWS Bedrock.

2. I use both qwen 3.6 35b-a3b and qwen 3.8 27b on my Macbook Pro (M5 Pro, 48GB, 18/20). I use those with ollama and hermes (and Obsidian, to an extent)

3. Hermes Agent, Claude CLI and Claude in VS Code

4. No

5. Hermes Agent

I use a carefully curated selection of agents for my professional work. Agents to handle adversarial code review, planning, questioning, dev work, etc. I also have custom instructions for various repos that need them (where I can define things like repo norms that are not immediately obvious, data models where needed, etc.

**pentakkusu** · 2026-11-05T14:17:43 · [#50379350](https://news.ycombinator.com/item?id=50379350)

For me, it's 3 layered.

At my main job, I use company issued Copilot.

For anything else, I use ChatGPT Plus (the 20USD one).

And for personal agentic work, I put together the following a few weeks ago.

Mac mini M6 32 GB running oMLX Jundot/Qwen3.6-35B-A3B-oQ4e-mtp Hermes on my Celeron openmediavault NAS/homelab

"It ain't much, but it's honest work."

Next time I would splurge a bit more and buy a machine with more RAM.

> **bigfishrunning** · 2026-11-05T16:22:45 · [#50381059](https://news.ycombinator.com/item?id=50381059)
>
> > Next time I would splurge a bit more and buy a machine with more RAM.
>
> Sam Altman would prefer you didn't

**a-saleh** · 2026-11-05T08:50:40 · [#50376810](https://news.ycombinator.com/item?id=50376810)

Subscriptions: Personal: Claude Pro 20$/mo Work: we have access to some Anthropic and OpenAI models and open-weight models, like GLM

Outside: I have some open weight locally on my 64G ram M5 macbook, mostly for personal stuff that I don't want to send to cloud (or claude). Mostly using Gemma through oMLX, because it feels more street-smart than the more coding focused models, experimenting with Qwen-flash-next through Strata, because the streaming of experts really pushes what size of model I can run

Harness: Claude code, mostly, I trust anthropic, and like the remote integration with their mobile app. Being able to say "prototype me this and that ui" for personal project and seeing it and testing it on my phone is awesome.

At work for the api-provided llms, I am trialing opencode and pi harness, but don't have much to say, we mostly used claude-code up til now.

For local I mostly use Hermes, not for any of the big features, just because I want a nice chat interface (I am mostly talking through my health problems and trying to get my appointments in order) that already has basic tooling integrations out of the box. I.e. getting OpenWebUI have search tool was pain. Adding i.e. mcp for my todolist or calendar to Hermes was smooth.

**sebra** · 2026-11-05T10:41:26 · [#50377582](https://news.ycombinator.com/item?id=50377582)

I've vibed my own orchestrator. It's a nextjs UI launching headless claude / codex sessions and reacting to changes in gitlab and linear. It's tailored to my previous manual way of working. Auto-adressess CI pipe fails, rebases dev, reviews, etc. Also contains an explainer / code review UI where I can ask follow up questions. A typical ticket flow goes through a bunch of agents with different prompts to ensure the end result is something I'm happy with. The goal is as little manual intervention as possible.

My approach is to build the builder rather than the feature. So if something is off in the output I try to adress it through the orchestrator. Might lead to a bit overfitting but I feel like the results are quite good too far. Also really nice to be able to remove useless stuff with a single prompt.

Building a custom orchestrator for my workflow was quite easy. Like 1-2 weeks of prompting and now my work mainly consists of refining linear tickets in a claude / codex cli and then reviewing the completed MR on the other side of my orchestrator (through the custom GUI).

**egrm** · 2026-11-05T21:50:54 · [#50384963](https://news.ycombinator.com/item?id=50384963)

1)I own 2x claude, 1x codex and 1x gemini. Whenever i need more AI usage, i buy another claude (smallest plan) and then have a script auto alternate between them. This is because cheapest subscription gives most weekly usage per $.

2)no, you dont need an API key if you know how to use your subscription to replace it

3)I tried many; from opencode, warp, paseo, orca to openclaw, hermes, etc. I always end up returning to the default claude and codex.

4) kinda an orchestration tool, i have one to oversee my entire business (Varyz AI), it constantly makes content, fixes bugs based on feedback and etc (spawning agents to do so).

**voodooEntity** · 2026-11-05T08:15:56 · [#50376538](https://news.ycombinator.com/item?id=50376538)

For me the answer is twofold.

Regarding commercial solutions:

- Subscription: Google AI Ultra (testing for 1 month rn to see what i can get out of argon, after that probably going back to Pro package)

- Harness: Antigravity IDE : from what i have tested on commercial harnesses this one i liked the most so far

Regarding selfhosted solutions:

- Inference host: Im owning a 5090 and im running the models locally - mostly use qwen 3.8 27b q5 atm, its a bit "slower" even on a 5090 but it fits the vram i have available while also being quite good in terms of result quality

- Harness: I tested alot and ended up writing my own harness ( https://github.com/laughingmandev/loa ) since none of the ones i tested (yes i tested openhands, hermes, etc...) did work well for me. While my own harness still needs some enhancements, its especially made for long running / complex tasks while beeing hands off (not permanently prompt jokey'ing ) and sturdy enaugh to work well with selfhosted/local run inference.

I use the gemini4argon/google agent atm to work on a c++ simulation and image asset generation for a game im working on. The complexity of this stuff just is to big for a local qwen 3.8 to fully grasp (its not that good at c++ either). Local image diffusion also is not that great.

For other stuff of low to medium complexity im working with my own agent/harness/setup - especially if the data is anyhow security relevant since im not leaking anything outside. From writing scripts/tools to analyzing infrastructure or discussing architecture.

**wejick** · 2026-11-05T16:02:10 · [#50380818](https://news.ycombinator.com/item?id=50380818)

Say for the past 1 week there are 3 assistant claude, chatgpt, gemini, grok and kimi. With gemini and grok is the one I use for quick answer engine, claude and kimi is for long work related. Coding agent is mostly opencode + ds 4 flash/glm 5.3 flash, however with sonnet and opus being so good, my usage is leaning to claude code right now. I use zcode as well rarely, mostly for its bigger limit.

No claws or bot setup yet. However I'm experimenting with multi role multi agent setup on top of coding agent, it's not (yet) useful on my case.

As I'm using multiple coding agent, it affects how I manage the repositories. Making sure that it can run across different coding agent and different models. As this is so fast moving field, exposing yourself to many different tools is good things IMHO.

**alexfortin** · 2026-11-05T01:54:28 · [#50374094](https://news.ycombinator.com/item?id=50374094)

Models: I pay Z.ai a lite sub which costs me ~9USD/month and for the last months I've been using `glm-5.3-flash` amost exclusively for my day-to-day. I also make use of free models from OpenRouter for simple CI/CD automated stuff but very little so. When I'm out of sub tokens I fall back to DeepSeek credit. I keep my sub/credit usage public at https://a.l3x.in/usage

Harness: when building/troubleshooting I use https://pi.dev TUI most of the time, the rest of the time is via an issue/PR driven workflow also powered by Pi with this action I built on top of its SDK: https://github.com/shaftoe/awesome-pi-coding-agent/

My general take on AI at https://a.l3x.in/ai

Generally speaking, I think I can hardly be happier than what I am already, the quality of open weight models is incredibly good and the only upgrade I could think of is being able to run one on my workstation one day (I don't even try on my Macbook Air M1), which isn't something crazy to dream about, perhaps in 2/3 years running Deepseek v4 Flash or similar model locally won't require too much of an investment in hardware.

> **alok-g** · 2026-11-05T03:53:20 · [#50374962](https://news.ycombinator.com/item?id=50374962)
>
> How often on do you hit the limits with the plan? Thx.

> > **alexfortin** · 2026-11-05T06:24:07 · [#50375856](https://news.ycombinator.com/item?id=50375856)
> >
> > It depends very much on the project I'm working on, but recently I almost never run out of tokens before the weekly quota (which seems to be the tightest for me) resets.
> >
> > I also use some discipline in not letting the context grow too much and usually keep every session very focused, context window fill rarely goes above 10% for me as I prefer to start fresh (perhaps from some markdown artefact saved from a previous session).
> >
> > If you're used to throw every possible thought to an agent than most probably a light Z.ai subscription is not going to be enough.

**diseasedyak** · 2026-11-05T15:21:21 · [#50380232](https://news.ycombinator.com/item?id=50380232)

1) I pay $20/month for Nous model access, and spend an additional $20-40/month to Google for Gemini model API access.

2) My main daily driver is Deepseek 4.1-Flash. For bigger coding projects, Argon. I run a local Qwen 3.6-27B quantized to 4-bit so that it fits comfortably in my 4090's VRAM, using this for any easy things that can be done locally. Also have local ComfyUI + Flux + some LoRAs for image work.

3) I exclusively use Hermes

4) N/A for anything I do

5) Yep, just Hermes, for months now, never going with anything else as I love how it works.

- I'm mainly using all this stuff for local projects. For instance, I recently bought a Flydigi Apex 6 Pro controller, but I game exclusively in CachyOS so I had Hermes write my own custom app for controlling haptics and such. I'm also working on a game in Godot, generating pixel art locally.

**grishka** · 2026-11-05T13:44:20 · [#50378976](https://news.ycombinator.com/item?id=50378976)

I don't use AI. At all. And honestly, I would like it gone for everyone. The world would be better off without it.

**catketch** · 2026-11-05T16:50:13 · [#50381382](https://news.ycombinator.com/item?id=50381382)

1 year ago: Claude & openai subs, cli/tui only

6 mo ago: same subs, mostly Zed as baseline thread / worktree manager using ACP to drive cluade/codex. Some use of the cluade/codex desktop apps directly as their dx has gottne better

today: still zed as a base rather than relying too much on anthropic or openai tooling, but rapidly increasing use of Amp, including their orbs (vm) and local runners

I like the direction in particular Amp is taking -- it was a tougher sell 6-8 months ago because you couldn't bring your own subs, but that is now longer a barrier

I toyed with a bunch of other things... openclaw, gas town, munder difflin etc, but mostly for toy experiments and tyring to keep ahead on what techniques/approaches might start breaking through.

**GoodFriday** · 2026-11-05T15:05:52 · [#50380005](https://news.ycombinator.com/item?id=50380005)

I have a $20 Claude Code and a $10 Opencode Go for personal use. Work pays like $150/month for Claude Code use there. Like in another comment I put A LOT of context in Obsidian and agents log their work there.

Workflow-wise I just have a small GTD-ish setup with lists for inbox, todos etc and a couple of paragraphs describing how I want the coding process and troubleshooting processes to be handled.

The bulk of my instruction set is about communication style, since the defaults give me hives from the sticky tone and burnout from the sheer amount of words in the output. All of it works to keep answers short, to the point, sticking to technical details and absolutely no linguistic decoration or polite stuff. The most effective line I have in my Agents.md is to answer me like a Vulcan rather than a human.

**linsomniac** · 2026-11-05T14:24:21 · [#50379431](https://news.ycombinator.com/item?id=50379431)

There are SO MANY custom orchestration schemes here (which is great; I am working on my own).

Do you see people consolidating onto a few commercial/open source factories, factory features getting built into Claude Code et al., or are custom orchestrators easy enough now that they're likely to be the future?

> **SOLAR_FIELDS** · 2026-11-05T14:30:00 · [#50379514](https://news.ycombinator.com/item?id=50379514)
>
> All of these gas towns and no one running evals to compare to the vanilla harness. AI is very good at making one feel like they are being productive

> > **linsomniac** · 2026-11-05T14:42:56 · [#50379686](https://news.ycombinator.com/item?id=50379686)
> >
> > The warp.dev one, according to the demo video, makes it easy to set up tests of different workflows and generate the typical quadrant plot of different configs. About a third of the way down the page at https://www.warp.dev/

**joddystreet** · 2026-11-05T15:11:33 · [#50380092](https://news.ycombinator.com/item?id=50380092)

1. AI subscriptions- Codex (Pro), Ollama (Max), Copilot (for Zed autocompletes)

2. N/A

3. Coding harnesses - Codex, Pi. (Switched from claude code)

4. Just codex, no agent swarms. When starting a new module - focused work, one issue, one agent, one project. For smaller tasks/minor issues - multiple parallel sessions, within codex or pi.

5. N/A

**ontouchstart** · 2026-11-05T03:14:56 · [#50374705](https://news.ycombinator.com/item?id=50374705)

I use a nix one-liner to run llama.cpp on M5.

``` nix run nixpkgs#llama-cpp -- server --models-dir models -m models/gemma-4-12B-it-Q8_0.gguf --port 8080 ```

open http://localhost:8080.

I also run pi in a docker container to do some vibe agentic coding. But I prefer `cat flake.nix | pbcopy` and paste into the browser. Then I can export the jsonl files and use tools to convert them to md and push to GitHub Pages.

I can do most of AI sessions off-line and only need hotspot to sync with GitHub.

My main use case is to learn and hack nix on Mac. It is fun.

**2001zhaozhao** · 2026-11-05T00:35:26 · [#50373432](https://news.ycombinator.com/item?id=50373432)

1) 3x Claude Ultra subscriptions and $20 tiers of Codex/Cursor/Gemini, the latter three mostly for multi-provider testing and Google's bundled cloud storage. I basically only use Opus xhigh, but never touch Ultracode.

2) No. The subscriptions are too much value compared to API. If i were to start using any model on API, the first one I'd consider would probably be Inception Mercury 3, for the 1000t/s speed.

3) I use my own custom kanban agent management tool named Kotkit, which I have been developing since March. It has a built-in multi window desktop which I can use from my phone as a PWA.

4) I am currently building orchestration/swarm capabilities into my tool. Currently adding multi-agent deep research and code review workflows orchestrated by my tool, so that they are cross-provider and my agents can trigger these on demand, as well as experimenting having one agent complete an epic ticket on the kanban board by orchestrating task agents (this is all wired up so AskUserQuestion and ExitPlanMode, etc. on the task agents are answered by the main agent, and if the main agent is unsure, it delegates to me). Currently doing it on a >20-task code migration epic with a lot of success.

5) No. AI is not yet good enough at long-term planning for these to be useful for real work. You have to build step-by-step up to it. These agent platforms are good for simple personal tasks, but to use them for actual work would be skipping a lot of steps.

**Primer81** · 2026-11-05T22:14:47 · [#50385251](https://news.ycombinator.com/item?id=50385251)

I use self hosted Open WebUI + open terminal instances on my development machines + DS Flash 4.1 + my own custom OWUI plugins for various things like per chat access grants for the open-terminal instances, per chat git credentials for traceability, and another plugin to enable inter-chat communication. Couldn't ask for more at this point. Been burning billions of tokens per week for maybe ~20 bucks thanks to how cheap Deepseek is with token caching for a wide range of development tasks.

**sim04ful** · 2026-11-04T16:28:17 · [#50367941](https://news.ycombinator.com/item?id=50367941)

I've been increasingly interested in language-oriented programming and denotational design. So i get claude to create a domain specific language in Racket modelling the software i'm trying to build, we create nouns and verbs whose meaning fits the behaviour i'm going for, then when we find bugs or notice we need more exceptional (less-elegant) one-off behaviour to tackle edge-cases, we iterate on the language in such a manner that it these are tackled emergently with preferably less concepts, more cohersion and composition. It's somewhat similar to how memory safety is handled at compile time in Rust but for business logic.

> **metajack** · 2026-11-05T04:33:22 · [#50375222](https://news.ycombinator.com/item?id=50375222)
>
> This sounds really neat. I'd love to see an example.

**thefunnyman** · 2026-11-05T01:54:18 · [#50374090](https://news.ycombinator.com/item?id=50374090)

$DAY_JOB gives me GitHub Copilot with generous limits so I use GitHub Copilot CLI. We're a Microsoft shop so that dictates some choices too.

My workflow is a windows terminal app with multiple sessions running under wsl2 in each pane since LLMs seem to do better with bash than PowerShell. I don't trust these things much so I've got a careful list of read only tool calls and filesystem sandboxing set up so it can do some useful stuff like read my task board and publish draft PRs without a ton of overbearing permissions prompts.

I usually chat with that for a bit on a task until it's plan sounds good then I have it spin up a Docker Sandbox microvm under Windows so it can safely run yolo mode and make all it's changes. When it's ready I carefully review and iterate on the result until it's ready to publish the PR.

Bit kludgy but strikes a balance of safety and multitasking I'm comfortable with. IME most folks don't think much about isolation so curious to hear if anyone else has a similarly isolated but better workflow. I'd like to try OpenShell instead of docker sbx but it lacks microvm support for windows and I don't want another layer of nested virtualization since my windows machine itself is a cloud VM.

Work also gives me access to GHCP for personal use so I use it for side projects too. Idk what I'd use if I had to pay out of pocket, probably something a cheap Claude plan. For noncoding personal use I mostly just use free tier Gemini. If this stuff ever slows down I'll invest in some GPU nodes for my homelab and run local models.

> **thefunnyman** · 2026-11-05T02:06:21 · [#50374189](https://news.ycombinator.com/item?id=50374189)
>
> Our token budget is also high so honestly I don't plan much. Mostly just throw work item and as much related context I'm aware of at whatever is the latest decent model (opus for a while and lately gpt sol) and let it do its thing. If I were more budget constrained I'd plan more up front and delegate bits to cheaper subagents I suppose.

> **imafish** · 2026-11-05T07:43:51 · [#50376308](https://news.ycombinator.com/item?id=50376308)
>
> I do basically the same. Have multiple Docker sandboxes where I let agents yolo.
>
> Must say I don't really love the setup. The workflow is not as frictionless as just opening Claude Code used to be.

**shantnutiwari** · 2026-11-05T09:37:23 · [#50377144](https://news.ycombinator.com/item?id=50377144)

I was on ChatGpt, the lowest paid option, but stopped it after they started putting ads in

Moved to lowest paid tier of Gemini, and liked it but it kept ignoring my instructions and putting in auto playing youtube videos (which also got saved to my youtube history). This pissed me off, after trying everything I just cancelled it

Currentrly on paid plan of Mistral. Not bad so far.

**bantex01** · 2026-11-05T08:40:54 · [#50376733](https://news.ycombinator.com/item?id=50376733)

1. claude pro, ollama pro and opencode go 2. Openrouter for testing 3. I use VScode and claude code 4. I've actually built my own for agentic workflows - https://vectorstep.io 5. I use openclaw for my personal stuff, VectorStep for proper trusted workflows (and production workflows)

**entrope** · 2026-11-05T00:52:22 · [#50373589](https://news.ycombinator.com/item?id=50373589)

For local inference, DS4.1F 1017 quantized to 2.25 bpw from oh-my-pi; this is slow (~500 tps prefill, 30 tps decode) because it's a Radeon R9700 on PCIe4. When I don't need local inference, Opus 5.5 reviewed by GPT-6.1 Sol in VS Code, both $20/month. Mostly I use them to build small analysis tools because I am not really an individual contributor any more. I used to hit both my session and week quotas frequently, but that is much less common since Opus 5.5.

**siliconc0w** · 2026-11-05T16:57:33 · [#50381456](https://news.ycombinator.com/item?id=50381456)

Pretty boring with ChatGPT Pro, ghostty, CLI harnesses, and vscode if I feel like looking at the code.

If it's a brand new app I will design with the agent up front to make sure we're capturing everything and it is actually driving toward a specific outcome or else it can wander into 'productivity porn' territory where it's just creating reams of reports, plans, or 'evidence packs' and nothing real gets implemented.

I used to use a lot more sophistication in my workflow and skills and I still do use a few (impeccable is great for de-sloping design) but they've gotten a lot better at breaking down a plan and building without that.

**jlgarhdez** · 2026-11-05T14:39:36 · [#50379643](https://news.ycombinator.com/item?id=50379643)

IDK how shareable it is but what I've got now is:

I manage everything from claude's native app.

I have a self built app in my mac, called Karajan, that knows Orca (onorca.dev) state of all my running agents, and is connected to GH and Jira too. Karajan exposes an MCP for claude native app to start, stop, and review other agents. Karajan also exposes a kanban like interface for me to know what's going on.

Under karajan is onorca.dev as a terminal multiplexer, mostly. It also provides agents state and whatnot, but mostly a terminal multiplexer.

Finally, as agents, I use Opus 5.5 for implementations and Sol 5.6 for reviews.

My interface with all tihs is claude native app because It provides nice things such as routines, computer use, etc. so it works kinda as a driver for everything.

**wombat-man** · 2026-11-05T16:19:57 · [#50381009](https://news.ycombinator.com/item?id=50381009)

I have Claude code and some gemini capacity from a Google One subcription.

For my home projects, I generally use Claude Opus. If I'm coding I run claude CLI. If I am chatting I just use the web or the phone app.

I don't know how much it matters but I use fable for big picture planning discussion. This costs some added money, but I switch back to Opus to use quota for coding.

No swarm tools... I sometimes add a skill or an MD file to the repo to keep context through compaction.

Haven't tried OpenClaw, not really sure what the value add there. The bottleneck is me understanding what code is going in and I don't think I want a ton of code I don't understand being added while I'm afk.

**biggestriverman** · 2026-11-05T08:19:45 · [#50376567](https://news.ycombinator.com/item?id=50376567)

1) 2x Claude Max 20x + Chatgpt Pro 2) I dabble with open-code and hermes especially to try out the free models. 3) I use vanilla claude with an orchestrator on top 4) https://github.com/mhalstrom/maximizepm 5) I use Hermes. - I use hermes as a "free" agent platforms as you can easily connect your chagpt sub and claude max plans come with api usage you can hook up. In my website https://app.toolscaled.com/docs/agents/how-agents-work/ instead of re-implementing agents and paying API costs you can hook up your automations to push to hermes, claude routines or chatgpt's equlvalent essentially getting agents for free which you can then incrementally convert them to workflows.

**amterp** · 2026-11-05T02:49:39 · [#50374498](https://news.ycombinator.com/item?id=50374498)

1) One 5x Claude sub, one pro lite codex sub

2) Not really, the value proposition on the subs are just so much greater.

3) I'm using Claude Code and Codex, crucially thru Muster[0] which I've been working on. It's a herdr inspired Libghostty-powered terminal which understands agents you're running, helps you manage them, supports remote devenvs, and it provides a CLI for agents to spawn, work, and message each other, no matter the harness and across machines.

4) I'm working on my own factory atm, which combines Muster and Kan[1] which is a offline, Kanban-as-plain-files-in-VCS project I'm working on and happens to work really well with agents. I recently added card dependencies to Kan and a kan ready command so I can have director agents orchestrate and hand out tasks based on what's ready and prioritized in Kan.

5) Not at this time. I played around with dots but I haven't been convinced it can do anything for me that my own solutions aren't better at.

[0] https://github.com/amterp/muster

[1] https://github.com/amterp/kan

> **alok-g** · 2026-11-05T03:48:42 · [#50374919](https://news.ycombinator.com/item?id=50374919)
>
> >> [1] https://github.com/amterp/kan
>
> Nice! I am guessing the intended use is on developers' own machines, not putting on a server and live co-editing in a team meeting. Pls. let me know if I have misunderstood. Thanks.

> > **amterp** · 2026-11-05T04:38:09 · [#50375253](https://news.ycombinator.com/item?id=50375253)
> >
> > Yeah intended use is in every dev's own checkout of the given repo, on their own machine.

**CBLT** · 2026-11-04T15:57:17 · [#50367434](https://news.ycombinator.com/item?id=50367434)

I'm currently on Raven as a sort of "meta harness". The main chat is with the orchestrator, which delegates all work to other harnesses. I just use different seat-based plans. Mostly the latest Sol with my corp chatgpt account.

I get a lot of value from having an LLM to talk to LLMs for me. It can automatically set up adversarial reviews from other ecosystems, or just prompt the implementation LLM to adhere to certain standards. My goal is to have fewer touch points when implementing. I want to speech to text a paragraph or two giving "taste" to the process; everything else is just toil.

> **yewenjie** · 2026-11-04T16:25:34 · [#50367901](https://news.ycombinator.com/item?id=50367901)
>
> What is your experience with Raven or such meta-harnesses, does it consistently outperform vanilla?

> > **CBLT** · 2026-11-04T16:49:39 · [#50368268](https://news.ycombinator.com/item?id=50368268)
> >
> > I get the same "one-shots" from the vanilla codex as codex under raven. It took some work to get the orchestrator to send good refinement prompts, and it still doesn't have good taste. I need to bring that with my own review of the code. If you notice you send a lot of repetitive refinement prompts it's worth it.

> **futsy** · 2026-11-05T03:09:30 · [#50374666](https://news.ycombinator.com/item?id=50374666) · _dead_
>
> Same here on the speech part. I've got bad RSI in my forearms, so most of my prompts get talked into Claude Code rather than typed, and these days I'm faster dictating than I ever was typing. I should say I made a dictation app called Vibe Typer, so I'm biased.

**bitforger** · 2026-11-05T00:20:51 · [#50373322](https://news.ycombinator.com/item?id=50373322)

1) Claude Ultra (aka Max 20x)

2) No

3) Claude Code

4) Custom WIP https://muster.town/

5) Custom personal agent setup https://github.com/mitchellgordon95/miniclaw

Usage is mainly wiki building around personal info (finances, topics of interest), calorie counting, and doing various things from my dumb phone (rideshare booking, checking MTA Bus schedules, etc.)

**hosteur** · 2026-11-05T10:16:16 · [#50377417](https://news.ycombinator.com/item?id=50377417)

I use claude and deepseek APIs together with Jetbrains IDEs such as PyCharm.

In the IDE, I install the KILO plugin to use as harness.

I use the Jetbrains Remote IDE feature to code remotely on a cheap linux VM at a cloud provider.

On the remote VM, I have a git repo per project that I open with the remote IDE.

The way I code stuff is to create a separate worktree for each task/prompt and let the agent run at it.

The IDE and KILO plugin lets me watch the progress of each agent and open the chat with each to provide input, instructions, etc. as well as review code changes, perform tests, etc.

I did switch harness at some point because I previously used Cline which was dog slow and unstable.

I do not use OpenRouter or anything like that.

I have dabbled a bit with local models on my MBP M3 but with 24 GB RAM, the models I were able to run were both too slow and poor quality.

My setup is probably hopelessly suboptimal.

I would love to get feedback and hear if there are obvious low-effort improvements.

**Jabrov** · 2026-11-05T01:54:52 · [#50374096](https://news.ycombinator.com/item?id=50374096)

At work:

Opus 5.5, fast mode, xhigh/max reasoning, ultracode as needed. Usually 5-8 agents going at any given moment. In-house frameworks for Claw-like workflows and agent orchestration.

At home:

Cry

> **exilonium** · 2026-11-05T02:36:44 · [#50374419](https://news.ycombinator.com/item?id=50374419) · _dead_
>
> Probably the most honest answer here

**Arubis** · 2026-11-05T01:41:04 · [#50373985](https://news.ycombinator.com/item?id=50373985)

$200/ea plans on Claude and Codex, plus OpenCode Zen for experimenting with other models, plus Qwen3.8-28b locally. (I test-drove DS4 Flash locally in a 128GiB MBP for a while, but the tokens per second were too slow to be useful for more than being a toy.) At my prior anchor client I had an additional max20 plan; at my current anchor client they have a teams plan.

I use both Openrouter and OpenCode to get Kimi, GLM, big Qwen, etc, but not at great scale. I have a security product that consumes API tokens that I built against Opus 4 when that was the strongest available; when I get around to it I’ll likely shift it to prefer GLM or Kimi, slightly for cost but mostly for non-refusal.

I spend a lot of time in Claude Code because it’s the only Anthropic subscription-friendly harness. Additionally use OpenCode and codex. Not much time spent in pi these days. I used Aider before Claude Code’s beta. Claude Code’s plugin framework is pretty decent, so I tend to stand up a repo of custom plugins against every client repo I work with. It’s a nice efficiency layer for me up front and often grows into a bonus client deliverable after a couple months of refinement.

OpenClaw runs persistently, mostly for little calendar tasks and trying to mitigate my ADHD: energy level check-ins, redirects to use attention for things that matter. It orchestrates Hermes under the hood but I don’t interact with the latter directly.

I still mostly just use tmux directly and tell running sessions about each other, sending messages to each other via text files or send-keys/capture-pane. Herdr is installed but mostly unused. The GUI clients aren’t my thing; I’m a born console junkie.

What I really want to change next is pulling this all back into emacs.

**gabriel-uribe** · 2026-11-05T10:58:36 · [#50377705](https://news.ycombinator.com/item?id=50377705)

1) Claude x1 $100, Codex x1 $100, Cursor x1 $20 (adversarial review), OpenCode Go x1 $10

2) I have a locally hosted Qwen model setup, but I only use that when I'm offline which is rare (eg long flight)

3) Claude Code, Codex, OpenCode, Cursor (most rare now). I use default IDEs generally. I also run prompts from my phone via connected Codex/Claude iOS apps.

4) Just the native orchestration in CC/Codex (my larger projects include subagent prompts)

5) Atm, just OpenAI's dot. I used OpenClaw for about a month 6 months ago, but realized that the features would be done & better by the labs, so gave up and ported my work to Claude Cowork at the time.

Main use case is orchestration for my life & my projects. Manages email, tracks todos/deadlines. I could see the use cases growing with time as they add integrations + I trust it more.

**anigbrowl** · 2026-11-05T05:05:27 · [#50375427](https://news.ycombinator.com/item?id=50375427)

Deepseek/Deepseek Harness with about 30 plugins and a lot of customization. I tried IDE integrations with Jetbrains for a few months and hated it. Now I enjoy juggling 3-4 projects at once. Costs maybe $20/week. A lot of jobs you can work at for a long time with little cost because there's a 99% cache hit rate.

Sometimes I despatch it on open-ended tasks that I'd never take on otherwise; for example I have a little fleet of 10 agents digging up medieval Japanese Buddhist parables, translating them from scratch, and feeding them into a custom interface optimized for language study.

Most of the time I give it a moderately detailed description of the scope and key/unique features I want in a new project, and it banks on work from previous projects to know what sort of deliverables I want, track and review its own mistakes etc., then I steer it from a rough prototype into something more polished. I find it equally useful for coding/application development and research/synthesis tasks.

> **gaewagwgawa** · 2026-11-05T05:16:11 · [#50375487](https://news.ycombinator.com/item?id=50375487) · _dead, flagged_
>
> "medieval Japanese Buddhist parables, translating them from scratch, and feeding them into a custom interface optimized for language study."
>
> wow how utterly useless. we are destroying the planet for this? disgusting. you disgust me.

> > **vessenes** · 2026-11-05T05:20:31 · [#50375512](https://news.ycombinator.com/item?id=50375512)
> >
> > Please refrain from ad hominem attacks here on HN. Or really, anywhere.

> > > **e5uhehrdhdrh** · 2026-11-05T05:23:34 · [#50375534](https://news.ycombinator.com/item?id=50375534)
> > >
> > > dont use words you dont understand.

**wj** · 2026-11-05T13:47:51 · [#50379016](https://news.ycombinator.com/item?id=50379016)

1. $20 tier for Anthropic, OpenAI, and Google.

2. Use OpenRouter for some agentic work and for using GLM 5.3 for some security reviews.

3. Mostly the model harnesses (desktop apps for business and personal tasks and cli harnesses for coding). Use pi with openrouter.

4. My thesis is that one-time work (creative, coding, etc.) is different than on-going repetitive work--the work of the back office. I've built a platform for the latter specifically around centralizing agents while decentralizing orchestration. (https://sleeperservice.io/)

5. Waiting on a Duet invitation. But Dots is interesting to me. Use Gemini with Gmail to some extent.

**julesrms** · 2026-11-05T14:01:10 · [#50379165](https://news.ycombinator.com/item?id=50379165)

I'm on a Claude and a GPT plan, with occasional Deepseek, GLM and other models for testing.

I work on cross-platform apps, so need to run things on a PC as well as my Mac. To make it less faff to switch between them, I run Juggler (https://github.com/juggler-ai/juggler) on both. Juggler treats local and remote sessions the same way, so I have both machines set up with the same two windows, one for the PC and one for the Mac. That means I can move seats between them and have the exact same two windows controlling each machine wherever I am..

**enesalatas** · 2026-11-05T07:56:37 · [#50376390](https://news.ycombinator.com/item?id=50376390)

1) Claude Max 5x, ChatGPT Plus (for minimal usage of Codex, mostly fired as a Pre/Post PR hook for Claude Code to get reviews from GPT models locally

2) None for now.

3) Claude Code CLI, but not always in a terminal I'm sitting in. I talk to it on Telegram and Slack for different projects.

4) Something custom that grew into a project: Spool (https://github.com/enes-alatas/spool). It runs long-lived Claude Code loops, each with a name and a mission. Each one wakes on its own timer or when someone messages it, works, and sleeps, and the session resumes with its context. Each loop gets its own container with an egress allowlist, and they message each other and me in a Telegram or Slack group. A web control room shows what every loop is doing and what it costs.

5) No, Spool covers it for me.

**Reebz** · 2026-11-06T07:31:39 · [#50389282](https://news.ycombinator.com/item?id=50389282)

Little Linux server with: Orca IDE + Tailscale + 3x Claude code (builds) + Codex (reviews).

I run the Compound Engineering plugin as the primary work loop for both.

Orca is great, I can work anywhere.

> **iliyaoblakov** · 2026-11-06T09:13:35 · [#50389991](https://news.ycombinator.com/item?id=50389991) · _dead, flagged_
>
> Save each Codex verdict in a file named after the commit SHA it reviewed, and make the merge refuse unless the exact commit being merged has its own ACCEPT. My gate does the same for tests: the pass record is named after the commit and written only after a pass on a clean checkout.
>
> A new commit starts with no evidence, so an ACCEPT from an earlier commit can't cover code nobody reviewed. Codex reviews read-only and never fixes anything. Every fix from Claude Code lands as a new commit and needs its own pass and ACCEPT. My merge script also refuses while main has commits the branch lacks, and a branch rebased onto a newer main starts from zero.
>
> With three Claude Code builders pushing at once, how do you tell which commit a Codex review covered?

**smashed** · 2026-11-05T02:55:19 · [#50374549](https://news.ycombinator.com/item?id=50374549)

I am using mainly claude code on a Pro subscription.

I also have an OpenCode Go subscription, so I can keep an eye on the capabilities of the Chinese models.

Opus 5.5 medium for the vast majority of coding and code review tasks. I will sometimes save on tokens by dropping to sonnet if I have a well detailed plan built with opus.

I spend a lot of time on the design/architecture of features. These tasks are assisted by Gen AI but I still need to make a lot of corrections. It's my main bottleneck.

For orchestration and sandboxing I've used plain VMs (I have a make VM script which installs Claude in a fresh VM).

I've used Scion at work, which gave me a lot of ideas and got me excited about building a better orchestration, messaging, sandboxing and web UI thingy which I am currently working on (GitHub link in my profile).

My biggest pain point I wanted to address with my tooling is cleanly separating projects and accesses. I do a lot of web dev and sys admin stuff. I'm building Egzo so I can safely grant and monitor access to remote systems and cloud services and keep myself organized.

**jawiggins** · 2026-11-05T03:57:10 · [#50374982](https://news.ycombinator.com/item?id=50374982)

I use a tool I made that lets me orchestrate lots of AI agents (claude/codex/gemini) both on my laptop and on a k8s cluster. I set them up to run on various triggers and access them from my phone/laptop: https://github.com/jonwiggins/optio

**tegeek** · 2026-11-05T12:36:49 · [#50378376](https://news.ycombinator.com/item?id=50378376)

I've Kiro and Antigravity installed both are vs code but forked by Amazon and Google and brought their multi agentic coding environments. Then I installed Claude extention on both. I follow spec-driven approach (https://kiro.dev/docs/specs/) all agents are instructed to follow it strictly. When I plan sometimes I evalute all specs with Kiro, Gemini and Cluade. Each has their share of work and improvements, each spec in my case end up as requirments, design and tasks.md files. Most of the code is generated by Claude and Gemini Argon and its pretty solid.

**fbelzile** · 2026-11-04T15:58:29 · [#50367460](https://news.ycombinator.com/item?id=50367460)

1) None.

2) No.

3) None.

4) No.

5) No.

> **greenowl** · 2026-11-05T00:17:27 · [#50373297](https://news.ycombinator.com/item?id=50373297)
>
> This is the way

> **bitwize** · 2026-11-04T16:40:56 · [#50368145](https://news.ycombinator.com/item?id=50368145)
>
> watch_out_were_dealing_with_a_badass_over_here.jpg

**PAndreew** · 2026-11-05T11:38:11 · [#50377956](https://news.ycombinator.com/item?id=50377956)

1) Codex Plus (20 bucks) - find it enough even though I'm working on 3 small-medium size projects and occasionally helps out my wife

2) No

3) Pi

4) No, I think these are token burners and makes it practically impossible to track what's happening from a human side.

5) My own tool: <https://github.com/PAndreew/pi_group> - the main benefit is that it's multiplayer so it functions as a regular chat app in which you can invoke Pi in a group chat. This way the agent can have a shared context, but it still have all the features like generative ui, internal browser etc. that other bolted-on solutions like Claude bots in Slack do not possess.

**jvidalv** · 2026-11-05T10:38:19 · [#50377554](https://news.ycombinator.com/item?id=50377554)

At work I main Opus 5.5 on Claude Desktop app. I have joined my current job 2 months ago and I literally never opened any IDE.

Personally I own a Ultra plan on Claude and a 200 plan on Codex (400 dollars month).

I run them from their native desktop apps, no longer I use any terminal app to run them.

I have not opened a IDE for months now, any diff I need to check I use the Github PR.

In the personal level I use the agents for everything, basically the only thing that I still do on my computer outside of agents is consuming content like HackerNews, random forums, reddit or youtube. All the rest: sending emails, reading them, filling forms, configuring apis, submitting apps to stores ( run a couple of successful mobile apps), building them... Is all done by the agents on my behalf.

Crazy world we live in eh?

> **jorjon** · 2026-11-05T11:15:07 · [#50377814](https://news.ycombinator.com/item?id=50377814)
>
> Same here, I’m on Claude Ultra and Codex 100 plan. I mainly use Claude Desktop with heavy cloud usage, and Codex to avoid Claude restrictions. I’m even now starting to tell Codex to control Claude desktop, because Codex can create secrets, store them, etc, while Claude cannot.
>
> If there’s anything I need to track (medical appointments, discounts, etc), I just setup a schedule or create a service that I host on my local Debian server.
>
> When I’m out of tokens I’m giving Argon a try. Works surprisingly well for research.

> **siva7** · 2026-11-05T13:17:45 · [#50378733](https://news.ycombinator.com/item?id=50378733)
>
> Same. I've been claude code user since day one but also abandoned that terminal workflow completely. The tasks i'm doing are way to complex to manage inside a tui.

**vekker** · 2026-11-05T10:22:14 · [#50377455](https://news.ycombinator.com/item?id=50377455)

1) Subscriptions: Claude Ultra for coding and analysis (Opus 5.5 mostly, sometimes Fable for more complex questions) + ChatGPT Business (premium seat) for more allround tasks, although I now mix in Codex (Astra) too for reviewing work or if I hit a usage limit.

Also I have a Cursor Pro plan but I notice I'm not using that enough actually. Only for backup and for file-level changes.

2) Others: I have a DGX Spark running Qwen 3.8 27b (for confidential/sensitive work, narrow coding and narrow agentic work), but it's often running ComfyUI instead, with models like moss-image/minimax h3 for image/video asset generation.

I also use various APIs incl. OpenRouter, but only for production, user-facing agents.

3) Harness: Claude, sometimes Codex

I tried OpenCode, did not like it the CLI nor the results, as compared to Claude. I want to but haven't really tried Pi yet.

4) Agent orchestration: only custom tooling now, heavy user of Mastra for custom agentic workflows incl. production agents. Fantastic open source framework (not affiliated).

5) Agent platforms: Tried OpenClaw earlier this year, when it was such a hype. Did not like it. Every update something broke, and I spent more time fixing things than I got value out of it. Switched to Hermes Agent running on a Mac Mini (I know...), and I'm still using that for various Hermes agents for all kinds of agentic tasks on the go, and so is my wife.

#1 use case is capturing videos, podcasts, and posts online that I like, or meeting recordings, transcribing them with whisper, organizing them on my NAS, ... It will also distill skills from useful info I indicate, which are then pushed to my skills collection git repo.

#2 use case is website maintenance (pushing new blog posts etc..) for a family member.

#3 delegating work to Claude for coding on the go. I prefer to do this via my Hermes agent rather than the Claude app, as it has the full local context & tooling (e.g. iOS simulator, screen recording the end result and sending it to me when done).

**sigbottle** · 2026-11-05T17:57:18 · [#50382143](https://news.ycombinator.com/item?id=50382143)

I was trying some crazy stuff but at this point I'm burnt out and ironically, my job, which forbids AI, has gotten more exciting.

I think I really value the whole culture of knowing how things work, and AI has kind of killed that drive for me. I'm not a guy who needs to know the little bits of how everything works, but the specific things that I wanted to learn, I'm not feeling motivated either.

I might splurge on a local cluster of GPUs to just do crazy shit on. That might re invigorate my drive somewhat.

**mmulqueen** · 2026-11-05T14:55:14 · [#50379840](https://news.ycombinator.com/item?id=50379840)

1. Subscriptions: Claude Max - through my business, single subscription has been more than enough. 2. Other: Local models for non-coding agentic workflows. Mainly Muse Glimmer, some Qwen 3.8 27b and a little Gemma4 31b. Seriously thinking about shifting everything to local and using OpenRouter for anything that doesn't quite work - the next tranche of small models may tip the balance. 3. Tools: Claude's UI and Claude Code. Running Claude Code in my own sandbox (restricted VM per project with filtered network egress) 4. Orchestration: No 5. Platforms: No

**m_w_** · 2026-11-05T14:14:51 · [#50379312](https://news.ycombinator.com/item?id=50379312)

1. Claude Code (Ultra) + Codex (Plus) 2. Yes, but not for coding. In my experience Opus 5.5 is the only model I'd code with now, but other tasks (especially when not subsidized / part of product) use many other models. Latest deepseek checkpoint is very solid 3. CC + extensive config / hooks 4. Usually supervising myself w/ 5-6 sessions, if orchestrating more than that it's a hand-rolled swarm tool 5. Tried NanoClaw, and I have access to Claude Duet, but between getting on and off the waitlist for Duet, I hand-rolled a personal agent that does what I want.

**firemelt** · 2026-11-06T04:11:27 · [#50388077](https://news.ycombinator.com/item?id=50388077)

$20 claude code with opus 5.5 medium

before that I have $100 plan and have a hard timr to use all the quota I often doing useless things with that

never use anything else that is hyped like hermes or clawshits I find it waste of time without a grain of gain

**quiet_workbench** · 2026-11-05T15:20:02 · [#50380213](https://news.ycombinator.com/item?id=50380213)

1. I use claude/ codex and have used cursor and ollama in the past 2. I don't usually use any models outside of the subscription as the subscription seems to be a better value. 3. I use cli, claude desktop and codex desktop 4. Not rusing any orchestration or swarm tools. I'm curious how people are using these and for what? 5. Played around with a few of these. Main use-case is to just be a personal assistant.

One problem I do run into often is how everytime I switched between these tools, I constantly have to re-create my profile, context, etc.

**saiprasadr** · 2026-11-05T05:31:06 · [#50375575](https://news.ycombinator.com/item?id=50375575)

1) Subscriptions - None Using OpenCode BigPickle 2) Models - OpenCode BigPickle and deepseek v1 3) Harness - OpenCode as primary , but started liking Pi recently because of all the customizations 4) None 5) Played around with OpenClaw for a really long time , now been exploring the Hermes Agent

**mariofdistrust** · 2026-11-05T02:42:52 · [#50374455](https://news.ycombinator.com/item?id=50374455)

1) i use my brother's claude pro subscription. if i needed to, i would use openrouter + API if i didn't have his subscription, but i don't think i really need it. i've never purchased an ai subscription myself, nor paid my brother for his. i would never use frontier us models for anything serious on openrouter + API

2) yes, when claude starts getting too preachy and the task at hand is important to me i use openrouter + api + chinese models. my computer can't even run qwen 3.8 27b.

3) i use claude code because i think using other ones isn't allowed. i don't really like it, and generally prefer opencode (i've had to use it to do some things for my brother). i'll try using other ones though

4) no, and i didn't actually know they existed. opencode and claude code's agentic things are enough for me, though i don't do actually complex projects

5) no, i won't use them unless i get good local inference going (i.e. never).

**l9o** · 2026-11-04T16:33:14 · [#50368019](https://news.ycombinator.com/item?id=50368019)

My workflow has simplified a lot over the past year and I personally haven't seen a need for complex orchestration tools or the agent platforms like OpenClaw / Hermes.

Since agents can message each other nowadays, most of the time I just talk to one Opus 5.5 session (because of its 1M context window) and let it talk to all the other sessions, acting as an orchestrator that I use from the cli and the mobile app. I also have some of my agents reachable over IRC through a small CLI I'm building.

I subscribe to both Claude and Codex. Mostly at the top tiers, but I downgrade every once in a while based on how much I'm using them.

I don't use Codex directly as much, even though their harness has gotten a lot better and snappier over this year. Most of the time Claude is the one using Codex on my behalf. I was using this delegation workflow a lot until Anthropic fixed the word salad issues on Opus 5.5. Nowadays I mostly do it to load balance my token usage.

I also use locally hosted models (both via CUDA and MLX), but much less for coding unless it's for asynchronous tasks that I can't use subscriptions for. My main use case for local inference is privacy and tinkering.

I've also been building my own harness focused on security and privacy for the past year or so, but it's still a work in progress.

> **Sporaflow** · 2026-11-05T09:39:38 · [#50377166](https://news.ycombinator.com/item?id=50377166) · _dead_
>
> The problem in your case is that you depend on the orchestration the CLI gives you. And the state of the work lives in the session, not in your files.
>
> I built a tool so I don't depend on any CLI or its interface. I decide the structure. The CLIs hand back their work, and it doesn't matter which one it is or how it talks: my system keeps checking that every message is delivered and read, and that the work keeps moving. So I can easily run four different CLIs with GLM, Claude or GPT models, each in its own CLI or in another provider's.

**moezd** · 2026-11-05T11:55:04 · [#50378086](https://news.ycombinator.com/item?id=50378086)

I rotated over many LLM providers and tried out different harnesses, but I always come back to an honest Claude Pro subscription, plus the work account that gives me a GitHub Copilot Enterprise seat. I make sure to always have access to the agent, so it never runs on my laptop. I literally can't stand how GPT sounds confident and gets a crucial piece wrong every time. If I could afford the hardware, I would've probably set up a local LLM rig, but good ones that promise Fable-level inference are out of reach for me.

I haven't seen a lot of improvement by increasing the orchestration layers, honestly. Am I missing something?

**tgel0** · 2026-11-05T09:56:28 · [#50377290](https://news.ycombinator.com/item?id=50377290)

1) Google AI Pro (no-brainer for me since I'm deep into the Google ecosystem), OpenCode Go and this month I'm trying out X Premium (mainly because of Grok Bot, which I surprisingly like more than I thought I would). At my day job, I also have access to GitHub Copilot. 2) No, but I might try out DeepSeek's own API in the near future 3) My main setup is a Herdr instance hosted on a cheap GCP VM that I access via Tailscale. There I'm running Pi, Antigravity and Cursor via their default CLIs. 4) Nothing apart from Herdr 5) Hermes + Grok Bot mainly for non/light-coding stuff like digest-style monitors for different websites (such as HN), social media etc.

**Teyott** · 2026-11-05T13:11:28 · [#50378681](https://news.ycombinator.com/item?id=50378681)

I have a wierd approach to how I use AI... Unfortunately, I don't use any AI Agent, I use the free versions of all these AI for my personal use and research. they do a good job in explaining stuff. I have my personal team to work on several tasks instead of AI Agents. What I feel is that AI can never replace a human instinct. I might be wrong too!

All my codework and projects are built without any use of AI.

Haa, and once I had to use a Google AI API to integrate in one of my Projects... That's the only time I used it as an API!

If anyone feels that my approach is wrong or I should use any, please suggest me a good one!

**surajtripathi79** · 2026-11-05T04:20:01 · [#50375134](https://news.ycombinator.com/item?id=50375134)

1. Claude code, ultra plan, chatgpt go plan (India has a ~3$ plan) 2. Use pay as you yo openrouter with kimi2.6 for an api wrapper interface I have to work with my business APIs, connected to whatsapp. 3. I use opencode alot at my office that connects to a bunch of mixed models gpt-luna, claude. But prefer claude code, because (dunno if others feel it) opencode feels clunkier, and slow. I suspect that's because of the llm routing through my companies infra. 4. Have not made anything work, have tried GasTown, its horrible imo. Also, I think I am not able to trust the setup, and worry about token wastage (which cheaper models do more off when left unsupervised) 5. Open law - connecting with my personal calender, gmail, whatsapp, side gig infra - first responder for my business whatsapp for a slice of whitelisted interactions.

**rihegher** · 2026-11-05T15:23:31 · [#50380252](https://news.ycombinator.com/item?id=50380252)

1) using mistral pro $14.99 /mo paid by myself mainly to use hosted model GLM5.3.

using claude Team plan paid by my employer.

2) using Deepseek flash pay-as-you-go APIs mainly when I want a model that is responding fast and good enough.

3)

using claude code to use claude models.

using mistral vibe to use GLM5.3 and Lechonk models.

using Pi to use Deepseek flash.

- What made you switch harnesses (if you switched)?

I want things modular and open source and be able to replace anything in the chain of tools by better tools if possible.

4) I'm using herdr to manage agents session and clawpatrol to manage action approvals rules and credentials for agents to use external APIs

5) No

**mv4** · 2026-11-05T00:00:15 · [#50373135](https://news.ycombinator.com/item?id=50373135)

For building, I started with Kiro and later switched to Antigravity (Opus 5.5 for planning, Gemini 3.8 for implementation - but now using Argon for everything and quite happy). Claude for design.

Had a Hermes set up with a dual NVIDIA DGX Spark and Deepseek v4 Flash, but then built my own harness (getcinnamon.ai) and pretty much switched to that 100% including family members.

**lgunsch** · 2026-11-05T13:36:17 · [#50378899](https://news.ycombinator.com/item?id=50378899)

The somewhat novel part of my workflow, is after Claude has built something out, I have a second fresh Claude session review the code with a set of 16 custom questions. I've discovered that giving Claude questions to ask during code review improves things quite a bit. The questions mirror the exact things I would have asked myself about a pull request when reviewing it. I found this to be a real game changer.

The code comes out quite a bit better, and I would suspect that it uses less tokens in the long run. Simpler cleaner code I would suspect uses less tokens.

**WhiteMart** · 2026-11-06T08:12:35 · [#50389538](https://news.ycombinator.com/item?id=50389538)

1) Claude Team plan through work, so I'm not paying for it.

2) Mostly OpenRouter + Gemini.

3) Claude Code in the terminal, inside tmux. No IDE plugin. Opus plans and reviews, Sonnet writes most of the code, Haiku does the boring mechanical stuff.

4) My own tool, https://github.com/GulDmitry/jagt

5) None.

**FlyingSnake** · 2026-11-05T07:58:56 · [#50376410](https://news.ycombinator.com/item?id=50376410)

I have a CLI based hybrid setup on my MBP (M5 48GB) and it has proven to be very effective.

1. I have a $20 Codex subscription that is more than enough for my work. I use a 75-35 model where I used higher models (Sol/Astra for 35% of the heavier tasks and lower models 75% for other tasks. Sometimes I also use Free OpenRouter models for minor tasks.

2. I use many local models like Qwen3.8-27b/Gemma-4-26b and some 9B models. I also heavily use voice/vision models like Kokoro, QwenTTS for marketing and product videos.

3. Pi exclusively, which I have tweaked for my hybrid setup.

4. I have my own custom agent orchestration that routes between Codex and local models based on the task.

5. I used OpenClaw for a bespoke market research task once, it worked flawlessly.

**npteljes** · 2026-11-05T11:05:24 · [#50377746](https://news.ycombinator.com/item?id=50377746)

1. I'm personally paying for Chatgpt Plus, single account. I mostly use it for personal stuff, and occasional coding - one-off scripts I do from the chat interface, and I used Codex for a more complex project.

2. I sometimes have questions I don't want to associate with my main account, I use duck.ai or chatgpt.com in a private tab. I also dabbled with self-hosting, but it's mostly curiosity, testing abliterated models, testing linux-amd integration etc.

3. Sticking to the defaults. My dayjob pays for Copilot, which means a Copilot plugin in IntelliJ

4. I haven't even looked into agent orchestration and swarms.

5. Not using agent platforms either.

**zkmon** · 2026-11-05T12:18:55 · [#50378227](https://news.ycombinator.com/item?id=50378227)

Tried the popular agents and paid models for some time, and now settled with a local model (Qwen3.8-27B-Q_6) and opencode desktop.

My work doesn't really require ultra super-intelligent models, or one-shot solutions. It's a standard python API, web app and some strict compliance requirements and tons of test cases. I have time to give the Q27B a few iterations. I monitor the progress and give directions while it keeps chugging off for about 30 mins for each medium-hard task. But I like the results. Exactly what is needed. It also allows me work on high-level stuff.

**bookofjoe** · 2026-11-05T15:50:46 · [#50380640](https://news.ycombinator.com/item?id=50380640)

Perplexity Pro $17/month; perfect for this complete non-techie/normie. It appears after reading many comments that I'm the only person here using PP. How come?

> **degrees57** · 2026-11-05T23:07:37 · [#50385840](https://news.ycombinator.com/item?id=50385840)
>
> You're not the only one using Perplexity Pro at $17 per month. And for what I've needed it to help me with, it has been fantastic.
>
> I had installed ROCm (the AMD local LLM toolkit), and it turns out one of the tasks I wanted to do wouldn't work with my (somewhat older) video card. Llama.cpp had a dependency on HIP 6.1, but my hardware can only do HIP 5.7.
>
> PP talked me through downloading the code from Github and running a command to remove everything newer than HIP 5.7 from the source code and then recompiling the whole thing.
>
> It worked!
>
> I am not a C programmer, but PP walked me through everything. It is astonishing. I'm old, so maybe I'm easily astonished, but man, PP has been superb at everything I've asked it to do.

> > **bookofjoe** · 2026-11-06T12:51:29 · [#50391731](https://news.ycombinator.com/item?id=50391731)
> >
> > >I'm old
> >
> > Me too: I'm 78. Perhaps PP should advertise in the AARP monthly magazine.

**jauzeyimam** · 2026-11-05T03:21:39 · [#50374746](https://news.ycombinator.com/item?id=50374746)

1. Claude Ultra (200) and ChatGPT at 20

2. Experimenting with qwen3-coder-next 80B and a few other local models for coding tasks on my M4 MBP (128GB RAM) - no other models or pay-as-you-go apis

3. I have a custom built setup primarily driven by claude code via telegram with a checked in "brain", a separate "watch" structure of crons that i can setup and tweak, and then a task farm run by that orchestrator with containerized cc (and a mixture of sonnet and local llms based on task) and application devcontainer stacks (if it's coding related)

4. Custom

5. Custom - mainly rebuilding the ideas from there into my own workflows, but not using any of them directly

Trying to split more things out of CC and use it as a pure harness on route to trying other harnesses out like pi, etc -- it's a work in progress as and when I have the bandwidth.

**browningstreet** · 2026-11-05T01:39:26 · [#50373974](https://news.ycombinator.com/item?id=50373974)

1 - Opencode Go $40, Claude $20, $0-100 on Deepseek API

2 - No

3 - I use a lot of Opencode + Deepseek, strategize some of that work with Claude Opus, and some gtm, research, and project stuff in Hermes with its coding agent. When I guide by hand I use Orca Dev, which is lovely.

4 - Claude drops GitHub issues that Opencode picks up on a schedule. It’s simple and resilient enough for me. Hermes has a lot of scheduled tasks to move things forward.. it has gtm and research and dev loops (the latter builds autonomously for future projects vis a vis my attention, I’ve used quite a bit of it).

5 - Hermes Agent, which has become a core tech for me. I’ve tried to use Openclaw but it has not been something I can keep running. It spirals and crashes after a week in ways I’ve never experienced from Hermes, doing the same things. I have little interest in those generalist agents, maybe after a year.

**geonic** · 2026-11-05T10:32:04 · [#50377512](https://news.ycombinator.com/item?id=50377512)

Went from using Codex and Claude via ACP in zed to Codex app, then harness aggregators like Paseo, Orca and Superset to Claude Projects.

Claude Projects is pretty nice and integrates with Claude Artifacts for design tasks. Projects remembers context, repositories and working directories so I can always pick up work in the main orchestrator chat and Projects branches in different chats as needed. My only gripe is that it's really intransparent when Claude works locally. Sometimes Claude doesn't have enough permissions and I need to prompt it to do stuff explicitly on the Mac.

**chrisvalleybay** · 2026-11-05T09:33:48 · [#50377121](https://news.ycombinator.com/item?id=50377121)

Currently using a Claude Code Max subscription. I'm using Rex as a multiplexer (recently switched from Tmux). I have a set of skills for planning projects and issues that runs everything in Linear. I review PRs in Linear/VSCode. I am the orchestrator, usually running multiple projects/issues in parallell, sometimes across multiple customers at the same time, but mostly one customer and multiple projects at once. I still review all code that touch the security aspects of the applications. Edit: Also, I have Codex do automatic code reviews of Claude's work triggered on PR.

**0xcoffee** · 2026-11-05T00:12:18 · [#50373256](https://news.ycombinator.com/item?id=50373256)

I use Muse Code $5 month

It has a 5 hour usage limit, and if using the wonder model, you basically only get 1 or 2 prompts. However, I find it will basically do unlimited 'turns', so as long as I give a good prompt, I can get my work done.

No ide/harness. I only do light coding and don't have time to actually sit at my computer.

**SkidVis** · 2026-11-05T12:52:43 · [#50378518](https://news.ycombinator.com/item?id=50378518)

1) Claude ($100) and ChatGPT ($20)

2) No.

3) I mainly use Claude as my main, Pi (with ChatGPT) for any automations. I manage them all with herdr. I cd into a path, kick off a claude/codex/pi session, then kill the session and manage it from anywhere with iceghost. (https://github.com/sharkjets/iceghost)

4) Negative.

5) I tried openclaw but found it a waste of my already scarce tokens. :D I build my own runners when I need a loop or cron-based automation.

**quard8** · 2026-11-05T11:26:59 · [#50377888](https://news.ycombinator.com/item?id=50377888)

1. Claude Max ($100), ChatGPT ($20), Muse Code ($12?) - probably cancel Muse Code since I haven't touched it in a few months

2. I use both OpenAI and Anthropic models via api, openrouter for MAI Translate 2 (super cheap) and a small qwen model on a second laptop for hermes (mostly searching and summarization tasks)

3. used Zed with threads, but week ago moved to herdr-app + zed as code editor. oh-my-pi is my choice for harness

4. no

5. hermes: can't find a lot of use cases right now, instinct: super simple tasks like finding where to buy a product, tennis match schedule checks.

**wodenokoto** · 2026-11-05T10:30:18 · [#50377500](https://news.ycombinator.com/item?id=50377500)

I use Gemini Pro and anti gravity completely out of the box. And am not super pleased, but it is also quite cheap for what you get.

My biggest gripe: If I tell it to make a change in layout to a page and there is a "collateral" change, I cannot tell it to "change that back", because it will spend an hour digging through git history diffing stuff that is not related in any way. Once a conversation has started git diffing it never ends, all down stream tasks become a treasure hunt in git history.

I also think that Argon-tokens are super stingy.

**benbojangles** · 2026-11-04T16:33:45 · [#50368031](https://news.ycombinator.com/item?id=50368031)

My halftop macbook m1 max 64gb is doing all my ai locally, i have not paid for any ai subscription for over a year.

things i run locally using apple mlx models: general llm, coding llm, text-to-image, text-to-video, image-to-video, text-to-music,

everything is holding up well. I may eventually swap the m1 max for a higher memory bandwidth device once they are available for a reasonable price in 6+ years

> **jjcob** · 2026-11-05T04:03:14 · [#50375014](https://news.ycombinator.com/item?id=50375014)
>
> Can you explain how you use a local llm on your Macbook Pro to someone who has no experience with LLM?

> > **benbojangles** · 2026-11-05T20:46:17 · [#50384262](https://news.ycombinator.com/item?id=50384262) · _dead, flagged_
> >
> > Running a *local LLM* means downloading an AI model (like ChatGPT, but smaller) directly onto your MacBook's hard drive so it processes text entirely on your Mac's graphics chip without sending data over the internet.
> >
> > ---
> >
> > ### Key Terminology
> >
> > * *LLM (Large Language Model):* An AI program trained on vast amounts of text that predicts and generates human-like language based on prompts. * *Cloud AI vs. Local AI:* Cloud AI (ChatGPT, Claude) runs on massive external servers and requires internet. Local AI runs entirely on your Mac's internal Apple Silicon hardware (M1/M2/M3/M4 chips and Unified Memory). * *Quantization (Model Sizes):* Models come in trimmed-down sizes (e.g., 7B or 8B parameters) optimized to fit inside consumer laptop memory without losing too much intelligence.
> >
> > ---
> >
> > ### How to Set It Up (Step-by-Step)
> >
> > The easiest way for a beginner to run a local model on a MacBook Pro is using *LM Studio* or *Ollama with Chatbox*, which provide familiar chat interfaces.
> >
> > 1. *Download a Local AI Runner* * Download *LM Studio* (from `lmstudio.ai`) or *Ollama* (from `ollama.com`). Install it like any standard Mac app.
> >
> > 2. *Download an Open-Source Model* * Open the application search bar and search for popular open models such as *Llama 3*, *Mistral*, or *Gemma*. * Click *Download*. The app will download a single model file (usually 4 GB to 8 GB in size).
> >
> > 3. *Start Chatting* * Select the downloaded model from the top dropdown menu and start typing in the chat box just like you would on ChatGPT.
> >
> > ---
> >
> > ### Main Benefits & Limitations
> >
> > | Advantage | Benefit | | --- | --- | | *Complete Privacy* | Your text, documents, and queries never leave your Mac. | | *Offline Access* | Works on airplanes or anywhere without Wi-Fi. | | *No Subscription* | Entirely free to run indefinitely. |
> >
> > | Limitation | Detail | | --- | --- | | *Hardware Demands* | Requires at least 16 GB of RAM for smooth performance; uses significant battery. | | *Knowledge Limits* | Smaller local models are less capable at complex reasoning than giant cloud models. |

> > **smallapple** · 2026-11-05T11:54:36 · [#50378082](https://news.ycombinator.com/item?id=50378082) · _dead_
> >
> > Personally just use askloci.ai that’s the only app built for people who aren’t engineers to use local

**gszr** · 2026-11-05T14:00:22 · [#50379150](https://news.ycombinator.com/item?id=50379150)

I use xAI and OpenAI subscriptions, switching between them, even mid session, using my Lunar harness: https://github.com/gszr/lunar. This is a very productive setup for me. As it also supports API keys, I throw in other models in the mix when I want to play around. I have not incorporated an orchestrator in my workflow, but I can see the appeal.

**jbvlkt** · 2026-11-05T09:55:55 · [#50377284](https://news.ycombinator.com/item?id=50377284)

I use claude and codex inside bubblewrap sandbox. I have $20 subscription for both. I do not use IDE integration. My task for agents are mostly generating simple code, generating tests, code review and debugging of hard to setup issues. I mostly use weaker models on lower effort (sonnet or opus plan for anthropic and luna or sol for openAI). It feels to me that higher effort causes problems with alignment and better models are not worth the cost except for the code review. I am rarely out of tokens so I do not plan to pay more.

**maxkxd1** · 2026-11-05T02:16:58 · [#50374270](https://news.ycombinator.com/item?id=50374270)

1) I pay for claude ultra coz the plan rates are significantly better than the api rates, and i feel like i can tokenmax harder than if i am constantly watching my credit balances.

2) yea openrouter free models, usually nemotron coz they have decent availability and I don't get constantly rate limited like with the gemma models on there.

3) honestly still using the default IDE, used to use claude code cli but nowadays i just launch claude remote control and just talk to it through my phone.

4) something custom, i wired it all up in slack so i could easily talk to agents through the same place i do my work

5) Used to use openclaw on a raspberry pi to experiment with like autonomous development but i needed something with a bit more transparency so i moved everything into slack.

**pelagicAustral** · 2026-11-05T12:16:49 · [#50378217](https://news.ycombinator.com/item?id=50378217)

1 - Deepseek for non-important stuff, 50 bucks seems to last forever. Claude annual 200 bucks sub (my main one), and Gemini 20 buck a month sub to complement Claude when i run out of usage. There is some kind of extra Argon allowance at the moment, so it's pretty solid.

2 - Deepseek is my pay as you go one... I only use it for small stuff, mostly as a way to validate API use on some implementations.

3 - Claude code and antygravity, I have not gotten anywhere near one of the other harnesses, i see them as the React of AI.

4 - No

5 - No

**drgoodvibe** · 2026-11-05T04:40:08 · [#50375265](https://news.ycombinator.com/item?id=50375265)

I built railvio.com for myself initially, it’s taken me a year to build and it’s a full harness for building applications + fully integrated Jira and Confluence clone. That altogether has become a lovable clone which I’ve used now to deploy a tradingview clone, a risk rating rules engine clone, and an agent terminal that is a stripped down clone of Iterm2 but built with a middle layer so I can connect to long lived tmux sessions. 3x Claude ultra, codex pro, + local Qwen 27b fp8 on Radiance engine on 2xRS700 and ComfyUi on a separate machine with a rtx 4090. It’s been super fun building everything. I’ve averaged around ~40B tokens per month..

**ctolsen** · 2026-11-04T15:51:00 · [#50367326](https://news.ycombinator.com/item?id=50367326)

1) Right now I have Opencode Go Plus, Mistral Pro, Kimi. It changes. Kimi is not staying and I'm probably getting ChatGPT for a bit, last month I had Claude Pro. I stay around €100 a month total.

I generally use open weight models (Kimi K3.1, Mistral Large 4, GLM-5.3, DeepSeek v4.1 Flash, Mimo v2.6 Pro is the current quiver) but I use closed frontiers enough to stay up to date.

2) I use OpenRouter if I have a specific need, audio transcription (MAI-Transcribe 2) being something I use often enough. Also using it just to test random models.

Not much local anymore except classifiers / decision models that I've played with.

3) Pi all the way.

4) I use Paseo to orchestrate agents, I have a couple plugins I've written for it that manages pipelines and such. I generally start a workflow with a simple skill and if it proves useful I like to make it deterministic if possible. Models be dumb sometimes.

6) No but I have some Paseo plugins for personal use, though it's very limited what I find useful. I also don't find that I want any claw type stuff at all.

**Bayart** · 2026-11-05T15:28:21 · [#50380310](https://news.ycombinator.com/item?id=50380310)

- Wrapper : Orca

- Harness : oh-my-pie

- Models : OpenAI $20 sub (mostly using Sol/Luna) + Deepseek + JEV

- Skills : Mostly Osmani's agent skills, ub-mode, agency skills for personas + custom stuff

I'm kinda reworking everything as the moment, I'm having issues with other people's workflows (whether it is Pokock, Osmani or Uncle Bob) even though there are bit I like and I'm still looking at how to balance quotas, thinking levels, velocity.

> **corky_buchek** · 2026-11-05T15:59:42 · [#50380780](https://news.ycombinator.com/item?id=50380780)
>
> what is the difference between a wrapper and a harness?

> > **Bayart** · 2026-11-05T16:29:38 · [#50381147](https://news.ycombinator.com/item?id=50381147)
> >
> > The harness is the environment in which you manage your AI workflow. Orchestration etc. The "wrapper" (don't know if there's a better name for that around) gives extra ergonomics to glue it together with files, browsing, git etc. Think Claude Code the CLI and Claude Code the app.

**fhennig** · 2026-11-05T16:25:22 · [#50381092](https://news.ycombinator.com/item?id=50381092)

I'm using Claude Code with a Pro subscription, and I'm running it almost exclusively on a dedicated server where I push and pull repositories from. I let it run there in yolo mode, which is pleasant to work with. I found this the easiest way to sandbox the LLM, and am quite happy with it so far. I use tmux to run multiple sessions with different features in parallel.

**keithnz** · 2026-11-05T01:00:32 · [#50373649](https://news.ycombinator.com/item?id=50373649)

1, work - claude team pro (not paying for), home, codex pro (for side hustle https://rolloutrhino.com/)

2, no, except at work where I have a whole agentic helpdesk system that self improves, creates documentation, and is quite awesome really. Pretty cheap to run also.

3, my own that I keep iterating on, but I do use the clis, though with codex, the app is just awesome, don't use the tui (its good, but the app is better). Claudes app sucks in comparison, though is often better than the TUI.

4, my own tools, mostly because I started on my own ones ages ago.

5, dots, It's kind of like a project manager for the side hustle, its really coordinating a lot of stuff between all the things I have in flight

> **PierceJoy** · 2026-11-05T01:10:50 · [#50373737](https://news.ycombinator.com/item?id=50373737)
>
> Curious what you find better about the codex app vs the claude app? I use both as well, but I find them fairly interchangeable. I like project and session creation a bit more on codex.

**mickeyp** · 2026-11-05T06:47:51 · [#50375966](https://news.ycombinator.com/item?id=50375966)

I do not like terminal tui much as I think it's a poor fit for a coding agent.

But I do use claude code tui because I have a sub: it is a good model and I like its aesthetics. If I could use the sub in my own harness I would. It's also a foil to GPT's models that overengineer everything.

I have a Codex subscription that I use in my own harness, dreamcoder.ai, which has a tiling window manager and all the other mod cons you'd expect a frontier harness to have.

In addition to that, I run Qwen 3.8 27B NVFP4 with ninfer on my 5090. It's a great model for local development. I also use that in dreamcoder.

> **kuboble** · 2026-11-05T07:03:37 · [#50376058](https://news.ycombinator.com/item?id=50376058)
>
> > I do not like terminal tui much as I think it's a poor fit for a coding agent
>
> I recently moved away from using tui to directly interact with claude code.
>
> I still start a session in the terminal but then ask to start a simple jira- like ticketing system.
>
> When I have a request I start a new ticket and claude decides to either do it or launch a sub agent to do it.
>
> When claude is done or has questions- he replies in the ticket. When claude has a side-findings he creates a new ticket for me.

> > **mickeyp** · 2026-11-05T08:21:38 · [#50376582](https://news.ycombinator.com/item?id=50376582)
> >
> > That's a really interesting workflow.
> >
> > I also do orchestrator like work that way. The key difference is I'll have a master chat and let it delegate work as needed to sub agents.
> >
> > I have skills, MCP etc for things that need it, and custom-designed sub agents for a couple of very specific, niche tasks. The rest use generic delegator, explorer, worker sub agents that just take normal instructions.

> > **aspect0545** · 2026-11-05T10:16:35 · [#50377422](https://news.ycombinator.com/item?id=50377422)
> >
> > So does it develop a new ticket system every time? I'm not sure I can follow, could you explain?

> > > **kuboble** · 2026-11-05T21:32:55 · [#50384746](https://news.ycombinator.com/item?id=50384746)
> > >
> > > Yes, I have one instance of it per project. And there run only one claude code session that is only supposed to manage "jiraude" and run the actual work in subagents. I published it at https://github.com/kuba97531/jiraude

> **californical** · 2026-11-05T06:58:45 · [#50376022](https://news.ycombinator.com/item?id=50376022)
>
> Can you not? I built a custom harness that uses my Claude subscription. You can pass -p I think is the flag, to feed it a prompt. And it’s been a little while so I don’t fully remember how but you can also have it print the output to stdout. I even pass it custom tools as args and it works with the cache, and you can even append messages to conversations

> > **mickeyp** · 2026-11-05T08:20:22 · [#50376571](https://news.ycombinator.com/item?id=50376571)
> >
> > You can work around it like that for sure; you can call it from the CLI, and you get free credits also to spend.
> >
> > But I meant more like, you know: hey just use the whole sub in another harness. That you can't do.

**JoeMattie** · 2026-11-05T15:31:55 · [#50380371](https://news.ycombinator.com/item?id=50380371)

OpenAI $100 account, Claude $200 account and a Linux desktop with 2 RTX 3090s and 128gb ram. I'm generally working on about 2 projects at a time, sometimes more on the weekends.

Claude code CLI, rotated with codex CLI (monkey patched to be able to message with Claude sessions over the Unix socket thingies).

Local ollama server running qwen and a bunch of other models.

I'm having an absolute blast!

My projects accumulate here: joemattie.com

**mf_kevintruong** · 2026-11-05T08:42:39 · [#50376746](https://news.ycombinator.com/item?id=50376746)

I build my own coding agent : Spurcode https://github.com/getspur/SpurCode which enable to support me to orchestrate difference other coding agent : like Codex + claude/Goose ...etc

Also : give out product agent notebook workbench : https://getspur.dev/spurlab to make all coding agent need to explore/grouding before coding with notebook

**ryanthedev** · 2026-11-05T12:44:25 · [#50378434](https://news.ycombinator.com/item?id=50378434)

1: personal ultra and I have subs through each company I consult with. I also have subs to all other models as well. Cheaper tiers. Daily is opus. Use other models for other work.

2: only some decision models for testing. Experimentation.

3: herdr and all cli.

4: all custom built. Yes.

5: yes my own. - personal assistant.

An example. I can feed it shorts and create one pagers.

My workflow has changed since the 5.5 models dropped. They need less skills and guardrails.

I can set up my orchestrator to run unattended for longer with simpler goals.

**darkamaul** · 2026-11-05T09:04:38 · [#50376908](https://news.ycombinator.com/item?id=50376908)

1/ Claude and Codex, but mostly Codex with the Business Plan 2/ No other models 3/ Default CLI most of the time, plus some agent-made tooling for some orchestration 4/ No - frontier models are already super good at this 5/ I'm using Dot, and I find it helpful as a workload dispatcher

I also don't see many differences anymore in the various frontier model - between GPT 6-Sol or Astra or Fable or Opus 5.5... Maybe my tasks are easy enough, or maybe I'm missing a lot here.

**rufugee** · 2026-11-05T14:54:07 · [#50379826](https://news.ycombinator.com/item?id=50379826)

I've built a web-based control room for a single developer to run multiple agents from multiple vendors behind a single pane of glass. It keeps the record of every session, puts whatever needs you in one queue, gives each new session the context it needs, and shows you what got done while you were away. Completely vibe-coded (Ruby on Rails), but very productive.

**sudhirj** · 2026-11-05T02:31:53 · [#50374380](https://news.ycombinator.com/item?id=50374380)

I use Claude, on a Max plan.

Have a server at home, so mosh into it and run Claude Code at the lowest level. Use Blink off the iPad.

For normal work though, I have a bunch of services set up to run Claude —-remote-control in every one of my projects, so I just use the Claude app on my phone and iPad.

Also maintain and run https://github.com/common-pattern/claudeflow as a service the bigger projects - it’s an orchestrator that reads GitHub issues and starts a Claude one-shot, automatically handling the routine stuff like CI, commits, PR landing flow etc.

**JustRouzbeh** · 2026-11-06T02:27:06 · [#50387380](https://news.ycombinator.com/item?id=50387380)

I mostly use agents for coding and MCP when they need to use an external tool. Haven’t bothered with multi-agent setups. One agent is already enough to review sometimes

**pglevy** · 2026-11-05T00:25:31 · [#50373366](https://news.ycombinator.com/item?id=50373366)

Claude Pro for personal. (Kiro at work.)

Moving towards long-running, asynchronous delegation where I use a locally running instance of Fizzy kanban board to manage and track all work.

When I think of something I might want an agent to do, I create a card. When I want to delegate I assign to agent and move to To Do. I usually try batch things, then use a slash command to invoke a fizzy skill. I do this in a terminal and then close it and do other things.

Couple hours later I'll check the board and see what's in review column for me. Read comments, look over PRs, etc. Agent has broad access to specific project folders and repos.

In general feeling more like working with a colleague than chatting with a bot.

**netsroht** · 2026-11-05T13:18:34 · [#50378737](https://news.ycombinator.com/item?id=50378737)

I have two Claude Ultra subs and one Codex Pro sub. I also use a few pay per token endpoints from various providers (these change a lot though because here I'm mainly testing and comparing capabilities) and one locally hosted Qwen-3.8-27b (on a custom inference engine [0]).

Opus 5.5 high is currently my main driver for planning. Via the "poteto-mode" (adapted from Cursor's pstack) skill, more Opus, Sonnet, Astra, and Sol (sometimes also Grok) subagents are spawned for the actual implementations. This is really powerful and often implements features completely e2e with proper verification and testing etc.

My local qwen model can dual serve chat and decisions on the same weights. I mainly use chat here for critical data like health & finance topics that I'm not comfortable sending to a provider I don't control as well as having my local Home Assistant installation connected to it (only via LAN, hence a local modal is a good fit here). The decision part of this model is used for generic content screening, advising, and (re-)ranking [1]. I'm also planning on integrating this setup into various other things like all my email accounts in order to have them sorted by relevance and grouped/labeled. Again I wouldn't be comfortable forwarding ALL my emails to a third party provider since this is a massive security risk.

And yes, I built Caudra, a custom harness / coding agent that fills many gaps I otherwise had to build with various plugins [1]. For instance, multi account support with strategies such as draining the sub account that hits reset soonest.

To answer your last question regarding broader platforms: I'm currently building this into Caudra as well so it can be turned into more like a swarm of agents [3].

[0] https://github.com/tensorninja/ninfer-4090

[1] https://caudra.ai/features/decisions/

[2] https://github.com/caudra/caudra

[3] https://github.com/caudra/caudra/discussions/2

**npc99** · 2026-11-04T15:42:10 · [#50367192](https://news.ycombinator.com/item?id=50367192)

Mostly Pi, using a variety of models, but mostly GPT 5.6 line of models.

I try to use open weight and cheap models as much as possible.

**starkgoose** · 2026-11-05T09:30:49 · [#50377091](https://news.ycombinator.com/item?id=50377091)

Current setup is pi with github-copilot sub at work - limiting self to luna-6 model. I have custom tmux + nvim + lazygit setup that allows me to quickly toggle modals and jump in and out of code / markdown files for quick review. Im limiting myself like this to get a feel for agent limitations and develop a better sense for it. I could use better models but I've found that they just hide the limitations better and it's harder to learn.

**mazone** · 2026-11-05T00:37:17 · [#50373447](https://news.ycombinator.com/item?id=50373447)

1. Z.ai coding pro plan that i got last christmas for $14 a month. Will not renew in jan.

2. Locally hosted qwen 3.8 flash next on a wake on lan machine rtx5090

3. Currently orca as front end orchestrator to a mini pc with pi for coding and hermes for general purpose

**Outermeasure_A** · 2026-11-05T14:27:50 · [#50379482](https://news.ycombinator.com/item?id=50379482)

1) No subscriptions

2) I self host a Q4 quant of GLM 5.3 flash, at work using Antigravity and Gemini Argon

3) Vanilla Pi cli and running in a VM. I customized it to work around common LLMism, like intercepting and modifying requests or tool calls.

4) Pi is my agent orchestration, it can run in headless mode recursively. Also most of the things the agent UIs provide can be done via writing to shared files to disk

5) No

**steveridout** · 2026-11-05T10:40:42 · [#50377573](https://news.ycombinator.com/item?id=50377573)

1) Claude: 180 euro / month, Codex: 100 USD / month

2) no

3) Defaults: claude and codex

4) I've built my own custom system including web UI which helps me manage agents powered by claude and codex in both headless mode and running through an automated pipeline including bug reproduction, dev, code review, qa, etc... It's proving very useful, and keeps getting better as models improve. Opus 5.5 is phenomenal.

5) I tried OpenClaw but it didn't stick for me

**marshalla** · 2026-11-04T15:55:27 · [#50367399](https://news.ycombinator.com/item?id=50367399)

I have two $100/mo Anthropic accounts (watch out the single $200 doesn't raise weekly limits) and one $100/mo Gemini account. I have Opus generate review prompts for Argon and paste them into agy.

I tried setting up a script so Claude could automatically call agy, but it kept hitting timeouts, and letting Claude control that tends to burn my usage too quickly anyway (and if I'm not copy-pasting into different terminals, where's my value add in all this?).

Argon hallucinates, so I rarely use it for impl, but I've actually had better results with it than Opus for SwiftUI and AppKit work.

I try not to run more than three sessions at once, or I get anxiety about having to keep all the session caches fresh and end up typing silly things into some of them every 30-45 min so they don't expire or auto-compact.

> **ojjsaw** · 2026-11-05T15:47:17 · [#50380579](https://news.ycombinator.com/item?id=50380579) · _dead, flagged_
>
> the hand-pasting between tools is the part i hated too. i wrote a small MCP thing for it (jotter, mine): "jot this" in whichever tool you're in, "continue my last handoff" in the other. same jot loads in claude, chatgpt, gemini, codex. it's a brief, not a transcript, so it won't replace a full session replay.

**topaz0** · 2026-11-05T00:11:37 · [#50373250](https://news.ycombinator.com/item?id=50373250)

I only use genuine intelligence

> **leecommamichael** · 2026-11-05T00:23:38 · [#50373347](https://news.ycombinator.com/item?id=50373347)
>
> Same.
>
> For 4 years now I’ve tried the latest and greatest once annually before my summer course starts— just to know what to expect and how to instruct. The artificial stuff is definitely getting more refined, but using it doesn’t yet make sense for me personally.

> > **dofm** · 2026-11-05T03:06:13 · [#50374646](https://news.ycombinator.com/item?id=50374646)
> >
> > I am committed to learning about it; it would be nuts not to.
> >
> > Not committed to using it.
> >
> > Until recently my mental health post-burnout has been so absolutely poor that I have been learning all of this just to try to concentrate on anything so I don’t feel further out of the loop. Most days I still feel like I should quit IT.
> >
> > In the limited ways I am actually using it in a productive rather than self-educational sense, I tend to be using it to combat burnout: helping get past blank page problems, rough ideation and keeping track of ideas, doing slightly more cohesive research than just ending up with dozens of open tabs and some unclear notes, generating helper processes (like content migrations) that I might otherwise not be able to make myself write, and exploring using it to do the unthrilling work like automated test generation.
> >
> > I don’t plan on becoming someone who sits back and specifies loops, and that doesn’t fit with the work I am doing. I have far too many disjointed things I have to work on.
> >
> > But it is definitely a more varied rubber duck, and that has some potential. I feel a little less stuck, sometimes.

**m4tthumphrey** · 2026-11-05T09:20:48 · [#50377004](https://news.ycombinator.com/item?id=50377004)

I feel like I'm just scratching the the surface with AI coding but am already incredibly productive. My setup is purely Claude Code Max (£90/month) within PHPStorm's terminal view. I have /rc permanently enabled too so I can interact from my phone.

The only "issue" I have is (due my local stack choice) is I can only have one project running at once, but I feel like I will find a solution to this soon enough.

**nkotov** · 2026-11-04T16:05:58 · [#50367571](https://news.ycombinator.com/item?id=50367571)

2x Claude Ultra accounts, 2x ChatGPT/Codex Pro. Couple of local hosted models for quick stuff (text formatting, TTS, etc.)

I'm sticking with Default CLI/Desktop apps + built my own to combine them for my specific workflows. Used previously OpenClaw and Hermes but it seems to fall apart when you give it any real work. Ending up giving up because I just don't have to tinker / fine-tune it.

I will say, I enjoy Muse a lot for some reason for personal things. I don't overshare anything I wouldn't mind saying in public.

Within the last month, I basically use Claude Design exclusively for front end work and Codex for backend work. Codex just works but sucks as design. Claude is great at design (with enough references) but can't seem to actually get anything to completion.

> **x3haloed** · 2026-11-04T16:28:43 · [#50367947](https://news.ycombinator.com/item?id=50367947)
>
> I want to make a joke about that last line so badly.
>
> I've had the same experience as you with Claude, and I have to choose a single subscription, so I'm on Codex. I definitely wish I had access to Opus 5.5 right now.

**laxjester** · 2026-11-05T14:26:46 · [#50379466](https://news.ycombinator.com/item?id=50379466)

I've been building iOs apps since the Objective C days. Now I hardly open my laptop.

T3 on the phone (great app for remotely controlling any harness)

Which connects to my tiny home server: Ubuntu + Docker containers that sandbox a repo, T3->Opencode->Openrouter

Cloudflare tunnels for streaming expo builds.

Copilot reviewer catches some things in my PRs that openrouter on cheap misses.

**navels** · 2026-11-05T00:38:50 · [#50373463](https://news.ycombinator.com/item?id=50373463)

1) Work covers my Claude and Codex subscriptions. Each is the ~$200/month tier.

2) I have a "live Zoom call audio transcription" setup that uses Silero VAD, Qwen3-ASR-1.7B, Qwen3-4B-Instruct, and pyannote speaker-diarization-community-1.

3) Claude Code in the Desktop UI using remote control environments.

4) Custom orchestrator for having Codex review Claude or vice-versa: https://github.com/navels/neal

5) I have built over time a personal assistant using Claude remote control running on a mac mini, this is likely similar to Dots?

**bob1029** · 2026-11-05T01:26:50 · [#50373865](https://news.ycombinator.com/item?id=50373865)

Copilot in VS2026 + GPT5.5 configured as a custom model (API Tokens). Same as it was 6 months ago.

I really want to use 6.1 Terra, but the way copilot is set up in visual studio proper, they don't handle reasoning models correctly (or maybe my install is screwed up). Eventually, I will dust off that old winforms project and get my custom harness working with the latest responses API contract.

I prefer (pre) paying for tokens. You can offer me all the proof you want but I'll still never believe that those subsidized tokens are always the same as the ones I get through the API.

**rhodey** · 2026-11-05T14:42:48 · [#50379685](https://news.ycombinator.com/item?id=50379685)

1) $200 codex and $100 claude plans

2) Using both OpenAI and OpenRouter pay-as-you-go APIs to support some apps, not as part of dev flow, as part of prod features

3) VS Code with Codex and Claude extensions (defaults) but will also say 100% of my VS Code use stays on a Macbook Neo that is decidedly not my main machine

4) No

5) No. Thinking I probably will use Dots/Muse at tax time

**furyofantares** · 2026-11-05T05:24:12 · [#50375539](https://news.ycombinator.com/item?id=50375539)

For my side quests at any given time I am subscribed to one or the other of Claude $200 or Codex $200 or both. I was briefly on 200+500. Getting to be a real expensive hobby.

At my day job I spend about $1000/mo at API prices. So like 5-10% of my hobby usage.

Hobby setup is I have a single "personal assistant" session which spawns sessions for each project or major job on a project and messages with them. I talk to the personal assistant over Signal exclusively.

Work setup is just a wrapper around Claude Code.

**anukin** · 2026-11-05T02:11:05 · [#50374223](https://news.ycombinator.com/item?id=50374223)

I use Claude and codex and use my own orchestrator to run them. I also used to have open code for a while but the recent codex and Claude models are token efficient so don’t need additional models.

**Macha** · 2026-11-05T00:57:55 · [#50373624](https://news.ycombinator.com/item?id=50373624)

1) Claude Pro (the $20/mo tier). No other subscriptions.

2) I use models on open router occasionally, primarily GLM and Deepseek models. I’ve experimented with Qwen locally but the models that run on my hardware are too dumb for extended use cases and too slow for quick questions.

3) Personal use: Primarily Zed. I use employer paid Claude Code in the day job but it eats tokens at a rate I’m not willing to pay for for personal use. I’ve tried OpenCode but their security track record is uninspiring and I’m way more defensive about my personal hardware than my employer is about their hardware fleet.

4) No

5) No

**spilist** · 2026-11-05T08:44:15 · [#50376760](https://news.ycombinator.com/item?id=50376760)

1) Codex $200 * 2, Claude Code $200, Muse Code $50, OpenCode $40. I run them in 6 machines (2 Linux, 2 MacOS, 2 Windows)

2) No. I try my best to use oauth

3) Claude Code + Custom Harness(set of skills) + Mod. This orchestrator (I call her as "Team Leader") orchestrates other machines with Tailscale. - I've used Claude Code (Opus 5.5) by model satisfaction and mod.

4) None

5) Dots and Instinct. Main use case is research, code search and raise issue, PR reviews.

**bsenftner** · 2026-11-04T16:34:12 · [#50368043](https://news.ycombinator.com/item?id=50368043)

I've got a somewhat sophisticated self made setup:

1a) OpenAI API subscription, integrated into an office suite + media pipeline I wrote 1b) OpenAI codex $100 mo plan

2) Current count, 318 additional generative models across LLMs and then media generation of image, voice, music and video. The LLMs are mostly Qwen variants, and the media models are pretty much all the popular media models. These are organized, managed, and API operated locally through WanGP (open source model host) and two additional apps I wrote. One of those apps is a mobile phone pairing remote live video processor, so one can use their phone like a remote live camera at events, and the other is a plugin to WanGP so my software can securely operate WanGP remotely.

3) I use OpenAI Codex in a terminal as a coding assistant. Through that same account I also run the OpenAI Desktop app, and that integrates with my web apps through WebMCP and two additional types of agents in my apps: 1) all my UIs have knowledge assistants that explain how to use the UI they are associated, and they know more complex workflows that UI is a component. 2) My apps have "method actor agents" that are conversationally programmable experts located on specific interfaces, which users then tune to be experts in their work tasks. That's like a smart assembly line worker waiting to be told what they are making. Then, through WebMCP, external agents will interact with my app resident agents, and together they act. Which is kind of amazing. So, in a way, they create a harness through their collaboration, which also includes the user, collaboratively.

4 & 5) no.

My work interest is in creating an environment that promotes deep intellectual flow. One could use my setup and automate a bunch of things and sit back while their brain rots. Or one can also participate in the work at an interactive creative stream level, where the agents and software are doing work but all the creative and impactful decisions delegate to you. You're in complete control over a swarm of virtual expert personalities that work for you, and you make their decisions. The work is office and media, which is broad.

**hestefisk** · 2026-11-05T05:25:00 · [#50375546](https://news.ycombinator.com/item?id=50375546)

Inference: combination of Opus 5.5 (best model in the market) and local models (DeepSeek 4.1f 1017 and GLM 5.3f) running on 3x DGX Spark.

Harness: Primarily Hermes Agent across desktop, terminal, and phone (via Telegram). I have also tried OMP but find it a bit clunky to use. Hermes tui + tmux are my favourite tools and Hermes works well with local models.

Orchestration: I haven’t seriously worked with it yet, but starting to use herdr with Hermes. That is as much “software factory” I get.

**asixicle** · 2026-11-05T08:59:03 · [#50376872](https://news.ycombinator.com/item?id=50376872)

Rolled my own for a Claude Max sub, basically tmux and an elaborate MCP for persistent semantic memory, Forgejo, etc. (https://github.com/ASIXicle/Coterie)

I sense more people will do so as you can fairly easily tailor any harness and MCP/LXC combo to suit the way you work. It's a bespoke future.

**jefferfelizardo** · 2026-11-05T11:36:36 · [#50377945](https://news.ycombinator.com/item?id=50377945)

I run Claude Code, Codex, Pi and Kimi Code across my desktop, laptop and a server, in tmux sessions I also follow from my phone. I got tired of juggling that, so I built Hangar, open source and self-hosted: https://github.com/jeffer1312/hangar

**jkkorn** · 2026-11-05T14:13:05 · [#50379292](https://news.ycombinator.com/item?id=50379292)

Models: Claude and ChatGPT Workspace orchestration: Conductor.build (RIP) Looking for a substitute, recommendations welcome. Skill management: Skillstore

I alternate a lot between models and harnesses, but mostly use them as adversarial to each other. (Ex: Astra Plans, Opus 5.5 executes, Sol revises, sonnet writes about it)

> **Darmani** · 2026-11-06T10:31:27 · [#50390611](https://news.ycombinator.com/item?id=50390611)
>
> I'm the founder of Command Center (https://cc.dev), so that's what I'd swap in. You can run Claude Code, Codex, Gemini and OpenCode side by side, each in its own worktree. Where it goes past Conductor is the step after: walkthroughs to actually understand each diff and refactorings to clean it up, so the output gets to production quality a lot faster.
>
> We're doing large discounts for anyone coming off Conductor -- just ask.

**Xonzo** · 2026-11-05T13:21:54 · [#50378776](https://news.ycombinator.com/item?id=50378776)

1) $20 Codex Plan

2) Qwen3.8 Flash via Basalt (Local) + OpenRouter for DeepSeek V4.1 Flash

3) I primarily use Pi with many custom extensions. Occasionally I will use Codex.

4) I use Pi Subagents and Herdr. With QFN being the worker, and Sol 6.1 xHigh for planning/review.

5) Hermes Agent via Telegram. I use this to follow-up, check status and work on projects while away from the house.

**dirkc** · 2026-11-05T14:01:09 · [#50379163](https://news.ycombinator.com/item?id=50379163)

The amount of times I hear people running without a sandbox is just crazy!

I'm just looking into setting up a separate GitHub user to let claude act as a contributor, and so much of the docs are about how to prevent your github auth info from your main account accidentally being used. That implies no sandboxing!!

**codazoda** · 2026-11-05T14:18:14 · [#50379355](https://news.ycombinator.com/item?id=50379355)

Claude Code ($100 for business) directly from my sandbox folder with clean versions of every repo.

This is surprisingly effective. I thought it would consume massive tokens, it doesn’t.

I do mostly research and bug fixing for issues that float up from customer service and then root cause fixes.

We have many code bases with lots of cross dependency.

**gwbas1c** · 2026-11-04T21:24:14 · [#50371770](https://news.ycombinator.com/item?id=50371770)

1) What AI subscriptions are you personally paying for?

My employer pays for copilot, business plan. It also pays for Gemini.

2) Are you using models outside (or instead) of those subscriptions?

Gemini, company-wide. I mostly use it for general research, making clip art, and occasional programming questions / technical questions. I don't use it everyday, but when I use it, I really like it.

I no longer use ChatGPT or Claude's general-purpose chat bots.

3) What coding harnesses and interfaces are you using? Are you sticking with the default CLIs or IDE integrations, or using alternatives like OpenCode, Pi, Aider, Muse Code, or custom-built harnesses?

IDE integration with Visual Studio, and Copilot code reviews on Github. I mostly use agent mode; sometimes I use ask mode, and sometimes I use plan mode. (One very important thing is to instruct copilot, in .github\copilot-instructions.md, to only use its edit tool and not use Powershell to edit files. Otherwise you need to babysit it and approve cryptic find and replace commands.)

For Copilot in Visual Studio, I almost always use Claude Opus 5.5. Some of the GPT models "appear" to work well, but they leave the code harder to maintain.

We now do a round of Copilot reviews with our pull requests in draft mode before asking others to do the review; and we're not spending as much time "reading" code when looking at pull requests.

We don't (yet) have agents running unattended with high-level instructions and then making pull requests.

4) Are you using any agent orchestration or swarm tools?

No

5) Are you using broader agent platforms like OpenClaw / Hermes Agent / Grok bot / Dots / Muse?

No

------

One important thing: I'm after my boss to dedicate time (1-2 weeks) for me to set up and learn more of the hands-off tools. I love working with co-pilot, but it's best for work where I need to be hands-on. I really need to be able to offload simple work, or work where lower-quality results are okay, to a bot that I don't need to supervise.

**tiffanyh** · 2026-11-05T04:35:44 · [#50375238](https://news.ycombinator.com/item?id=50375238)

My challenge is revisiting AI-gen code months later and making sure the AI has the context from our previous work.

How do people handle this?

Do you keep everything in the same conversation thread?

> **sheepscreek** · 2026-11-05T04:51:57 · [#50375342](https://news.ycombinator.com/item?id=50375342)
>
> First off, I cannot pretend I have this solved. But I can share one thing that has worked for me, along with codex maintaining it's own local memory (turn it on).
>
> Have your agent maintain a task journal. It is like a more detailed commit history, that includes tribal knowledge gained during the task and additional context, eg.
>
> X is incorrect but we cannot change it due to some other service depending
> on it, don't use Y as it is deprecated in favor of Z.
>
> Reset your context frequently instead of only relying on compaction. Use the following prompt to summarize the current context for the new agent:
>
> Describe the current project or larger task in progress, then give a
> breakdown of all the planned sub-tasks with status, explain any learnings,
> then note what work is remaining. Write this in a file called HANDOFF.md
>
> Give it a try and feel free to share any improvements.

> **bottom999mottob** · 2026-11-05T04:40:22 · [#50375274](https://news.ycombinator.com/item?id=50375274)
>
> Try to keep context shoved in a conversation thread under a token limit to save tokens.
>
> Ask AI to record in a projects directory memory: LOG.md, HANDOFF.md, DECISIONS.md, a plan folder. Reference code with absolute paths. Keep repeatable processes in skills. Version control it all, and use a dreaming process across multiple sessions to stop repeat mistakes.
>
> That's what's worked for me, but there's many variations of this.

> > **ehostunreach** · 2026-11-05T05:41:57 · [#50375619](https://news.ycombinator.com/item?id=50375619)
> >
> > > Try to keep context shoved in a conversation thread under a token limit to save tokens.
> >
> > For big tasks/features, I'm always creating a new git worktree and I'm using a "status repo" skill that creates a sibling status git repository where everything is recorded.
> >
> > It works quite well whenever I have to revisit something. It's quite token hungry but I have the full trace of what happened in the past.
> >
> > https://gist.github.com/vkalintiris/3ad526e71a75bcba013aaadc9d9d0837.
> >
> > Another approach I want to explore is using https://github.com/netdata/netdata (disclaimer, I work at Netdata) to send all OTel logs/traces of LLMs to it. The idea is to replace the status repo skill with something that will allow LLMs to retrieve the history of a given task/feature. It will probably require some "checkpointing" to make this more efficient.

> > **sheepscreek** · 2026-11-05T04:52:54 · [#50375347](https://news.ycombinator.com/item?id=50375347)
> >
> > ^ This is basically what I was getting at. Thanks for putting it so clearly mate.
> >
> > > Try to keep context shoved in a conversation thread under a token limit to save tokens.
> >
> > That is another solid tip. If using subagents, use the main thread for only the conversation + launching subagents. Tell it explicitly not to implement anything, and only support integration efforts.
> >
> > Doing so keeps the worker subagent's context clean - so it can stay laser focused on the task.

> > **tiffanyh** · 2026-11-05T12:48:22 · [#50378472](https://news.ycombinator.com/item?id=50378472)
> >
> > Thank you.
> >
> > Would you mind explaining what each file is, and how this works (do you create a skill such that AI is doing this on every prompt)

> **hypfer** · 2026-11-05T07:28:43 · [#50376204](https://news.ycombinator.com/item?id=50376204)
>
> You don't.
>
> The context should be self-evident from the code alone, and if it is not, it should be in your head and you should write it down again so that you do not forget it yourself.
>
> Being forced to re-explain stuff to the LLM is good, actually, as that way, one actually thinks about the architecture, choices and limitations.

> **mceachen** · 2026-11-05T06:28:39 · [#50375879](https://news.ycombinator.com/item?id=50375879)
>
> Have your agents keep contexts of tasks up to date as they work on stuff.
>
> I've been iterating on this approach for about a year—it makes switching between agents and harnesses trivial.
>
> https://photostructure.com/coding/claude-code-tpp/

> **coeneedell** · 2026-11-05T04:41:44 · [#50375278](https://news.ycombinator.com/item?id=50375278)
>
> I usually have a “close out” routine that’s something like telling it to record hints to the project’s agents.md. It’s usually pretty good at figuring out what to save, and I usually set up the prompt to point the thing’s attention at the part of the process that made me most frustrated.

**jcubic** · 2026-11-05T12:27:37 · [#50378293](https://news.ycombinator.com/item?id=50378293)

I use Claude Code with Opus 5.5 via ACP inside the GNU Emacs Agent-Shell.

I used Open Code, but they stopped supporting Claude, so I was searching for something different (I had a free 20x Max plan as an open source maintainer). First used Claude Code and then found out about Agent-Shell. Now I'm using the Claude Pro plan.

**peter1125** · 2026-11-05T13:57:59 · [#50379119](https://news.ycombinator.com/item?id=50379119)

1) ChatGPT Pro ($200) 2) APIs for Bivia (previously used Jev) 3) Oh My Opencode - sometimes, not as much. 4) Herdr 5) Hermes, Openclaw, Dots, Instinct, Pickle. Hermes and openclaw for most routines. Dots and Pickle to call while driving. Instinct because imessage makes it easy on the go.

**woopsn** · 2026-11-05T04:56:44 · [#50375378](https://news.ycombinator.com/item?id=50375378)

For personal use: Claude Pro, Opus 5.5, occasionally API / usage credits. Outside of that, some smaller local models (lately poolside)

I still use emacs, I run agents in buffer or in different terminal tabs. I like pi but only claude is approved at work, so I mostly stick to that for consistency.

I'm use 1-3 agents at a time, not more than 2 on the same branch. I have some pipelined workflows but I don't run swarms.. I'm on budget!

**ontouchstart** · 2026-11-05T14:04:43 · [#50379205](https://news.ycombinator.com/item?id=50379205)

I know this is getting meta, but I am sure people and AI would learn a lot from this log:

https://gist.github.com/ontouchstart/b6a08b068cf863f0523bbd8880c88cf4

> **ontouchstart** · 2026-11-05T14:17:28 · [#50379346](https://news.ycombinator.com/item?id=50379346) · _dead, flagged_
>
> I am definitely in the low-volume, low-cost, high quality localist camp:
>
> ----
>
> The Shift from Monoliths to "Task-Specific Routing"
>
> The "one model to rule them all" era is ending. The HN community is adopting a multi-model strategy based on a sophisticated understanding of model "personalities" and cost-performance trade-offs:
>
> The Architect (Reasoning): Claude (specifically Opus 5.5) is treated as the high-level planner. It is used for design, architecture, and complex debugging where "reasoning" is paramount.
>
> The Worker (Execution): DeepSeek (Flash/V4.1) and GLM are the primary choices for high-volume, low-cost implementation. These models are used to "grunt out" code, write repetitive boilerplate, and perform bulk data processing.
>
> The Localist (Privacy/Cost): There is a strong movement toward running Qwen and Gemma locally. This is driven by a desire for privacy, the need for infinite "low-stakes" iterations without token costs, and a growing technical proficiency in local inference (Ollama, MLX).

**abstractcontrol** · 2026-11-05T08:39:45 · [#50376722](https://news.ycombinator.com/item?id=50376722)

Currently I am using the regular Claude extension with VS Code, but one of my friends is working on a new harness called NodeCode that doesn't require regular compaction, so I'll be trying it out as soon as I can get some time to do it: https://nodecode.ai/

**deathmonger5000** · 2026-11-05T03:11:27 · [#50374678](https://news.ycombinator.com/item?id=50374678)

I use Circus Chief to orchestrate workflows that use various combinations of Claude, Codex, Muse, z.ai, and Grok subscriptions. When one subscription runs out, Circus Chief falls back to the next. You can configure tiers to control how that works.

Full disclosure: I’m the creator of the project.

https://github.com/ferrislucas/Circus-Chief

**semireg** · 2026-11-05T03:11:55 · [#50374679](https://news.ycombinator.com/item?id=50374679)

I'm a solo developer. I'd hit walls with openrouter (sonnet/opus/sol) + cline

Now I'm running qwen 3.8 FN + omp + https://github.com/mattpocock/skills

This combination has pretty much "solved" node/react coding for me, running locally on dual RTX 6000, 200-800 tps depending on concurrency.

An incredible time to be alive.

**v3ss0n** · 2026-11-05T08:01:34 · [#50376430](https://news.ycombinator.com/item?id=50376430)

DSH + 3xSpark + GLM5.3 Flash

I dont think i would need anything anymore. Its doing alot more than what i did 2 years ago in within 2 months.

**dismalpedigree** · 2026-11-05T12:05:01 · [#50378153](https://news.ycombinator.com/item?id=50378153)

In the process of moving from claude code (opus 5.5 sub) to opencode with a custom sandbox system and using openrouter locked to certain models and providers with US data region requirements. Claude code is/was great. Just need to move due to industry regulations.

**8lamaster8** · 2026-11-05T08:36:06 · [#50376692](https://news.ycombinator.com/item?id=50376692)

I built my experimental system and I'm using it. I'm genuinely very happy with it. If I had more compute and could run a real, full 30B model locally, I'd be absolutely thrilled.

https://github.com/8lamaster8/GIN

**muppetman** · 2026-11-05T01:10:14 · [#50373734](https://news.ycombinator.com/item?id=50373734)

1) Neither. 2) Yes, I use pay as you go from OpenAI and Anthropic. 3) OpenCode 4) No 5) No

I use OpenCode to update my Home Assistant automations. Home Assistant also does two lightweight checks a day using gpt-5-luna (Look at this photo is the pool cover on or off?). I also use OpenCode for a few other small basic tasks.

This is me personally. At work I have a ChatGPT sub an a, seemingly limitless (I don't use it much tho) OpenAI API key.

**dustypotato** · 2026-11-05T14:03:40 · [#50379198](https://news.ycombinator.com/item?id=50379198)

I have a custom frontend on my android running claude and antigravity CLIs with a UI built on top. Works surprisingly well. It's now about 40 % of my usage . I use it to apply for jobs automatically etc. and orchestrate stuff using adb

**gitgud** · 2026-11-05T14:02:22 · [#50379176](https://news.ycombinator.com/item?id=50379176)

I use

- opencode 2 as the harness it works well for pretty much any specific task

- openrouter to use deepseek flash 4.1 … insanely cheap, works amazingly well and fast

- orca as the orchestrator to manage all the work (self hosted). There’s a mobile app to orchestrate afk too

And yep, vscode to browse repos etc

**chris1993** · 2026-11-04T21:52:38 · [#50372070](https://news.ycombinator.com/item?id=50372070)

I'm using claude with a pro subscription. Claude Code extension in VSCode devcontainers and Claude CLI in a restricted Windows account in powershell terminal for android development. No orchestration other than a directive in CLAUDE.md to allocate coding tasks to sub-agents.

I've moved all my ssh keys into a key-agent which prompts for key use as I got alarmed by claude attempting to login to remote systems to verify things as it worked through problems.

> **sharathr** · 2026-11-04T22:10:25 · [#50372231](https://news.ycombinator.com/item?id=50372231)
>
> try https://www.droneship.run

**anonzzzies** · 2026-11-05T02:41:54 · [#50374450](https://news.ycombinator.com/item?id=50374450)

1. max 200 on claude (3x) and codex (1x) 2. yes, mistral / glm / deepseek via openrouter and some others 3. custom 4. custom 5. no

**ct0** · 2026-11-05T14:38:50 · [#50379635](https://news.ycombinator.com/item?id=50379635)

One of those lenovo Mini pc running Ubuntu (plex server) that was just sitting idle. I installed tailscale and Claude code on it and run rclone with my Google Drive if I need to review docs on the go. I ssh into it from my iPad.

**mickyngub** · 2026-11-05T09:03:06 · [#50376902](https://news.ycombinator.com/item?id=50376902)

I use both Claude Code and Codex with a bunch of project-specific skills and AGENTS.md files. Worktrees have been really useful when running multiple sessions on the same repo, otherwise they can step on each others changes.

Still figuring out how much should go in AGENTS.md though. Mine keeps growing lol.

> **VibeBootHQ** · 2026-11-06T14:05:37 · [#50392440](https://news.ycombinator.com/item?id=50392440) · _dead, flagged_
>
> A rule of thumb that helps: only put in AGENTS.md what the agent can't learn by reading the code. Stack and commands, folder conventions, and a short "never do X" list with a reason for each. If a rule can be enforced by lint or a test, move it there and delete the line. Prune whenever two lines say the same thing.

> **abyssmd** · 2026-11-05T19:46:56 · [#50383530](https://news.ycombinator.com/item?id=50383530) · _dead, flagged_
>
> I keep exact build, test and lint commands in the root file, plus constraints the agent cannot infer from the code. Topic detail goes into docs with explicit pointers such as "read docs/billing.md before changing billing/". That gives the agent a reason to open each file, and makes pruning easier when a rule stops earning its place

**alok-g** · 2026-11-05T03:05:17 · [#50374637](https://news.ycombinator.com/item?id=50374637)

For software development, I am using Kilo Code (https://kilo.ai) extension on VSCodium, with Kilo credits that gives access to hundreds of models at API pricing.

For day-to-day tasks, I am using Goose (https://goose-docs.ai) with OpenRouter.

> **hosteur** · 2026-11-05T11:29:58 · [#50377903](https://news.ycombinator.com/item?id=50377903)
>
> I use Kilo Code as well (with jetbrains IDEs though). I bring my own API credits.
>
> I am curious why you use Kilo credits? What benefits does that give you over buying the credits directly?
>
> To me it seems like an obvious unnecessary middleman...

> > **alok-g** · 2026-11-05T20:07:27 · [#50383792](https://news.ycombinator.com/item?id=50383792)
> >
> > I'm doing that just to use a number of models without needing to manage separate accounts for the model providers. Kilo claims they charge at the provider's API pricing, not extra like OpenRouter does.
> >
> > I am not sure however if this approach is optimal. Monthly subscriptions may be offering much higher value than API pricing.
> >
> > How do you find Kilo vs. various other alternatives? I observe that it is barely talked about on HN and elsewhere. Thanks.

> > > **hosteur** · 2026-11-06T06:28:41 · [#50388891](https://news.ycombinator.com/item?id=50388891)
> > >
> > > I haven't tried a whole lot. I tried Cline which I found hugely unstable and slow. I also tried the Google and Anthropic CLI ones very early on. They were a bit unstable at the time. So I guess I just stopped looking around much after trying Kilo Code because it gets the job done.
> > >
> > > I am curious, when do you typically run different models? Do you put the same tasks to multiple models in parallel and compare the results? Or do you have a heuristic that model A is best for certain types of tasks and model B for others, etc?
> > >
> > > I have found that recently I seem to just use deepseek for almost everything. It is just good enough and much much cheaper than everything else.

**ccapndave** · 2026-11-05T12:25:07 · [#50378273](https://news.ycombinator.com/item?id=50378273)

ChatGPT Pro (the $100 plan). Like many people here, I used AI to build my own orchestrator so I can work on multiple tasks across multiple projects without going insane. For reviewing code and (god forbid) writing something by hand I use zed.

**regnull** · 2026-11-04T23:59:50 · [#50373129](https://news.ycombinator.com/item?id=50373129)

I feel like this is a great opportunity to mention https://github.com/regnull/openbot, my attempt to create an open-source tool similar to Grok Bot. You can hook it up to OpenRouter and solve 80% of problems with 1/10th of the cost. I use it all the time. Contributors are always welcome.

**ActionHank** · 2026-11-05T13:57:04 · [#50379104](https://news.ycombinator.com/item?id=50379104)

Hermes + GLM 5.3 Flash for orchestration. omp + Deepseek 4.1 Flash for coding. Occasional call out to claude for a review on a large change.

Hermes Kanban works stupidly well here and omp running on a slice in a worktree fans out really well.

**athrowaway3z** · 2026-11-05T08:11:30 · [#50376505](https://news.ycombinator.com/item?id=50376505)

1) 3x $100 , swapping between openai/anthropic

2) DeepSeek when even OpenAI complains about cyber security stuff.

3) Pi in Emacs (Pillish) and a yet-to-be-published pi-deck on top which makes it more like herdr with more features.

4) custom pi orchestration. Mostly 2 tools: `do` (fork conv with question) and `delegate` (new pi session with question)

5) no

**joshstrange** · 2026-11-04T15:48:21 · [#50367272](https://news.ycombinator.com/item?id=50367272)

1. Claude Ultra for personal, Claude Max for work, Codex $100/mo

2. OpenRouter, DeepSeek, Luna, and testing out models here and there

3. Claude Code and Codex for the respective subscriptions. Played with OpenCode and Pi some as well

4. I've tried a number of these tools and settled on my own tool (not released) to oversee my agents

5. Played with OpenClaw and Hermes in the past, cool ideas but execution fell flat. I currently use Dots and Duet for little things (mostly monitoring communications). Dots is much better than Duet today but I hope Duet gets better.

**joshheitzman** · 2026-11-05T04:21:55 · [#50375145](https://news.ycombinator.com/item?id=50375145)

My own agent: https://github.com/fluxmoot/fluximp

I primarily use DS v4.1 Flash @ deepinfra.com with less use of GLM 5.3 Flash and GLM 5.3 @ friendli.ai

I use a locked down (i.e. many tools disabled; shell especially) setup of oh-my-pi in benchmarks for comparison.

**tomasulo** · 2026-11-05T08:05:36 · [#50376454](https://news.ycombinator.com/item?id=50376454)

My current setup is Herdr + oh my pi + pi. Then I mostly use oh my pi's "prewalk" feature with Opus/Sonnet as planner and Deepseek Flash 4.1 as executor. I use OpenRouter to access the models.

This setup is working really well for me and provides a good balance of cost and efficiency.

**tomburgs** · 2026-11-05T10:38:48 · [#50377557](https://news.ycombinator.com/item?id=50377557)

1.) None anymore. They're all turning into increasingly poor value for (my) money. I need AI on my own schedule and don't want to be paying for compute I don't need and end up waiting for limits to reset when I do need it. If I was to use one though it'd probably be Opencode Go.

2.) Yes, I'm currently using OpenRouter. It's good for quickly switching around and trying different models, but I currently have it constrained to just 3 models and 1 provider. Truthfully I could just use that provider directly, but I like retaining some flexibility.

3.) I've been using OpenCode for over a year. I think it's an incredible tool and its wide support is a massive boon. It's really easy to pull in skills, tag the skills, and switch providers. Their more recent changes turning the CLI into more of a GUI has been quite annoying (wdym I have to tap an X in my CLI to close a tab), but not enough for me to (yet) look elsewhere.

4.) Nope, no idea what those are but thanks for teaching me about something new.

5.) In EU (DK) so we don't get access to Dots or Muse like everyone else. I have used Grok Bot and I really like it. It's super helpful and I'm using it as a personal assistant. I delegate tasks to it that I just can't be bothered doing manually or can't figure out easily (e.g using some accounting tools, figuring out cryptic documentation, etc.). I've also used Hermes Agent, but I didn't like it as much. It's great intent but the UI/UX is really not it. It looks like it was taken out of a 90s hacker movie and I'm sure some people like it, but I prefer tools that look polished and focused. I might switch back to it though if something was to happen to Grok Bot.

P.S the models I primarily use are DeepSeek V4.1 Flash 1017 and GLM 5.3 Flash. If you use skills to their full potential they feel SotA to me (my reference point for SotA being OpenAI models we use at work, since we have an enterprise agreement).

**zahlman** · 2026-11-05T15:57:31 · [#50380756](https://news.ycombinator.com/item?id=50380756)

None. I let LLMs write code, but I'll input the Bash commands and run tests etc. myself, thanks. (And of course I exercise my own agency in that; I am not a meat proxy.)

> **jockm** · 2026-11-05T16:02:44 · [#50380825](https://news.ycombinator.com/item?id=50380825)
>
> Agreed, when I use an LLM it is a collaboration for want of a better word. I am auditing everything, guiding it, rejecting things I don’t like, and deciding when commits happen. It’s a tool, not a replacement

**OSaMaBiNLoGiN** · 2026-11-05T10:29:18 · [#50377492](https://news.ycombinator.com/item?id=50377492)

I tell the computer to do my job for me and then I play videogames all day.

I am salaried making > six figures and all I do is press the think button on the funny little screen.

I largely assume that all the micro optimizations people are making to their "agentic setups" is just bikeshedding. There's not much else for them to think about now. Probably makes people feel useful if they can get 0.5/1% improvements to their job-doer robot.

That being said, I've found peace in just embracing it. Work didn't require me to think anymore, so I've found some of that in trying to get very very good at a videogame. Quantifiable improvement, problem solving, adapting to new scenarios, etc.

But for work all that is needed is "computa, fix the bug".

Edit: To clarify, I spent my entire teens studying this field. Starting at age 11. Over 15 years of this being the sole focus in my life. I enjoyed the process more than anything in life. But that process is no longer what is being asked of us. I see no point in continuing to obsess over a field that, frankly, doesn't exist anymore. At least not in the shape that I have an ability to derive fulfillment from. If you still can, I'm both happy for you and envious of you.

I am not an AI bro. I don't like AI. It hasn't made my life better in any way shape or form. In fact, it has only made it worse.

Edit 2: I also learned how to read music, started playing the Piano, and started to learn how to properly draw. I don't find any of these things as fulfilling as I did programming pre-AI, but they aren't nothing.

> **jvidalv** · 2026-11-05T10:34:11 · [#50377528](https://news.ycombinator.com/item?id=50377528)
>
> I agree, kinda funny seeing all people trying to optimize it with Superpowers/Grill and any new shinny toy.
>
> I just run Claude/Codex raw, always did, before I was always forcing plan mode before any task, but they are so good right now that not even that is needed anymore 90% of the times.
>
> Also before I was at least using terminals, now? Not even that, Claude Desktop and ChatGPT desktop apps all the way.

> **38295gksnf9588** · 2026-11-05T10:41:10 · [#50377580](https://news.ycombinator.com/item?id=50377580)
>
> I don’t buy this. I think it’s a made-up answer.

> > **OSaMaBiNLoGiN** · 2026-11-05T10:41:54 · [#50377587](https://news.ycombinator.com/item?id=50377587)
> >
> > Tell that to my 62% Xerath winrate. I'm fucking owning.

> **ChromeUltron** · 2026-11-05T10:30:49 · [#50377505](https://news.ycombinator.com/item?id=50377505)
>
> utterly disgusting

> > **OSaMaBiNLoGiN** · 2026-11-05T10:33:49 · [#50377524](https://news.ycombinator.com/item?id=50377524)
> >
> > Agree. Hate it. But it outputs the results that satisfy employer.
> >
> > I would rather AI not exist. But it does. No sense in ignoring it.

> **kshri24** · 2026-11-05T10:42:27 · [#50377593](https://news.ycombinator.com/item?id=50377593)
>
> Funny username and equally hilarious comment. Hope you never get caught/fired. More power to you!

> > **OSaMaBiNLoGiN** · 2026-11-05T10:43:31 · [#50377598](https://news.ycombinator.com/item?id=50377598)
> >
> > Employer is fully aware. I'm kept around because I provide a "valuable perspective" and regularly have "product-shaping ideas".
> >
> > I don't know what either of those two things actually mean.

> > > **kshri24** · 2026-11-06T10:28:39 · [#50390590](https://news.ycombinator.com/item?id=50390590)
> > >
> > > It'll be even funnier if you are being given feedback via AI for your work done using AI lol.

> **fergonco** · 2026-11-05T11:08:06 · [#50377765](https://news.ycombinator.com/item?id=50377765)
>
> I've been the whole morning reviewing and fixing a PR done by opus-5.5. The implementation wasn't even following requirements 100%, inventing some, ignoring some deps and building from scratch so many things.
>
> I have so many questions:
>
> * What kind of work are your agents producing?
>
> * Why is your employer happy with that low quality output?
>
> And most important,
>
> * are you hiring? I could finally finish tetris!

> > **OSaMaBiNLoGiN** · 2026-11-05T11:12:07 · [#50377790](https://news.ycombinator.com/item?id=50377790)
> >
> > - Backend web shit. Boring.
> >
> > - Because it solves the problems they need solved.
> >
> > - Before AI companies whitelabelled humanity's accomplishments, I was very performance-minded. I still am I guess. I benchmark every function and if it's slower than I anticipated I tell the computer to fix it. A few months ago I would sometimes have to do it myself. Now I don't.
> >
> > - Not hiring. I'm pretty sure I only have a job for a couple more months. I don't see the point of having a dev team, and I'm on the dev team. Then I'll start an onlyfans or get addicted to some cool drug. Not sure.

> > > **whoanoway** · 2026-11-05T11:14:02 · [#50377806](https://news.ycombinator.com/item?id=50377806) · _dead_
> > >
> > > Irl gay for pay. You have to be a "straight" guy because betraying yourself is the saleable part.

**ultrasandwich** · 2026-11-05T08:27:37 · [#50376632](https://news.ycombinator.com/item?id=50376632)

1. Claude (max) + Opencode Zen. 2. Tried some other models via OpenRouter but the pricing just doesn't justify usage sometimes. 3. Claude + OpenCode harness. Using Paseo sometimes to coordinate parallel tasks although I quickly run out of memory or grind to a halt doing this. Mentally I can't coordinate more than 3 or so coding tasks at once, and physically my Macbook pro suffers when going more than this. Convenient. 4. Forget swarms, I can't even handle 4 parallel tasks. 5. Tried, and these seem deeply overcomplicated, very AI-built, and ultimately not useful.

**easterncalculus** · 2026-11-05T02:36:22 · [#50374417](https://news.ycombinator.com/item?id=50374417)

1. Claude $20/month and Cursor $20/month (I've been meaning to close it) I mostly use Opus 5.5 on Medium. I've been experimenting with High effort, mainly at work.

2. I have an OpenRouter $50 pay as you go API key that I use for Mercury 3 at this point, primarily for tokens per second. I also use GLM 5.3 when I inevitably get [cyber] blocked (or for reverse engineering in general, apparently) by the morality police at Anthropic.

3. I run things pretty stock. OpenCode with OpenRouter but otherwise I just use Claude code.

4. I've never used these, but I'm curious about them at this point.

5. Not yet, but also interested. My plan is to use Hermes for some personal agent work on a local model, but I have not set it up to test this yet.

**tomsellin23** · 2026-11-05T15:19:27 · [#50380200](https://news.ycombinator.com/item?id=50380200)

Ok Grok Bot, what a damn help. It does so much for me, including my scheduling, runs all sorts of reports I wasn't getting before, checks my emails for me, responds for me with my approval, and so so much more. And I think I'm only scratching the surface of it all. It's worth every penny I'm paying.

**_rousbound** · 2026-11-05T18:38:08 · [#50382719](https://news.ycombinator.com/item?id=50382719)

I'm very happy right now with:

- DeepSeek Chat for reasoning about some idea

- DeepSeek Flash as pay-as-you-go API provider

- Maki as my harness

It is cheap, and I feel like it is a sustainable workflow, both financially and cognitively.

**boudra** · 2026-11-05T07:22:43 · [#50376167](https://news.ycombinator.com/item?id=50376167)

I use Paseo for mobile / desktop UI, and as an agent runtime for some automation in a dedicated Hetzner box.

I try to keep the harness setup simple and portable, I use Claude Code or Codex with their subscriptions, I invest a lot of time in my skills which are shared between them.

Disclaimer: I am the Paseo maintainer.

**ghempton** · 2026-11-05T02:48:33 · [#50374491](https://news.ycombinator.com/item?id=50374491)

1) claude, claude again, codex, antigravity, cursor 2) no 3) using a variety of different harnesses managed by codealong 4) built https://github.com/codealong/codealong 5) openclaw not used very much anymore in favor of native harnesses

**mangasmango** · 2026-11-05T07:40:23 · [#50376286](https://news.ycombinator.com/item?id=50376286)

1) Opencode GO 10euro (claude max at work payed by empl) 2) Online opencode 3) Opencode harness is better at keeping your costs low but claude code on ultra code is simillar to agent orchestrator 4) Agent orchestrator 5) Ive tried hermes agent but my little server cant hold it :(

**brentrockwood** · 2026-11-05T11:54:19 · [#50378077](https://news.ycombinator.com/item?id=50378077)

1. - OpenAI $200 - Claude Max 20x (Granted via Claude for Open Source) 2. - Various Qwen via Local 128GB Strix Halo - Some HuggingFace API use when I need a specific model for something 3. Pi, Pi-web, Custom built 4. No 5. No

**yakkomajuri** · 2026-11-05T13:20:04 · [#50378756](https://news.ycombinator.com/item?id=50378756)

1. Claude $200 + Codex $100. I never hit limits since realizing that trying to have too many agents running at once just wasn't effective. I'm probably overpaying.

2. No

3. Lynx (lynx.railcode.dev) & CLIs (less and less since Lynx)

4. No

5. Tried a few but never stuck around

**liendolucas** · 2026-11-05T11:15:18 · [#50377816](https://news.ycombinator.com/item?id=50377816)

None. It prevents brain athrophy.

**Asmod4n** · 2026-11-05T10:30:24 · [#50377501](https://news.ycombinator.com/item?id=50377501)

I’ve build myself a framework how a group of agents can verify if it’s done a good enough job.

After around 30 days I’ve implemented around 90% of how you manage a team in emergency medicine by accident and then applied the rest of it to it.

I’m quite happy with what they produce.

> **blodkorv** · 2026-11-05T10:58:56 · [#50377708](https://news.ycombinator.com/item?id=50377708)
>
> Could you describe a bit more what this framework is and how you built it?

> > **Asmod4n** · 2026-11-05T11:37:14 · [#50377952](https://news.ycombinator.com/item?id=50377952)
> >
> > I keep one git repository as the shared memory for every agent session.
> >
> > 1. I got a set of rules how it’s allowed to do work, and more importantly: what’s forbidden.
> >
> > 2. One state file per repo. It’s getting recorded what was tried, its results and the learnings from the experiments.
> >
> > 3. Tasks as Org mode files, one file per task and who works on it, aka codex, Claude code and which model.
> >
> > Agent Hooks hold this together, the task and state files get updated automatically.
> >
> > Code work happens on one branch per task. A second agent reviews each plan before code gets written.
> >
> > I’m still baffled how well this works.

**hridyaagrawal** · 2026-11-05T10:43:06 · [#50377597](https://news.ycombinator.com/item?id=50377597)

1) Claude Ultra 2x + Chatgpt Plus 2x 2) none 3) defaults 4) T3 code -> really great for multi-machine orchestration + multi-harness work 5) Made a OpenBot fork mainly as "captains" to control my t3 threads across projects better

**fhcbix** · 2026-11-05T09:08:15 · [#50376941](https://news.ycombinator.com/item?id=50376941)

Codex and Pi, both with custom model provider pointing at the (currently free) Hetzner Inference API. Mostly for understanding code and prototypes + refactors, fully vibe-coding stuff in languages I know well just isn't fun so I have no use for that.

**paustint** · 2026-11-05T01:37:55 · [#50373956](https://news.ycombinator.com/item?id=50373956)

I was using VSCode with Claude Code extension, multiple tabs at once, multiple instances per worktree.... then I listened to the Lex Fridman episode with DHH [1] and they mentioned Herdr [2] and I tried it out - NEVER LOOKED BACK! It has been an extremely long time since I completely abandoned and changed my setup - surprised myself.

Herdr is awesome - it pings me when an agent is done or needs my attention and shows me all my terminal panes that are running an agent that I can access with one click.

I am now 90% Herdr terminal, open IDE maybe 1-2 times a day just for more convenient way to look at something. I searched ways to stay in the terminal - found lazygit and love it!

I use long-running worktrees (e.g. named worktree-1, worktree-2, worktree-3, ...) and have parallel work going on in them so I can work on whatever I want.

In each Herdr workspace, I have three tabs: 1st is for ~3 panes, one for Claude and two or more to run the app and basic terminal. Tab 2 for lazy git, and Tab 3 for an extra terminal when I need one. For example, right now I have ~20 Herdr workspaces open now between a few projects, multiple worktrees per project and a few across remote machines ready in case I need them. When in the zone, I might have 1-8+ agents working on completely different tasks.

I have a couple remote machines over SSH that I use when I need a task to run and I need to close my laptop.

I have a keyboard shortcut to init my workspace to that setup. lazygit is amazing.

I ask claude to do everything for me, for example: "Let's do it, open a jira ticket, assign to me and put into sprint. Fix it and open a pr"

I create artifacts all the time to share findings with team or as a checklist of manual testing I need to do.

I find that gh copilit does pretty good review on PRs, and I have a claude skill to go address all the copilot feedback (review, validate, reply, resolve, push changes if any were made).

I was on the 200/mo Claude plan but had to switch to the Team plan, so I pay 120/mo for two users and I swap to the 20 plan when I hit my 5hr limit on my 100/mo plan.

[1]: https://lexfridman.com/podcast -> DHH: Future of Programming, AI, Agentic Engineering, Vibe Coding & Linux [2]: https://herdr.dev/

**joegibbs** · 2026-11-05T07:39:33 · [#50376279](https://news.ycombinator.com/item?id=50376279)

1. Claude Max with Opus 5.5 and the ChatGPT $20 plan, I have a few thousand bucks of credits since they reduced the Codex plan so I’m using it for all the bulk data tasks that it would be a waste to use Claude for.

2. ChatGPT Image still looks really bad to me so I use Gemini Image. I tried Argon but it really didn’t work for me so I just use the image model at API rates.

3. Just the default Claude/ChatGPT desktop apps. I used the command line tools for a while but the desktop ones are much easier to use when working with images, and you get the usage down the bottom.

4. No, I think this is all a big gimmick. I barely use subagents. It makes sense to have multiple people at a company with different roles due to their different capabilities and experiences - but when the models are identical clones then why not just have one do the whole job? I only use subagents for bulk data tasks because otherwise they get distracted chitchatting with each other.

5. No, I haven’t tried them yet. What’s the benefit over ChatGPT or Claude?

> **mangasmango** · 2026-11-05T07:43:23 · [#50376304](https://news.ycombinator.com/item?id=50376304)
>
> If you use claude code on ultracode it already spawns subagents by default now, i think agent orchestrator has the only benefit of ofloading some tokens and making the subagents to not get distracted by the bigger picture but i cant see any use case of the broader orchestration on a project that is already solid and you just push features and debug, a single session give you more ownership of what is build

> > **joegibbs** · 2026-11-05T08:07:45 · [#50376476](https://news.ycombinator.com/item?id=50376476)
> >
> > Yeah, the ability of the sessions to message each other turns it into a mess. They all start messaging each other with unrelated tasks and you end up not knowing what each thread is meant to be working on.
> >
> > I notice that single-threaded agents get stuck with things sometimes like writing some tool they need inefficiently so that it takes 3 hours when it could be 3 minutes (meaning that a task ends up taking days instead of hours, unless I intervene and tell it to make a fast tool instead) but subagents just compound this as they burn through tokens without realising the problem.

**internet_points** · 2026-11-05T09:58:48 · [#50377307](https://news.ycombinator.com/item?id=50377307)

1) What AI subscriptions are you personally paying for? (Claude, ChatGPT/Codex, Cursor, etc)

None.

2) Are you using models outside (or instead) of those subscriptions? For example, pay-as-you-go APIs, OpenRouter, or locally hosted models.

I have a few ChatGPT API credits. I think I've payed at most $40 in one year, using 5.4.

3) What coding harnesses and interfaces are you using? Are you sticking with the default CLIs or IDE integrations, or using alternatives like OpenCode, Pi, Aider, Muse Code, or custom-built harnesses?

Just gptel in a firejailed Emacs. I don't do tool calling. Mostly just code review (have personal scripts set up to get diffs and automatically redact stuff).

4) Are you using any agent orchestration or swarm tools?

No.

5) Are you using broader agent platforms like OpenClaw / Hermes Agent / Grok bot / Dots / Muse?

No.

I'd like to try agent stuff using a local model, but it seems quite expensive to set up. I don't feel comfortable giving so much access to OpenAI/Anthropic.

> **sigmoid10** · 2026-11-05T10:00:53 · [#50377323](https://news.ycombinator.com/item?id=50377323)
>
> How did you end up with only $40 in API cost despite using AI daily?

> > **internet_points** · 2026-11-05T10:48:26 · [#50377633](https://news.ycombinator.com/item?id=50377633)
> >
> > Were you looking at another comment? I had to reread what I wrote, and I can't understand where you'd get the impression that I use it that much. I don't even use it daily (looking at my stats, it seems I used it less than every other day).
> >
> > gpt5.4 pricing per million tokens is Input: $2.50 Cached input: $0.25 Output: $15.00
> >
> > I tried re-running a rather long code review request I had lying around, and gptel says it spent 2.2k tokens; I don't know if that's input or output or what, but if we say it's output since that's the most expensive, then that single review cost me just $0.033.

> > > **sigmoid10** · 2026-11-05T18:16:56 · [#50382386](https://news.ycombinator.com/item?id=50382386)
> > >
> > > I know about the prices and that's why I wondered how you could possibly give an answer to these questions. But now I'm just wondering why you felt compelled to answer here when OP specifically asked about day-to-day AI use and agentic workflows and you seem to have experience with neither.

> > > > **internet_points** · 2026-11-06T11:51:22 · [#50391246](https://news.ycombinator.com/item?id=50391246)
> > > >
> > > > OP said "I'm curious how people on HN are using AI day to day" and I gave an honest answer. If the answers were only from those using agentic setups daily, that would give a skewed picture. (And I do have some experience with agentic coding, but for now I'm staying away from it; mainly because I don't trust it with my data and I can't quite justify the cost of a local setup.)
> > > >
> > > > But before this thread gets too deep, maybe you want to ask https://news.ycombinator.com/item?id=50376720 why they feel compelled to answer here. Or https://news.ycombinator.com/item?id=50375782 . Or https://news.ycombinator.com/item?id=50367460 . Since you were wondering.

**jasondigitized** · 2026-11-05T17:11:25 · [#50381626](https://news.ycombinator.com/item?id=50381626)

Keeping it simple. Codex and Claude on my Mac. CLI and MCP/Connectores, File Reader and Browser are all built in. And they are both getting better everyday.

**flavius37** · 2026-11-05T08:51:36 · [#50376814](https://news.ycombinator.com/item?id=50376814)

Here is a summary of the comments from this thread. Updates will follow to include latest comments too.

https://techaddo.com/posts/ai-agentic-setups

**sksksk** · 2026-11-04T16:27:36 · [#50367930](https://news.ycombinator.com/item?id=50367930)

At work, we're using Kiro. I've got no complaints.

In my personal life, I'm extensively using Hermes. If you look at some previous comments you can see what I use it for. I genuinely think personal AI agents are the future, the way I feel when I use it is how I felt when I tried out the first iPhone. In 5 years time, I think most people will have a personal AI agent in the same way the most people now have an e-mail address.

**naxmax** · 2026-11-05T07:25:26 · [#50376182](https://news.ycombinator.com/item?id=50376182)

I use Claude, glm , Kimi, codex and also outside of coding grok bot.

I’ve been building a harness and so use that and frequently benchmark against others.

I’ve also built tools so agents across accounts and across apps (Claude > codex > grokbot) can all communicate with eachother.

**dmillar** · 2026-11-04T16:30:05 · [#50367970](https://news.ycombinator.com/item?id=50367970)

1. Claude Max - two (personal and work), ChatGPT plus, OpenAI (PAYG at work), Gemini PAYG (mostly for automated transcription). I could probably cut my personal Claude Max account, but hang onto it for the constant stream of personal project ideations.

2. Yes, per above

3. Mostly Claude Code, occasionally OpenCode and Codex. Rex/Ghostty as the interface to it all.

4. Yes, lightly, a custom orchestrator

5. Not actively, have tried most ex Grok Bot, but haven't taken the time

**world2vec** · 2026-11-04T16:53:29 · [#50368325](https://news.ycombinator.com/item?id=50368325)

1) Claude Code (Claude Teams Premium seat) plus pi.dev (self-hosted GLM-5.3) at work, Claude Pro at home. Opus 5.5 Extra effort for ~99% of the prompts.

2) Not really, messed around with Openrouter and Deepseek for some stuff that Claude refused to do

3) I use Claude Desktop (Linux) and a heavily modified pi.dev at work VSCode as IDE. At home just use the iOS app and Claude Desktop (Windows).

4) No

5) I have Hermes Agent setup at work and home but don't really use it.

**elestor** · 2026-11-05T14:30:42 · [#50379530](https://news.ycombinator.com/item?id=50379530)

1) None, I use freellmapi https://github.com/tashfeenahmed/freellmapi

2) No

3) Oh my pi in bwrap sandbox, used to use Opencode

4) No

5) No

**xeonax** · 2026-11-04T16:05:51 · [#50367569](https://news.ycombinator.com/item?id=50367569)

At work Claude Desktop with Opus 5.5. At home Deepseek Harness, 5-15USD per month. I don't like CLI harnesses. coz it looks too monotonous. I prefer default agent orchestration of the harness, since its their job to take care of it. not something I should spend my time and efforts on. If I did, high chance it will get out-dated soon. I do not trust agent platforms. Lethal Trifecta comes to mind.

**gogoro** · 2026-11-05T08:31:13 · [#50376652](https://news.ycombinator.com/item?id=50376652)

t3code on my mac and omarchy, connected to my VMs with tailscale, that runs inside my own proxmox cluster.

I get to separate my work, have a lot of compute, manage it from anywhere, and also have my agents go bananas in their VMs.

I also run 1x Claude Ultra, 1x Claude Max, 1x Grok with X Premium, and 1x OpenAI sub.

I think the biggest leverage move for me was to get the VMs. Now I get to group my work better, and give my agents a lot more power by running more freely.

t3code has been a solid boost as well. It did hurt really bad tho, because I have been a terminal nerd for a long time. But the speed I've been able to achieve across a lot of projects has been crazy with t3code.

> **theLiminator** · 2026-11-05T08:34:41 · [#50376683](https://news.ycombinator.com/item?id=50376683)
>
> What about t3code makes it better than herdr or something else? Is it the cross agent messaging ability?

> > **gogoro** · 2026-11-05T09:02:25 · [#50376898](https://news.ycombinator.com/item?id=50376898)
> >
> > thb for me it's been the workflow around it. Things like: - Pulling up my phone, dictating a quick thing and sending it of to work on one of my servers. - Shooting things off to claude code, codex, grok, so fast. So well integrated. - Hitting snooze on a session for next week - hiding sessions in snoozed and working, so I can focus on what needs me now. - Dragging filed straight into the chat - Quickly looking at the diff on the side and go through files with the "viewed" button as in github. - ctrl+j to get a terminal quickly to do something fast - ... So many more but this is top of mind.
> >
> > I just get so much more done, faster, with less context fatigue than before because of how it's laid out.
> >
> > This is the video that really flipped me. https://www.youtube.com/watch?v=dLhcLqoff6k
> >
> > Was a hard hit to my identity... But the gains was just too big.

**fritzo** · 2026-11-05T15:40:58 · [#50380504](https://news.ycombinator.com/item?id=50380504)

Cursor + Codex + Claude each at $20/month + API usage, <$100 total.

I still like to read code in an IDE.

Every few months my favorite model becomes an idiot savant so I need to switch.

**lamuswawir** · 2026-11-05T15:38:34 · [#50380473](https://news.ycombinator.com/item?id=50380473)

I use meta ai pro subscription. Plus deepseek API. I hop around alot, have held Google AI Pro subs for most of the time.

I use pi as the general agent for most of the work.

**docheinestages** · 2026-11-05T10:56:18 · [#50377686](https://news.ycombinator.com/item?id=50377686)

I'm yet to find any value in complex software factories and multi agent harnesses. If you know what you're doing, you can just use Codex or Claude for the core research and development.

**__alexs** · 2026-11-05T07:49:04 · [#50376348](https://news.ycombinator.com/item?id=50376348)

Claude Ultra, No, Claude Code, Claude Code can orchestrate agents, No, but I run Claude Code on a VPS of its own for some things.

We have an OpenSWE agent on Slack at work but it seems horribly expensive and slow for anything I want to do.

**lylo** · 2026-11-05T06:45:54 · [#50375959](https://news.ycombinator.com/item?id=50375959)

Claude Pro. Mainly used for developing my apps Pagecord and Feedgrab, but also for personal stuff like diy problem solving. travel planning, data chores, etc.

I feel I get a wild amount of value out of £90/mo (paid for via my apps revenue)

**Havoc** · 2026-11-05T08:09:22 · [#50376488](https://news.ycombinator.com/item?id=50376488)

Just pi with some custom mcp for search and web. Oh and Hermes but limited use

Currently on a GLM sub and will need to decide whether to renew in 3 months.

People are complaining about the new plans usage limits but I do have a -50% discount so idk

**rodolphoarruda** · 2026-11-05T09:40:19 · [#50377173](https://news.ycombinator.com/item?id=50377173)

No subscriptions. Using pay as you go Muse Spark 1.3 contributor version set in medium for everything from infrastructure management to pure coding in Pi. No orchestration and no agent platform.

> **gl0wa** · 2026-11-05T10:11:35 · [#50377387](https://news.ycombinator.com/item?id=50377387)
>
> Muse Spark 1.3 contributor might not be the smartest or fastest, but it does well most of the tasks and is super cheap.
>
> I often brainstorm some ideas for apps for personal use on ChatGPT with a few prompts, and when happy with the rough shape of the concept, asking it to spit out a prompt to execute it on OpenCode with Spark. Usualy this gets done in a one shot or a little refinement and costs only a few cents. I hope the contributor version is here to stay.

**samf** · 2026-11-05T11:57:23 · [#50378103](https://news.ycombinator.com/item?id=50378103)

I'm hoping to read people's experiences with cmux. My son showed me a demo, and I was pretty blown away. I haven't had time to look into it much myself.

> **darkamaul** · 2026-11-05T11:59:53 · [#50378115](https://news.ycombinator.com/item?id=50378115)
>
> I have been using cmux for a year before transitioning to Rex. In the end I realized I only used two features of cmux: tabs and workspaces.
>
> And I liked it but I had the feeling it’s starting to be a be bloated and they started pushing features with their account I don’t need.
>
> So far Rex has been a great alternative.

**drbscl** · 2026-11-04T16:12:56 · [#50367676](https://news.ycombinator.com/item?id=50367676)

I use Orca as an “ADE” (mostly for the multi-worktree interface and mobile app).

In my day job I use Claude Code & Codex subscriptions (Codex is mostly for review, second opinion, and as a backup).

Personally I use both oh-my-pi and Hermes with a Codex subscription. I tend to use OMP more now though, since I find its interface a bit nicer when working on the laptop.

> **behole** · 2026-11-04T16:15:11 · [#50367713](https://news.ycombinator.com/item?id=50367713)
>
> Nearly identical setup except I splash some Chinese models in there like DeepSeek v4.1-10-17 and GLM 5.3

**andsoitis** · 2026-11-05T08:46:12 · [#50376783](https://news.ycombinator.com/item?id=50376783)

Cursor + Grok for serious engineering work.

Local Qwen and custom harness to experiment.

**Irissiqi** · 2026-11-05T01:19:21 · [#50373805](https://news.ycombinator.com/item?id=50373805)

1）claude（pro）、ChatGPT（business）、Kimi（pro）；各一个订阅； 2）是的；Deepseek（API）； 3）默认的CLI； 4）否； 5）否。

我是谁：一名做基础医学数据分析的博士研究生。

**imagetic** · 2026-11-05T05:32:37 · [#50375578](https://news.ycombinator.com/item?id=50375578)

pi, a few custom extensions for pi, rex, gpt + ollama-cloud for a little ds4.1f

> **imagetic** · 2026-11-05T05:45:44 · [#50375645](https://news.ycombinator.com/item?id=50375645)
>
> as of late i started running out of 5h quota on gpt plus and felt coerced to upgrade to pro. i'm pretty grumpy about it.

**tarasyarema** · 2026-11-05T11:47:14 · [#50378028](https://news.ycombinator.com/item?id=50378028)

1. Claude and Codex 2. Openrouter for deepseek and Helmcode 3. All of them, mostly claude, codex and pi 4. We use agent-swarm.dev (self-hosted OSS MIT) 5. See 4 :D

**ggregoire** · 2026-11-05T14:01:27 · [#50379169](https://news.ycombinator.com/item?id=50379169)

Opencode go ($10), deepseek 4.1 flash high, opencode tui

I went directly with this setup, never tried claude/codex/cursor and their respective models.

**ChicagoDave** · 2026-11-05T04:51:31 · [#50375338](https://news.ycombinator.com/item?id=50375338)

1. Claude Ultra

2. No

3. Claude Code

4. My own engineering harness: https://devarch.ai/

5. No

I started using ChatGPT in the beginning then switched to Claude then Claude Code then developed DevArch over that entire time.

**aqme28** · 2026-11-04T16:17:58 · [#50367764](https://news.ycombinator.com/item?id=50367764)

After trying so many different setups, now I just use Claude-- the only thing interesting about my setup though is that I separated a "work-claude" and a "personal-claude" install on my laptop, which isn't officially allowed and took a bit of wrangling. But I basically had to do it legally.

**geldedus** · 2026-11-05T20:22:12 · [#50383966](https://news.ycombinator.com/item?id=50383966)

I haven't written a single line of code since a full year ago. Using Codex/GPT and Devin

**espeed** · 2026-11-05T04:24:28 · [#50375158](https://news.ycombinator.com/item?id=50375158)

Claude Code Ultra in Emacs. Split Emacs windows: Bottom is Claude Code, top left is code, top right is db-backed editable spec (propositions and premises) with Clojure like eval that sends spec to Claude Code.

**mjrbrennan** · 2026-11-06T02:48:11 · [#50387527](https://news.ycombinator.com/item?id=50387527)

1) Not paying for anything personally, except for whatever the ChatGPT casual plan is for the family to use. All my work usage is on the $100/month OpenAI plan.

I had the free Claude Max for Open Source plan, but haven't paid for it again now that it lapsed. I haven't used Claude for ages anyway, the way it talks really annoys the hell out of me, Codex App & models are far nicer IME.

2) No

3) I'm happy with the Codex/ChatGPT desktop app, works super well. Also use the Codex VSCode plugin a bit, and started recently experimenting with herdr. Used to use Cursor but I switched when Musk bought it. Very very occasionally I use some other thing like opencode or pi for targeted situations, or Codex in the CLI

4) No

5) No

I don't have the bizarre need to have dozens of agents going at once in my work or personal time, already feel flat out at work just using Codex w/ worktrees for a few concurrent projects at a time. I feel more productive than ever, I don't see how I could add more without being overwhelmed

**brightball** · 2026-11-04T16:03:02 · [#50367523](https://news.ycombinator.com/item?id=50367523)

Tried just about everything over the last couple of years. Settled on the unified Cursor, Grok, Grok Bot plan for about $200 / month. Doing everything within herdr for programming and Grok Bot for all non-programming related AI life stuff.

It's a solid groove. Grok Bot helped me get so much stuff off of my plate.

**fonrex** · 2026-11-05T08:06:11 · [#50376463](https://news.ycombinator.com/item?id=50376463)

I pay for Claude Pro ($20/mo)—using Claude Code with Opus 5.5, and Google AI Premium ($20/mo) for Gemini Pro with Gemini 4.

When I write code with one, I use the other for peer review.

**patwolf** · 2026-11-04T16:39:09 · [#50368119](https://news.ycombinator.com/item?id=50368119)

1) Claude code (Max) at work. Claude code (Pro) personal account for side projects. I do still have a ChatGPT subscription. I'm tempted to cancel it, but I like their app. Gemini is bundled somehow into my google subscriptions. I use it occasionally, but I'd be just as happy to not be paying for it.

2) I do use Openrouter for side projects that need an embedded AI. For example, on Halloween I made a talking pumpkin to greet trick or treaters as they came to the porch.

3) Mostly code. I've tried muse, grok, gemini, codex, and pi w/ openrouter, but I always come back to code.

4) no

5) I have a grok bot account I use to manage personal stuff. It organizes my email and calendar, keeps me up-to-date on news, does health tracking, trip planning, and shopping research. As an example, there's a website where I order lunch for my kids. I like to know each morning if I need to pack their lunch, so I have grok bot log into the website and sync it to my calendar. I then get a notification in the morning with everything I need to start the day, like whether to pack lunches, what the weather will be, or if I need to help my kids study for a test.

**option_greek** · 2026-11-05T10:18:21 · [#50377430](https://news.ycombinator.com/item?id=50377430)

I currently use a custom harness forked out of codex that has a lot of token optimizations and bug fixes. It connects to agentcron.ai mcp for kanban boards.

**jherdman** · 2026-11-04T15:51:33 · [#50367338](https://news.ycombinator.com/item?id=50367338)

Herdr, Pi, OpenRouter. I haven't found that I've needed much more than this for quite some time now.

**foopod** · 2026-11-05T00:35:33 · [#50373433](https://news.ycombinator.com/item?id=50373433)

1) the cheapest Claude sub, $20usd I think.

2) pretty much just opus

3) claude code - but with Orca + app (being able to dev remotely via the app has been great for personal projects)

Work has me stuck with Cursor, which I don't find as good, even when using claude models.

**nunodonato** · 2026-11-05T09:27:22 · [#50377063](https://news.ycombinator.com/item?id=50377063)

Work: we rent our own GPU and have our own model(Q3.8-FN), so... free tokens :D We use OpenCode as a harness

Personal: OpenCode with my Deepseek API account.

Usually I do everything inside Herdr

**monneyboi** · 2026-11-04T16:22:33 · [#50367849](https://news.ycombinator.com/item?id=50367849)

I'm playing around with some ideas on top of pi durable. Cascading contexts exposed over http. Mostly deepseek, glm and kimi in there. https://github.com/resolveworks/key

**bookdood** · 2026-11-05T16:07:45 · [#50380888](https://news.ycombinator.com/item?id=50380888)

Work: Enterprise OpenAI and Anthropic

Personal: $20/mo subscription to Anthropic and OpenAI. Default app "harness"

**AaronAPU** · 2026-11-04T17:13:16 · [#50368566](https://news.ycombinator.com/item?id=50368566)

$100 ChatGPT sub $100 Claude sub

Most coding via Opus 5.5.

Codex for text and some non-coding tasks.

Separate virtual desktop and clone on dev drive with VScode for each task (much prefer its diff tool and use it to launch builds etc).

I never come close to running out of tokens because I still do code reviews often enough to throttle usage.

**sgarland** · 2026-11-05T12:35:51 · [#50378365](https://news.ycombinator.com/item?id=50378365)

1. Personal Claude Max $100 tier; Work Claude Team, and ChatGPT Team. I use almost exclusively Claude Opus 5.5 Medium for everything. ChatGPT seems to miss a lot that Claude doesn’t; I’ll occasionally ask it to do an adversarial review where it finds something, but that’s about it.

2. No.

3. Claude CLI and Codex, but I rarely use the latter, and just call its review function from within Claude. If Anthropic didn’t require API usage for external tooling, I’d be interested in trying a lighter harness, but it’s not that big of a deal for me.

4. No.

5. No.

**diehunde** · 2026-11-04T16:29:49 · [#50367965](https://news.ycombinator.com/item?id=50367965)

1) None

2) Openrouter. I don't have a preference right now. All the top open-weight models work fine for my projects. Currently using Mistral.

3) I used pi for a while and lately I started using openrouter's ori coding agent. Working great so far.

4) None

5) None. I tried Muse for a while and it was too slow to do anything useful.

**slipwalker** · 2026-11-04T20:00:03 · [#50370716](https://news.ycombinator.com/item?id=50370716)

1) GPT plus, z.ai GLM Coding Lite-Monthly Plan ( legacy ), Opencode Go

2) personally, no. At work there is a Gemini Enterprise and Kiro Pro+ subscriptions

3) pi.dev inside herdr; both at home and work. I just pile the APIkeys and stick to same harness.

4) mostly, pi-subagents has an orchestration mode

5) no.

**laserlinus** · 2026-11-04T16:30:36 · [#50367976](https://news.ycombinator.com/item?id=50367976)

1. Two Claude Ultra, ChatGPT plus, Gemini through credits

2. Pay-per-token for work through Vercel AI Gateway (mainly same models + grok, but trying out others too)

3. Claude Code, Codex & OpenCode

4. Homebuilt https://svall.dev/

5. No

**enjoyyourlife** · 2026-11-04T15:39:48 · [#50367146](https://news.ycombinator.com/item?id=50367146)

https://github.com/mkornreich/llm-desktop-electron with OpenRouter. I love Claude but Anthropic is expensive and too restrictive

**estetlinus** · 2026-11-05T06:17:59 · [#50375826](https://news.ycombinator.com/item?id=50375826)

1) $100 Anthropic via work 2) codex personally 3) Claude Code + Herdr with a root agent steering everything. Waiting for Rex 4 and 5) absolutely not lol

**xnx** · 2026-11-04T16:56:01 · [#50368362](https://news.ycombinator.com/item?id=50368362)

Google Antigravity CLI using Gemini Flash 3.8 most of the time. Amazing what it can do.

**swiftcoder** · 2026-11-04T16:19:22 · [#50367789](https://news.ycombinator.com/item?id=50367789)

For personal stuff, a $10/month OpenCode Go subscription with OpenCode, mostly running DeepSeek Flash. I've yet to run out of tokens.

Work provides an enterprise Claude subscription for work stuff, I've never hit any limits on that either.

**amboo7** · 2026-11-05T07:18:24 · [#50376145](https://news.ycombinator.com/item?id=50376145)

1. none 2. nvidia nim, opencode zen, google free models. local QFN iq3_xss on m1 max 64gb, paperniuk splash 3. pi agent, pi pocket 4. no 5. no

**dcferreira** · 2026-11-05T15:01:21 · [#50379944](https://news.ycombinator.com/item?id=50379944)

I have a $100 claude subscription and a deepseek account though I haven't used it much. Just today I published a blog post about my setup [0], but the TLDR is vanilla claude code (and sometimes oh-my-pi) with an Obsidian vault.

This week I started using Herdr also, and while I don't yet have it setup as I'd want, it's slightly better than me previous pure tmux setup to manage multiple agents. I also always turn on remote control on claude so I can control it via the app.

I suspect the gas towns and similar are no longer a necessity: I think as the models get better, the organization structures need less attention. I've been doing fine with, for each project, spinning up just one manager to manage all the relevant sessions and ping me when I'm needed. Or if I want to be hands off I get a pm and a tech lead claude sessions up, and the pm moves the work forward while the tech lead makes decisions on what to work on next and how to tackle it. This is in spirit a similar thing to gas town, but incredibly simplified. I don't think this would work with claude 3.5, but with 5.5 I'm quite happy!

[0] https://dcferreira.com/post/2026-10-how-i-use-agents/

**lf88** · 2026-11-05T01:09:20 · [#50373731](https://news.ycombinator.com/item?id=50373731)

For now, I have decided to refrain from using LLMs because I consider the technology a very serious threat to humanity. So my answers are:

1) None

2) No

3) None

4) No

5) No

**newscombinatorY** · 2026-11-05T09:14:04 · [#50376965](https://news.ycombinator.com/item?id=50376965)

1) None

2) No

3) N/A

4) No

5) No

**mc_** · 2026-11-05T00:43:01 · [#50373503](https://news.ycombinator.com/item?id=50373503)

gptel + gptel-agent in emacs, hooked up to a Claude API token and ChatGPT oauth provided by work, plus some custom gptel additions (tools and tool invocation inspection mainly).

**bluebarbet** · 2026-11-05T10:07:42 · [#50377364](https://news.ycombinator.com/item?id=50377364)

Until local LLMs become feasible on my modest hardware, I will be keeping AI tools safely confined to the browser. Never will I grant any kind of admin permission to black-box software that phones home to an oligarchic corporation.

In practice that means Duck.AI and Perplexity.

And the system clipboard.

**profdevloper** · 2026-11-05T01:15:17 · [#50373770](https://news.ycombinator.com/item?id=50373770)

1. Claude pro monthly

2. Kimi on OpenRouter, Abliterated.ai as needed

3. Claude Code (with all models), Claude Desktop, tried pi.dev, opencode

4. No

5. No

Main use case(s):

- Software applications

- One-off automations (calendar sync from scraped data, email alerts)

- Deep research and planning for personal stuff

**RyanShook** · 2026-11-05T02:19:29 · [#50374288](https://news.ycombinator.com/item?id=50374288)

I’ve moved from paid subscriptions on Codex to Claude to Muse.

I now use Muse as my primary agent and then spin up and manage Codex and Claude agents as needed on an Oracle server.

**syntex** · 2026-11-05T15:31:28 · [#50380358](https://news.ycombinator.com/item?id=50380358)

work: claude subs Opus 5.5 mostly

personal: $200 for ultra claude subs + I haveT5810 with older xeosn e52499v4 128gb ram + 3060 12gb ram with Strata

I actually use my personal claude 100% every week I could easily do with 2-3 subs more. I would easily find a work for them.

**Footprint0521** · 2026-11-05T06:14:56 · [#50375807](https://news.ycombinator.com/item?id=50375807)

I am currently stacking 5 opencode go accounts, spending $50 a month for $500 in deepseek v4.1 flash credits, using OMP as my harness

**gonxman** · 2026-11-05T10:57:30 · [#50377697](https://news.ycombinator.com/item?id=50377697)

i use hermes-agent as my personal assistant and it talks to my claude code and codex if it needs to do projects and other stuff. openrouter is my default for the hermes-agent and sometimes i connect to lm-studio if openrouter gets errors or maybe try out some local models

**sadilek** · 2026-11-04T20:15:02 · [#50370886](https://news.ycombinator.com/item?id=50370886)

1) Claude Ultra, Codex Plus, SuperGrok, Gemini Pro.

2) No.

3) Opus 5.5 on high for all the work. Reviewed by Codex by default. Additionally by Grok and Gemini (agy) for critical work.

I switched from Claude CLI to a custom-built harness because I got overwhelmed by walls of text in parallel sessions. Now I have a canvas per project where I spatially lay out cards. Each card spawns an agent in a worktree. The chat with it is condensed to WhatsApp style chat bubbles with all the thinking and tool calls folded away. The result of a card is a demo, usually a narrated video that I can comment on to trigger another iteration. Everything voice first, I mostly speak. Phone companion so I can keep working on the go.

I used to work with up to 6 Claude CLIs in parallel and couldn't go further. With my custom UX, I can do 20+ with fun. Now the bottleneck is actually my machine, so I added remote worker support to my harness to distribute the load to more machines.

(I open sourced the harness in the hope of sharing the fun. If you want to try it: https://github.com/sadilek/obeya)

4) No Paperclip or Munder Difflin or anything. I actually think it doesn't make sense to create persistent agent personas. Just spawn an agent when needed, give each full access to all skills and docs, and they'll figure it out.

5) Hermes Agent running, sending me regular news research reports, but frankly, it's just a cronjob and the whole Hermes setup isn't really adding value for me.

**samuell** · 2026-11-05T15:48:47 · [#50380609](https://news.ycombinator.com/item?id=50380609)

1) Ollama, Pro, Single account. Will not trust my serious work to Big Tech.

2) Tried some local models. Need bigger GPU for that though. On Ollama, I'm super happy with (cloud-hosted) DeepSeek 4.1 Flash and GLM 4.3 Flash , which almost don't burn any tokens at all(!), until I can buy a better GPU.

3) OpenCode, running in the official Ollama Docker image.

4) Exploring https://epiq.sh which is a local TUI issue board optimized for agents

5) Nope.

**chilicuil** · 2026-11-05T05:40:27 · [#50375609](https://news.ycombinator.com/item?id=50375609)

two max Claude suscriptions, active dev in vscode to share screenshots, GitHub tickets for memory, basic skills, superpowers,subagentic coding with opus and the main in fable, daily Cron tasks for answering email/linkedin/etc. Desktop Claude for video/music editing . No API usage, expensive for my needs.

**__s** · 2026-11-05T07:57:44 · [#50376402](https://news.ycombinator.com/item?id=50376402)

1. 20$ Anthropic

2. deepseek api, local qwen/gemma on fw desktop

3. Claude & Pi

4. No 5. No

I'm basic "type what you want in prompt, read what comes out"

**robgough** · 2026-11-04T17:19:03 · [#50368640](https://news.ycombinator.com/item?id=50368640)

I'm using Claude Code (Ultra) across a multitude of tmux sessions, over two or three laptops – largely so long running actions don't happen on the actual laptop I take with me (nothing worse than waiting around for an agent to finish before you can leave a café). To make it a little easier to visualise across those sessions I built https://belfry.robgough.net which is like herdr in some ways, but just uses standard tmux.

I also gave in after seeing my co-founder use it, and gave GrokBot a go. I use this for everything that's not coding or design... so marketing, email reading, right now it's currently inputting my meter readings to my electricity company after emailing the building management company and getting photos back. It's super useful at little chores that eat up time. I have it daily check the status of my various projects and services. I love it tbh. I've also built my own version, which I might move to... though now it's all set up it's quite sticky, and it already spotted an error my accountant made on some taxes so it's already saving me money and I'm feeling quite positive about it.

I'm getting a bit frustrated with having to run things on my laptops though -- it feels a little pets not cattle, and wish it was all in the cloud. I'm toying with building out an agent factory, but frankly there's no super-cheap way of doing this so I'm holding off, though I can see me building a tool that connects those laptops to it creating sandboxes with Apple's `container` (which I'm using successfully on my grokbot replacement).

> **sharathr** · 2026-11-04T20:27:37 · [#50371049](https://news.ycombinator.com/item?id=50371049)
>
> have you tried https://www.droneship.run

> **sivp** · 2026-11-06T08:14:10 · [#50389549](https://news.ycombinator.com/item?id=50389549) · _dead, flagged_
>
> I had the same question about cost. Paying by the hour for cloud servers felt wrong for something that runs all day, every day. You end up paying full price while the agent mostly sits waiting.
>
> I rent a dedicated server for a flat monthly price instead. It works out much cheaper, and the bill is the same every month, so there are no surprises. The downside is that backups and fixing things are my job.
>
> What's stopping you right now: the price itself, or not knowing what the bill will be?

**zellerhaus** · 2026-11-04T15:58:02 · [#50367453](https://news.ycombinator.com/item?id=50367453)

Mainly CC Max with some API calls to OpenAI for different things.

No harnesses right now. Ok occasion using models in LocalLM.

Haven't got into agent orchestration much other than Paperclip earlier this year.

**jaekwon** · 2026-11-05T04:38:34 · [#50375257](https://news.ycombinator.com/item?id=50375257)

Take a look at gnosh.ai; it is a frontier harness worth understanding. You will hear about it in the coming weeks.

**sans_souse** · 2026-11-05T02:49:42 · [#50374500](https://news.ycombinator.com/item?id=50374500)

Wow I am pretty sure I read thru all comments and mignt be the first to say I use qwen 3.8 advanced because it's free

**simlevesque** · 2026-11-04T15:45:03 · [#50367215](https://news.ycombinator.com/item?id=50367215)

1) 20$ Claude subscription. I used to have 2 20$ subscriptions but not anymore.

2) My main model is Deepseek flash via the API.

3) Claude Code CLI inside OpenShell. I like Claude Code's UX. Lots of custom skills and scripts.

4) No

5) No

**Yiin** · 2026-11-05T12:37:55 · [#50378387](https://news.ycombinator.com/item?id=50378387)

bit late of a reply, but I run this simple stack for some time now, and I'm enjoying it quite well: https://stack.yiin.lt

**cemoktra** · 2026-11-05T07:19:13 · [#50376149](https://news.ycombinator.com/item?id=50376149)

1) no personally paid - employer gives me claude 2) no 3) corgi + claude at work 4) no 5) no

**devinegan** · 2026-11-04T23:42:56 · [#50373001](https://news.ycombinator.com/item?id=50373001)

Claude Code Ultra as the primary agent, Codex Pro as a second-opinion reviewer, with Rex as my terminal and multiplexer.

**user2722** · 2026-11-05T06:57:24 · [#50376016](https://news.ycombinator.com/item?id=50376016)

Deepseek Flash or GLM flash, paid upfront using Openrouter, via Cline on Visual Studio Code.

**prologic** · 2026-11-05T14:52:57 · [#50379819](https://news.ycombinator.com/item?id=50379819)

1) What AI subscriptions are you personally paying for? (Claude, ChatGPT/Codex, Cursor, etc)

> Claude

- Which tiers?

> Claude Ultra (as it's now called)

- Have you purchased multiple subscriptions from the same provider (eg two Claude accounts)?

> No. Only a paid ChatGPT (Pro I think) subscription I barely use.

2) Are you using models outside (or instead) of those subscriptions? For example, pay-as-you-go APIs, OpenRouter, or locally hosted models.

Yes. Primarily OpenAI models for some projects with "AI" integration(s).

- Which models and providers?

> OpenAI. Depends.

3) What coding harnesses and interfaces are you using? Are you sticking with the default CLIs or IDE integrations, or using alternatives like OpenCode, Pi, Aider, Muse Code, or custom-built harnesses?

Straight up Claude Code.

Lots of my own Skills, Commands and my own MCP servers.

- What made you switch harnesses (if you switched)?

> Tried Codex initially. Then Claude. Never looked back.

4) Are you using any agent orchestration or swarm tools?

> No.

- For example, Munder Difflin, Gas Town, Ruflo, or something custom.

> I'm building my own specialized "bots" and "agents".

5) Are you using broader agent platforms like OpenClaw / Hermes Agent / Grok bot / Dots / Muse?

> No. Not interested.

**Quibblingeek** · 2026-11-05T00:11:22 · [#50373248](https://news.ycombinator.com/item?id=50373248)

1) What AI subscriptions are you personally paying for? (Claude, ChatGPT/Codex, Cursor, etc)

No. I moved off of subscriptions earlier this year. I don't trust the subscription model from any frontier lab. Just look at what Anthropic has done. The first time I tripped a safety classifier on a seemingly irrelevant task, I canceled everything.

2) Are you using models outside (or instead) of those subscriptions? For example, pay-as-you-go APIs, OpenRouter, or locally hosted models.

Local first. I have a box running Muse Spark on my desk. My main inference box is a launch day DGX Spark (I saw the hardware shortage coming) and has my entire local AI stack. OpenWebUI and everything that feeds it. I moved away from SearXNG and started using SlopSearX (it's quite good).

Everything else goes to Openrouter. I use few models but GPT-6 Luna is my go-to, sometimes I switch it up. Really depends on the task I need to perform.

3) What coding harnesses and interfaces are you using? Are you sticking with the default CLIs or IDE integrations, or using alternatives like OpenCode, Pi, Aider, Muse Code, or custom-built harnesses?

Github Copilot for work. It's meh. Personal projects and general personal use? I started with OpenCode and have since migrated to Pi (omp specifically).

4) Are you using any agent orchestration or swarm tools?

I thought about it. I haven't really felt like I would derive value from changing my workflow and tools. It took me a while to find a good mix of utility, control, and efficiency and haven't wanted to change it until at least next year.

5) Are you using broader agent platforms like OpenClaw / Hermes Agent / Grok bot / Dots / Muse?

I have a dedicated Mac Mini to run Hermes. It is pretty much integrated into my entire life now. I could live without it, but automating general purpose things is the entire point of why I put that machine together.

How is this different from this time last year? Radically different to say the least. The pace of change has been EXTRAORDINARY to say the least.

**hodder** · 2026-11-05T03:35:24 · [#50374816](https://news.ycombinator.com/item?id=50374816)

Muse and cursor. It beats every custom setup I had by far on ease of use. The cost is trivial.

**febed** · 2026-11-05T05:18:15 · [#50375500](https://news.ycombinator.com/item?id=50375500)

People using DeepSeek - do you have a zero data retention provider based outside China?

> **kristianp** · 2026-11-05T05:52:13 · [#50375683](https://news.ycombinator.com/item?id=50375683)
>
> Yeah, I use Openrouter with the zdr parameter.

**wanderingpixel** · 2026-11-04T18:43:53 · [#50369791](https://news.ycombinator.com/item?id=50369791)

1/2) OpenAI Business Premium subscription and a locally hosted Qwen 3.8 Flash Next running on a DGX Spark.

3) I use both Opencode and Pi.

**sgt** · 2026-11-05T07:46:13 · [#50376328](https://news.ycombinator.com/item?id=50376328)

Claude Code Ultra aka 20x Max, about $250/mo incl VAT that I have to pay

**hypfer** · 2026-11-05T07:03:21 · [#50376056](https://news.ycombinator.com/item?id=50376056)

1) I bought a z.ai 1 year subscription for their mid tier (second iteration of their pricing) for like 500€ total, so 40€/month for mostly GLM-5.3. I suppose flash is there too, but.. eh.

2) I have a 4090 which runs Qwen3.8-27b q4 fine with 180k ctx at q8. The model is capable enough to do things, but dumb enough to not be able to build elaborate nonsense like the bigger models love to do

3) I'm using https://github.com/juggler-ai/juggler which is alright. It could be a bit less vibecoded (and the readme and docs and all would benefit from less LLM writing), but, generally, the opinions shaping it seem decent, and I like just how much control over and insight into what happens it gives you.

I initially tried OpenCode, and, holy hell, what a mess. Do not ever use OpenCode. I also tried goose but it was too agentic for my taste.

4) No. I am doubtful that that kind of workflow can produce software I would deem worthy of production. I also personally just dread the whole overhead that is tickets, jira, etc, so recreating the same but now you're the manager seems like a personal hell to me.

5) No. I wouldn't know what for

**yuppiepuppie** · 2026-11-04T16:19:34 · [#50367792](https://news.ycombinator.com/item?id=50367792)

Im curious how hardware/firmware engineers are using Claude, et. al. for work. Tools/MCPs that are worth it?

> **swiftcoder** · 2026-11-04T16:24:22 · [#50367878](https://news.ycombinator.com/item?id=50367878)
>
> DeepSeek Flash with kicad + autorouting churned out a couple of working PCBs with minimal prompting, and customized ZMK itself for some custom input devices. At least for casual stuff this is a solved problem

> **matthiasforstr** · 2026-11-05T18:07:34 · [#50382261](https://news.ycombinator.com/item?id=50382261) · _dead, flagged_
>
> Not firmware, but close enough: I've been building a Samsung TV app with Claude Code, and the agent drives the real TV over the network. It builds, installs over the developer connection, reads logs from a tiny log server on my laptop, and sends remote key presses to walk through a flow.
>
> What it can't do is notice the things only the device shows you. It added a "quick check" of a stream URL before playback, which looked like good practice, but the account allowed one connection, so the check took the slot and the player got refused. Things like that only show up on the hardware.
>
> The habit that helped most: every failure on the device becomes a dated rule in the docs or a comment next to the code it protects. The next session reads it, and so do I.

**tharkun__** · 2026-11-05T03:04:18 · [#50374626](https://news.ycombinator.com/item?id=50374626)

1) None. duck.ai for random questions/research for private use. No personal coding project or anything like that.

2) Yes, Anthropic models usually, at work. Pay as you go API. Company is trialing limits, routers and open weight and even local models. Since the Anthropic 5.5 models none seem reasonable to use any longer (for now at least)

3) Claude Code at work. Tried Aider early on and it failed to even read its initial context (Claude models like a year+ ago). I dropped it dead after that - unusable if you need me to specifically "load" and point our files. That's not agentic coding, sorry. Have not used the actual features my IntelliJ Ultimate subscription provides in quite a long time, though I loathe to tell IT/finance that. I do use it from time to time to double check what Claude tells me. Used `pi` w/ local models (some gemma and qwen that'd run on my hardware. nothing usable w/ the work code base - or much anything for that matter, like I'd not even get through an interview coding challenge with that if you ask me)

Did use Codex maybe like 8 months or so ago to ping pong implementation plans and reviews between GPT and Anthropic models but then just stuck with Anthropic for some reason.

4) Nope.

5) Nope. But we do have our own in-house review agent and software factory agent. Like think CodeRabbit et. al.

**shepherdjerred** · 2026-11-05T01:10:59 · [#50373740](https://news.ycombinator.com/item?id=50373740)

1. Claude Ultra, ChatGPT Pro 200, SuperGrok, Kimi Pro, Cursor Pro, Google AI Pro, Muse Code High Usage. It comes out to ~$500/mo, mostly from Claude+ChatGPT

2. I use OpenAI/Anthropic APIs for various workloads (app features, automations, etc.), but not for personal inference/coding. Recently both of these providers started giving $200/mo in API credits, and OpenAI already gives free tokens, so I don't usually pay for this usage.

3. I always use the provider's preferred CLI: Claude Code, Codex CLI, Grok CLI, Kimi CLI, Antigravity CLI, Muse CLI. I use this with herdr to manage everything, and then a small custom app to keep track of my usages since I hit limits quite often.

4. No. Just the CLIs. For very large projects I've found Claude Code to be the best -- it can very easily manage many subagents.

5. I've tried OpenClaw, Hermes, Dots, and Muse. I really just haven't found great use cases for these tools

I use Claude & Codex for most of my personal coding/projects. For the other providers I mostly want to have broad experience with different models/harnesses. It's very interesting to see how each performs and what kind of tasks they do/don't excel out. The only con of having cheap plans is you really can only give them simple tasks.

---

At work I use AWS Bedrock w/ Anthropic + OpenAI models at API pricing. Each employee is given a rolling 28-day budget w/o access to Fable/Astra. I use the same Claude Code/Codex CLI + Herdr.

**ddxv** · 2026-11-05T01:39:32 · [#50373975](https://news.ycombinator.com/item?id=50373975)

VSCode + OpenRouter + flavor of the day cheap model.

I spend about $5 a month with this setup.

**minimaxa** · 2026-11-05T00:48:41 · [#50373561](https://news.ycombinator.com/item?id=50373561)

We built our own harness local & cloud models, test it out: www.vekmem.com

**vcryan** · 2026-11-04T16:14:18 · [#50367699](https://news.ycombinator.com/item?id=50367699)

I built a "software factory" on top of pi agents so I can automate most product dev work

**poelzi** · 2026-11-05T12:05:19 · [#50378157](https://news.ycombinator.com/item?id=50378157)

Mostly https://tix.im/ with my vx-maintainer expert, codex, opencode and claude-code as harnesses.

I was unhappy with everything out there - not secure enough, not flexible enough, not composable enough, not nix enough. The whole concept how we use AI is garbage, having 10 terminals open with agents working in different branches. I build workflows, very complex, multi model, multi harness, parameterized - nix defined workflows that run in highly isolated, fully composed environments. I have a few dozen workflows already, in vx-maintainer: quick-fix, change-management, spec-implement, red-green, sync-branches, ....

Each of those workflows does something, and this extremely well. Every time a workflow fails, the workflow gets some massage to make it more resilient, more flexible, more correct. Workflows are usually design that restart just recovers the last state and continues work. My land-feature workflow has at least 40 steps, most of them deterministic scripts. For example, if rebase is true, a mechanical rebase is started, if this fails, an agent rebase agent is started. Full multi panel + review tool pipeline. With time, the workflows start to be super sophisticated, for example: review is cached, but the review is pinned to the commit hash. When restarted and rebase is on, a ast-diff is generated to check if the review can be reused. Stuff, no normal person would do :)

vx-maintainer has an own bug / change tracker. Normal bugtrackers are build for humans, such agentic system need a tracker that works for both.

Then I have a special agent, the queue-manager, his goal is to keep the workflow engine busy. He queries the vx-meta tracker for changes and workflows to get implemented.

Workflows are semi-automatic. You can have tty and ui programs running inside the workflows. You have decision steps and agents can ask the operator.

And this is just the surface of it.

I never was able to get so much stuff done and had so much fun getting a project build. And fucking safe - no more fear when updating dependencies.

**linhns** · 2026-11-05T01:11:08 · [#50373741](https://news.ycombinator.com/item?id=50373741)

Only GitHub Copilorpt for documentation. Sponsored so cost nothing.

**wolttam** · 2026-11-04T16:19:34 · [#50367793](https://news.ycombinator.com/item?id=50367793)

My own harness (nothing intricate, but to my taste), DSv4 1017 on my own hardware

Keeping it simple.

**Fordec** · 2026-11-05T03:25:07 · [#50374764](https://news.ycombinator.com/item?id=50374764)

1. Claude Ultra + a Codex Plus. Probably going to drop Codex soon, GLM is gradually taking on what I intended it for.

2. GLM-5.3 and OpenCode for cybersecurity

3. Primarily custom built harness. Rust centric, heavy on the production engineering gates and a bunch of graph networks for context control.

4. Custom.

5. No.

My general ethos is that if taste is what is important going forward, my code generation must have it's own taste. If you can download my tooling off the shelf, I am replaceable by anyone who can do the same. My end goal is to drop Claude Code once the harness prices start to drift to API pricing. In the meantime, anything that can be automated into traditional and efficient code will be one more thing in my control regardless of future token prices. When I hit my limits for the week, I spend the remainder of the waiting time going over the framework data to see what are my largest sources of consumption and iterate in automating that more.

**montenegrohugo** · 2026-11-05T15:29:56 · [#50380334](https://news.ycombinator.com/item?id=50380334)

A key part of mine is using voice input to give max context quickly to my agents. I know some solutions exist, but on Linux they all frankly suck

So I made my own. Including patching onnx myself to run parakeet model (way better than whisper)

Fully FOSS: voiceio.dev

> **pcthrowaway** · 2026-11-05T17:04:46 · [#50381552](https://news.ycombinator.com/item?id=50381552)
>
> Do you know if this could work on an Android phone eventually? Or do you have plans to make a hook for mobile apps that can stream the audio to a custom Linux server?

**RamblingCTO** · 2026-11-05T15:47:39 · [#50380583](https://news.ycombinator.com/item?id=50380583)

Claude desktop, chatgpt desktop, pi, claude code, also coop vm + pi setup for more juicy stuff. Also just setup paseo via tailscale to have something like amp. imho all the fancy setup and the skills make the agents more retarded. they access tools and skills way too broadly and it poisons the context.

also killed my hermes web setup (also via talescale) for security reasons. not interested in having something online like that with all the vulns popping up (ssh, ubuntu, tailscale etc.)

**temp123477** · 2026-11-05T09:36:03 · [#50377137](https://news.ycombinator.com/item?id=50377137)

Claude max; Atomic; Jira; herdr and VPS

**bapetel** · 2026-11-05T13:09:33 · [#50378660](https://news.ycombinator.com/item?id=50378660)

Pi running with Claude & Grok

**netless** · 2026-11-05T09:42:48 · [#50377195](https://news.ycombinator.com/item?id=50377195)

very simple; claude code on pro subscription acting as a project manager, deepseek acting as developer

**skorobogatko** · 2026-11-04T16:08:59 · [#50367619](https://news.ycombinator.com/item?id=50367619)

1. Claude Max

2. No (only the API for projects)

3. Buzzpot.app (my app)

4. No

5. No (I tried them, but couldn't find a use case for them)

**yipinwong** · 2026-11-05T15:41:11 · [#50380509](https://news.ycombinator.com/item?id=50380509)

1. Paying for Open Router only.

2. Local VPS: serve small models like Desert Ant, Laya, etc only (the VPS has GPU).

3. Hermes only: Stick with one, arch is converging.

4. No. Used to use Hedr but that's about it. I ask Hermes to do that for me. (or create custom Hermes agents by specifying graph in text)

5. Just Hermes: refer to #3. - Fun at home, build, automate, disabled gateways for online chatting becauese of bugs (not sharing)

Hermes, OpenRouter, . No Claude/Codex sub too expensive. Use them at work instead.

**be_erik** · 2026-11-05T02:43:14 · [#50374458](https://news.ycombinator.com/item?id=50374458)

1. No

2. OpenRouter PAYG - glm or opus for most things

3. OMP or CC

4. Zellij/Vim — some things never change

5. No

**KronisLV** · 2026-11-05T14:52:24 · [#50379808](https://news.ycombinator.com/item?id=50379808)

1. OpenAI and Anthropic, both at their 100 USD tiers, one account each. Would do 200 USD but I need the money to help a friend instead.

2. Previously yes (esp. to try out new models on OpenRouter, like GLM 5.3 or Kimi K3.1 Pro and the various DeepSeek ones, Mistral ones etc.) before also having their subscriptions for a bit. Wrote about them on my blog, seemed like nice alternatives to OpenAI and Ant, but didn't give me as many tokens (and that's with the BS those two are occasionally pulling).

3. Codex and Claude Code, for a while had a custom launcher for Claude Code (ccode) for 3rd party providers, also tried out OpenCode (really nice CLI, but barebones web UI/desktop versions), alongside additional ADEs like Paseo (really pleasant, but sub-agent status updates hanged sometimes) and Kepler (cool ticketing system integration, but the UI wasn't very pleasant), before just going back to the two in the end. Same as with MCPs and other stuff, realized I just don't need most of them, near-SOTA models are good enough to automate long form work and work in parallel well enough, all you need are Git worktrees and a decent OS environment to work in. Still waiting for some dumb agent to wipe my drive though.

4. No, closest was Paseo or Kepler, but those tools would help me more rather than beat the agents into shape. The most I do orchestration wise is demand adversarial reviews (main session often spawns sub-agents for implementation and then has sub-agents with clear context for review in a loop, if issues are found, they're solved, then back to review, until nothing too serious remains), seems like even SOTA models fuck up consistently enough that they benefit from such reviews still. Meanwhile the most I do in regards to work is nudge how to best do exploration and division of work, when I know that something will need a bunch of parallelism or not to pollute the main context with bunches of side quests.

5. No. Maybe I should, but given how often LLMs lack decent judgement when the tasks are underspecified, I don't think I'd benefit a lot. My ALL-CAPS-SWEARING/SESSION metric is still higher than I'd expect from a reliable assistant system, despite agent instructions and memories and custom tools and linters and all that. In a word, even SOTA models still do stupid shit and bog down workable designs with complexities and mechanisms and concerns that nobody fucking needs. Computer use is pretty good though.

**jorisnoo** · 2026-11-05T07:41:59 · [#50376295](https://news.ycombinator.com/item?id=50376295)

so much inspiration in here!

hard to contain myself not to change my setup too often (instead of doing actual work)

**einhard** · 2026-11-05T03:33:24 · [#50374806](https://news.ycombinator.com/item?id=50374806)

1) OpenCode Go $10, though I'm just experimenting with it. Before I have just been using the free models available in OpenCode, since sometimes its hard to justify a subscription when you're unemployed.

2) I tried a local Qwen model but my poor old 1660 Ti did not enjoy it, and it wasn't all that useful.

3) I primarily use OpenCode running in a podman container for actually working on stuff. Also use the default free chats with Gemini 3.5 Flash for general searching, ChatGPT for brainstorming, and Claude to answer more code related things if they come up.

4) Nope.

5) Not at the moment. I've been eyeing using Hermes, but since I don't feel comfortable paying much at the moment I haven't really tried.

**YuechenLi** · 2026-11-05T04:30:17 · [#50375205](https://news.ycombinator.com/item?id=50375205)

Codex on Pro 100, Claude on Pro 20.

I don't even understand how people can spend thousands of dollars a month on LLM tokens since I've accomplished multiple major projects with this setup. In general, Claude's better at frontend and debug and Codex is better at feature implementation and research from what I've found, which is why I have both.

2. No. GPT 6.1 Sol is very token efficient that I pretty much never run out before the end of the week anyways.

3. Default Codex/Claude app. I only use VS/VSCode to hand-edit/git sync things when needed.

4. No. Swarm is a waste of token imo, and a single good human in the loop beats any automated orchestration tool.

5. I find it unnecessary.

**vips7L** · 2026-11-05T06:47:08 · [#50375963](https://news.ycombinator.com/item?id=50375963)

None. These things aren’t that good.

**internet2000** · 2026-11-05T04:12:12 · [#50375079](https://news.ycombinator.com/item?id=50375079)

Claude Code. Everything else default!!!

**x3haloed** · 2026-11-04T16:23:36 · [#50367866](https://news.ycombinator.com/item?id=50367866)

Codex (Pro x 1), no outside models, custom harness, custom orchestration, custom agent harness.

I avoided building anything custom until I had to, and I avoided adding more than a single agent until I had to.

My preferred way to use AI for coding has been to work closely with a single coding agent with the code open. That changed wth 5.6-Sol and a handful of skill files. I stopped needing to watch closely to keep it from fucking up the codebase. With the right request, that combination will get the job done 9/10 times.

That unlocked a new workflow: as soon as a change is requested, a coding agent reads it and gives me a PR. I want a complete proposed code change in front of my eyeballs by the time I open the change request myself.

So I have a custom solution in place to manage a handful of agents aligned with this workflow.

Custom solutions are so cheap and easy now... it's really hard to put up with solutions that are only mostly right for the job.

**thibsrn** · 2026-11-05T10:59:40 · [#50377715](https://news.ycombinator.com/item?id=50377715)

My use cases are mostly analytical work, document generation, and code generation and review.

I used to have the Pro subcription for Claude but switched recently to the equivalent Plus subscription for ChatGPT. With Anthropic, you cannot access their inference servers without going through one their client software or paying the API pricing. It is really annoying as those are two different product categories and I'd like to use the client of my choice with an LLM. OpenAI allows you to do that, so I have a proxy running on my computer which connects to OpenAI's servers in the back ground and serves locally a Chat Completions-compliant API, with the requests counting towards my subscription.

I also have an OpenRouter account, I use it regularly but mostly to explore new models and see what's out there. I wish I used it more but the bigger part of my requests, almost all of them, go through my subscription. My thinking is since I'm already paying for it, might as well use it. Which is a shame because it prevents me from exploring more.

I even think a combination of the free tier of Big AI with a pay-as-you-go pricing for more complex requests would actually be cheaper for most people than their current subscription, even with their heavily subsidized pricing. The problem is that most people wouldn't want to think of when they should go deeper with a bigger model and wouldn't want the mental task of switching. The same way people don't really switch thinking levels with a given model, even though it would be a more optimal use of their token pool.

There is a huge market for an alternative business model around LLM inference. The big providers will obviously go towards an ad-based model in the following years, which will be good enough for the greater public, but a lot of people and small companies would be interested in packages and subscriptions that suit their specific needs and lines of work. OpenRouter has a great product and there is so much possiblity in this space. I also believe there is so much potential in the development of models based on data primitives other than text or rasterized images, which would be really useful in a lot of industries.

For the frontend, I either use the web-based version of ChatGPT for quick questions and analytical work (the desktop version is unnecessarily heavy), or Open WebUI. For coding, I mostly use Zed. I like the traditional development environment and tooling, I tried several agent-first environments, but in the end I prefer an IDE on top of which agents were added. OpenCode Web has evolved a lot, I have been using it for quick scripting as well. I never use any coding agent TUI anymore. Behind the scenes, the agent harnesses are OpenCode and Codex. I use them interchangeably, I don't see much of a difference. Zed connects to OpenCode and Codex through ACP. Both OpenCode and Open WebUI connects to OpenRouter and the OpenAI Proxy. Open WebUI has Open Terminal, which I have been meaning to explore, for there to be less friction between any analytical work and a document that would be needed to be produced out of it. I also run small models through llama.app from time to time, when I want to be reminded how weak my computer is.

I don't use any orchestration tool. I don't have any work that involves so much volume that it would require that kind of setup. It's more important to me to maintain the right mental model, I don't want to risk any discrepancies between what I'm thinking and what's done. Therefore the agentic work must be single-threaded, if that makes sense. I also don't use AI chat gateways like OpenClaw or Muse because I don't want to do that work on my phone every minute of my life. I'm either working or I'm not.

This comment is longer than expected. It's such a fascinating and still evolving space.

**kreyenborgi** · 2026-11-05T10:21:32 · [#50377450](https://news.ycombinator.com/item?id=50377450)

None.

**warpspin** · 2026-11-04T19:32:01 · [#50370419](https://news.ycombinator.com/item?id=50370419)

1. Using ChatGPT with a Business Premium seat (not personally paying for it).

2. Also have some API keys for some open weight models in Europe, but currently not using those.

3. I've personally used OpenCode, Claude Code and Codex and of those, I liked Codex the most, till bugs kept on accumulating and they started doing all kinds of shit like that daemon recently. I now switched to https://github.com/capocasa/3code which is a small, simple agent harness but with built-in sandbox, unlike so many other simple harnesses. I really like this one, plus the author is very responsive to feedback

4. No. And I don't think that stuff works in the long run with current quality of code output

5. No.

**carterschonwald** · 2026-11-05T15:33:08 · [#50380401](https://news.ycombinator.com/item?id=50380401)

im midday through building a 3rd party multi device coding and everything harness with some unique hard to replicate features that should really help for successfully building amazing stuff reliably.

despite some of the stuff ill need to do as a consequence of wanting to keep some of those tricks private necessarily requiring that i kinda have my own byok open router for zdr providers endpoints only, i think its worth it.

theres a lot more i could say, but i hoping it can wind up being a cult favorite in techy/professional circles even if im planning to do something like 50/month for core plus pass through with hair cut on usage based costs. cause despite the large theoretical market, i think taking a page from sublime text for product stuff is likely the best way to roll.

i just want nice tools and recurrent income thats stable and mine. if both groove together, thats the dream.

**aykay76** · 2026-11-05T15:09:42 · [#50380057](https://news.ycombinator.com/item?id=50380057)

1. I don't pay for any subscriptions personally. 2. I use locally hosted models, Qwen 3.8 Coder 3. I use VSCode, I used Opencode for a while but VSCode then supported OpenAI compatible so I use that with ollama.cpp and Qwen locally. 4. Custom build orchestrator that I built as part of my learning with AI. 5. Nope.

**danbrooks** · 2026-11-05T09:55:47 · [#50377282](https://news.ycombinator.com/item?id=50377282)

Claude App + Opus 5.5

**everyone** · 2026-11-05T02:47:54 · [#50374488](https://news.ycombinator.com/item?id=50374488)

Dont use it at all. Seems like a waste of time for what I do as far as I can tell.

**passive** · 2026-11-05T03:17:47 · [#50374722](https://news.ycombinator.com/item?id=50374722)

1) Xiaomi Mimo Pro 2) I purchase periodic credits through Tailscale Aperture 3) MiMocode for working with Mimo, Pi with the others 4/5) Nope

**alun** · 2026-11-05T12:51:55 · [#50378511](https://news.ycombinator.com/item?id=50378511)

1) I mostly use Claude Code Max (paid for by my employer) and ChatGPT Pro (which I pay personally)

2) I use Claude for all work and programming, ChatGPT for random questions in my day-to-day life.

3) I just use it through the CLI as it's my favorite interface, often with multiple CLIs running at the same time

4) Nope

5) Nope

**FacelessJim** · 2026-11-05T16:13:55 · [#50380946](https://news.ycombinator.com/item?id=50380946)

1) 10$ opencode go for personal work and a GitHub copilot at work 2) tried some llama stuff but otherwise nope. Don’t have the bandwidth to make it usable. 3) pi + herdr 4) no 5) no

Can’t say I need much more than this.

**6031769** · 2026-11-05T22:29:54 · [#50385415](https://news.ycombinator.com/item?id=50385415)

None.

And it's going to stay that way. I would much rather spend my time coding than reverse-engineering the impenetrable slop an LLM has spewed.

**0xbadcafebee** · 2026-11-05T19:06:47 · [#50383038](https://news.ycombinator.com/item?id=50383038)

Personal use: $10 subscriptions through Charm Hyper and Synthetic, partly to try them out, partly for reliability when one acts up or is slow. Pi for an agent, CLI in Tmux. Dingles for project task management. Linux. Was using pi-web-ui for UX but it's a bit too crap. Handy for stt.

Work use: Claude Enterprise and an OpenCode Go subscription (for when Claude is down). Termic for UX to switch between parallel agents running both Claude and Pi. Linear, GitHub, Atlassian MCPs/CLIs. Custom tools written to mint read-only credentials for headless sandboxed AI agent work on tickets. MacOS. FluidVoice for stt.

A mix of Pi extensions for work and personal. Personal is a bit more loosey goosey, Work has more explicit gates and limits. Customized browser agent, computer use, Matt Pocock's skills. 1Password for loading credentials as well as a custom CLI/GUI to prompt me for input when needed.

> **sivp** · 2026-11-06T08:08:37 · [#50389502](https://news.ycombinator.com/item?id=50389502) · _dead, flagged_
>
> The read-only credential minting is the part I'd like to hear more about. I give agent sessions a read-only cluster token, and the renewal is what rots: a long-lived token is convenient until you notice it's been valid for months. I've settled on about 30 days with a calendar reminder, which feels too long. Do you mint per session, per ticket, or on a schedule? And does the agent ever hit a case where read-only isn't enough, and then what?

**martincsweiss** · 2026-11-05T04:13:38 · [#50375084](https://news.ycombinator.com/item?id=50375084)

I use Codex and Claude Code with piles of project-specific skills and AGENTS.md files.

For my main work at my startup, we're very careful with how these are setup.

Everywhere else, I simmer in chaos.

I also have strong boundaries around generated prose. I don't like making other people read AI slop, but I don't mind having AIs read it.

**saasisdead** · 2026-11-04T16:12:23 · [#50367667](https://news.ycombinator.com/item?id=50367667)

Claude code is all you need

> **Der_Einzige** · 2026-11-04T16:13:07 · [#50367679](https://news.ycombinator.com/item?id=50367679)
>
> Yes, given that you can route the other models into it this is sadly true.

**mettamage** · 2026-11-05T10:07:55 · [#50377367](https://news.ycombinator.com/item?id=50377367)

I mostly made my own claude messaging system and then context engineer the fuck out of it by thinking from first principles. I never needed skills for example because I already had something working before they were invented

**nailer** · 2026-11-05T15:46:21 · [#50380567](https://news.ycombinator.com/item?id=50380567)

Claude desktop and mobile, but only because I am wary of installing any software from new vendors right due to widespread security vulnerabilities in all software.

**petesergeant** · 2026-11-05T15:42:39 · [#50380522](https://news.ycombinator.com/item?id=50380522)

1: I have the fancy Claude, and then regular paid Codex, Grok, and GLM 5.3

2: Not for development

3: I work inside Claude Code almost all of the time, inside a byre sandbox, often connected to happier. Claude calls out for code reviews to the other models

4: I have a self-built code-review wrapper for Claude to call the other models, but nothing more than that

5: Haven't managed to find anything useful to do with them.

**tcdent** · 2026-11-05T01:04:08 · [#50373684](https://news.ycombinator.com/item?id=50373684)

1. Claude Ultra, three accounts. Mostly to get enough Fable usage.

2. Early in experiments with locally hosted GLM Next, not writing code with it beyond experiments.

3. Claude Code, system prompt, minimal skills; mostly bash scripts for common actions.

4. tmux send-keys for messaging between panes.

5. No. Claude Code does that, too.

> **swingboy** · 2026-11-05T01:35:21 · [#50373939](https://news.ycombinator.com/item?id=50373939)
>
> Isn't Opus 5.5 better than Fable 5.1?

> > **tcdent** · 2026-11-05T02:12:35 · [#50374230](https://news.ycombinator.com/item?id=50374230)
> >
> > On some benchmarks, yes. For real software development, no.

**npodbielski** · 2026-11-05T11:07:02 · [#50377761](https://news.ycombinator.com/item?id=50377761)

2) I am running Qwen Flash Next on Strix Halo with Halogen inference server. This is great setup that can get you 4 concurrent agents for 300W of power with 1k prefill and 30-80tk/s decode. I do not fill like using subs that I have from work with this.

**harshithakontex** · 2026-11-06T18:28:10 · [#50396273](https://news.ycombinator.com/item?id=50396273) · _dead, flagged_

Reading through the setups, I notice almost all the engineering is in the middle: orchestration, review loops, sandboxing, model tiering. The front of the pipeline — what goes INTO the agent — is mostly 'a ticket' or 'a prompt.'

chasd00's flow (design doc → edge-case review → plan → implement) and drDtaidev's Vision/Features/Tasks cascade implicitly get this right, but they work dramatically differently depending on whether the input is a well-specified feature or a two-line ticket. The same pipeline that runs beautifully on a crisp spec will happily produce confident, complete, well-structured implementation of the wrong thing — every downstream stage inherits the ambiguity and none of them surface it.

What's been missing from my own iterations until I fixed it: an explicit gate before implementation that attacks the input — ambiguity, missing edge cases, unstated assumptions, dependencies on things that don't exist yet. Cheapest place in the whole pipeline to find a bug: a paragraph fix at input time vs. a rewrite after the agent faithfully implemented the gap. The review-loop setups help, but they review the PLAN'S quality, not the REQUIREMENT'S completeness — and those are different failures.

Curious whether anyone's measured this: what fraction of agent-run rework traces back to the spec being wrong vs. the agent misreading a good spec? My suspicion is the first number dominates and gets systematically misattributed to the second, because 'the agent messed up' is the visible failure and 'the ticket was ambiguous' is the invisible one.

**wahnfrieden** · 2026-11-05T08:57:00 · [#50376855](https://news.ycombinator.com/item?id=50376855)

ChatGPT Pro 200 x2

No

Codex

Codex

Dots

**jonathanstrange** · 2026-11-05T08:55:43 · [#50376848](https://news.ycombinator.com/item?id=50376848)

Gemini Pro with web chat interface. I upload files, ask for changes, copy & paste the files back, and test and vet the code changes.

No other models or software.

**jedisct1** · 2026-11-05T08:24:46 · [#50376601](https://news.ycombinator.com/item?id=50376601)

Locally (MBP 128Gb) I have MLX-Serve constantly running with Clef (for model routing and decisions), Qwen-35B-A3B and Ornith-1.5-35B.

And I switch to Qwen3.8-27B (the Perplexity Pro version that works well with MLX-Serve) or GLM-5.3-Flash (sushi) when I need to do serious work offline.

As a general harness for coding, etc. I use Swival.dev . Configured to use Clef for model routing, with Qwen-35B-A3B for documentation tasks, Ornith to ask questions about code, and various GPT models from a ChatGPT subscription for more difficult tasks.

For music, pictures, etc. MLX-Serve is all I use, with the recommended models. It's really nice.

And as a general agent for research, etc. I absolutely love Perplexity. This is by far the AI produce I use the most, ever since it's been available.

It's a little bit sad that they are forcing people to use Perplexity Computer, because it's so expensive. But it works incredibly well.

Perplexity can now run locally, but even though they include the best Qwen3.8 quant in my experience, the Perplexity tool itself has major issues with context management and tool calling. So, when that doesn't work, I fall back to MLX-Serve and Swival with the Chrome MCP server.

For agentic web browsing, I can't live without Comet anymore. So many websites are painful to use, and finding the right buttons to click even to perform very common tasks is a challenge. So, I frequently just ask Comet to do it for me. I also use it to compare products, compare places on AirBNB, write personalized messages on Instagram, etc.

As for an OpenClaw-like tool, I'm using NBClaw. I was initially very excited about it. Look, I can just send messages on Signal and let the agent do work for me! And I occasionally found it useful to remotely fix issues on the host it was running on, or long tasks such as making sure that all my projects worked with a new version of the Zig compiler. It became a replacement for Perplexity because, hey, it's cool, everything's running locally, using my own web browser, etc.

But eventually, I used it less and less. Nowadays, I still enjoy the fact that it's sending me a summary of cool things it found in Hacker News and research papers on topics I'm interesting in. But that's pretty much it. I don't use it much for agentic tasks anymore. It still happens (I recently used it to fix a bug in an opensource project while I was on the bus), but mostly just only when I ran out of Perplexity Computer credits.

**jeffrallen** · 2026-11-05T07:54:34 · [#50376381](https://news.ycombinator.com/item?id=50376381)

Personal exe.dev subscription.

**qurren** · 2026-11-05T06:20:25 · [#50375836](https://news.ycombinator.com/item?id=50375836)

$200 ChatGPT + $200 Claude, I don't pay for it, agents quant trade and pay for their own subscriptions. I then use the rest of the tokens to build stuff.

**syngrog66** · 2026-11-05T05:30:33 · [#50375571](https://news.ycombinator.com/item?id=50375571)

none; no; none; no; not needed; no; none; unnecessary; no thanks; and not interested. "I've seen enough, kiddos."

**jMyles** · 2026-11-05T04:04:00 · [#50375020](https://news.ycombinator.com/item?id=50375020)

I've made a multiplayer environment for me and a few friends, where we can prompt (currently three) emergents and experiment with various models and instructions for them.

I've rarely been so inspired by a project.

It's publicly readable, but writable by a group of ~20.

https://magenta.cryptograss.live/

**ls612** · 2026-11-05T03:59:00 · [#50374994](https://news.ycombinator.com/item?id=50374994)

I still just pay $100/mo for Claude. Use the CC extension in VSCode. I’m actively investigating various ways of getting a Hermes Agent going on my homelab with either a local model, Openrouter ZDR models, or both but I’m unlikely to pull the trigger on that yet. I would never use Muse, Grok Bot, etc as a personal agent.

**esafak** · 2026-11-05T03:12:09 · [#50374680](https://news.ycombinator.com/item?id=50374680)

I use OC with various subs, and am testing DeepSeek Harness, JetBrains Thinkrail, and Volt. Extending the harness with plugins is my main interest these days.

**contingencies** · 2026-11-05T02:49:54 · [#50374502](https://news.ycombinator.com/item?id=50374502)

I mostly work on problems at the intersection of manufacturing, mechatronic design, electronics, software and physics. So I'm not really building software per-se which likely accounts for the probably slightly weird choices here.

1. Claude Max (upsold me as of today); generally Sonnet 5.5 with the occasional Fable 5.1 when it gets stuck or I am executing a high value step; and Perplexity Pro (legacy).

2. Mostly local voice-to-text w/Parakeet Unified EN 0.6B via Handy[0] (awesome; use it!). Not for coding, but for note taking, AI interfacing, and general typing reduction and RSI avoidance.

3. None. I tried Pi and after much kerfuffle I don't like any of the harness interfaces. I find the type of work I do they are not very useful, because I often switch between variant approaches, planning, data, and don't want unrestrained context bloat.

4. No.

5. No.

I would add that I am very interested in obtaining good enough hardware to run this level of model locally at any pace, believe Qwen is basically there but too slow locally to use as a daily driver on my current rig, and can see myself making that investment in single digit years. Not right now, the hardware is overpriced for what it is versus venture funded cloud AI subsidies.

[0] https://handy.computer/

**tamimio** · 2026-11-05T00:41:18 · [#50373485](https://news.ycombinator.com/item?id=50373485)

- LLM reverse proxy

- agents work in their own lxc spawn automatically in a proxmox node, where they can go wild without sandboxing or isolation, network is firewalled too

- all sync sessions and everything to a centralized agentsview in a realtime, where I get to track and watch it from anywhere on the go

- i just ssh into the lxc if i needed anything

- different harnesses depending on the task, maki is great one, but I use others

- I also have other stuff but I won’t mention it here regarding the tokens for obvious reasons

I tried most of the tools like herdr or paseo or desktop clients but they never clicked with me

**hirvi74** · 2026-11-05T00:23:49 · [#50373352](https://news.ycombinator.com/item?id=50373352)

1.) Claude or ChatGPT Chatbot.

2.) Text Editor or IDE.

3.) A compiler/interpreter/SDK and potentially other dependencies.

Super lame and boring, but that's basically it.

As for my day job, it's the same minus #1 -- AI is banned.

**platevoltage** · 2026-11-05T00:20:21 · [#50373317](https://news.ycombinator.com/item?id=50373317)

Opencode with $10 Opencode Go plan until his heinous Clammy Sammy lets me have enough Ram for a local inference setup.

**yieldcrv** · 2026-11-04T23:51:08 · [#50373065](https://news.ycombinator.com/item?id=50373065)

I run

2) kapitsa + pi + Qwen 3.6 35B a3B q4. pi is the harness, kapitsa is the inference engine

people that I considered intelligent have associated Qwen with "chinese cloud" when it implies not using a cloud at all. I think that's weird. I think there is a "western" centric view that limits perspective to using A cloud, instead of aspiring for locally run

1) I also pay for Claude, I should downgrade again to the $100 plan, thanks for the reminder, but currently the $200 max x5 plan

4) no. I handroll my agents

5) I use Claude desktop as an agent platform

**puszczyk** · 2026-11-04T16:14:20 · [#50367701](https://news.ycombinator.com/item?id=50367701)

1) anthropic ultra; single sub

2) payg on opencode

3) standard claude code and opencode driven by t3 code

4) nope

5) grok bot - at work, to manage my tasks, and to highlight what happened on slack when i was off; random one offs there

**codingbear** · 2026-11-04T15:44:24 · [#50367207](https://news.ycombinator.com/item?id=50367207)

moved to openclaw for everything, with occasional claude usage for tricky bits. I have $200 of both codex and claude subs.

Openclaw is the answer to question "do X if Y happens". An agent per each type of Y channel manages the flow and memory. And user input is just another case of 'Y'. It is a very powerful model I am having lots of fun with it.

the plumbing is a chore though, thinking of trying out grokbots to see if they solved it.

**ibrahimsayar96** · 2026-11-05T13:33:08 · [#50378875](https://news.ycombinator.com/item?id=50378875)

test

**deadfoxygrandpa** · 2026-11-05T03:28:57 · [#50374780](https://news.ycombinator.com/item?id=50374780)

i dont have one

**sparklingmango** · 2026-11-04T16:00:27 · [#50367484](https://news.ycombinator.com/item?id=50367484)

Right now, it's Claude Code on Opus 5.5 w/ herdr to manage multiple sessions at a time.

**guhcampos** · 2026-11-05T00:24:18 · [#50373357](https://news.ycombinator.com/item?id=50373357)

1.a) At work: I can choose between Cursor and Claude on a meter. Been using Cursor for a long time and happy with it until they started to force Grok down our throats. I was happy with Composer 2. Recently switched to Claude Code. The company also runs some open weight models in-house and I have been using them through Claude Code itself, with VSCodium as my Code Viewer. I almost never need anything stronger than Sonnet at work - 80% of which is YAML and Terraform these days (or rather markdown, if you really think about it).

1.b) For personal stuff I maintain an Opencode GO subscription, USD40 tier. I also have a Google One subscription which is supposed to have some AI capabilities, haven't tested it yet.

2) Besides my Opencode GO subscription, I sometimes add a few bucks to use Zen. It's rare: my USD40 is usually fine for the month. I've recently started using Nvivia NIM free tier models for some time insensitive tasks too. I have a Qwen model available on my Mac (M1 PRO 64GB) but haven't found it to be useful, as I need my laptop for everything else I'm doing beyond inference.

GLM 5.3 Flash and Deepseek 4.1 Flash do most of the work for my personal stuff. Nemotron does the time insensitive stuff, which is mostly summarizing text. I've been using GPT Luna 6 a lot because it's currently cheap as hell, so I'll often talk to GPT Luna and hand off coding to GLM or Deepseek. I find that Luna communicates MUCH better than the Chinese models - I assume because it does not go through the extra language barrier step between English and Chinese. GLM, Qwen and Deepseek are incredible tool callers, but their prose is insufferable.

3.a) At work I'm using Claude Code for the Anthropic models and Opencode for the self-hosted ones. Ditched Cursor recently. I've been meaning to try to integrate the self-hosted models into Claude Code but haven't yet, so hand-offs between the two harnesses involve a lot of markdown.

I've switched out of Cursor because A. they've been bullying us into using grok for everything and B. The company setup would not support the use case of mixing the self-hosted and closed models in the same harness - this limitation is on our side.

3.b) For my personal stuff I've been using mostly Hermes. Some actual coding goes into Opencode, often piloted by Hermes itself. I'm using Zed as my code editor, but with the AI features disabled. My opencode subscription is actually configured in Zed, but I prefer the UI without them.

4) No. I don't really need them. I run 5-6 parallel sessions at most, otherwise I can't keep track of what's being done anyway. Each parallel session is on a different task, so I generally don't need them to spit enormous amounts of code. I rarely have to wait more than a few minutes for a task to finish, and I'm always thinking or writing or managing something else in between anyway - not looking at the screen waiting.

5) Hermes. Generally happy with it - despite it being extremely unstable between updates, with frequent regressions, weird UI bugs and half assed features (bot mode, anyone?). I have 3 distinct instances (laptop, home server, VPS) doing different things - all hooked up to the same memory provider (honcho) under a single user profile, and a handful AI profiles on each. All have limited access to my Obsidian Vault, which is synced between them using Obsidian Sync.

I generally use the laptop instance for day-to-day use: planning work, assigning tasks to myself and to the other agents, capturing ideas, light coding, etc. The homeserver instance manages a limited set of features on the server itself, from upgrades, documentation and more devopsy stuff to organizing files, managing transcoding queues, etc. The cloud hosted version automates is not very used yet. I plan to have it pilot an n8n instance I keep to automate some boring stuff, like filing weekly tax records and automatically forwarding bureaucratic e-mails, nothing fancy.

> **Scrounger** · 2026-11-05T01:54:24 · [#50374093](https://news.ycombinator.com/item?id=50374093)
>
> > 5) Hermes. Generally happy with it - despite it being extremely unstable between updates, with frequent regressions, weird UI bugs and half assed features (bot mode, anyone?). I have 3 distinct instances (laptop, home server, VPS) doing different things - all hooked up to the same memory provider (honcho) under a single user profile, and a handful AI profiles on each. All have limited access to my Obsidian Vault, which is synced between them using Obsidian Sync.
>
> I am just getting into setting up Hermes on a VPS. If you have any high ROI tips/tricks/advice on how to make this work well, please let me know!
>
> Appreciate it!

**pmarreck** · 2026-11-05T01:05:43 · [#50373697](https://news.ycombinator.com/item?id=50373697)

herdr, opus 5.5 (max), codex (max), and I am still refining how they all communicate, currently codex became unwakable at some point while claude can be woken with a message just fine.

**vivzkestrel** · 2026-11-05T04:18:35 · [#50375124](https://news.ycombinator.com/item?id=50375124)

here is my production grade setup for agentic ai on windows 11

- setup windows 11 with Rufus boot to disable online MS account creation https://rufus.ie/en/

- [download window 11 x64 iso from here ](https://www.microsoft.com/en-us/software-download/windows11)

- then download vmware workstation pro (you ll need to create a free account to get the download link on their website)

- install vmware workstation pro

- turn internet off

- plug your pendrive in with the rufus w11 x64 iso on it (mind ya, this pen drive ll first need full formatting before burning a w11 image to it)

- press f2 to reach bios in vmware settings and make it boot from pendrive

- turn internet off on your machine (DO NOT keep it on)

- install w11 (keep a 100gb for vmware)

- without updates it ll load real fast and you wont need an MS account (rufus takes care of it)

- while it installs, download revo uninstaller pro on a separate machine https://onefiles.net/9d170d01078634b5 (latest version 5.4.x) and put it inside a second pendrive / portable hdd

- once w11 loads, it ll ask you to enter a password, keep existing password blank and enter literally anything for a new password

- voila you are done with w11 setup inside vmware

- now connect the 2nd pendrive with revo and install it (need to clean uninstall many tools, hence we need this one)

- now go to search bar and type check for updates and update everything on w11 inside vmware

- next stop get unigetui from ms app store or from here https://devolutions.net/unigetui/ (it is a package manager responsible for installing just about everything else with auto updation of all packages)

- the open unigetui and search for the following packages vlc, winrar, winhance

- winhance is the fully customizable debloater you ll need to turn off all telemetry (we ll debloat after installing all the other requirements)

- next go to ms app store and install python or open powershell and type python

- the open unigetui and search for the following packages vlc, winrar, winhance

- winhance is the fully customizable debloater you ll need to turn off all telemetry (we ll debloat after installing all the other requirements)

- next go to ms app store and install python or open powershell and type python

- mind you this installs a python version manager that lets you install and uninstall multiple python versions

- after this python version manager is setup, install a specific version of python like

``` py install 3.13 ``` - next we need a node.js version manager, use fnm for it

https://github.com/Schniz/fnm - once installed, it may need to be added to environment variables manually

- once again choose a specific version of node.js and install it using

``` fnm install 23.12.0 ``` check fnm --help for commands - next we need a java version manager, use jvms for it

https://github.com/ystyle/jvms

- pretty self explanatory

- now install git and again it ll give you some trouble over environment variables, command not recognized etc, fixable with some gpt help

- at this point, we got git, node version manager, java version manager and python version manager and are ready to rumble

- install vscode/ visual studio whatever

- install codex

- install claude

- install opencode (both cli via npx and desktop app) and check their plans out https://opencode.ai/console/go

- install ghidra , ghidra-mcp (mind you open ghidra-mcp first because it only works with specific versions of ghidra and java) this is the reason we installed a java version manager

- check out setup for rea https://github.com/morluto/rea requires npx setup for rea and ghidra both, read documentation

- run winhance, check recommended settings under optimize and every other tab and restart the vm a few times for full debloat with 0 telemetry services

- congrats you have a full blown agentic environment at this point (if I missed anything i ll come back and update)

**jkelleyrtp** · 2026-11-05T01:30:31 · [#50373893](https://news.ycombinator.com/item?id=50373893)

devin

**teekert** · 2026-11-05T07:13:01 · [#50376110](https://news.ycombinator.com/item?id=50376110)

Ok I don't understand how people can deal with the information coming from a fleet of agents burning 100s-1000s of €/$ as month.

I have a Claude Code pro subscription, and mostly have Opus as a thinking buddy, we have thoroughly designed a data model together, we have implemented it in Django. Then we designed the RBAC system and now we are making views per role.

It is so intense! Constant decisions, walls of text with pros and cons to decisions. I mean the speed is amazing, the code quality is also amazing, but the amount of information I get to process is just insane, and I enjoy it less than the flow-state writing of code. I think I'll get used to it, and the speed is motivating, but man. I can not picture keeping 10's of agents on tasks. What am I doing wrong? Should I trust the system more? Or am I just mostly working on decisions now and the 1000$ token burners are not bothered with that because they have a full backlog, where I need to fill it myself?

I deal with the overload by making abstractions (a visual of the data model/db schema with color coded relations etc, a table for RBAC, think about permissions in "Axes"... I'm always looking for smart tricks to "think better", to be able to hold more information and reason about it. What must exist in me, what can I outsource?

Btw, as a FOSS person I so hate that I am not owning my means of production anymore, I have a home battery for all my infra, very proud of what I build, but I can't run my agents :( I really hope that will change soon (for privacy and for control reasons.) I pisses me off that I can't get nice hardware, meanwhile I can get a Muse or Dot, which is an LLM with a VM with up to 12 GBs of RAM, for free, paid for by their borrowed money. This whole idea makes me die a bit inside.

For the company I do all IT for we have a Mistral Team subscription, I find it hard to work with anything other than Claude Opus, I really force myself to do it but I often think: Pff, Opus would have gotten this right. But I remember feeling the same when I switched from Google to DDG (3000 years ago) and I never switched back. So it's probably just familiarity.

I also have HermesAgent on a nuc here in front of me, it makes small automations: Scans for positions or projects for my company, parses RSS feeds for relevant cybersecurity news, researches things when I ask, stores notes and articles with I can interrogate as a "body of work" <- love that btw, it's like an external memory where the faintest glimmer of a memory can help you dig up that one nugget of knowledge. Or you can find trends in TFAs you love. You can really get to know yourself a bit better. Most things it makes are LLMs out of the loop, just automations build from simple Unix-style tools that I could have made myself but never took the time for. It's also nice that it solves edge cases itself. It burns less then €3 a month on deepseek or so (just processing public data for me). I keep it on a separate vlan and away from important stuff.

> **laurasg** · 2026-11-05T07:43:58 · [#50376309](https://news.ycombinator.com/item?id=50376309)
>
> I don't think you are doing anything wrong; it is overwhelming. But I also don't think "trusting" the system more would help. IMO, now coding is a bit more like maintaining critical infrastructure; it may be built quickly, but you need to keep an eye out for random decisions agents are taking that will cost you (money, security...) in the future. I have seen Claude making many sneaky decisions and (maybe) coincidentally burning more tokens by doing so

> **petarjs** · 2026-11-06T15:00:22 · [#50393134](https://news.ycombinator.com/item?id=50393134) · _dead, flagged_
>
> You're not doing anything wrong. Data model and RBAC work is all decisions, and I don't think decisions run in parallel. One person only makes so many good ones a day, however many agents are waiting.
>
> The agents I run in bulk do work where the decisions were made earlier. They're scheduled jobs for my side projects that read dashboards, check old experiments and draft things. I don't read their output. They write to files, and when one needs a yes from me it raises a card with the full text. I go through the cards once a day.
>
> Your Django work wouldn't fit that setup, and I'd stay in the loop for it too.
>
> The card board is Briefkin, which I built: https://briefkin.dev/?utm_source=hackernews&utm_medium=comment&utm_campaign=qa-briefkin-2026-11-06

> **abyssmd** · 2026-11-05T19:53:05 · [#50383604](https://news.ycombinator.com/item?id=50383604) · _dead, flagged_
>
> I ask for one decision record per task: goal, constraints, decisions made, unresolved questions and next action. I review that instead of rereading the whole transcript, and only open the transcript when a decision needs its reasoning. I also keep the decisions about data shape and permissions for myself, while asking the agent to enumerate edge cases and test them.

> **Kwpolska** · 2026-11-05T07:44:11 · [#50376311](https://news.ycombinator.com/item?id=50376311)
>
> You use Claude as a "thinking buddy", meanwhile those who spend $500+ on LLMs have shut their brains off, and have delegated all thinking to the LLM, producing tons of slop.

> > **luisgvv** · 2026-11-05T15:26:30 · [#50380285](https://news.ycombinator.com/item?id=50380285)
> >
> > This is what I've been thinking lately. I've watched people showing up their setups and it's "cool" to fully automate and watch everything get done while sipping tea, but I bet you if something breaks or a product manager asks them they'll still rely on being a meat proxy.
> >
> > No idea if this is the future lol

> > > **teekert** · 2026-11-05T16:07:51 · [#50380891](https://news.ycombinator.com/item?id=50380891)
> > >
> > > The meat proxy is very easy to just remove, no need to pay for the tea sipping. We much find where we bring value. As did all generation before us when automation influenced their work.

**Uptrenda** · 2026-11-05T13:36:00 · [#50378897](https://news.ycombinator.com/item?id=50378897)

VS code with claude plugin. Basic private git repos per project on github, nothing special, I keep everything simple.

1. subscription: claude max 20x

2. other subscription: nope

3. harness: vs code with claude plugin

4. orchestration: no

5. broader agents: grok for outreach.

my development setup is a high-end local esxi server (multiple internet cons and a graphics card). The server has about 30 different OSes on it (static ips / ssh setups for all vms.) I use a VM on that machine to run my IDE with full access to the other VMs. I have good snapshots for all the VMs so if anything breaks they are easily restored. This setup makes it easy to develop software for any OS and also test complex software interactions.

For hosted internet services: I use a single OVH debian machine. I pre-pay everything over a large period so the bills are always paid. That keeps it reliable as I can say that even if I go broke in the future I'll have paid it for quite a while (useful in this economy, lol.)

Session notes: I feel like the best approach is for us all to just maintain a personal wiki for our projects. But I must admit I've been lazy in that respect. All my attempts to manage my notes never works because im such a messy, chaotic person. My natural state is disorder. So I'll just (1) destroy it by accident (2) forget to back it up (3) forget to use it (4) get tired of using it. I envy those super organised people.

Backup: my services are backed up locally. My local repos are backed up to github, email, and remotely. Agents deleting anything by accident isn't something i have to worry about. They have ruined VMs before. I can easily restore them. So far I've only ever lost notes because of laziness.

Security: my security setup could be vastly improved by using discrete key pairs with restricted permissions for github. What I worry about most is just things like prompt injection and the agent accidentally downloading malware. Lateral traversal out of vms is hard but not impossible. I'd wager there's still lots of private stuff on the vms too. I monitor everything closely at least and can restore a snapshot if i get paranoid.

**robblejuwaan** · 2026-11-06T16:27:07 · [#50394490](https://news.ycombinator.com/item?id=50394490) · _dead, flagged_

Biggest lesson from running a large team of AI agents: the setup matters less than the rules file. Mine got so long the agents skimmed it. Cutting it to one short page fixed more than any new tool did.

**krishanjarvis** · 2026-11-06T06:15:11 · [#50388807](https://news.ycombinator.com/item?id=50388807) · _dead, flagged_

Two habits that stopped our agent from regressing when editing its own code:

1. Every task has to start with an executable check (a test command, an HTTP assertion, or a live UI check) written before any code is touched. The worker cannot mark a task done until that check exits 0 on the real service.

2. We log every mistake the agent makes in a plain-text traps file (date, what went wrong, and the exact rule for next time) and feed the recent traps back into the system prompt. Turning real failures into explicit guardrails cut repeat mistakes dramatically.

**Krishansubudhi** · 2026-11-06T05:58:14 · [#50388717](https://news.ycombinator.com/item?id=50388717) · _dead, flagged_

Splitting read-only research ('scouts' on a fast/cheap model) from code changes ('chefs' running in isolated git worktrees that must pass a deterministic check before merging) made the biggest difference for me. One main agent plans and talks to me, scouts gather facts in parallel without polluting the main context window, and chefs never touch the main branch until tests and a second-provider reviewer pass.

**robblejuwaan** · 2026-11-05T14:57:52 · [#50379882](https://news.ycombinator.com/item?id=50379882) · _dead, flagged_

We run a small company where a large team of AI agents does most of the work, not just coding: research, marketing, sales follow-up, engineering. So my answers are a bit different.

1) Claude Max and ChatGPT Pro. Claude runs the agents on 4 Claude Max accounts. One ChatGPT Pro account uses Codex code review.

2) Yes, by the token, for jobs the subscriptions don't cover: ElevenLabs for voice, fal.ai for images and video, Exa for web search. Last month we tested 6 Chinese models on a real coding job. All of them wrote correct code, but since we're on flat-rate plans, none saved us money, so we didn't switch.

3) Stock Claude Code CLI, in tmux on a server. Each agent is a long-running session with one job and its own rules file. Codex CLI does the bulk coding and reviews Claude's work. Never switched. The default plus skills got us there.

4) Custom, and boring on purpose. The agents share a project board in Basecamp. Every piece of work is a card with an owner and a due date, and agents hand work to each other only as a card. One agent is my chief of staff: every question for me goes through it first, so I get one decision at a time instead of 30 messages. Cron jobs wake each agent for its daily work.

5) We tried OpenClaw, Hermes Agent and Grok Bot. None of them came close to what we built on Claude Code, so we dropped them.

What I learned the hard way: rules files bloat. Every time an agent messes up, the instinct is to add a rule. Now a new rule has to remove an old one. And "done" means a different agent checked it on the live site.

Funny part: I spend most of my time on the system itself, making sure it runs well, not on the agents' work.

**oorestisime** · 2026-11-05T15:42:05 · [#50380516](https://news.ycombinator.com/item?id=50380516) · _dead_

Terminal only at this point, I haven't opened VS Code in months.

- OpenCode as the coding agent. Moved off Claude Code mostly because it's open source and I can switch models/providers and use subscriptions I already pay for. I don't want my whole workflow tied to one vendor when models change every few months. - herdr to keep parallel sessions alive. A normal day is 4-5 projects with several agents running, and terminal tabs fell apart fast. The useful part is seeing which session is working, which is blocked, and which needs me. - Hunk for reading diffs in the terminal. I spend far more time reviewing than typing now. - Plannotator for feedback on long plans/specs/drafts. Annotating the exact paragraph beats typing "the third paragraph under the second heading" into a chat.

I am not using plan mode and i am slowly moving away from herdr + opencode to be only opencode desktop cause it allows me to pilot everything on a single service. and from my mobile.

I am using grok bot. its a more recent thing though and not much to power my work tbh. And i use openai and opencode go subscriptions.

**edodusi** · 2026-11-05T14:41:28 · [#50379663](https://news.ycombinator.com/item?id=50379663) · _dead, flagged_

Disclosure: I'm a developer advocate at AWS, so weigh the Kiro part accordingly.

1) Personally: Claude Pro. At work: mostly Claude models through Amazon Bedrock.

2) Pay-as-you-go on Bedrock for benchmarks and side projects. Local models: mostly Qwen and Gemma via Ollama.

3) Kiro CLI and Claude Code most of the day. I stopped switching harnesses once I noticed the model and the instructions matter more than the TUI.

4) Kiro Crew (https://github.com/kirodotdev/kirocrew) on top: background subagents, scheduled jobs, memory that survives sessions. I also use it for boring things like a morning briefing from my calendar and inbox, and an evening routine that reconciles my tasks.

5) No OpenClaw or Hermes. My "platform" is a folder of markdown files. Every routine is a skill file, and the agent writes what it learned back into the vault. That's also my answer to the question below about context months later: keep it in files, not in conversation threads.

One thing I'd add to the list: anything that writes (send a mail, post a message, change a calendar) needs my explicit yes for that exact action.

**Rilup** · 2026-11-05T15:49:41 · [#50380621](https://news.ycombinator.com/item?id=50380621) · _dead, flagged_

1) Claude only, one account. No second account, but I do hit the usage limit roughly every other week running two sessions in parallel, and then one of them waits.

2) No other models or APIs. Not by principle, I just never needed to.

3) Claude Code, default CLI, in VS Code on Windows and in the terminal on a Mac. Never switched. I am a non-programmer founder building a mobile app alone (Android + iOS + backend), so the harness matters less to me than the discipline around it.

4) No orchestration tools. What I do instead: one session on the Windows machine owns Android, the server functions and the website; one session on the Mac owns iOS. They never talk to each other. They coordinate through three markdown files in the repo: a dated memory log (what was decided and why), a pending list (what is next, who owns it, what is blocked on me), and handoff notes when one side needs the other. Each session reads them at start and writes to them before every push. Today the Mac session finished its half of a feature within the hour of the Windows session writing the spec into the pending list, with the same JSON keys, without either of us talking to the other.

5) None.

How the work actually goes: I decide what the product does and why, the sessions write the code for it and hand me what I need to ship it (deploys, migrations, pushes). When something comes back that I do not understand, I ask for it explained in detail, and that is where most of the decisions happen: whether it is what I asked for, whether it needs to change, whether there is a better way. The two incidents that hurt most were the times I skipped that step and approved something without understanding it: a `git add -A` that deleted half the website, and a key-lookup bug that silently published captures without their proof for a day. Every real bug I have found came from using the app on a phone, not from reading output.

**manu69x** · 2026-11-05T20:26:50 · [#50384031](https://news.ycombinator.com/item?id=50384031) · _dead, flagged_

Not an agentic setup in the coding sense, but the serving side is all self-hosted. llama-swap fronts several engines behind one endpoint so models swap on demand, on a Vulkan rig built around an AMD BC-250 (the PS5 APU sold to datacenters). The plumbing matters more than the GPU: the server sleeps (S3/S5) and wakes on LAN, so the first request of the day can spend minutes on WoL + boot + model load. Clients tolerate up to ~7 minutes and retry on HTTP 5xx only - llama-swap respawns crashed engines, but true timeouts should not be retried. Access goes over Tailscale from my phone and requests blip after idle, so fast network failures get one retry. The same box also speaks TTS for my Android phone. Zero cloud APIs involved.

**huangrt01** · 2026-11-05T15:40:32 · [#50380498](https://news.ycombinator.com/item?id=50380498) · _dead, flagged_

About $1,200/month: one $500 GPT subscription, three $200 GPT subscriptions, and a $100 Gemini subscription.

I use native Codex interfaces on my Mac, with LoopX for work spanning multiple long-running sessions (disclosure: I build it — https://github.com/loopx-project/loopx). Coding, review and research agents retain goals, decisions, ownership and evidence so they can resume without reconstructing the project from chat history.

A personal steward is my front door: I give direction and corrections, it coordinates with the responsible workers and brings back results and decisions needing my attention. The difficult parts are recovery, independent verification and making sure delegated work actually returns with a usable conclusion. Those paths are still being hardened. What I care about is verified work completed per dollar and per hour of my attention.

**la_balce** · 2026-11-05T13:29:01 · [#50378826](https://news.ycombinator.com/item?id=50378826) · _dead, flagged_

Solo CTO at a small startup here :

- Claude Code + a custom harness: a PreToolUse hook that makes the prod DB read-only and blocks emails, Stripe writes, deploys, pushes to main and secrets. The hook has its own evals. - Per-mission orchestration: planner (written validation contract before code), test writer (failing tests first), implementers in separate worktrees, then a tester and a security auditor who start fresh, can't write code and judge criterion by criterion with evidence. A shipper merges and watches prod for 15 min. - Opus judges, Sonnet implements, escalate to Opus on the 3rd failure. A judge is never weaker than what it judges. - I make 2 decisions per mission, as multiple-choice questions. Most missions ship the same day; every friction becomes a rule or a test.

The trade-off: no human code review, compensated by automated checks. Happy to hear where this breaks.

**hikewatch** · 2026-11-05T15:15:03 · [#50380125](https://news.ycombinator.com/item?id=50380125) · _dead, flagged_

1) Cursor and Claude for coding, plus a small set of API credits when I need something outside those. I keep one of each rather than stacking accounts. 2) Mostly stay inside those. OpenRouter when I want a quick look at a new open-weight model. 3) Cursor agents for product work, and a few scheduled agents for marketing chores (drafting posts, checking whether a launch link still works). I try to keep each agent on one job so they don't thrash. 4) Yes for the scheduled ones. The useful part was writing a short brief they re-read every run, not giving them a long tool recipe. 5) Not really. When an agent starts inventing customers or claiming a feature that isn't shipped, I kill that run and tighten the brief.

**robeym** · 2026-11-05T12:46:55 · [#50378458](https://news.ycombinator.com/item?id=50378458) · _dead_

At PAX, an ERP+CRM for small manufacturers, we use ChatGPT/Codex on the $100/user Pro plan (Codex CLI for development).

My workflow is fairly hands-on: start with the idea and design, go back and forth for a few passes until the design is suitable, then implement, test, and review. Codex can edit any file in the codebase, but I review all changes before merging into a live branch. I give it room to work during implementation, while keeping the design decisions and final review with me.

I also use a ChatGPT Dot for marketing planning and researching prospects. That’s my broader use case: helping work through marketing ideas and identify potential customers for PAX to move into the sales pipeline .

Beyond that, I use ChatGPT pretty regularly to summarize long articles and research specific things I’m curious about.

**patryk_builds** · 2026-11-05T14:16:11 · [#50379329](https://news.ycombinator.com/item?id=50379329) · _dead, flagged_

Fairly boring setup, but it works for a solo project:

- Claude Code in the project folder, nothing fancy on top. - A CLAUDE.md at the root with the stack, folder layout and hard rules (run tests before saying done, never put secrets in code, keys only in .env). - A PLAN.md with numbered stages and checkboxes. Each session starts with "continue from the first unchecked stage", and the agent ticks it off and commits at the end. That file is what made long projects work across sessions for me. - Tokens I hand to the agent are scoped to one job, short-lived, and revoked when the task is done.

The plan file mattered more than any tool or model choice. Without it, every new session started by re-deriving decisions that were already made.

**gereksiz94** · 2026-11-05T09:30:44 · [#50377090](https://news.ycombinator.com/item?id=50377090) · _dead, flagged_

Solo dev, I just shipped an Android app (Expo/React Native) built almost entirely with Claude Code in VS Code. What ended up mattering:

- A CLAUDE.md with process rules, not code rules: plan first for anything over 3 steps, never call something done without running it, and after every correction it adds a line to a lessons file. The lessons file did more than any prompt trick. - context7 for up to date docs. Without it, it confidently wrote Expo APIs from two versions ago. - A small custom MCP server for my exercise catalog (1,500 entries), so it searches and validates instead of grepping a huge JSON file and inventing fields. - Playwright driving my real browser for boring web forms: store listings, directory submissions. I still click the final Save on anything like DNS. - Memory notes between sessions, so I don't re-explain the project every time.

**tmaleh9** · 2026-11-05T15:50:13 · [#50380629](https://news.ycombinator.com/item?id=50380629) · _dead, flagged_

I run my work as an investor and operator on Claude reading a local Obsidian vault. The notes are the memory, skills hold the procedures, and scheduled runs do the prep before I start, like building the daily note and drafting replies.

Two rules do most of the work. Anything public in my name lands in a review queue and waits for my approval. And a correction goes back into the note or skill that produced the mistake, so it gets fixed once.

The weak spot is sources. Reddit blocks the fetchers, so those drafts come from a title and an excerpt, and they get flagged so I read the thread first.

Without structured notes and guardrails, I'd be surfing the wave.

**jonathanbakhit** · 2026-11-05T00:15:53 · [#50373286](https://news.ycombinator.com/item?id=50373286) · _dead, flagged_

Answering 2 through 5, since those are the ones I have a real opinion on.

2. Pay-as-you-go plus local, rather than stacking subscriptions. A hosted key for the hard parts, and Ollama or LM Studio on the same machine for anything I don't want to send out. What matters is whether the harness treats a local OpenAI-compatible endpoint as a first-class provider. If local is a checkbox behind a settings tab, you stop reaching for it and the privacy story stays theoretical.

3. One worktree per task, one agent per checkout, and I read the diffs. I've tried coordinator agents; they spend more tokens narrating progress than working, and the review burden does not go away. The useful form of orchestration is a queue you can inspect, not agents chatting with each other.

4. The piece I would add to most setups: keep the running app preview independent of the agent. I want to open the app on a phone over the LAN while the agent is still editing, not after it stops. Lyre runs the agent and the preview as separate lifecycles, which is what puts device testing inside the edit loop instead of after it.

5. No broader platform. For me the provider, the harness and the device are the whole stack.

**mukeshsinghnyc** · 2026-11-05T13:30:38 · [#50378839](https://news.ycombinator.com/item?id=50378839) · _dead, flagged_

Tried most of them and settled on LangGraph for anything serious, with Gemini and Claude behind it. For a developer it's the right level of control. Where it falls down is the moment a non-developer needs to own a workflow — a support lead who wants "refunds over $500 need a manager" to actually hold. Graphs and conditional edges aren't a thing they can read or change, and a prompt isn't a thing you can trust to enforce it. I've ended up writing a thin declarative layer on top so the policy lives in a file someone can review. Curious whether others have hit the same wall or just keep the business users out of it.

**duytran7** · 2026-11-04T15:33:05 · [#50367038](https://news.ycombinator.com/item?id=50367038) · _dead, flagged_

1) Claude Pro. Single account, no stacking. 2) No, subscriptions only so far. 3) Claude Code as the daily driver, Cursor when I want the diff review UI, and omp (oh-my-pi) when I want a harness that isn't tied to one provider. I switched around mostly for one reason: how well the harness exposes lifecycle events. Claude Code's hooks (UserPromptSubmit / PostToolUse / Stop / SessionEnd) and Cursor's hooks.json let you wire the agent into the rest of your machine deterministically, which turned out to matter more to me than the UI. 4) Nothing formal. Multiple terminal tabs and git worktrees, which is unglamorous but survives a crash better than anything clever I tried. 5) No.

One thing I didn't expect to matter: the physical side of long turns. A 10-minute turn means you walk away, and on a MacBook walking away means closing the lid, which kills the run. caffeinate doesn't help because macOS discards IOPMAssertion on a clamshell event unless an external display and AC are both attached. I ended up scripting pmset -a disablesleep around turn start/end via those same hooks (then turned it into a small open-source tool, happy to share if anyone cares, not linking it here since that's not what you asked).

The follow-up question I'd ask the thread: has anyone's harness choice been driven by hook/observability support rather than model quality? That's what moved me, and I rarely see it discussed.

**zerhanas** · 2026-11-05T14:20:53 · [#50379393](https://news.ycombinator.com/item?id=50379393) · _dead, flagged_

I mostly use Claude Code (the desktop app), on a Max plan, with Sonnet for day-to-day work and a bigger model only for hard debugging.

I run one session per project/area (marketing, product, finance...) and keep shared notes in a markdown vault the sessions read at startup. A few scheduled tasks handle the repetitive stuff.

What worked best: a rule that an agent can't call a task done without proof (a commit, a URL or a file). It stopped a lot of "done" claims that weren't.

Biggest pain: weekly usage limits. I now route mechanical work to cheaper models and keep the expensive one for architecture and review.

**davidpombar** · 2026-11-05T08:34:49 · [#50376686](https://news.ycombinator.com/item?id=50376686) · _dead, flagged_

Some context: I’m at Trackingplan (https://trackingplan.com) ,YC W23, we’re 8 people. We monitor the tracking requests sites send to analytics and ad tools and flag when something breaks. A few months ago we shipped an AI agent that lets analysts ask questions about their own tracking data, so most of what follows comes from building that.

1) Claude Teams. Honestly, Claude Code is where I spend most of my day now, and not only for code.

2) For our own product, yes: it runs on Azure AI Foundry, pay-as-you-go. One thing we learned the hard way is to keep evals and production on separate deployments. Otherwise a big eval run eats the rate limit your users depend on.

3) Claude Code, mostly the desktop app. What made it stick for me wasn’t the model, it was putting the instructions in the repo. We have one AGENTS.md as the source of truth (Cursor reads it directly, Claude Code through a one-line CLAUDE.md that imports it), one per service, and a bunch of “skills” for things we do over and over: opening PRs, adding support for a new analytics tool, triaging alarms. When an agent does something dumb, we fix the instructions instead of the output, and that fix sticks for everyone. Cursor Bugbot and Codex review our PRs too.

4) Nothing fancy. Mostly parallel Claude Code sessions, each in its own git worktree. We did build an internal agent that takes a GitHub issue, implements it, gets a separate reviewer to rate the risk, tests it in a browser, and opens a PR for a human to merge. Biggest surprise: getting it to write code was easy. Getting it to verify its own work and stop to ask when unsure took most of the effort.

5) No separate agent platform, but this is the part that surprised me most. With 8 people, we use the same Claude Code setup for sales and marketing: finding prospects, researching them, drafting LinkedIn messages and emails, writing content and scheduling posts through the Zernio API (https://zernio.com). Same idea as with code: the workflow lives in files, so anyone can pick it up and improve it.

**timmurphy** · 2026-11-06T02:04:22 · [#50387241](https://news.ycombinator.com/item?id=50387241) · _dead, flagged_

Claude Code, Codex, and Cursor, depending on the job. No orchestration tools, just a few sessions at a time, and I review the diff before anything lands. The number I actually watch is cost per session, subagents included, that is where the surprises were.

**ankur_misra** · 2026-11-05T17:49:30 · [#50382055](https://news.ycombinator.com/item?id=50382055) · _dead, flagged_

My setup splits by risk, not by model. Agents can read, draft and queue anything, but anything that spends money, sends a message or changes a setting waits for me to approve it, and I see the exact payload before I tap. Most of the inference runs on a local box at home, and I rent cloud models only for the occasional heavy job. Since moving to approve-first, the thing I notice most is that I stopped feeling the urge to babysit the agent's logs.

**takeitwhen** · 2026-11-05T14:13:30 · [#50379297](https://news.ycombinator.com/item?id=50379297) · _dead, flagged_

Not a coding setup so much as a guardrail that paid off for me: I run a small solo web app with agents drafting content that cites studies. The one thing I stopped trusting is any citation the model produces from memory. Every PMID now gets fetched from the PubMed API and the title and year are compared against what the draft claims, and a mismatch blocks the deploy. It's about 30 lines of script, and it caught several plausible-looking IDs that pointed at unrelated papers. Cheap check, and it works with any harness.

**bluescorpio** · 2026-11-05T12:25:47 · [#50378281](https://news.ycombinator.com/item?id=50378281) · _dead, flagged_

Solo builder here, shipping a handful of small web tools. What's stuck for me: one agent in the editor for scoped changes, plus a plain-text task file it has to update before and after every step, which cut down a lot on drift across long sessions. I never let it touch deploy or DNS; it writes a checklist and I run those steps myself. The biggest win wasn't a better model. It was smaller tasks with a clear "done" check, like a test passing or a page rendering, so I can verify each one in under a minute.

**ivanvia** · 2026-11-05T06:08:53 · [#50375777](https://news.ycombinator.com/item?id=50375777) · _dead_

1) Claude Max + ChatGPT Plus, and work pays for a Claude Code seat. Started with a few subs to use Codex, then got a free Max trial coupon and couldn't go back. No duplicate accounts now.

2) No, Opus 5.5 covers basically everything. Have Ollama installed but barely touch it.

3) Mostly Claude Code CLI, Codex CLI sometimes. Built my own UI on top of Claude Code: visual sessions, past convo history, tags per project/Notion task, boards, works from my phone. Too many terminal tabs was the reason.

4) None of those, might try some to see if there's a use case. Have my own scripts though: one session plans while cheaper models do edits, a few runs review the same diff, and a cron job picks up tasks and pushes branches.

5) Not really.

**videotextly** · 2026-11-05T07:31:06 · [#50376219](https://news.ycombinator.com/item?id=50376219) · _dead, flagged_

One practice that has helped me with agent-driven changes: before asking for any implementation, I have the agent write the failing test or a small executable acceptance check first, and I review that instead of the diff. It makes "what complete looks like" something the agent can verify on its own rather than a prose description, and it catches the cases where the model quietly changes the spec to match its code. The cost is that you have to be strict about the test not being edited during the implementation step. Has anyone found a reliable way to enforce that, short of making the test files read-only?

**firefoxweather** · 2026-11-05T11:35:02 · [#50377935](https://news.ycombinator.com/item?id=50377935) · _dead, flagged_

For the browser-side of my AI workflow: Firefox with Multi-Account Containers is underrated. I keep one container for Claude, one for local LLM UIs (Ollama web, etc.), and one for research — prevents session bleed-through and means multiple accounts stay open simultaneously without interference.

Rest of stack: Claude Code for coding tasks, Ollama (llama3.3) for local/offline work when API costs matter, Python scripts as glue. The container setup is small but meaningfully reduces context-switching friction across AI tools.

**pilothousedev** · 2026-11-05T15:06:31 · [#50380015](https://news.ycombinator.com/item?id=50380015) · _dead, flagged_

For coding I run Claude Code and Codex in parallel on an always-on box. The part that kept biting me was permission prompts sitting unanswered while I was away, so I built a small PreToolUse policy layer that auto-allows boring commands (tests, git status) and only pings my phone for the risky ones. Keeps me out of --dangerously-skip-permissions without babysitting the terminal.

**coindefdev** · 2026-11-04T16:12:21 · [#50367665](https://news.ycombinator.com/item?id=50367665) · _dead, flagged_

The setup matters less to me than the feedback loop around it. The biggest change in how much I trust agent output was giving every task an executable definition of done: a failing test, a script that diffs output against a known-good run, or a type check that has to pass. Without that, agents report success based on how plausible their own diff looks.

Second thing: I keep a short, human-written notes file of failure modes I've actually seen (it edits generated files, it mocks the thing under test, it silently widens a try/except) and fold those into the instructions only after they happen twice. Long speculative rule files seemed to get ignored, while short ones tied to real incidents held up.

I also review the test changes before the code changes. When an agent is struggling, it will often loosen an assertion rather than fix the bug, and that's much easier to spot if you read the tests first.

**martialwave8** · 2026-11-05T06:45:49 · [#50375956](https://news.ycombinator.com/item?id=50375956) · _dead, flagged_

Local voice stack: faster-whisper (small int8) → Ollama/Qwen3 → Piper TTS, glued together with FastAPI. No cloud, no telemetry.

Works well for privacy-sensitive use cases. But auditing it revealed a nasty failure mode: Whisper hallucinating "Amara.org" subtitle credits on near-silence, which then gets routed to the LLM and spoken aloud by Piper.

Documented the full F1-F8 failure registry + P1-P4 proof protocol if anyone's building something similar and wants to skip the same mistakes.

**bshafiq** · 2026-11-05T14:33:10 · [#50379558](https://news.ycombinator.com/item?id=50379558) · _dead, flagged_

we've been running a mix of LangGraph and CrewAI for internal tooling. honestly the hardest part hasn't been getting them to work, it's been stopping them from working too much.

if you don't wrap your handoffs tightly, you'll eventually get two agents that just politely agree with each other in an infinite loop until you wake up to a massive API bill. we ended up putting a tiny middleware layer between the nodes that hashes the payloads and kills the session if it sees the exact same message 3 times in a row. saved us a ton of money, but it feels like something that should just be built into the frameworks by now.

genuinely curious how everyone else here is handling state loops without just writing custom retry logic for every single agent? or is this just the silent killer of agentic workflows right now?

**vladzoff** · 2026-11-05T06:48:36 · [#50375970](https://news.ycombinator.com/item?id=50375970) · _dead, flagged_

For coding I mostly use Codex day to day, Cursor when I want to stay in the editor, and Copilot for smaller stuff. I also keep Qwen running locally through Ollama/LM Studio for experiments.

I don't really run a bunch of agents in parallel by default. One main agent is enough for most tasks. For risky changes, I'd rather have a separate review/check pass than ask the same agent if its own work looks good.

**bykapil** · 2026-11-04T16:12:01 · [#50367660](https://news.ycombinator.com/item?id=50367660) · _dead, flagged_

I mostly use it for small AWS serverless side projects (Lambda, DynamoDB, CloudFront), evenings only, since I have a toddler and not much uninterrupted time. What helped me most was keeping tasks small and writing down what done looks like (a test passing, a deploy succeeding) before handing it off. I also have it explain IAM policies and CloudFormation diffs before I apply anything, because that's where it has confidently been wrong for me. The agent is a lot less useful for me when I can't review the result in ten minutes, so I rarely run more than one thing at a time.

**KolibriFly** · 2026-11-05T14:35:32 · [#50379585](https://news.ycombinator.com/item?id=50379585) · _dead, flagged_

The pricing from providers is honestly brutal right now. A hundred bucks here, two hundred there

I try to keep a balance myself : I throw heavy tasks at Claude Code on max settings, and everything else runs on a local Qwen 3.8, thankfully my MacBook can handle it

**awesomevideo** · 2026-11-05T14:11:19 · [#50379276](https://news.ycombinator.com/item?id=50379276) · _dead, flagged_

Mostly Claude or Cursor pointed at a handful of MCP servers I run myself, plus a plain REST fallback when an agent gets stuck on SSE. I keep each server narrow (one job) because a long tool list seems to make agents pick the wrong tool more often.

**lo0pback** · 2026-11-05T03:39:02 · [#50374847](https://news.ycombinator.com/item?id=50374847) · _dead_

1. Not anymore. 2. OpenRouter with chinese models such as glm, deepseek. I have qwen3.6:35b-a3b on my server, but rarely use it. 3. I use pi on the desktop and phone as well (inside termux). all my devices are part of the same tailnet, so they can ssh into each other to see the relevant context. 4. Not anymore. 5. Not anymore.

**siddhant_d777** · 2026-11-05T07:25:42 · [#50376183](https://news.ycombinator.com/item?id=50376183) · _dead_

Solo side project, nights and weekends. Claude Code agents, one task each; every agent raises a PR and I review each one before merging. Backend is a Go worker on Kubernetes (DigitalOcean). Curious how others keep agent PRs small enough to review properly rather than skimming.

**JuanMa_Garrido** · 2026-11-05T15:52:56 · [#50380672](https://news.ycombinator.com/item?id=50380672) · _dead, flagged_

founder setup, not a pure coding setup:

- Claude / Cursor for building and content - production agents on top of Salesforce for support, order intake, and opportunity follow-up (grok bot, vantegrate) - ega Futura ERP for the transactional backbone those agents read and write

what I would not do again: give an agent broad write access before the process and data model are boring and documented. our best "agentic" win so far was boring: fewer tools, clearer ownership, and stop conditions written down beofre go-live

**tawman** · 2026-11-05T02:59:59 · [#50374592](https://news.ycombinator.com/item?id=50374592) · _dead, flagged_

OpenRig: Two of us (me and a co-worker) are engineering this way. We each run our own team of agents, and the two teams review each other's work.

1) Subscriptions: two Claude Max plans. One is for my workstation. The other is on a separate box under my desk, a GPU VM, so long-running agents there don't eat my main quota. There's also a ChatGPT plan for Codex. We watch weekly usage per account, because one-model-per-seat burns through it faster than you'd think.

2) Models: - Opus for coordination and most coding; - the top-tier model only for money-movement and payment-path code; - Haiku for small assistant seats such as calendar and email triage; - Codex as a second, independent reviewer; - Ollama is on the GPU box, but it isn't doing real work yet.

3) Harnesses: stock Claude Code and Codex CLI, each in its own terminal. We use herdr as the terminal multiplexer, on Omarchy Linux. No IDE.

4) Orchestration: OpenRig (https://github.com/mvschwarz/openrig). It runs persistent "rigs" of named agent seats in tmux, a durable work queue between them, and snapshot/restore, so after a reboot every agent resumes its conversation instead of starting fresh. My setup is about 45 seats across two machines: - a small kernel I talk to (one advisor agent relays everything); - a dev rig with a coordinator, Claude and Codex developers, QA, a contrarian reviewer and peer reviewers; - an ops rig for alerts, compliance checks, database reads and infra; - an assistant rig for mail, calendar and research.

What works: - Decisions come to me and stay with me: questions land in a Slack #decisions channel I can answer from my phone. Pushes, merges, votes and cloud changes still need my explicit OK. - Peer review across rigs: my co-worker's rig and mine review each other's PRs, and only the humans approve. - Least-privilege agent identities: the agents' cloud and Azure DevOps identities are read-only by default.

What doesn't (yet): operations can still bite. Tonight a reboot left every seat unable to launch, because my `claude` was a mise wrapper that hangs in the minimal environment the orchestrator launches with. Claude fixed it with a symlink. Severity calibration needs tuning too. Agents happily rate an edge case HIGH, and I've had to make them state the real-world precondition and its likelihood first.

5) None of those platforms. OpenRig covers it for us.

**mroops0111** · 2026-11-05T03:33:16 · [#50374804](https://news.ycombinator.com/item?id=50374804) · _dead, flagged_

I'm on Claude Code with the Max 5x plan.

For the terminal, I used to use Warp, but switched to cmux. It feels faster, and it lets Claude sessions running on different accounts talk to each other.

I also maintain my own Claude Code plugin marketplace, where I keep the skills, MCP servers, and hooks I use personally and at work.

**hikewatch** · 2026-11-04T17:09:30 · [#50368525](https://news.ycombinator.com/item?id=50368525) · _dead, flagged_

Read as a bill list, Claude plus Codex plus Cursor plus a couple of APIs is already several renewal dates. Keeping each one with a date and a confirmed or unknown flag stops annual charges landing cold. Hikewatch does this if it's useful, free for 3 tools with email reminders: https://hike.watch

**anthony_aisyste** · 2026-11-04T20:52:31 · [#50371343](https://news.ycombinator.com/item?id=50371343) · _dead, flagged_

Solo freelance dev, mostly side projects.

1) A paid Claude plan.

3) Claude Code, default CLI.

4) No orchestration, one session per task.

5) No. What changed my workflow most is MCP: connecting the agent to my hosting, DNS and payments dashboards so it reads logs and config itself instead of me copy-pasting them into the chat.

**ashutosh1818** · 2026-11-05T19:16:58 · [#50383169](https://news.ycombinator.com/item?id=50383169) · _dead, flagged_

Location: India (IST, UTC+5:30) Remote: Yes Willing to relocate: Open to discussing

Looking for: AI Engineer / Software Engineer / Early Engineer

Technologies: Python, JavaScript, TypeScript, C++, React, Next.js, Node.js, Express, PostgreSQL, MongoDB, Redis, Supabase, LLM APIs, RAG, AI agents, REST APIs, System Design, Docker, Linux, CI/CD, GitHub Actions, AWS.

Portfolio: https://portfolio-phi-red-69.vercel.app/ GitHub: https://github.com/ashutoshpandey18 Email: ashutoshpandey23june2005@gmail.com

Hey HN, I'm Ashutosh, a CS student from India who enjoys building software and solving problems.

I'm currently working on SketchFlow, an AI-powered visual IDE that turns sketches into functional websites. I've also worked with early-stage startups and had a project selected for the Sarvam Startup Program.

I enjoy working across the stack, from writing Python and backend services to building interfaces, integrating AI features, designing systems, and deploying applications.

I'm looking for an opportunity to work with a small engineering team, learn from experienced builders, and take responsibility for shipping real products.

Open to full-time remote opportunities worldwide.

**cyclopeanutopia** · 2026-11-05T09:26:53 · [#50377059](https://news.ycombinator.com/item?id=50377059) · _dead_

I'm only using local Qwen with OMP harness for reviewing my own code, and only from time to time.

**rodrigo-duarte** · 2026-11-05T00:54:12 · [#50373599](https://news.ycombinator.com/item?id=50373599) · _dead, flagged_

we run a few agents from different model families in the same room in agent-chat, which we build. one writes, another from a different family reviews it, and a person mostly steps in when they ask for a decision. the useful part was not more orchestration, it was having them see each other's messages in one place instead of pasting context between sessions.

**agentcosthub** · 2026-11-05T21:52:18 · [#50384979](https://news.ycombinator.com/item?id=50384979) · _dead, flagged_

for the boring loops i just drop to haiku 5.5 ($0.10/$0.50 per 1m) and keep opus for planning. same harness, way less burn

**rizky05** · 2026-11-05T03:59:33 · [#50374997](https://news.ycombinator.com/item?id=50374997) · _dead_

1. claude,codex,gemini,longcat,glm 2. openrouter, deepseek 3. fural.space, i made it.

sorry, english is not my main language..

**Wolfbeta** · 2026-11-05T09:10:59 · [#50376952](https://news.ycombinator.com/item?id=50376952) · _dead, flagged_

I’m using ChatGPT Plus with a custom execution substrate I’ve been building called Relay.

The primary motivation was working around HTTP 429 rate limits and the constraints of existing agentic tooling.

Instead of relying on an integrated coding agent, I use ChatGPT as the reasoning interface and Relay as the execution transport.

ChatGPT generates shell payloads that I copy into the clipboard. Hammerspoon intercepts them, validates them against an explicit contract, and dispatches them to local or remote execution environments. Interactive workloads run in tmux, and the resulting transcripts are delivered back into ChatGPT.

The infrastructure is mostly macOS, Linux, SSH, Git, Docker, and Proxmox.

What started as a workaround has evolved into a fairly rigorous execution protocol: explicit shell dialects, process ownership, stdin isolation, remote lifecycle management, durable transcripts, and regression tests for recurring failure modes.

I’m deliberately avoiding agent swarms. The model handles reasoning, the infrastructure handles execution, and I retain control over the boundary between them.

It’s essentially an attempt to get the utility of an agentic coding environment without being dependent on its execution quotas, orchestration framework, or subscription tier.

**mksadoughi** · 2026-11-05T00:47:32 · [#50373549](https://news.ycombinator.com/item?id=50373549) · _dead, flagged_

1-3) Just Claude Code on a Max plan, nothing else.

Nothing off the shelf, but one thing has really changed how I work. I never trusted the multi-agent hype, but now that I use it I have a hard time going back. I have one session I call the coordinator, kind of a copy of me, and under it each project has its own sessions with roles: developer 1, 2, 3, a UI/UX designer, and so on. I only talk to the coordinator at a high level, and it figures out who to talk to, who gets which task and how they communicate.

What surprised me is the context. After several weeks of one agent coordinating tens of sessions, probably hundreds of millions of tokens in, it still doesn’t seem to lose track of what anyone worked on. And it takes away the headache of keeping track of who is doing what.

No platforms. I’m also sick of typing, so most of my talking to the coordinator is by voice: I built a fairly simple conversational layer that sits on top of Claude Code, and I just talk to it and it takes care of things.

If there’s one lesson: trust the model’s context more than I used to.

**rugberrydave** · 2026-11-04T15:49:37 · [#50367294](https://news.ycombinator.com/item?id=50367294) · _dead, flagged_

One thing that stands out in these answers is how many people say the model matters less than the harness and how clearly you define "done" for the agent. It would be interesting to know how people handle verification, for example whether they rely on tests the agent writes itself or keep a separate check it can't edit. That seems like the part that decides whether running several agents in parallel actually saves time.

**throwaway239872** · 2026-11-05T10:27:11 · [#50377482](https://news.ycombinator.com/item?id=50377482) · _dead, flagged_

(Skating close to the edge of the guidelines on AI content on Hacker News; the below is largely produced by my agent but lightly edited by me. Despite this, I thought it might still be useful for someone. Anonymous account.)

I pay for ChatGPT Pro. My main agent uses OpenAI/Codex, and I also run a local Qwen model on a Mac for selected private workloads.

My setup is mostly Hermes Agent running continuously on a Raspberry Pi, with Telegram as the interface I use most often. I also use a desktop interface and have been experimenting with an iPhone client, Hermes Conduit, which is excellent.

The Pi runs the agent software and integrations; it isn't running the main language model. The local model gets narrower jobs where the privacy benefit justifies the difference in capability; I don't use it much.

My Hermes use is broader than coding, although coding is a substantial part of it. Some concrete examples:

* Software development, especially macOS/iOS work: investigating bugs, preparing patches, building applications, running tests and reviewing changes.

* Looking after machines and services: SSH administration, network diagnosis, backup checks, investigating failed scheduled jobs and maintaining small web applications.

* Working with an existing collection of Org-mode project and area journals. The agent reads those to prepare briefings and find outstanding commitments.

* Document work: extracting and checking source material, assembling a community newsletter, producing Word documents and reviewing statistical claims.

* Household automation and energy monitoring through Home Assistant, with explicit limits on what it may change.

* Research and everyday administration where the useful result is a document, a comparison, a checked booking detail or a completed local task.

I've put quite a bit of effort into reusable instructions for recurring work. These cover things such as how to handle a particular development environment, what constitutes a completed deployment and which operations require my approval. I keep procedural knowledge separate from personal memory.

Reliability is still a weak point. I've had interrupted scheduled jobs, gateway hangs and unexplained host restarts. This morning I caught the gateway blocked in a synchronous database write triggered by an optional session-reset plugin. Its watchdog restarted it; that particular interruption wasn't a Pi reboot. We've disabled the plugin and prepared an update, but the separate host-restart problem remains unresolved.

I get enough useful work out of the setup to keep using it, but it also creates maintenance work. If you want a personal assistant that behaves like a finished appliance, I can't honestly recommend my arrangement on that basis yet.

Permissions and recovery have consequently become more important to me than adding integrations. The assistant can draft an email, but sending it requires approval. Some services are strictly read-only. File cleanup should be reversible. A failed job needs to distinguish "nothing happened" from "we don't know whether it happened" before retrying.

The reason I keep using a broader agent platform is continuity across these jobs. I can discuss a problem on my phone, have the assistant inspect the relevant machine or files, and come back to an actual result. That is useful in ways a coding autocomplete tool isn't. But I would judge the setup by completed, checked work and the maintenance it creates, rather than by how many agents it can launch.

**blinkzero** · 2026-11-05T14:22:42 · [#50379415](https://news.ycombinator.com/item?id=50379415) · _dead, flagged_

back to claude max 5x

**ls-a** · 2026-11-04T15:47:30 · [#50367256](https://news.ycombinator.com/item?id=50367256) · _dead_

Lol no one giving up their setup
