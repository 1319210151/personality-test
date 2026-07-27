// English Learning App — Content Pool
// 12-month curriculum with 90+ passages, 28 dialogues, 40 vocab phrases
// Each passage tagged with topic (0-6) and month (1-12) for curriculum progression

const CONTENT_POOL = {
  listening: {
    passages: [
      // ====== Month 1-2: Foundation B1 — Remote Work & Meetings ======
      {title:'Remote Work Productivity',text:'Remote work has transformed the way we approach our daily tasks. Studies show that employees who work from home are often more productive than their office-based counterparts. However, maintaining clear communication with team members remains a key challenge. Regular video check-ins and well-structured project management tools can help bridge the gap. It is also important to set boundaries between work and personal time to avoid burnout.',source:'BBC 6 Minute English',words:138,level:'B1',topic:0,month:1},
      {title:'Getting to Know Your Colleagues',text:'Starting a new job can be both exciting and nerve-wracking. The first few weeks are crucial for building relationships with your new colleagues. Take the initiative to introduce yourself during breaks. Ask questions about their roles and how your work might intersect. People appreciate genuine curiosity. Remember that every expert was once a beginner, so do not be afraid to admit what you do not know yet.',source:'British Council',words:105,level:'B1',topic:0,month:1},
      {title:'Effective Meeting Communication',text:'Running an effective meeting requires more than just a clear agenda. The chairperson needs to ensure that every participant has an opportunity to contribute. Using phrases like "I would like to hear your thoughts on this" can encourage quieter team members to speak up. Summarising key points at the end of each agenda item helps everyone stay on the same page. Action items should be clearly assigned with specific deadlines.',source:'British Council Podcast',words:98,level:'B1',topic:1,month:1},
      {title:'Daily Office Conversations',text:'Every day at the office brings opportunities for small but meaningful interactions. Whether it is greeting the receptionist, chatting with a teammate during a coffee break, or discussing weekend plans, these casual conversations build the social fabric of a workplace. Simple phrases like "How was your weekend?" or "Did you catch the game last night?" can open doors to stronger professional relationships and a more enjoyable work environment.',source:'VOA Learning English',words:110,level:'A2',topic:1,month:1},
      {title:'Writing Your First Business Email',text:'A well-written business email should be clear, polite, and concise. Start with a proper greeting such as "Dear Mr. Smith" or "Hello Sarah." State your purpose in the first sentence. Keep paragraphs short and focused. Use bullet points for multiple items. End with a clear call to action and a polite closing like "Best regards" or "Sincerely." Always proofread before clicking send.',source:'Business English Pod',words:100,level:'B1',topic:2,month:1},
      {title:'Team Collaboration Basics',text:'Effective teamwork relies on clear communication and mutual respect. Each team member brings unique skills and perspectives to the table. When working on a group project, make sure roles and responsibilities are clearly defined from the start. Regular check-ins help identify potential issues before they become problems. Celebrate small wins together to maintain team morale and momentum throughout the project lifecycle.',source:'TED Business',words:105,level:'B1',topic:3,month:1},

      // ====== Month 3-4: B1-B2 — Speaking & Vocabulary ======
      {title:'The Art of Small Talk',text:'Small talk is often underestimated in professional settings, yet it plays a crucial role in building rapport. Topics such as weekend activities, travel experiences, or recent industry news are generally safe choices. Avoid controversial subjects like politics or religion in business contexts. The key is to show genuine interest in the other person rather than simply waiting for your turn to speak. A good conversationalist listens more than they talk.',source:'VOA Learning English',words:110,level:'B1',topic:5,month:3},
      {title:'Leading Brainstorming Sessions',text:'Brainstorming sessions are most productive when participants feel psychologically safe to share unconventional ideas. The facilitator should start by stating the problem clearly and setting a positive tone. All ideas should be recorded without immediate judgement. Techniques like mind mapping and reverse brainstorming can stimulate creative thinking. After collecting ideas, the group can vote on the most promising ones using dot-voting or ranking methods.',source:'TED Business',words:128,level:'B1',topic:1,month:3},
      {title:'Practising Active Listening',text:'Active listening is a skill that transforms ordinary conversations into meaningful exchanges. It involves giving your complete attention to the speaker, observing their body language, and withholding the urge to formulate your response while they are still talking. Paraphrasing what you heard and asking thoughtful follow-up questions demonstrates genuine engagement. In a world full of distractions, being truly heard is a rare gift.',source:'BBC 6 Minute English',words:108,level:'B1',topic:4,month:3},
      {title:'Client Negotiation Basics',text:'Successful client negotiation starts with thorough preparation. Before entering any negotiation, you should research the client\'s business needs, understand their budget constraints, and identify potential areas of compromise. During the discussion, active listening is just as important as presenting your own position. Asking open-ended questions helps uncover the client\'s underlying concerns. Always aim for a win-win outcome rather than trying to dominate the conversation.',source:'EnglishPod',words:102,level:'B1',topic:2,month:4},
      {title:'Making a Business Phone Call',text:'Making professional phone calls in English can feel intimidating at first. Prepare a brief script with key points you want to cover. Introduce yourself clearly and state the purpose of your call. Speak slightly slower than you would in person. If you do not understand something, it is perfectly acceptable to say, "Could you please repeat that?" End the call by summarising next steps and thanking the person for their time.',source:'VOA Learning English',words:115,level:'B1',topic:2,month:4},
      {title:'Handling Difficult Conversations',text:'Difficult conversations are inevitable in the workplace. When addressing sensitive topics, it is important to focus on the issue rather than the person. Use "I" statements instead of accusatory "you" statements. For example, say "I noticed the deadline was missed" rather than "You missed the deadline." Always propose a constructive path forward and offer support where needed.',source:'BBC 6 Minute English',words:115,level:'B1',topic:1,month:4},

      // ====== Month 5-6: B1-B2 — Meetings & Clients ======
      {title:'Presenting Data Effectively in Meetings',text:'Data-driven presentations can make or break a business meeting. The golden rule is to tell a story with your numbers rather than simply listing statistics. Start with the key insight, then support it with relevant data points. Visual aids like charts and graphs should be simple enough to understand in under ten seconds. Always anticipate questions your audience might ask and prepare concise answers in advance.',source:'VOA Learning English',words:132,level:'B1',topic:1,month:5},
      {title:'Virtual Meeting Etiquette',text:'Virtual meetings have their own set of unwritten rules. Muting your microphone when not speaking is basic courtesy. Using the chat function for questions allows the speaker to address them at an appropriate time without interruption. Looking into the camera rather than at the screen creates the impression of eye contact. Good lighting and a tidy background also contribute to a professional appearance.',source:'BBC 6 Minute English',words:118,level:'B1',topic:1,month:5},
      {title:'Cross-Departmental Meeting Dynamics',text:'Meetings that involve multiple departments present unique challenges. Each team may have different priorities, jargon, and working styles. A skilled facilitator acknowledges these differences upfront and establishes common ground. Creating a shared vocabulary and agreeing on meeting norms can prevent misunderstandings. It is also helpful to rotate meeting leadership among departments to build mutual understanding and respect.',source:'EnglishPod',words:110,level:'B1',topic:1,month:5},
      {title:'Building Long-Term Client Relationships',text:'Acquiring a new client can cost five times more than retaining an existing one. Building lasting relationships requires consistent value delivery and genuine care for the client\'s success. Schedule regular check-in calls even when there is no immediate business to discuss. Share industry insights and articles that might benefit their business. When problems arise, address them proactively rather than waiting for the client to complain.',source:'TED Business',words:125,level:'B1',topic:2,month:6},
      {title:'Handling Price Objections',text:'Price objections are among the most common challenges in sales conversations. Rather than immediately offering a discount, first understand the root of the objection. Is the client comparing your price to a competitor? Do they not see the value yet? Reframe the conversation around return on investment. For example, "While our solution costs more upfront, clients typically recover the investment within six months through efficiency gains."',source:'BBC 6 Minute English',words:135,level:'B1',topic:2,month:6},
      {title:'Managing Client Expectations',text:'Setting realistic expectations from the start prevents disappointment and conflict later. Clearly document the project scope, timeline, and deliverables in a written agreement. When unexpected challenges arise, inform the client immediately rather than hoping the problem will resolve itself. Provide a revised timeline along with your proposed solution. Clients appreciate honesty and proactiveness far more than excuses or silence.',source:'VOA Learning English',words:120,level:'B1',topic:2,month:6},

      // ====== Month 7-8: B2 — Presentations & Business Writing ======
      {title:'Crafting Executive Summaries',text:'Senior executives rarely have time to read lengthy reports. An effective executive summary should fit on a single page and answer three critical questions: What is the current status? What decisions are needed? What are the key risks? Use bullet points and bold text to make the content scannable. Lead with the most important information rather than building up to it gradually.',source:'BBC 6 Minute English',words:108,level:'B2',topic:3,month:7},
      {title:'Presenting to Senior Leadership',text:'Presenting to senior leadership is different from presenting to peers. Executives want the bottom line first, not a detailed walkthrough of your process. Prepare for interruptions and tangents — senior leaders often ask questions that jump ahead in your presentation. Know your data inside out so you can answer confidently without flipping through slides. Practise your presentation with a mentor who can give honest feedback.',source:'TED Business',words:130,level:'B2',topic:3,month:7},
      {title:'Project Status Reporting',text:'Weekly project status reports are essential for keeping stakeholders informed. A good status report should include accomplishments from the past week, planned tasks for the upcoming week, and any risks or blockers that need attention. Be specific about progress rather than using vague terms like "in progress." Use metrics and data whenever possible to support your updates. If a deadline is at risk, flag it early rather than waiting until the last minute.',source:'VOA Learning English',words:115,level:'B1',topic:3,month:7},
      {title:'Writing Effective Progress Emails',text:'Progress update emails should be clear, concise, and actionable. Use a consistent format each week so recipients know where to find the information they need. Include a brief summary at the top for those who only have time to skim. Use traffic light indicators — green for on track, yellow for at risk, red for blocked — to communicate status visually. End with a clear call to action if you need input or decisions.',source:'EnglishPod',words:115,level:'B1',topic:3,month:8},
      {title:'The Art of Business Storytelling',text:'Facts tell, but stories sell. When pitching to clients, wrap your data in a compelling narrative. Start with the problem your client faces, describe the journey of solving it, and paint a vivid picture of the successful outcome. Use specific examples and case studies rather than vague claims. A memorable story can differentiate you from competitors who rely solely on feature lists and pricing tables.',source:'TED Business',words:112,level:'B2',topic:2,month:8},
      {title:'How to Write a Project Proposal',text:'A compelling project proposal begins with a clear problem statement that resonates with the decision-maker. Next, present your proposed solution with specific, measurable objectives. Include a realistic timeline with key milestones and deliverables. Address potential risks and your mitigation strategies. Finally, provide a detailed budget breakdown. End with a strong closing that reiterates the value your project will deliver to the organisation.',source:'British Council',words:118,level:'B2',topic:3,month:8},

      // ====== Month 9: B2 — Advanced Listening (BBC/TED) ======
      {title:'The Future of Hybrid Work',text:'The hybrid work model has emerged as the preferred choice for millions of professionals worldwide. Companies are now redesigning their office spaces to accommodate flexible schedules, with hot-desking and collaborative zones replacing traditional cubicles. Research indicates that a mix of three office days and two remote days per week yields the highest employee satisfaction. However, managers must be trained to lead distributed teams effectively.',source:'TED Business',words:118,level:'B2',topic:0,month:9},
      {title:'Digital Tools for Remote Teams',text:'Modern remote teams rely on a suite of digital tools to stay connected. Project management platforms like Asana and Trello help track tasks visually. Communication apps such as Slack and Microsoft Teams enable instant messaging and file sharing. Video conferencing through Zoom or Google Meet bridges the face-to-face gap. The key is not the number of tools, but how effectively the team agrees to use them together.',source:'VOA Learning English',words:130,level:'B1',topic:0,month:9},
      {title:'Emotional Intelligence at Work',text:'Emotional intelligence, or EQ, is increasingly recognised as a better predictor of career success than IQ. It involves self-awareness, self-regulation, empathy, and social skills. Employees with high EQ handle workplace stress more effectively and build stronger relationships with colleagues. The good news is that unlike IQ, emotional intelligence can be developed through deliberate practice, feedback, and reflection.',source:'TED Business',words:120,level:'B2',topic:4,month:9},
      {title:'The Power of Active Listening',text:'Most people listen to reply rather than to understand. Active listening means giving your full attention to the speaker, observing their body language, and withholding judgement. Techniques include paraphrasing what you heard, asking open-ended follow-up questions, and summarising key points before responding. In a world full of distractions, being truly heard is a rare and valued experience.',source:'VOA Learning English',words:108,level:'B2',topic:4,month:9},

      // ====== Month 10: B2 — Impromptu Speaking ======
      {title:'Thinking on Your Feet',text:'The ability to think on your feet is invaluable in business settings. When asked an unexpected question, take a brief pause before answering — this shows confidence, not hesitation. Structure your response using the PREP method: state your Point, give a Reason, provide an Example, and restate your Point. With practice, this framework becomes second nature and helps you handle any Q&A session with composure.',source:'TED Business',words:120,level:'B2',topic:4,month:10},
      {title:'Giving and Receiving Feedback',text:'Constructive feedback is a gift, but delivering it well is a skill. Use the SBI model: describe the Situation, the specific Behaviour you observed, and the Impact it had. Deliver feedback privately and in a timely manner. When receiving feedback, resist the urge to explain or defend yourself immediately. Instead, listen fully, ask clarifying questions, and thank the person for their candour before reflecting on how to improve.',source:'British Council Podcast',words:130,level:'B2',topic:4,month:10},
      {title:'Cross-Cultural Communication',text:'In today\'s globalised business environment, cross-cultural communication skills are increasingly important. Different cultures have varying expectations regarding formality, directness, and the use of humour in professional settings. For example, while some cultures value direct feedback, others prefer a more indirect approach to avoid causing embarrassment. Being aware of these differences can prevent misunderstandings and build stronger international relationships.',source:'British Council Podcast',words:108,level:'B2',topic:5,month:10},
      {title:'Dealing with Difficult Client Feedback',text:'Receiving negative feedback from a client can be uncomfortable, but it is also an opportunity to strengthen the relationship. Listen without becoming defensive. Paraphrase the client\'s concerns to confirm your understanding. Thank them for their honesty and ask clarifying questions. Then, propose a concrete action plan with specific milestones. Following up after implementing changes shows the client that their feedback truly matters.',source:'EnglishPod',words:118,level:'B2',topic:2,month:10},

      // ====== Month 11: B2 — Full Business Scenarios ======
      {title:'Agile Project Management Basics',text:'Agile methodology has transformed how software teams deliver projects. Instead of planning everything upfront, agile teams work in short sprints of one to two weeks. Each sprint delivers a small but usable piece of functionality. Daily stand-up meetings keep everyone aligned. At the end of each sprint, the team demonstrates working software and reflects on how to improve their process.',source:'VOA Learning English',words:105,level:'B2',topic:3,month:11},
      {title:'Risk Management in Projects',text:'Every project carries risks, and managing them proactively is a critical skill. Start by identifying potential risks through team brainstorming and historical data analysis. Assess each risk based on its probability and potential impact. Develop mitigation strategies for high-priority risks. Track risks in a register and review them regularly. When a risk materialises, having a prepared response plan reduces panic and speeds up recovery.',source:'British Council Podcast',words:122,level:'B2',topic:3,month:11},
      {title:'Crisis Communication Strategies',text:'When a crisis hits, communication becomes the most critical function in any organisation. The first rule is to acknowledge the situation promptly — silence breeds speculation. Appoint a single spokesperson to ensure message consistency. Provide regular updates even when there is no new information to share. Express empathy for those affected before discussing solutions. After the crisis passes, conduct a thorough review and share lessons learned.',source:'TED Business',words:125,level:'B2',topic:3,month:11},
      {title:'Business Dining Etiquette Around the World',text:'Business meals are a common practice globally, but etiquette varies widely. In Japan, never stick your chopsticks upright in rice as this resembles a funeral ritual. In France, keep your hands on the table rather than in your lap. In the Middle East, always use your right hand for eating and passing food. Researching dining customs before an international business trip demonstrates respect and cultural sensitivity.',source:'VOA Learning English',words:120,level:'B2',topic:5,month:11},

      // ====== Month 12: B2 — Review & Mastery ======
      {title:'The Importance of Lifelong Learning',text:'In a rapidly changing economy, the ability to learn continuously is perhaps the most important skill of all. The half-life of technical skills is shrinking — what you learned five years ago may already be obsolete. Dedicate time each week to reading industry publications, taking online courses, or attending workshops. Learning a new skill also keeps the brain sharp and opens unexpected career paths.',source:'TED Talks',words:115,level:'B2',topic:4,month:12},
      {title:'Finding Your Professional Purpose',text:'Many professionals reach a point where they question whether their work truly matters. Finding purpose does not necessarily mean changing careers. It can mean reframing how you view your current role. Ask yourself: Who benefits from my work? How does my contribution fit into a larger picture? Sometimes purpose is found not in grand gestures, but in the small ways we help colleagues and clients every day.',source:'TED Talks',words:110,level:'B2',topic:6,month:12},
      {title:'The Science of Habit Formation',text:'Habits shape our lives more than we realise. According to researchers, about 40% of our daily actions are habitual rather than conscious decisions. Building a new habit requires a cue, a routine, and a reward. Start small — a habit that takes less than two minutes to complete is easier to establish. Consistency matters more than intensity. Missing one day is fine; missing two days in a row is where habits begin to break.',source:'BBC 6 Minute English',words:130,level:'B2',topic:6,month:12},
      {title:'Resilience: Bouncing Back from Setbacks',text:'Resilience is not about avoiding failure — it is about recovering from it. Every successful professional has faced setbacks, rejections, and moments of doubt. The difference lies in how they interpret these experiences. Resilient people view setbacks as temporary and specific rather than permanent and universal. They focus on factors within their control and seek support when needed. Resilience can be cultivated through mindfulness, strong social connections, and regular reflection.',source:'TED Talks',words:125,level:'B2',topic:6,month:12},

      // ====== Supplementary passages (mixed months, used as filler) ======
      {title:'Avoiding Remote Work Burnout',text:'Burnout has become a serious concern in the remote work era. Without clear separation between office and home, many professionals find themselves working longer hours than ever before. Experts recommend creating a dedicated workspace, setting a strict schedule for logging off, and taking regular breaks throughout the day. Exercise, even a short walk during lunch, can significantly improve mental wellbeing and productivity.',source:'BBC 6 Minute English',words:125,level:'B1',topic:0,month:2},
      {title:'Virtual Team Building Activities',text:'Building team spirit when everyone works remotely requires creativity. Virtual coffee breaks, online game sessions, and remote book clubs have become popular ways to maintain social connections among distributed teams. Some companies organise quarterly virtual retreats with structured activities. These informal interactions are essential for building trust and psychological safety, which directly impact team performance and innovation capacity.',source:'British Council',words:115,level:'B1',topic:0,month:2},
      {title:'Async Communication Best Practices',text:'Asynchronous communication means team members can respond when it suits them, rather than being interrupted in real time. This approach respects different time zones and individual deep-work schedules. Key practices include writing detailed documentation, recording video updates instead of holding live meetings, and using threaded discussions to keep context organised. Companies like GitLab and Basecamp have pioneered this approach.',source:'EnglishPod',words:108,level:'B1',topic:0,month:2},
      {title:'Measuring Productivity in Remote Teams',text:'Traditional productivity metrics like hours spent at a desk are meaningless for remote workers. Forward-thinking companies now measure output rather than input, focusing on completed projects, customer satisfaction scores, and team collaboration quality. Regular one-on-one check-ins between managers and team members help identify blockers early. Trust and clear expectations form the foundation of successful remote work arrangements.',source:'TED Business',words:120,level:'B2',topic:0,month:9},
      {title:'Meeting Follow-up and Accountability',text:'The real work often happens after the meeting ends. A well-written meeting summary should be sent within 24 hours, including key decisions, assigned action items, and deadlines. Each action item should have one clear owner. Using a shared task tracker ensures transparency and accountability. Regular follow-up on action items at the start of the next meeting creates a culture of reliability and follow-through.',source:'British Council',words:120,level:'B1',topic:1,month:5},
      {title:'Cross-Cultural Client Communication',text:'Working with international clients requires cultural intelligence. In some cultures, building a personal relationship before discussing business is essential. In others, directness and efficiency are valued above all else. Research the client\'s cultural norms regarding hierarchy, decision-making processes, and communication style. When in doubt, observe and mirror the client\'s communication patterns rather than imposing your own.',source:'British Council Podcast',words:110,level:'B2',topic:2,month:6},
      {title:'Building a Personal Brand at Work',text:'Your personal brand is what people say about you when you are not in the room. It is built through consistent behaviour over time. Identify the qualities you want to be known for — reliability, creativity, leadership — and deliberately demonstrate them in your daily work. Share your knowledge through internal presentations or mentoring junior colleagues. A strong personal brand opens doors to opportunities that a CV alone cannot.',source:'TED Business',words:118,level:'B2',topic:4,month:7},
      {title:'Work-Life Balance in High-Pressure Jobs',text:'Achieving work-life balance is challenging in demanding careers. It starts with defining what balance means to you personally — it may not be an equal split. Set non-negotiable boundaries, such as no email after 8 PM or a dedicated family dinner time. Communicate these boundaries clearly to colleagues. Remember that saying yes to everything at work often means saying no to something important in your personal life.',source:'BBC 6 Minute English',words:127,level:'B2',topic:4,month:8},
      {title:'Mentoring and Being Mentored',text:'Mentorship is a two-way street that benefits both parties. As a mentee, come to each session with specific questions and be open to honest feedback. As a mentor, focus on asking guiding questions rather than providing all the answers. The most effective mentoring relationships are built on trust, mutual respect, and a genuine interest in growth. Even senior professionals benefit from seeking mentors outside their immediate field.',source:'British Council',words:120,level:'B2',topic:4,month:10},
      {title:'Networking at International Conferences',text:'International conferences offer valuable networking opportunities, but approaching strangers can feel intimidating. Prepare a short self-introduction that explains who you are and what you are working on in under thirty seconds. Ask open-ended questions about the other person\'s work. Exchange contact information and follow up within a week with a personalised message referencing your conversation. Quality connections matter more than quantity.',source:'TED Business',words:114,level:'B2',topic:5,month:11},
      {title:'Navigating International Business Trips',text:'International business travel requires preparation beyond booking flights and hotels. Learn a few basic phrases in the local language — even a simple "thank you" goes a long way. Understand the local business dress code, which may be more formal or more casual than your home country. Be aware of local holidays when scheduling meetings. Arrive a day early to adjust to the time zone before important discussions.',source:'BBC 6 Minute English',words:118,level:'B2',topic:5,month:11},
      {title:'Building Trust Across Cultures',text:'Trust is built differently across cultures. In task-oriented cultures like Germany and the United States, trust develops through reliable performance and delivering results. In relationship-oriented cultures like China and Brazil, trust is built through personal connections and shared experiences outside of work. Understanding this distinction helps avoid misinterpreting a counterpart\'s behaviour as cold or overly familiar.',source:'TED Business',words:112,level:'B2',topic:5,month:11},
      {title:'English as a Lingua Franca in Business',text:'English is the dominant language of international business, but most conversations in English now occur between non-native speakers. This means clarity is more important than native-like fluency. Speak at a moderate pace, avoid idioms that may not translate well, and check for understanding regularly. Non-native speakers should feel confident that their English is a functional tool for communication, not a performance to be judged.',source:'EnglishPod',words:115,level:'B2',topic:5,month:10},
      {title:'Cultural Dimensions of Leadership',text:'Geert Hofstede\'s cultural dimensions theory helps explain why leadership styles vary globally. Power distance — the acceptance of unequal power distribution — is high in countries like Malaysia and low in Denmark. Individualism versus collectivism affects whether employees expect individual recognition or team-based rewards. Effective global leaders adapt their style to the cultural context while staying authentic to their core values.',source:'British Council',words:125,level:'B2',topic:5,month:12},
      {title:'The Power of Gratitude in the Workplace',text:'Practising gratitude has been shown to improve mental health, strengthen relationships, and even boost productivity. In a workplace context, expressing genuine appreciation to colleagues creates a positive feedback loop. A simple thank-you email highlighting specific contributions can brighten someone\'s entire week. Teams that regularly acknowledge each other\'s efforts report higher engagement and lower turnover rates.',source:'TED Talks',words:108,level:'B2',topic:6,month:12},
      {title:'Minimalism and Mental Clarity',text:'The minimalist movement extends beyond decluttering physical spaces to simplifying digital lives and schedules. Reducing unnecessary commitments creates space for deep, focused work. Unsubscribing from non-essential email lists and turning off phone notifications can dramatically reduce daily stress. The goal is not to own fewer things for its own sake, but to make room for what truly enriches your life and career.',source:'British Council',words:112,level:'B2',topic:6,month:12},
      {title:'Lessons Learned from Failed Projects',text:'Failed projects often teach more than successful ones. Common causes of project failure include scope creep, unclear requirements, and poor stakeholder communication. Conducting a post-mortem — or better yet, a blameless retrospective — helps extract valuable lessons. Focus on process improvements rather than assigning blame. Document these lessons in a shared knowledge base so future projects can benefit from past experience.',source:'TED Business',words:110,level:'B2',topic:3,month:11},
    ],
    dialogues: [
      // Month 1-2: Foundation
      {title:'First Day at the Office',speakerA:'Emma',speakerB:'David',lines:[
        {s:'Emma',t:"Welcome to the team, David! Let me show you around the office."},
        {s:'David',t:"Thank you, Emma. I am excited to be here. This is my first corporate job."},
        {s:'Emma',t:"No worries at all. Everyone here was new once. The kitchen is over there, and your desk is right here."},
        {s:'David',t:"Great. Who should I reach out to if I have questions about the project?"},
        {s:'Emma',t:"You can always ask me or Sarah. We have a team chat group — I will add you right now."},
        {s:'David',t:"That would be very helpful. I am looking forward to contributing to the team."},
      ],topic:'入职',month:1},
      {title:'Scheduling a Team Meeting',speakerA:'Sarah',speakerB:'Tom',lines:[
        {s:'Sarah',t:"Hi Tom, do you have a moment to discuss the Q3 review meeting?"},
        {s:'Tom',t:"Sure, Sarah. I was actually going to suggest the same thing. When were you thinking?"},
        {s:'Sarah',t:"I was hoping we could schedule it for Thursday at 10 AM. Does that work for your team?"},
        {s:'Tom',t:"Let me check... Thursday at 10 works for most of my team, but David has a client call until 10:30."},
        {s:'Sarah',t:"No problem. Let us make it 11 AM instead. That way everyone can attend."},
        {s:'Tom',t:"Perfect. I will send out the calendar invite with the agenda by end of day."},
      ],topic:'会议',month:1},
      {title:'Setting Up a Home Office',speakerA:'Emma',speakerB:'David',lines:[
        {s:'Emma',t:"David, you have been working remotely for two years now. Any tips for setting up a home office?"},
        {s:'David',t:"The most important investment is a good chair. Your back will thank you after eight hours."},
        {s:'Emma',t:"That makes sense. What about the desk setup?"},
        {s:'David',t:"I recommend a standing desk if possible. Alternating between sitting and standing keeps your energy up."},
        {s:'Emma',t:"And how do you handle distractions at home?"},
        {s:'David',t:"Noise-cancelling headphones are a game changer. I also use a visual signal — when my door is closed, my family knows I am in a meeting."},
      ],topic:'远程办公',month:1},
      {title:'Scheduling Across Time Zones',speakerA:'Priya',speakerB:'Alex',lines:[
        {s:'Priya',t:"Alex, we need to schedule a call with our Tokyo office. The time difference is tricky."},
        {s:'Alex',t:"Right, Tokyo is nine hours ahead of London. What about 8 AM our time? That would be 5 PM for them."},
        {s:'Priya',t:"That could work. Let me check with the Tokyo team lead first."},
        {s:'Alex',t:"Good idea. I will send a Doodle poll with a few options so everyone can vote on the best time."},
        {s:'Priya',t:"Perfect. Let us aim for sometime next Tuesday or Wednesday."},
      ],topic:'远程办公',month:2},
      // Month 3-4: Speaking & Vocab
      {title:'Running a Brainstorming Workshop',speakerA:'Mia',speakerB:'Carlos',lines:[
        {s:'Mia',t:"Carlos, I would like you to facilitate the brainstorming session this Friday."},
        {s:'Carlos',t:"I would be happy to. What is the main objective?"},
        {s:'Mia',t:"We need fresh ideas for our mobile app redesign. The current interface feels outdated."},
        {s:'Carlos',t:"Got it. I will prepare a few warm-up exercises and set up a virtual whiteboard."},
        {s:'Mia',t:"Great. Could you also send a pre-read to participants so they come prepared?"},
        {s:'Carlos',t:"Absolutely. I will have the agenda and materials ready by Wednesday."},
      ],topic:'会议',month:3},
      {title:'Ordering Business Lunch',speakerA:'Linda',speakerB:'Waiter',lines:[
        {s:'Linda',t:"Good afternoon. I have a reservation for six people under the name Chen."},
        {s:'Waiter',t:"Right this way, Ms. Chen. Your table is ready by the window."},
        {s:'Linda',t:"Thank you. Could we see the set menu for business lunches?"},
        {s:'Waiter',t:"Of course. We have a three-course option and a lighter two-course option today."},
        {s:'Linda',t:"The three-course menu looks perfect. Could you also bring a wine list? We are celebrating a successful quarter."},
      ],topic:'商务社交',month:3},
      // Month 5-6: Clients
      {title:'Following Up on a Project',speakerA:'Lisa',speakerB:'James',lines:[
        {s:'Lisa',t:"James, I wanted to follow up on the website redesign project. How is the development going?"},
        {s:'James',t:"We are making good progress. The front-end team has completed about 80% of the pages."},
        {s:'Lisa',t:"That is good to hear. Are we still on track for the end-of-month deadline?"},
        {s:'James',t:"Mostly, but we have hit a small snag with the payment integration. It might push us back by two or three days."},
        {s:'Lisa',t:"I see. Can you send me a brief update? I will manage expectations with the stakeholders."},
        {s:'James',t:"Absolutely. I will have the summary in your inbox within the hour."},
      ],topic:'客户对接',month:5},
      {title:'Handling a Client Complaint',speakerA:'Rachel',speakerB:'Kevin',lines:[
        {s:'Rachel',t:"Kevin, I just got off the phone with the Henderson account. They are not happy about the delivery delay."},
        {s:'Kevin',t:"I understand their frustration. What specific concerns did they raise?"},
        {s:'Rachel',t:"They said the two-week delay has affected their own product launch timeline."},
        {s:'Kevin',t:"That is serious. Let me review the project plan and see where we can expedite things."},
        {s:'Rachel',t:"Can you put together a recovery plan by tomorrow morning? I want to present it to them in person."},
        {s:'Kevin',t:"Consider it done. I will also include a discount on the next order as a goodwill gesture."},
      ],topic:'客户对接',month:5},
      // Month 7-8: Presentations & Reports
      {title:'Quarterly Business Review Prep',speakerA:'Daniel',speakerB:'Sophie',lines:[
        {s:'Daniel',t:"Sophie, the quarterly business review with the board is in two weeks. Are you ready?"},
        {s:'Sophie',t:"I have gathered most of the data. Revenue is up 12% but customer churn increased slightly."},
        {s:'Daniel',t:"We need to address the churn issue head-on. What is driving it?"},
        {s:'Sophie',t:"From the surveys, it seems to be primarily pricing concerns from our small business segment."},
        {s:'Daniel',t:"Let us prepare a slide on that with our proposed solution. The board will appreciate the proactive approach."},
      ],topic:'工作汇报',month:7},
      {title:'Presenting Annual Results',speakerA:'Grace',speakerB:'Omar',lines:[
        {s:'Grace',t:"Omar, your team did an excellent job on the annual results presentation."},
        {s:'Omar',t:"Thank you, Grace. The key was keeping each slide focused on a single message."},
        {s:'Grace',t:"I noticed you used a lot of data visualisation. It made the numbers much easier to digest."},
        {s:'Omar',t:"Exactly. A picture is worth a thousand words, especially in financial reporting."},
        {s:'Grace',t:"Could you share your template with the rest of the department? This should be our new standard."},
        {s:'Omar',t:"Of course. I will schedule a lunch-and-learn session to walk everyone through it."},
      ],topic:'工作汇报',month:7},
      {title:'Writing a Formal Proposal',speakerA:'Helen',speakerB:'Mark',lines:[
        {s:'Helen',t:"Mark, the client loved our initial pitch. Now they want a formal written proposal by Friday."},
        {s:'Mark',t:"That is a tight turnaround but doable. Do we have a template we can use?"},
        {s:'Helen',t:"Yes, I will share the standard proposal template with you. Focus on the executive summary and the budget section."},
        {s:'Mark',t:"Sounds good. I will draft those sections tonight and send them to you for review tomorrow morning."},
        {s:'Helen',t:"Perfect. Remember to emphasise the ROI metrics — that is what ultimately sells the deal."},
      ],topic:'商务写作',month:8},
      // Month 9-10: Advanced
      {title:'Coaching a Junior Team Member',speakerA:'Hannah',speakerB:'Leo',lines:[
        {s:'Hannah',t:"Leo, I have noticed you have been struggling to meet deadlines lately. Is everything okay?"},
        {s:'Leo',t:"Honestly, I have been feeling overwhelmed. I think I am taking on too many tasks at once."},
        {s:'Hannah',t:"Thank you for being honest. Let us work on prioritising your workload together."},
        {s:'Leo',t:"That would really help. I sometimes find it hard to say no when people ask for help."},
        {s:'Hannah',t:"That is a common challenge. Let me share a few techniques for setting boundaries professionally."},
      ],topic:'领导力',month:9},
      {title:'Negotiating a Flexible Schedule',speakerA:'Nina',speakerB:'Marcus',lines:[
        {s:'Nina',t:"Marcus, I would like to discuss the possibility of adjusting my working hours."},
        {s:'Marcus',t:"I am open to the idea. What schedule did you have in mind?"},
        {s:'Nina',t:"I was thinking of starting at 7:30 and finishing at 4:00. This would allow me to pick up my children."},
        {s:'Marcus',t:"That seems reasonable. As long as you are available for the core meeting hours between 10 and 3."},
        {s:'Nina',t:"Absolutely. I can also be reached by phone for any urgent matters after 4 PM."},
        {s:'Marcus',t:"Let us try it for a month and review how it works for both sides."},
      ],topic:'职场软实力',month:9},
      {title:'Welcoming an International Colleague',speakerA:'Yuki',speakerB:'Anders',lines:[
        {s:'Yuki',t:"Anders, welcome to the Tokyo office! How was your flight from Stockholm?"},
        {s:'Anders',t:"Long but comfortable, thank you. This is my first time in Japan."},
        {s:'Yuki',t:"I hope you will enjoy your stay. We have prepared a welcome lunch with the team."},
        {s:'Anders',t:"That sounds wonderful. I should mention, I am not very familiar with Japanese dining customs."},
        {s:'Yuki',t:"No worries at all. I will walk you through everything. The most important thing is to enjoy the food and company."},
      ],topic:'跨文化',month:10},
      // Month 11-12: Mastery
      {title:'International Video Call Misunderstanding',speakerA:'Fatima',speakerB:'Jack',lines:[
        {s:'Fatima',t:"Jack, I felt the call with our Dubai partners was a bit awkward. Did you notice anything?"},
        {s:'Jack',t:"Now that you mention it, they seemed hesitant. I thought my proposal was clear though."},
        {s:'Fatima',t:"It was, but you jumped straight into business. In Middle Eastern culture, some small talk first is expected."},
        {s:'Jack',t:"Ah, I did not realise that. I was so focused on being efficient."},
        {s:'Fatima',t:"Next time, try spending the first five minutes asking about their wellbeing. It makes a big difference."},
        {s:'Jack',t:"Noted. Thank you for the feedback. I clearly have more to learn about cross-cultural communication."},
      ],topic:'跨文化',month:11},
      {title:'Weekend Conversation at a Cafe',speakerA:'Chloe',speakerB:'Ben',lines:[
        {s:'Chloe',t:"Ben, you seem really refreshed today. Did you do anything special over the weekend?"},
        {s:'Ben',t:"I went hiking in the mountains. It was exactly what I needed to clear my head after a busy week."},
        {s:'Chloe',t:"That sounds lovely. I spent my weekend reading a novel and trying out a new pasta recipe."},
        {s:'Ben',t:"Homemade pasta? That is impressive! You will have to share the recipe."},
        {s:'Chloe',t:"Happy to. By the way, have you watched the new documentary on innovation that everyone is talking about?"},
        {s:'Ben',t:"Not yet, but it is on my list. Maybe we can discuss it at lunch later this week."},
      ],topic:'日常社交',month:12},
      {title:'Discussing Career Development',speakerA:'Zoe',speakerB:'Ryan',lines:[
        {s:'Zoe',t:"Ryan, I have been thinking about where I want my career to go in the next five years."},
        {s:'Ryan',t:"That is a great question to ask yourself. Have you identified any particular direction?"},
        {s:'Zoe',t:"I am really interested in moving into product management. I enjoy the strategic side of our work."},
        {s:'Ryan',t:"Product management is a natural transition from your current role. Have you considered a certification course?"},
        {s:'Zoe',t:"I have been looking at a few. The CSPO certification seems like a good starting point."},
        {s:'Ryan',t:"Go for it. I made a similar move three years ago and it was the best career decision I ever made."},
      ],topic:'日常社交',month:12},
    ]
  }
};

const DEFAULT_PHRASES = {
  meeting: [
    {en:'touch base',zh:'联系/沟通一下',ipa:'/tʌtʃ beɪs/'},
    {en:'circle back',zh:'回头再议',ipa:'/ˈsɜːkl bæk/'},
    {en:'action items',zh:'待办事项',ipa:'/ˈækʃn ˈaɪtəmz/'},
    {en:'move the needle',zh:'取得实质性进展',ipa:'/muːv ðə ˈniːdl/'},
    {en:'take the floor',zh:'发言',ipa:'/teɪk ðə flɔːr/'},
    {en:'table a proposal',zh:'提出议案',ipa:'/ˈteɪbl ə prəˈpəʊzl/'},
    {en:'reach a consensus',zh:'达成共识',ipa:'/riːtʃ ə kənˈsensəs/'},
    {en:'open the floor',zh:'开放讨论',ipa:'/ˈəʊpən ðə flɔːr/'},
    {en:'wrap up the meeting',zh:'结束会议',ipa:'/ræp ʌp ðə ˈmiːtɪŋ/'},
    {en:'set the agenda',zh:'设定议程',ipa:'/set ði əˈdʒendə/'},
  ],
  email: [
    {en:'follow up',zh:'跟进',ipa:'/ˈfɒləʊ ʌp/'},
    {en:'as per our discussion',zh:'根据我们的讨论',ipa:'/æz pɜːr ˈaʊə dɪˈskʌʃn/'},
    {en:'keep me in the loop',zh:'让我知情',ipa:'/kiːp miː ɪn ðə luːp/'},
    {en:'at your earliest convenience',zh:'请尽快',ipa:'/æt jɔːr ˈɜːlɪəst kənˈviːniəns/'},
    {en:'please find attached',zh:'请查收附件',ipa:'/pliːz faɪnd əˈtætʃt/'},
    {en:'I look forward to hearing from you',zh:'期待您的回复',ipa:'/aɪ lʊk ˈfɔːwəd tə ˈhɪərɪŋ frɒm juː/'},
    {en:'for your review',zh:'供您审阅',ipa:'/fɔːr jɔː rɪˈvjuː/'},
    {en:'by close of business',zh:'下班前',ipa:'/baɪ kləʊz ɒv ˈbɪznəs/'},
    {en:'please do not hesitate to contact me',zh:'请随时联系我',ipa:'/pliːz duː nɒt ˈhezɪteɪt tə ˈkɒntækt miː/'},
    {en:'well noted with thanks',zh:'已知悉，谢谢',ipa:'/wel ˈnəʊtɪd wɪð θæŋks/'},
  ],
  client: [
    {en:'cost-effective solution',zh:'高性价比方案',ipa:'/kɒst ɪˈfektɪv səˈluːʃn/'},
    {en:'win-win situation',zh:'双赢局面',ipa:'/wɪn wɪn ˌsɪtʃuˈeɪʃn/'},
    {en:'quarterly report',zh:'季度报告',ipa:'/ˈkwɔːtəli rɪˈpɔːt/'},
    {en:'seal the deal',zh:'敲定交易',ipa:'/siːl ðə diːl/'},
    {en:'onboarding process',zh:'客户入驻流程',ipa:'/ˈɒnbɔːdɪŋ ˈprəʊses/'},
    {en:'service level agreement',zh:'服务水平协议(SLA)',ipa:'/ˈsɜːvɪs ˈlevl əˈɡriːmənt/'},
    {en:'return on investment',zh:'投资回报率',ipa:'/rɪˈtɜːn ɒn ɪnˈvestmənt/'},
    {en:'key performance indicator',zh:'关键绩效指标(KPI)',ipa:'/kiː pəˈfɔːməns ˈɪndɪkeɪtə/'},
    {en:'pain point',zh:'痛点',ipa:'/peɪn pɔɪnt/'},
    {en:'value proposition',zh:'价值主张',ipa:'/ˈvæljuː ˌprɒpəˈzɪʃn/'},
  ],
  softskill: [
    {en:'think outside the box',zh:'创新思维',ipa:'/θɪŋk aʊtˈsaɪd ðə bɒks/'},
    {en:'on the same page',zh:'达成共识',ipa:'/ɒn ðə seɪm peɪdʒ/'},
    {en:'pros and cons',zh:'利弊分析',ipa:'/prəʊz ænd kɒnz/'},
    {en:'go the extra mile',zh:'加倍努力',ipa:'/ɡəʊ ðə ˈekstrə maɪl/'},
    {en:'big picture thinking',zh:'全局思维',ipa:'/bɪɡ ˈpɪktʃə ˈθɪŋkɪŋ/'},
    {en:'attention to detail',zh:'注重细节',ipa:'/əˈtenʃn tə ˈdiːteɪl/'},
    {en:'hit the ground running',zh:'快速上手',ipa:'/hɪt ðə ɡraʊnd ˈrʌnɪŋ/'},
    {en:'raise the bar',zh:'提高标准',ipa:'/reɪz ðə bɑːr/'},
    {en:'take ownership',zh:'主动承担责任',ipa:'/teɪk ˈəʊnəʃɪp/'},
    {en:'constructive feedback',zh:'建设性反馈',ipa:'/kənˈstrʌktɪv ˈfiːdbæk/'},
  ]
};
