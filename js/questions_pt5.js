// ═══════════════════════════════════════════════════════════════════
// PRINCETON REVIEW PRACTICE TEST 5  —  55 Questions
// Stimulus-based sets with per-choice explanations from answer key
// ═══════════════════════════════════════════════════════════════════

const pt5Questions = [

// ── SET 1 (Q1–4) ─────────────────────────────────────────────────
// Stimulus: Map — Major Paths of Early European Penetration
{
  setId:201, topic:"Period 1: Pre-Colonial",
  source:"Princeton Review Practice Test 5",
  stimulus:{
    label:"Map — 'Major Paths of Early European Penetration of Present United States,' Library of Congress",
    text:"A map showing major paths of early European penetration into what would become the United States. English settlements dominate the eastern seaboard, with Dutch settlements along the Hudson. French settlements follow the St. Lawrence River and Great Lakes before extending south along the Mississippi River toward New Orleans. Spanish settlements cover the Southwest and the West Coast, extending up into California.",
    attr:"Library of Congress, Major Paths of Early European Penetration of Present United States",
    visual:true,
    imageKey:"pt5_q1_european_map",
    imageType:"historical map",
  },
  question:"The first Spanish settlements on the West Coast were primarily based around which of the following?",
  choices:[
    "Military forts",
    "Religious missions",
    "Trade posts",
    "Gold mines"
  ],
  answer:1,
  explanation:"The primary motives for Spanish conquest of the New World were global dominance, wealth, and <strong>Christian conversion</strong>. Missions were established throughout the American Southwest and West Coast to convert Native populations, and towns grew around these missions — making religious missions the correct answer.",
  choiceExplanations:[
    "While some military forts (presidios) existed alongside missions, they were not the primary organizing structure of Spanish West Coast settlements — missions were.",
    null,
    "Trade posts were more characteristic of French settlement patterns. The Spanish settlements on the West Coast were organized around religious conversion of Native peoples.",
    "Gold mines were sought inland (particularly in Mexico and the Southwest), not on the West Coast. The California Gold Rush came much later in 1848 under American control."
  ]
},
{
  setId:201, topic:"Period 2: Colonial Era",
  stimulus:null,
  question:"What impact did the emergence of tobacco farming have on English settlements?",
  choices:[
    "Settlement slowed down due to the lack of employment opportunities in the Virginia Colony.",
    "It kept slavery out of the Chesapeake region for decades.",
    "Potential settlers were discouraged by the indentured servitude opportunities and failed to arrive in the numbers anticipated by colonists.",
    "The Virginia Company felt compelled to offer land to new settlers as a way to fill labor shortages."
  ],
  answer:3,
  explanation:"Jamestown attracted new residents due to a labor shortage — the tobacco industry created many opportunities for work, and the Virginia Company's <strong>headright system</strong> offered land to any settlers willing to move to Jamestown as a way to fill the labor gap.",
  choiceExplanations:[
    "The opposite is true — tobacco farming created enormous employment opportunities, attracting settlers rather than discouraging them. Settlement accelerated because of tobacco, not in spite of it.",
    "The tobacco industry was actually one of the factors that accelerated the need for slavery. As indentured servants completed their contracts and demanded land, planters turned to enslaved Africans as a permanent labor force.",
    "While indentured servitude was harsh, it attracted over 100,000 settlers to the Chesapeake region. The promise of eventual land ownership was a significant draw for impoverished English laborers.",
    null
  ]
},
{
  setId:201, topic:"Period 2: Colonial Era",
  stimulus:null,
  question:"Which of the four colonizing powers shown in the map did NOT maintain a lasting colonial presence in the New World?",
  choices:[
    "Spain",
    "France",
    "Netherlands",
    "Great Britain"
  ],
  answer:2,
  explanation:"While the Dutch initially settled what would become New York City (New Amsterdam), their land was ultimately <strong>overtaken by the British</strong> in 1664 and renamed New York. The Netherlands did not maintain a lasting colonial presence in North America.",
  choiceExplanations:[
    "Spain held onto large areas of South and Central America, as well as the American Southwest and Florida, maintaining a lasting colonial presence for centuries.",
    "France retained the region just west of the British colonies as well as the northern parts of the New World (Canada) for an extended period, maintaining a lasting presence.",
    null,
    "The British remained until the end of the Revolutionary War and maintained the longest and most consequential lasting colonial presence of the four powers."
  ]
},
{
  setId:201, topic:"Period 1: Pre-Colonial",
  stimulus:null,
  question:"According to the map, what impact did geography play in the French settlements?",
  choices:[
    "The French preferred coastal regions for the benefit of trans-Atlantic trade.",
    "The French followed major waterways such as the St. Lawrence River and the Mississippi River.",
    "The French preferred to settle in colder climates.",
    "The French were drawn exclusively to flat lands for the purpose of building small villages."
  ],
  answer:1,
  explanation:"Looking at the French regions of the map, French explorers stayed close to the St. Lawrence River and the Great Lakes before extending directly down the Mississippi River to New Orleans — demonstrating that <strong>major waterways guided French settlement patterns</strong>.",
  choiceExplanations:[
    "It was the British, not the French, who settled most of the coast for trans-Atlantic trade. The French interior settlements followed river routes rather than prioritizing coastal access.",
    null,
    "While some French territory was in cooler climates, their settlements stretched all the way down to New Orleans, a warm climate. Climate was not the determining factor.",
    "'Exclusively' is too strong — the French settled some mountainous regions in Western Pennsylvania and the Appalachian foothills. The accurate pattern was river-following, not exclusive flat-land settlement."
  ]
},

// ── SET 2 (Q5–6) ─────────────────────────────────────────────────
// Stimulus: Olaudah Equiano, 1789
{
  setId:202, topic:"Period 2: Colonial Era",
  source:"Princeton Review Practice Test 5",
  stimulus:{
    label:"Olaudah Equiano, The Interesting Life of Olaudah Equiano, 1789",
    text:"At last, when the ship we were in had got in all her cargo, they made ready with many fearful noises, and we were all put under deck, so that we could not see how they managed the vessel…The closeness of the place, and the heat of the climate, added to the number in the ship, which was so crowded that each had scarcely room to turn himself, almost suffocated us. This produced copious perspirations, so that the air soon became unfit for respiration, from a variety of loathsome smells, and brought on a sickness among the slaves, of which many died, thus falling victims to the improvident avarice, as I may call it, of their purchasers.",
    attr:"Olaudah Equiano, The Interesting Life of Olaudah Equiano, 1789"
  },
  question:"In this passage, Olaudah Equiano describes travel along which shipping route?",
  choices:[
    "The Middle Passage",
    "The Erie Canal",
    "The Ohio River",
    "The Hudson Bay"
  ],
  answer:0,
  explanation:"The passage describes the brutal conditions of enslaved Africans packed below deck on a slave ship — the defining experience of the <strong>Middle Passage</strong>, the trans-Atlantic leg of the Triangular Trade that transported enslaved people from Africa to the Americas.",
  choiceExplanations:[
    null,
    "The Erie Canal was an inland waterway in New York State completed in 1825, connecting Lake Erie to the Hudson River. It was not used in the slave trade.",
    "The Ohio River is an inland waterway in the American interior. It was not part of the trans-Atlantic slave trade route.",
    "Hudson Bay is a body of water in northern Canada. It was not used in the slave trade and bears no connection to Equiano's account."
  ]
},
{
  setId:202, topic:"Period 2: Colonial Era",
  stimulus:null,
  question:"The 'improvident avarice' mentioned in the passage refers to which of the following?",
  choices:[
    "The transition of Southern aristocrats away from an agricultural economy.",
    "The decrease in profitable rice plantations.",
    "The treatment of Native Americans following the Revolutionary War.",
    "The need for wealthy Americans to continue buying slaves."
  ],
  answer:3,
  explanation:"'Improvident' means thoughtless and 'avarice' means greed — so 'improvident avarice' describes the <strong>thoughtless greed of slave purchasers</strong> who overcrowded ships to maximize profit, causing deaths that reduced their own investment. Equiano attributes the deaths directly to the purchasers' avarice.",
  choiceExplanations:[
    "The South did not transition away from an agricultural economy — quite the opposite. The slave trade reinforced and expanded the plantation agricultural economy of the South.",
    "Rice plantations, particularly in South Carolina, were quite profitable, which enhanced the need for plantation owners to purchase slaves. This does not explain 'improvident avarice.'",
    "Native Americans did not travel the Middle Passage as part of the slave trade. This passage is specifically about enslaved Africans' experience at sea.",
    null
  ]
},

// ── SET 3 (Q7–9) ─────────────────────────────────────────────────
// Stimulus: Patrick Henry, 1775
{
  setId:203, topic:"Period 3: American Revolution",
  source:"Princeton Review Practice Test 5",
  stimulus:{
    label:"Patrick Henry, Second Virginia Convention, St. John's Church, Richmond, Virginia, March 23, 1775",
    text:"Sir, we have done everything that could be done to avert the storm which is now coming on. We have petitioned; we have remonstrated; we have supplicated; we have prostrated ourselves before the throne, and have implored its interposition to arrest the tyrannical hands of the ministry and Parliament. Our petitions have been slighted; our remonstrances have produced additional violence and insult; our supplications have been disregarded; and we have been spurned, with contempt, from the foot of the throne!",
    attr:"Patrick Henry, Second Virginia Convention, March 23, 1775"
  },
  question:"Which of the following led to organizations such as the Second Virginia Convention to function as local governments in defiance of the British Parliament?",
  choices:[
    "Rejection of the Massachusetts Circular Letter",
    "Compliance with the Townshend Acts",
    "The formation of the Continental Association",
    "The publication of Common Sense"
  ],
  answer:2,
  explanation:"While the Continental Association's original purpose was to enforce boycotts of British goods, its committees <strong>eventually began to function as local governments</strong>. This is how organizations like the Virginia Convention operated — taking on governmental authority in defiance of British control.",
  choiceExplanations:[
    "The Massachusetts Circular Letter encouraged colonial boycott. It would be unlikely that Patrick Henry's organization would be associated with the rejection of a letter advocating colonial resistance.",
    "The Townshend Acts were precisely the type of British control the patriots were opposing. The colonists would not have complied with them — compliance would undermine the entire premise of the excerpt.",
    null,
    "Common Sense was not published until January 1776, two years after the Continental Association (1774) and one year after this speech. It could not have led to the Virginia Convention's formation."
  ]
},
{
  setId:203, topic:"Period 3: American Revolution",
  stimulus:null,
  question:"Which of the following primary sources would most likely support Patrick Henry's argument in the excerpt?",
  choices:[
    "Diary entries outlining colonists' frustrations with the British Parliament",
    "Rejected applications for colonial tax exemptions",
    "Speeches detailing the flaws of taxation without representation",
    "Records of purchases made without paying the necessary taxes"
  ],
  answer:1,
  explanation:"Henry specifically contends that colonists have used every measure possible — petitioning and remonstrating — without result. <strong>Rejected applications for tax exemptions</strong> would directly document that the colonists petitioned the crown and were refused, precisely supporting Henry's argument.",
  choiceExplanations:[
    "While diary entries would show that Henry's perspective was widely shared among colonists, they would not provide direct documentary evidence of formal petitions being rejected — the core of Henry's complaint.",
    null,
    "Speeches show opposition to British taxation policy but do not demonstrate that colonists actively petitioned and were ignored — the specific argument Henry makes about exhausting peaceful options.",
    "Records of purchases made without paying taxes show passive resistance or smuggling, but not the formal petitioning and remonstration process Henry describes. This would not directly support his argument."
  ]
},
{
  setId:203, topic:"Period 3: American Revolution",
  stimulus:null,
  question:"Which of the following is an example of Patrick Henry's radical opposition to the British Parliament?",
  choices:[
    "Penning Letters from a Farmer in Pennsylvania",
    "Leading the Boston Tea Party",
    "Creating the Virginia Stamp Act resolves",
    "Firing the 'shot heard around the world'"
  ],
  answer:2,
  explanation:"Patrick Henry wrote the <strong>Virginia Stamp Act Resolves</strong> to protest British taxation and advocate colonial self-rule — one of the most radical challenges to parliamentary authority at the time, asserting that only the Virginia legislature could tax Virginians.",
  choiceExplanations:[
    "Letters from a Farmer in Pennsylvania was written by John Dickinson, not Patrick Henry. Henry was a Virginian, not a Pennsylvanian, and Dickinson's approach was notably more moderate than Henry's.",
    "The Boston Tea Party took place in Massachusetts. Henry was not in Massachusetts to participate, though his combative spirit was similar to the participants'.",
    null,
    "The 'shot heard around the world' refers to the Battle of Lexington and Concord in Massachusetts in April 1775 — not an action associated with Patrick Henry."
  ]
},

// ── SET 4 (Q10–13) ───────────────────────────────────────────────
// Stimulus: Alexander Hamilton, 1781
{
  setId:204, topic:"Period 3: Early Republic",
  source:"Princeton Review Practice Test 5",
  stimulus:{
    label:"Alexander Hamilton, letter to Robert Morris, 1781",
    text:"The tendency of a national bank is to increase public and private credit. The former gives power to the state for the protection of its rights and interests, and the latter facilitates and extends the operations of commerce among individuals. Industry is increased, commodities are multiplied, agriculture and manufactures flourish, and herein consist the true wealth and prosperity of a state.",
    attr:"Alexander Hamilton, letter to Robert Morris, 1781"
  },
  question:"According to Hamilton, which of the following best describes the overarching goals of a national bank?",
  choices:[
    "To pay off war debt",
    "To regulate commerce",
    "To allow government and business to function properly",
    "To prevent economic downturns and recessions"
  ],
  answer:2,
  explanation:"Hamilton states that a national bank increases both 'public' credit (benefiting government) and 'private' credit (benefiting commerce among individuals) — the dual goal of <strong>allowing both government and business to function properly</strong>.",
  choiceExplanations:[
    "While Hamilton was able to help the United States pay off its Revolutionary War debt through his financial program, paying off war debt is not mentioned as the primary purpose of a national bank in this excerpt.",
    "Banks do not regulate commerce — that is the function of Congress according to the Constitution's Commerce Clause. Hamilton describes the bank as facilitating, not regulating, commerce.",
    null,
    "Hamilton's excerpt makes no guarantees that recessions or economic downturns would not occur. He focuses on increasing credit and stimulating commerce, not economic stabilization."
  ]
},
{
  setId:204, topic:"Period 3: Early Republic",
  stimulus:null,
  question:"Hamilton proposed a national bank most directly in response to the",
  choices:[
    "popular support for a socialist economy",
    "attempts by Thomas Jefferson to prevent a national bank",
    "Constitutional requirement to establish one",
    "accrual of debt during the Revolutionary War"
  ],
  answer:3,
  explanation:"The early United States was in economic dire straits due to <strong>war debt following the Revolution</strong>. Hamilton's national bank would give the United States stronger credit by consolidating and paying off the debt — the most direct reason he proposed it.",
  choiceExplanations:[
    "There was not meaningful popular support for a socialist economy in the late eighteenth century. Socialism as a coherent political movement did not emerge until the nineteenth century.",
    "Jefferson opposed the bank in reaction to Hamilton proposing it, not the other way around. Jefferson was responding to Hamilton's proposal, not the other way around.",
    "There is no explicit mention of a bank in the Constitution — hence the controversy over whether the government had authority to establish one. The Constitution did not require a national bank.",
    null
  ]
},
{
  setId:204, topic:"Period 3: Early Republic",
  stimulus:null,
  question:"The proposal of a national bank during the Washington Administration spurred a debate about which of the following?",
  choices:[
    "The validity of the national debt",
    "Whether the Constitution should be viewed with a strict or a broad interpretation",
    "The meaning of the Commerce Clause of the Constitution",
    "The scope of the State Department's powers"
  ],
  answer:1,
  explanation:"Since the power to establish a national bank is not explicitly written in the Constitution, the proposal sparked a fundamental debate about <strong>strict versus broad constitutional interpretation</strong>. Jefferson argued the bank was unconstitutional (strict); Hamilton argued implied powers under the Necessary and Proper Clause permitted it (broad).",
  choiceExplanations:[
    "There was not any significant question about the validity of the national debt itself — Hamilton wanted to establish the bank in part to address the debt issue. The debate was about constitutional authority, not debt legitimacy.",
    null,
    "The power to coin money was in question, not the Commerce Clause specifically. The debate centered on the Necessary and Proper Clause and implied powers, not commerce regulation.",
    "Even though Secretary of State Thomas Jefferson was heavily involved in the debate, this was not about the scope of the State Department's powers — it was about congressional and executive authority to charter a bank."
  ]
},
{
  setId:204, topic:"Period 3: Early Republic",
  stimulus:null,
  question:"Which of the following pieces of evidence could best be used to support Hamilton's claim about private credit?",
  choices:[
    "Transcripts of the Senate debate over the establishment of a national bank",
    "Hamilton's early plans for paying off the federal debt",
    "Bank statements from the wealthiest Americans in the last decade of the eighteenth century",
    "Records of bank loans from the late eighteenth century that had been successfully paid back by businesses"
  ],
  answer:3,
  explanation:"Hamilton claimed that a national bank could support businesses through private credit. <strong>Records of successfully repaid business loans</strong> would directly demonstrate that private credit stimulates business operations and gets paid back — the most direct evidence supporting his claim.",
  choiceExplanations:[
    "Transcripts of the Senate debate would include arguments on both sides and would not exclusively or most directly support Hamilton's case for private credit's benefits.",
    "Plans to pay off the federal debt relate to public credit — addressing government finances — not private credit extending to businesses and individuals.",
    "Bank statements of the wealthiest Americans do not show evidence of the necessity of a national bank or how private credit functions broadly. They would show individual wealth, not the credit system's operation.",
    null
  ]
},

// ── SET 5 (Q14–18) ───────────────────────────────────────────────
// Stimulus: Thomas Jefferson, 1807
{
  setId:205, topic:"Period 4: Early National Period",
  source:"Princeton Review Practice Test 5",
  stimulus:{
    label:"Thomas Jefferson, address to Congress, December 18, 1807",
    text:"To the Senate and House of Representatives of the United States: The communications now made, showing the great and increasing dangers with which our vessels, our seamen, and merchandise are threatened on the high seas and elsewhere, from the belligerent powers of Europe, and it being of great importance to keep in safety these essential resources, I deem it my duty to recommend the subject to the consideration of Congress, who will doubtless perceive all the advantages which may be expected from an inhibition of the departure of our vessels from the ports of the United States. Their wisdom will also see the necessity of making every preparation for whatever events may grow out of the present crisis.",
    attr:"Thomas Jefferson, address to Congress, December 18, 1807"
  },
  question:"Which of the following most directly contributed to the policy change announced by Jefferson in this excerpt?",
  choices:[
    "The development of the railroad",
    "A populist campaign for U.S. citizens to only buy American products",
    "Blockades and attacks on American ships by Great Britain and France",
    "American neutrality during the Napoleonic Wars"
  ],
  answer:2,
  explanation:"On top of dealing with naval blockades by England and France, the <strong>attack of American ships</strong> was enough for Jefferson to petition Congress to end foreign trade. The British practice of impressment — seizing American sailors for the Royal Navy — further inflamed the crisis.",
  choiceExplanations:[
    "The railroads were still a couple of decades away. They played no role in Jefferson's 1807 trade crisis with Britain and France.",
    "There is no historical record of Jefferson being persuaded by a populist campaign to buy American goods. The embargo was a response to foreign aggression, not domestic consumer sentiment.",
    null,
    "While the United States attempted to remain neutral in the Napoleonic Wars, it was the attacks upon American ships and impressment of sailors that inspired Jefferson to call for the embargo — not the neutrality policy itself."
  ]
},
{
  setId:205, topic:"Period 4: Early National Period",
  stimulus:null,
  question:"When Jefferson references 'the belligerent powers of Europe,' he is most likely calling attention to",
  choices:[
    "France and England",
    "Spain and France",
    "Germany and England",
    "Spain and Germany"
  ],
  answer:0,
  explanation:"The United States got caught in the middle of the warring <strong>France and England</strong>, who set up naval blockades that kept American ships from trading freely. Both nations were attacking American vessels and impressing American sailors during the Napoleonic Wars.",
  choiceExplanations:[
    null,
    "Spain was not a major belligerent threatening American shipping during this period. The conflict was primarily between France and England and their respective allies.",
    "Germany did not yet exist as a unified nation-state in 1807. The German states were not a naval power threatening American shipping at this time.",
    "Neither Spain nor Germany were the belligerent powers that Jefferson was referencing. The crisis was specifically about French and British naval actions against American shipping."
  ]
},
{
  setId:205, topic:"Period 4: Early National Period",
  stimulus:null,
  question:"The policy requested in the excerpt is best characterized as which of the following?",
  choices:[
    "A tariff",
    "A declaration of war",
    "An embargo",
    "An expedition"
  ],
  answer:2,
  explanation:"Jefferson calls for 'an inhibition of the departure of our vessels from the ports of the United States' — a refusal to engage in foreign trade. This is the definition of an <strong>embargo</strong>, which became the Embargo Act of 1807.",
  choiceExplanations:[
    "A tariff is a tax on imported goods — it would only apply if the United States were still planning to engage in foreign commerce. Jefferson is proposing to stop commerce entirely, not tax it.",
    "A declaration of war would ultimately arise (the War of 1812), but that is not what Jefferson is requesting in this December 1807 address. He is requesting a trade prohibition, not military action.",
    null,
    "Jefferson did not launch any expeditions at this time. The Lewis and Clark Expedition had already concluded. An expedition implies exploration or military advance, not a trade prohibition."
  ]
},
{
  setId:205, topic:"Period 4: Early National Period",
  stimulus:null,
  question:"Which of the following statements best explains a consequence of Jefferson's recommendation?",
  choices:[
    "Urban immigrants fully supported the plan, leading to Jefferson's reelection.",
    "Rural farmers largely benefitted from the legislation.",
    "New England businesses were harmed by the policy and sought ways to defy it.",
    "Southern plantation owners were the most affected by Jefferson's law."
  ],
  answer:2,
  explanation:"An embargo prevents businesses from engaging in foreign trade. <strong>New England</strong>, a major shipping and trade hub, was hit especially hard, and many businesses continued to engage in foreign trade through Canada, smuggling goods in defiance of the law.",
  choiceExplanations:[
    "Urban dwellers depended on the health of the business community, and the embargo harmed New England commerce significantly. Urban immigrants would not have 'fully supported' a policy that hurt their livelihoods.",
    "Rural farmers were actually harmed — the embargo limited their potential crop purchasers by cutting off export markets. Farmers who depended on selling tobacco, cotton, or grain abroad suffered.",
    null,
    "Southern plantation owners were less dependent on direct shipping than northern manufacturing towns. New England, not the South, was most severely affected by the embargo on foreign trade."
  ]
},
{
  setId:205, topic:"Period 4: Early National Period",
  stimulus:null,
  question:"Jefferson's policy shift most directly contributed to which of the following outcomes?",
  choices:[
    "The strengthening of the Federalist party",
    "Improved relations with European powers",
    "A decrease in American manufacturing",
    "A declaration of war"
  ],
  answer:3,
  explanation:"The economic standoff hit a boiling point, and Congress ultimately <strong>declared war on Great Britain in 1812</strong>. The embargo's failure to change British behavior, combined with continued impressment, made war the next logical step.",
  choiceExplanations:[
    "The war actually hurt the Federalist Party, who were seen as weak for opposing it. Their opposition to the War of 1812 led to their decline and eventual dissolution.",
    "The embargo led to war rather than improved relations — it could not be said that it improved relations with Europe. Relations with Britain deteriorated to the point of open warfare.",
    "American manufacturing actually increased with the embargo since the United States had to depend on its own businesses for its manufacturing needs, spurring domestic industry.",
    null
  ]
},

// ── SET 6 (Q19–21) ───────────────────────────────────────────────
// Stimulus: "View of Erie Canal" by John William Hill, 1829
{
  setId:206, topic:"Period 4: Market Revolution",
  source:"Princeton Review Practice Test 5",
  stimulus:{
    label:"'View of Erie Canal' by John William Hill, 1829",
    text:"A painting depicting the Erie Canal in 1829 — a tranquil scene showing a wide canal with barges being pulled by horse teams along the towpath. Small farm buildings and trees line the banks. The canal stretches into the distance, illustrating the scale of this engineering achievement. Completed in 1825, the Erie Canal connected Lake Erie to the Hudson River, linking the Great Lakes region with New York City and the Atlantic trade routes.",
    attr:"John William Hill, 'View of Erie Canal,' 1829",
    visual:true,
    imageKey:"pt5_q19_erie_canal",
    imageType:"historical painting",
  },
  question:"The image depicts a technological breakthrough that allowed shipping companies to",
  choices:[
    "avoid paying import taxes",
    "transport goods back and forth between the east coast and the Great Lakes region",
    "open up the American southeast to trade",
    "reach the American west coast via a more efficient route"
  ],
  answer:1,
  explanation:"The purpose of the Erie Canal was to connect Lake Erie with the Hudson River, thereby <strong>linking the Great Lakes region with the east coast</strong> trade network, allowing Midwestern farmers to sell their goods internationally and northeastern cities to receive Midwestern products.",
  choiceExplanations:[
    "The Erie Canal had nothing to do with import taxes. It was a domestic transportation infrastructure project, not a mechanism for avoiding tariffs.",
    null,
    "The canal ran through New York state, connecting the Great Lakes to the Hudson River and New York City. It did not open up trade with the Southeast.",
    "This describes the Panama Canal, which was not built until the early twentieth century. The Erie Canal connected the Great Lakes to the eastern seaboard, not to the west coast."
  ]
},
{
  setId:206, topic:"Period 4: Market Revolution",
  stimulus:null,
  question:"Which of the following regions most directly functioned as the United States' center of commerce upon the opening of the Erie Canal?",
  choices:[
    "West Coast",
    "Midwest",
    "Northeast",
    "Southeast"
  ],
  answer:2,
  explanation:"Since the northeastern cities had ports to trade with both Europe and the Midwest (thanks to the new canal), the <strong>Northeast</strong> became the clear center of United States commerce — New York City in particular became the dominant commercial hub.",
  choiceExplanations:[
    "The West Coast had not yet been heavily settled by Americans. California statehood did not occur until 1850, and the Pacific coast remained outside the American commercial network at this time.",
    "The Midwest lacked direct ports for international exports — Midwestern goods traveled through the Northeast to reach international markets. The Midwest was a producer, not a commerce hub.",
    null,
    "The Southeast was mostly rural and plantation-based, lacking the manufacturing and shipping infrastructure of the Northeast. The canal further advantaged the Northeast over the Southeast."
  ]
},
{
  setId:206, topic:"Period 4: Market Revolution",
  stimulus:null,
  question:"The canal era ultimately came to an end due to",
  choices:[
    "the Civil War",
    "the development of extensive rail lines",
    "the beginning of American manufacturing",
    "foreign products flooding the market"
  ],
  answer:1,
  explanation:"The ability to ship long distances with the <strong>emerging railroads of the 1830s and 1840s</strong> made canal technology more or less obsolete. The Erie Canal continued to do business, but most other canals were done in by the more efficient, year-round, faster railroads.",
  choiceExplanations:[
    "The canal era had effectively ended by the 1850s, a decade before the Civil War began. The decline of canals was due to railroad competition, not the war.",
    null,
    "American manufacturing had been thriving since the early nineteenth century and was actually the driving force behind canal construction in the first place — not the cause of canals' end.",
    "The canals also benefited from foreign imports, as they provided more traffic for domestic shipping routes. Foreign products did not cause the decline of canals."
  ]
},

// ── SET 7 (Q22–25) ───────────────────────────────────────────────
// Stimulus: William Lloyd Garrison, The Liberator, 1831
{
  setId:207, topic:"Period 4: Antebellum Reform",
  source:"Princeton Review Practice Test 5",
  stimulus:{
    label:"William Lloyd Garrison, 'To the Public,' inaugural issue of The Liberator, January 1, 1831",
    text:"In Park-street Church, on the Fourth of July, 1829, in an address on slavery, I unreflectingly assented to the popular but pernicious doctrine of gradual abolition. I seize this opportunity to make a full and unequivocal recantation, and thus publicly to ask pardon of my God, of my country, and of my brethren the poor slaves, for having uttered a sentiment so full of timidity, injustice and absurdity…\n\nI am aware, that many object to the severity of my language; but is there not cause for severity? I will be as harsh as truth, and as uncompromising as justice. On this subject, I do not wish to think, or speak, or write, with moderation.",
    attr:"William Lloyd Garrison, The Liberator, January 1, 1831"
  },
  question:"The ideas expressed by Garrison in this excerpt can best be characterized as",
  choices:[
    "moderate",
    "Transcendentalist",
    "strict constructionist",
    "immediatist"
  ],
  answer:3,
  explanation:"Garrison writes with urgency about the need for <strong>immediate abolition</strong>, explicitly rejecting 'gradual abolition' as timid and unjust. This makes him an Immediatist — one who demanded the instant, unconditional end of slavery rather than a phased approach.",
  choiceExplanations:[
    "Garrison harshly criticizes moderates and declares he does not wish to 'write, with moderation.' He explicitly rejects the moderate position of gradual abolition.",
    "Transcendentalism was a New England philosophical movement emphasizing spiritual experience and individual conscience, not specifically associated with the abolitionist newspaper movement.",
    "Strict constructionism refers to constitutional interpretation that limits government to powers explicitly stated in the Constitution. Garrison does not make a constitutional argument in this excerpt.",
    null
  ]
},
{
  setId:207, topic:"Period 4: Antebellum Reform",
  stimulus:null,
  question:"Which of the following best describes how Congress reacted to national discussion that followed the publication of The Liberator?",
  choices:[
    "Congress almost immediately began a robust debate about slavery.",
    "Congress banned the expansion of slavery into the western territories.",
    "Congress petitioned the president to take a stance on the slavery question.",
    "Congress issued a gag rule to prevent debate on the issue of slavery."
  ],
  answer:3,
  explanation:"In the years following The Liberator's publication, Congressional debate on slavery became so heated that a <strong>gag rule was issued</strong> banning debate on slavery petitions from the floor — the opposite of robust debate, it suppressed the discussion rather than engaging with it.",
  choiceExplanations:[
    "Congress did not immediately begin robust debate — the gag rule specifically prevented such debate. The Southern-dominated Congress sought to silence discussion of slavery, not amplify it.",
    "Along with banning discussion of slavery, the gag rule prevented further legislation on slavery's expansion. It was not until the Wilmot Proviso (1846) and Missouri Compromise debates that expansion became a sustained congressional issue.",
    "Congress issued the gag rule to prevent petitions about slavery from even being discussed, making (A) and (C) incorrect. There was no petition to the president to take a stance.",
    null
  ]
},
{
  setId:207, topic:"Period 4: Antebellum Reform",
  stimulus:null,
  question:"The Liberator was most similar to which of the following publications?",
  choices:[
    "Common Sense",
    "Uncle Tom's Cabin",
    "The Suffragist",
    "The North Star"
  ],
  answer:3,
  explanation:"The Liberator was an abolitionist newspaper, most similar to Frederick Douglass's <strong>The North Star</strong> — both were anti-slavery periodicals advocating for Black freedom, and both were published by prominent abolitionist figures who used print journalism as a tool for social change.",
  choiceExplanations:[
    "Common Sense was Thomas Paine's 1776 pamphlet arguing for colonial independence from Britain. It predates The Liberator by 55 years and addresses a completely different issue.",
    "Uncle Tom's Cabin was indeed an abolitionist publication, but since it was a novel (not a newspaper), it is less similar to The Liberator than The North Star, which was also an abolitionist periodical.",
    "The title of The Suffragist should be a sufficient hint — it advocated women's right to vote, not the abolition of slavery. A different reform movement entirely.",
    null
  ]
},
{
  setId:207, topic:"Period 4: Antebellum Reform",
  stimulus:null,
  question:"In mentioning that he 'uttered a sentiment so full of timidity,' William Lloyd Garrison was most likely expressing",
  choices:[
    "the importance of the moderate position",
    "regret for a stance he previously advocated",
    "support for gradual abolition",
    "advocacy for the system of slavery"
  ],
  answer:1,
  explanation:"Garrison explicitly <strong>regrets</strong> his earlier position of gradual abolition, calling it 'so full of timidity, injustice and absurdity' — he is recanting a former view and asking forgiveness for having held it. This is unambiguous remorse for a past stance.",
  choiceExplanations:[
    "Garrison is doing the opposite — criticizing and rejecting the moderate position. He uses 'timidity' as an insult against his former moderate self.",
    null,
    "Garrison explicitly renounces gradual abolition in this passage, calling it 'pernicious.' He is distancing himself from the gradualist position, not supporting it.",
    "Garrison was one of the most prominent abolitionists in American history. He never supported the institution of slavery — his critique of 'timidity' is about the pace of abolition, not about slavery's existence."
  ]
},

// ── SET 8 (Q26–30) ───────────────────────────────────────────────
// Stimulus: Lincoln, Proclamation of Amnesty and Reconstruction, 1863
{
  setId:208, topic:"Period 5: Reconstruction",
  source:"Princeton Review Practice Test 5",
  stimulus:{
    label:"Abraham Lincoln, 'The Proclamation of Amnesty and Reconstruction,' December 8, 1863",
    text:"And I do further proclaim, declare, and make known that whenever, in any of the States of Arkansas, Texas, Louisiana, Mississippi, Tennessee, Alabama, Georgia, Florida, South Carolina, and North Carolina, a number of persons, not less than one tenth in number of the votes cast in such state at the presidential election of the year of our Lord one thousand eight hundred and sixty, each having taken the oath…and not having since violated it, and being a qualified voter by the election law of the state existing immediately before the so-called act of secession, and excluding all others, shall reestablish a state government which shall be republican, and in nowise contravening said oath, such shall be recognized as the true government of the state, and the state shall receive thereunder the benefits of the [Constitution]…",
    attr:"Abraham Lincoln, 'The Proclamation of Amnesty and Reconstruction,' December 8, 1863"
  },
  question:"Lincoln's stance in the excerpt is most directly a response to which of the following controversies from the mid-nineteenth century?",
  choices:[
    "What to do with the states that declared war against the U.S. government",
    "How to ensure a Confederate surrender",
    "Whether western territories will be free or allow slavery",
    "Whether the U.S. should let the rebel states leave the union or fight to retain them"
  ],
  answer:0,
  explanation:"Abraham Lincoln wanted to make it easy for the Confederate states to reenter the Union. His proclamation addresses the controversy of <strong>how to treat the states that had waged war against the federal government</strong> — offering a lenient path back through the Ten Percent Plan.",
  choiceExplanations:[
    null,
    "Lincoln does not mention surrender in this excerpt, which was made in December 1863 — the war was still ongoing. The proclamation is about post-war readmission, not how to achieve Confederate surrender.",
    "This is not a discussion on western territories or slavery's expansion — the Emancipation Proclamation had already addressed slavery directly. This proclamation concerns readmission of rebel states.",
    "By December 1863, the question of whether to fight had already been answered — the war had been raging for over two years. This proclamation addresses what comes after, not whether to fight."
  ]
},
{
  setId:208, topic:"Period 5: Reconstruction",
  stimulus:null,
  question:"Lincoln's proclamation most strongly influenced",
  choices:[
    "the end of the Civil War",
    "South Carolina to secede from the United States",
    "Northern states to ensure a smooth reinstatement of the southern states",
    "Radical Republicans to create the more punitive Wade-Davis bill"
  ],
  answer:3,
  explanation:"Accusing Lincoln of being too lenient, the Radical Republicans in Congress put forth the <strong>Wade-Davis bill</strong>, which required a majority (50%) of voters to pledge loyalty before a state could be readmitted — far stricter than Lincoln's ten percent threshold.",
  choiceExplanations:[
    "The Civil War ended in April 1865, almost a year and a half after this proclamation, and not because of it. The war ended through military victory, not through Reconstruction policy.",
    "South Carolina had already seceded in December 1860 — years before this proclamation. Lincoln's proclamation was a response to secession, not a cause of it.",
    "The Radical Republicans were outraged by Lincoln's lenient plan and pushed for stricter Reconstruction terms. Northern states were not acting to smooth reinstatement — Congress was pushing for punishment.",
    null
  ]
},
{
  setId:208, topic:"Period 5: Reconstruction",
  stimulus:null,
  question:"Which of the following disagreements between Congress and the White House emerged due to the proclamation offered by Lincoln?",
  choices:[
    "The extent to which the former Confederate states should be punished",
    "Whether slavery should be abolished",
    "How much money to allocate toward funding Reconstruction",
    "Whether voting rights should be extended to Freedmen"
  ],
  answer:0,
  explanation:"The primary disagreement was between Lincoln's mercy-based Ten Percent Plan and the Radical Republicans' desire to <strong>punish the Confederate states</strong> more severely — as reflected in the Wade-Davis bill requiring 50% loyalty oaths and harsher terms.",
  choiceExplanations:[
    null,
    "The slavery question was settled with the passage of the 13th Amendment at the end of the war. This was not the central congressional-presidential disagreement at this time.",
    "Funding for Reconstruction was not the primary debate between Congress and Lincoln, and Lincoln was assassinated before Reconstruction fully began, making this a moot point between them.",
    "Voting rights for Freedmen was an issue addressed by the 15th Amendment, ratified in 1870 — after Lincoln's death. It was not the central disagreement arising from this proclamation."
  ]
},
{
  setId:208, topic:"Period 5: Reconstruction",
  stimulus:null,
  question:"The reference to 'so-called secession' reflects Lincoln's",
  choices:[
    "anger toward the Confederate states",
    "belief that the Confederate states never truly left the union",
    "apprehension to continue with the Civil War",
    "sense of humor concerning the end of the war"
  ],
  answer:1,
  explanation:"President Lincoln never fully accepted the legitimacy of Southern secession. By saying 'so-called act of secession,' he implies it was <strong>not a legitimate legal act</strong> — the states never actually left the Union in his constitutional view, they simply engaged in rebellion.",
  choiceExplanations:[
    "Lincoln does not show overt anger or hostility toward the South in this proclamation — quite the opposite, he is offering a lenient readmission path. The tone is conciliatory, not angry.",
    null,
    "There are no context clues in this proclamation indicating Lincoln's apprehension about continuing the war. The proclamation is focused on post-war policy, not war-weariness.",
    "The proclamation is a serious legal document with significant constitutional implications. 'So-called secession' is a substantive legal position, not humor."
  ]
},
{
  setId:208, topic:"Period 5: Reconstruction",
  stimulus:null,
  question:"The viewpoint of the United States Congress largely differed from this proclamation in that Congress",
  choices:[
    "saw the Southern states as conquered territory",
    "was anxious to quickly bring the Confederate territory back into the United States",
    "did not support punishing the rebel states",
    "saw Reconstruction as a matter best left to the states"
  ],
  answer:0,
  explanation:"Congress, particularly the Radical Republicans, <strong>viewed the seceded states as conquered enemy territory</strong> that had forfeited their constitutional rights — requiring strict readmission terms. This directly contrasted with Lincoln's view that the states had never truly left.",
  choiceExplanations:[
    null,
    "Congress wanted to make it very difficult for Confederate states to reenter the Union as a way to punish them. They were in no hurry — quite the opposite, they wanted a prolonged Reconstruction with strict conditions.",
    "Congress absolutely supported punishing the rebel states — that is exactly what the Wade-Davis bill (and later Radical Reconstruction) represented. Their punitive approach directly opposed Lincoln's mercy.",
    "Congress wanted to dictate the terms of Reconstruction, asserting congressional supremacy over the process. They did not want to leave it to the states or to the president."
  ]
},

// ── SET 9 (Q31–33) ───────────────────────────────────────────────
// Stimulus: "Bosses of the Senate," Puck magazine, 1889
{
  setId:209, topic:"Period 6: Gilded Age",
  source:"Princeton Review Practice Test 5",
  stimulus:{
    label:"'Bosses of the Senate,' Puck magazine, January 23, 1889",
    text:"A political cartoon showing giant, rotund figures labeled with the names of various trusts (Standard Oil Trust, Steel Beam Trust, Copper Trust, Sugar Trust, Coal Trust, etc.) looming over and dominating tiny senators at their desks below. An entrance labeled 'Entrance for Monopolists' is visible. The 'People's Entrance' is marked 'Closed.' The image conveys that large corporate monopolies, not the people, hold real power over the United States Senate.",
    attr:"'Bosses of the Senate,' Puck magazine, January 23, 1889",
    visual:true,
    imageKey:"pt5_q31_bosses_senate",
    imageType:"political cartoon"
  },
  question:"The image most closely reflects which of the following developments in American business?",
  choices:[
    "The federal government holding power over industry",
    "Senate campaigns launched by captains of industry",
    "The creation of monopolies in the American economy",
    "Successful attempts by Congress to reign in the power of the business community"
  ],
  answer:2,
  explanation:"The 'bosses' watching over the senators are each labeled with the names of different 'trusts' — another word for <strong>monopolies</strong>. The cartoon shows these monopolistic giants controlling the Senate, making the creation and dominance of monopolies the central subject.",
  choiceExplanations:[
    "The purpose of the cartoon is that business leaders — not the government — tell the senators what to do. The cartoon reverses the idea of government holding power over industry.",
    "The cartoon does not show industrialists running Senate campaigns — it shows them literally towering over and controlling the sitting Senate, a different critique about ongoing corporate influence over legislation.",
    null,
    "The cartoon's cynicism indicates the opposite — Congress is shown as powerless before the monopolies. The 'People's Entrance' is closed while monopolists have their own entrance, suggesting Congress was not successfully reining in business."
  ]
},
{
  setId:209, topic:"Period 6: Gilded Age",
  stimulus:null,
  question:"The cartoonist was making a commentary on which of the following pieces of legislation?",
  choices:[
    "Sherman Antitrust Act",
    "McKinley Tariff",
    "Teller Resolution",
    "Pendleton Act"
  ],
  answer:0,
  explanation:"The senators are attempting to limit the power of monopolistic businesses by writing legislation to ban trusts. The 1890 <strong>Sherman Antitrust Act</strong> aligns with both the date of the cartoon (1889) and the subject matter — the cartoon's cynicism suggests the law would lack teeth due to corporate influence.",
  choiceExplanations:[
    null,
    "The McKinley Tariff was about import duties, not about limiting monopolies. The cartoon's giant trusts labeled with specific industries suggest the focus is on antitrust legislation, not trade policy.",
    "The Teller Resolution was part of the treaty framework for the Spanish-American War in 1898 — unrelated to domestic monopoly regulation and from a different era.",
    "The Pendleton Act (1883) reformed the civil service system, creating merit-based government hiring. It does not relate to monopolies or antitrust concerns depicted in the cartoon."
  ]
},
{
  setId:209, topic:"Period 6: Gilded Age",
  stimulus:null,
  question:"The image most directly illustrates a United States Senate that",
  choices:[
    "was free from outside influence",
    "often had its laws upheld by the Supreme Court",
    "was to some degree controlled by business interests",
    "was split evenly between two parties"
  ],
  answer:2,
  explanation:"The large 'bosses' watching over the senators as they write antitrust legislation represent the major American trusts (monopolies). The cartoonist indicates that <strong>business leaders tell the Senate how to write business-friendly legislation</strong>, directly illustrating corporate control over the legislative branch.",
  choiceExplanations:[
    "The entire point of the cartoon is that the Senate is deeply influenced by corporate monopolies. The 'People's Entrance Closed' sign and the dominant trust figures show the opposite of freedom from outside influence.",
    "The Supreme Court's role in upholding or striking down laws is not addressed in this cartoon. The focus is on the legislative process and corporate influence, not judicial review.",
    null,
    "There is no reference to partisan division in this image. The cartoon focuses on corporate power over both parties and the entire Senate, not on the partisan balance within it."
  ]
},

// ── SET 10 (Q34–36) ──────────────────────────────────────────────
// Stimulus: John Muir, Our National Parks, 1901
{
  setId:210, topic:"Period 7: Progressive Era",
  source:"Princeton Review Practice Test 5",
  stimulus:{
    label:"John Muir, Our National Parks, 1901",
    text:"Any fool can destroy trees. They cannot run away; and if they could, they would still be destroyed—chased and hunted down as long as fun or a dollar could be got out of their bark hides, branching horns, or magnificent bole backbones. Few that fell trees plant them; nor would planting avail much towards getting back anything like the noble primeval forests.... It took more than three thousand years to make some of the trees in these Western woods—trees that are still standing in perfect strength and beauty, waving and singing in the mighty forests of the Sierra. Through all the wonderful, eventful centuries.... God has cared for these trees, saved them from drought, disease, avalanches, and a thousand straining, leveling tempests and floods; but he cannot save them from fools—only Uncle Sam can do that.",
    attr:"John Muir, Our National Parks, 1901"
  },
  question:"An implication of Muir's argument is that the nation's forest can best be protected by",
  choices:[
    "local government",
    "the business community",
    "non-profit organizations such as the Sierra Club",
    "the federal government"
  ],
  answer:3,
  explanation:"The final line — 'only Uncle Sam can do that' — makes clear that Muir sees the <strong>federal government</strong> as the only institution capable of protecting the American wilderness from commercial exploitation.",
  choiceExplanations:[
    "Uncle Sam is not a symbol for local government — he represents the federal government of the United States. Muir's argument specifically invokes federal authority, not local.",
    "Muir's entire argument is that trees are destroyed by those motivated by profit ('as long as a dollar could be got'). The business community is part of the problem, not the solution.",
    "Even though John Muir founded the Sierra Club, he does not depend on non-profits in this argument. He explicitly calls on 'Uncle Sam' — the federal government — as the necessary protector.",
    null
  ]
},
{
  setId:210, topic:"Period 7: Progressive Era",
  stimulus:null,
  question:"Which of the following shifts resulted from Muir's advocacy?",
  choices:[
    "The end of the Progressive movement's influence",
    "An increase in the amount of land protected by the United States government",
    "The pursuit of 'green' energy sources",
    "A renewed interest in the industrial use of western natural resources"
  ],
  answer:1,
  explanation:"Muir's relationship with Theodore Roosevelt inspired Roosevelt to protect <strong>more American land than any previous president</strong>, creating national parks, monuments, forests, and wildlife refuges — dramatically expanding federally protected territory.",
  choiceExplanations:[
    "The focus on preserving the natural world was itself a central part of the Progressive Movement's goals. Muir's advocacy did not end Progressive influence — it exemplified it.",
    null,
    "Green energy sources were not a concept in the early twentieth century. Muir's advocacy was about preserving wilderness from industrial exploitation, not developing alternative energy.",
    "The entire purpose of Muir's advocacy was to preserve the wilderness from industrial use, not renew interest in exploiting it. He sought to protect these resources, not develop them."
  ]
},
{
  setId:210, topic:"Period 7: Progressive Era",
  stimulus:null,
  question:"Muir's argument in the excerpt most strongly influenced",
  choices:[
    "the signing into law of the first national park",
    "Theodore Roosevelt's election victory in 1904",
    "the passage of the Antiquities Act",
    "the United States giving California its statehood"
  ],
  answer:2,
  explanation:"Muir's friendship with Theodore Roosevelt and his writings about wilderness preservation directly inspired Roosevelt to fight for and sign the <strong>Antiquities Act of 1906</strong>, which gave the president authority to protect national monuments, natural landmarks, and manmade heritage sites.",
  choiceExplanations:[
    "The first national park was Yellowstone, signed into law by President Ulysses S. Grant in 1872 — nearly three decades before Muir published Our National Parks. Muir did not influence that earlier act.",
    "Muir's influence on Roosevelt's electability is unclear and probably insignificant — Muir valued protecting land, not political outcomes. Roosevelt won in 1904 due to his popular domestic and foreign policies, not Muir's writings.",
    null,
    "California was granted statehood in 1850, more than fifty years before Muir's 1901 book. His writing had no connection to California statehood."
  ]
},

// ── SET 11 (Q37–39) ──────────────────────────────────────────────
// Stimulus: U.S. Global Investments / Latin America During Taft Administration (graphs)
{
  setId:211, topic:"Period 7: Imperialism",
  source:"Princeton Review Practice Test 5",
  stimulus:{
    label:"U.S. Global Investments and U.S. Investments in Latin America During the Taft Administration",
    text:"Two bar charts. The first shows U.S. Global Investments during the Taft Administration (millions of dollars): Latin American and Caribbean investments are by far the largest category at approximately $1,650 million, followed by Europe (~$800 million), Canada (~$650 million), Asia, Africa, and Others. The second chart shows the breakdown of U.S. Investments in Latin America: Mining and Smelting is the largest sector (~$550 million), followed by Railroads (~$450 million), Public Utilities, Agriculture, Oil, and Manufacturing (the smallest category).",
    attr:"U.S. Global Investments During the Taft Administration; U.S. Investments in Latin America During the Taft Administration",
    visual:true,
    imageKey:"pt5_q37_taft_investments",
    imageType:"bar charts"
  },
  question:"The graphs most strongly support which of the following arguments?",
  choices:[
    "The United States' worldwide investment in mining and smelting was higher than any other investment.",
    "The United States had little interest in oil.",
    "Asian investments were insignificant to the United States.",
    "The United States used its financial resources abroad most strongly to attempt to influence Latin American countries."
  ],
  answer:3,
  explanation:"The first graph clearly demonstrates that <strong>Latin America, by far, had the most investment</strong> coming from the United States during the Taft Administration — reflecting the Dollar Diplomacy policy of using financial investment to exert political influence in the region.",
  choiceExplanations:[
    "The first graph only gives information on mining and smelting within Latin America, not worldwide. We cannot determine whether U.S. global mining investment was highest without data from other regions' breakdowns.",
    "Oil investment in Latin America is visible on the second chart and is not the lowest category. Moreover, 'little interest' is contradicted by the presence of oil investment and the general pattern of resource extraction.",
    "While Asian investments were certainly not the highest, describing them as 'insignificant' overstates the case. In fact, investments in both Latin America and Asia were driving forces behind Taft's Dollar Diplomacy.",
    null
  ]
},
{
  setId:211, topic:"Period 7: Imperialism",
  stimulus:null,
  question:"Which of the following factors most directly contributed to the data on the first graph?",
  choices:[
    "The United States engaged in a series of military campaigns during the Taft Administration to extend its colonial holdings.",
    "The Roosevelt Administration set precedent for intervention in Latin America through its interpretation of the Monroe Doctrine.",
    "The United States pulled nearly all of its investments from Africa.",
    "American investments in Asia and Africa were viewed as more profitable than were investments elsewhere."
  ],
  answer:1,
  explanation:"<strong>Roosevelt's Corollary to the Monroe Doctrine</strong> established the precedent that the United States could and would intervene in Latin American affairs — politically and economically — setting the stage for Taft's Dollar Diplomacy of using investment rather than military force to exert influence.",
  choiceExplanations:[
    "Most of the United States' major imperialist military operations (Spanish-American War, Philippine-American War) were complete before Taft took office in 1909. His approach was financial, not primarily military.",
    null,
    "There is no historical evidence supporting the claim that the United States pulled nearly all of its investments from Africa during this period. Africa remained a minor investment destination.",
    "The heavy investments in Latin America would actually indicate that Asia and Africa were not viewed as the most profitable investment opportunities. The data contradicts this choice."
  ]
},
{
  setId:211, topic:"Period 7: Imperialism",
  stimulus:null,
  question:"Which of the following best explains a discrepancy on the second graph?",
  choices:[
    "Public utilities in Latin America were not as high of a priority as the establishment of manufacturing facilities.",
    "The United States saw Latin American oil resources as more valuable than its agricultural resources.",
    "Railroad investments increased due to the large investments in manufacturing.",
    "For the most part, United States businesses domestically manufactured products using natural resources obtained from Latin America."
  ],
  answer:3,
  explanation:"One key discrepancy on the second graph is that mining and smelting investments are very large while manufacturing investment is very small. This is explained by the fact that <strong>raw materials were extracted in Latin America and manufactured into finished goods in the United States</strong> — making domestic manufacturing more profitable than Latin American manufacturing.",
  choiceExplanations:[
    "Public utilities investment is actually higher than manufacturing investment on the second chart, making this explanation incorrect. The discrepancy to explain is between mining and manufacturing, not utilities.",
    "Agricultural investment is higher than oil investment on the second chart, contradicting the idea that oil was seen as more valuable than agriculture during this period.",
    "Manufacturing investments are among the lowest on the chart, not high. If manufacturing were large, it might drive railroad demand — but the actual discrepancy is that manufacturing is very low.",
    null
  ]
},

// ── SET 12 (Q40–44) ──────────────────────────────────────────────
// Stimulus: 1919 political cartoon — Henry Cabot Lodge and peace treaty
{
  setId:212, topic:"Period 7: World War I",
  source:"Princeton Review Practice Test 5",
  stimulus:{
    label:"1919 political cartoon — 'The Lamb from the Slaughter'",
    text:"A 1919 political cartoon depicting Henry Cabot Lodge, dressed as a surgeon, escorting a battered and bandaged 'Peace Treaty' — depicted as a small figure on crutches — out of an 'Operating Room' labeled 'Senate Committee on Foreign Relations.' The peace treaty figure is heavily wounded and wrapped in bandages, suggesting Lodge's Senate committee has inflicted substantial damage on it.",
    attr:"Political cartoon, 1919",
    visual:true,
    imageKey:"pt5_q40_lodge_cartoon",
    imageType:"political cartoon"
  },
  question:"The image was created to comment on a United States government that was",
  choices:[
    "divided on foreign policy",
    "in favor of exercising neutrality in future foreign conflicts",
    "for the most part deferential to its executive branch",
    "largely in agreement on matters of foreign policy"
  ],
  answer:0,
  explanation:"In the image, Henry Cabot Lodge had taken the original treaty and made a series of damaging changes to it. Enough members of his party disagreed with Wilson's version that the Senate was at a stalemate — illustrating a government deeply <strong>divided on foreign policy</strong>.",
  choiceExplanations:[
    null,
    "Many members of the Senate actually wanted to join the League of Nations, which would commit the United States to collective security and intervention — the opposite of neutrality. This was not a consensus position.",
    "The Senate's fierce opposition to Wilson's treaty demonstrates that it was in no way deferential to the executive branch. The Senate actively rewrote and ultimately rejected the president's key foreign policy initiative.",
    "The cartoon's entire premise is conflict between the Senate Foreign Relations Committee and Wilson's original treaty. The debate showed profound disagreement on foreign policy, not consensus."
  ]
},
{
  setId:212, topic:"Period 7: World War I",
  stimulus:null,
  question:"The cartoonist suggests that",
  choices:[
    "Lodge spearheaded extensive changes to the original peace treaty",
    "Lodge resigned from the Senate Committee on Foreign Relations",
    "Lodge was ultimately responsible for the ratification of the treaty",
    "Lodge fought to keep Wilson's proposal for the treaty intact"
  ],
  answer:0,
  explanation:"Since Lodge, in this image, is the one who emerges from the 'Operating Room' with the heavily bandaged treaty, the cartoon clearly indicates he was responsible for <strong>making extensive changes</strong> to the original treaty — the surgery metaphor depicting his amendments as wounds inflicted on Wilson's document.",
  choiceExplanations:[
    null,
    "As the one responsible for making changes to the bill, Lodge was active on and leading the Foreign Relations Committee — he certainly did not resign from it. He chaired it.",
    "The treaty was never ratified. Lodge's changes, combined with Wilson's refusal to compromise, led to the Senate rejecting ratification altogether.",
    "The document emerging from 'surgery' — heavily bandaged and on crutches — shows the treaty was substantially altered, not kept intact. Lodge's 'reservations' fundamentally changed Wilson's proposal."
  ]
},
{
  setId:212, topic:"Period 7: World War I",
  stimulus:null,
  question:"Which of the following developments is the most direct effect of the situation portrayed in the image?",
  choices:[
    "President Wilson managed to get the European powers to join the United States in agreeing to the treaty.",
    "The United States failed to sign onto the Treaty of Versailles.",
    "The war dragged on for two more years until a new treaty could be agreed upon.",
    "Lodge persuaded Great Britain to agree to his version of the treaty."
  ],
  answer:1,
  explanation:"Ultimately, the Senate could not agree on Lodge's changes, and the Treaty of Versailles was <strong>never ratified by the United States</strong>. The U.S. instead signed separate peace treaties with the former Central Powers in 1921.",
  choiceExplanations:[
    "The problem with this option is the word 'join.' While European powers agreed to the treaty and Wilson helped negotiate it at Versailles, the United States itself did not ratify the document. The U.S. could not 'join' an agreement it refused to ratify.",
    null,
    "The war was already over — the Central Powers had surrendered in November 1918. The Treaty of Versailles was signed in June 1919. There was no dragging on of the war after this.",
    "No European nation was asked to agree to Lodge's amended version. Lodge's changes were part of the U.S. Senate's domestic debate over ratification, not an international negotiation."
  ]
},
{
  setId:212, topic:"Period 7: World War I",
  stimulus:null,
  question:"The cartoon most directly comments on which of the following?",
  choices:[
    "Wilson's Fourteen Points",
    "Schenck v. United States",
    "The League of Nations",
    "Lodge's Reservations"
  ],
  answer:3,
  explanation:"The changes Lodge made stemmed from his concerns, or '<strong>reservations</strong>,' about the original Treaty of Versailles — which became known as 'Lodge's Reservations.' The cartoon shows the treaty being surgically altered by Lodge, which is precisely what his specific amendments did.",
  choiceExplanations:[
    "Wilson's Fourteen Points were highly influential in creating the treaty with European powers, but the cartoon is focused on what happened to the treaty in the Senate, not its original creation.",
    "Schenck v. United States (1919) was a Supreme Court case involving free speech during wartime. It is completely unrelated to the peace treaty ratification debate.",
    "The League of Nations was one of Lodge's specific reservations, but the scope of this cartoon is larger — Lodge made multiple amendments to the entire treaty, not just the League membership clause.",
    null
  ]
},
{
  setId:212, topic:"Period 8: World War II",
  stimulus:null,
  question:"Which of the following was a key difference between the conclusion of World War I and the conclusion of World War II?",
  choices:[
    "The United States participated in the creation of a treaty to end the Second World War, but did not participate in such a process following the First World War.",
    "The United States was not invited to the peace conference following World War II, though hosted the peace conference following World War I.",
    "The United States joined a worldwide community focused on maintaining peace following World War II, while it rejected such an opportunity following World War I.",
    "At the close of World War II, the United States had a strong allegiance with France, yet following World War I, the relationship was far more adversarial."
  ],
  answer:2,
  explanation:"After rejecting the Treaty of Versailles (and thus not joining the League of Nations) following WWI, the United States took charge in creating the <strong>United Nations</strong> after WWII — joining the international peacekeeping body it had refused after the first war.",
  choiceExplanations:[
    "The United States did participate in the Treaty of Versailles process — Wilson helped craft it and attended the Paris Peace Conference. The U.S. participated in creation but failed to ratify the document.",
    "The Paris Peace Conference was held in Versailles, France — not hosted by the United States. And the United States was deeply involved in the World War II peace process, not excluded from it.",
    null,
    "The United States maintained an alliance with France following World War I — France was an Allied partner throughout, and diplomatic relations were not adversarial after the war."
  ]
},

// ── SET 13 (Q45–49) ──────────────────────────────────────────────
// Stimulus: Jesse Jackson on Hooverville, 1935 / Herbert Hoover letter, 1931
{
  setId:213, topic:"Period 7: Great Depression",
  source:"Princeton Review Practice Test 5",
  stimulus:{
    label:"Jesse Jackson, 'The Story of Hooverville, In Seattle,' 1935 · President Herbert Hoover, letter to Illinois Governor Louis Emmerson, July 10, 1931",
    text:"Jackson (1935): '...As several of us sat around an open camp fire one evening, one of the shanty dwellers remarked that \"we must have a name for this place; we can't call it any old thing.\" One man spoke up with \"this is the era of Hoover prosperity; let's call this place Hooverville.\" ...Hooverville is a colony of industrious men, the most of whom are busy trying to hold their heads up and be self-supporting and respectable. A lot of work is required in order to stay here, consequently, the lazy man does not tarry long in this place.'\n\nHoover (1931): 'No matter what improvement there may be in our economic situation during the fall, we shall unquestionably have considerable continuance of destitution over the winter. I am wondering if it would not be advisable for us to get the machinery of the country into earlier action than last year in order that there may be provision for funds substantially made before the winter arrives.'",
    attr:"Jesse Jackson, 'The Story of Hooverville, In Seattle,' 1935; President Herbert Hoover, letter to Illinois Governor Louis Emmerson, July 10, 1931"
  },
  question:"'Hoovervilles' emerged most directly from the context of which of the following?",
  choices:[
    "Lack of housing for returning World War I veterans",
    "A lull in manufacturing during the 1920s",
    "An insufficient labor pool",
    "The economic fallout from the 1929 crash of the stock market"
  ],
  answer:3,
  explanation:"Hoovervilles were shanty towns that housed homeless and mostly jobless Americans during the early years of the <strong>Great Depression</strong>, which was initially precipitated by the Stock Market Crash of October 1929 and the subsequent banking failures and unemployment crisis.",
  choiceExplanations:[
    "The residents of Hoovervilles were not necessarily World War I veterans — they were a cross-section of Americans displaced by the Great Depression. Veteran homelessness was a separate, though related, concern.",
    "Manufacturing was actually high during the 1920s — overproduction was one of the factors that contributed to the Great Depression, not a lull in manufacturing.",
    "Many residents of Hoovervilles wanted jobs, but there were far more potential laborers than available jobs. The problem was insufficient jobs, not insufficient workers.",
    null
  ]
},
{
  setId:213, topic:"Period 7: Great Depression",
  stimulus:null,
  question:"In noting that 'this is the era of Hoover prosperity,' the man in Jesse Jackson's recollection was",
  choices:[
    "celebrating the contributions of the Hoover administration",
    "offering an excuse for his unemployment",
    "using sarcasm to associate the tough economic times with Hoover's policies",
    "offering Hoover an endorsement for the 1932 Election"
  ],
  answer:2,
  explanation:"The residents of Hoovervilles blamed President Hoover for their condition — naming these miserable shanty towns after him as a form of <strong>biting sarcasm</strong>, sarcastically calling the era one of 'Hoover prosperity' when the reality was widespread destitution.",
  choiceExplanations:[
    "Hoovervilles are not a sincere homage to President Hoover. They were named after him in sarcastic blame, not celebration.",
    "The man does not comment on his own employment or lack thereof — he is making a collective statement about naming the settlement. There is no personal excuse offered.",
    null,
    "A man living in a Hooverville and sarcastically naming it after Hoover would be unlikely to offer an endorsement. The sarcastic naming indicates blame and opposition, not political support."
  ]
},
{
  setId:213, topic:"Period 7: Great Depression",
  stimulus:null,
  question:"The author of the first passage would likely respond to Hoover's letter by",
  choices:[
    "disagreeing about the utility of government assistance",
    "offering support for the work Hoover has done thus far",
    "agreeing that aid should be offered as soon as possible",
    "echoing Hoover's sentiments that the economic situation had recently improved"
  ],
  answer:2,
  explanation:"The residents of Hoovervilles desperately needed assistance. Jackson would likely <strong>agree with Hoover's call for government aid</strong> to assist during the hardships of the Great Depression, as the Hooverville residents clearly needed food, shelter, and economic relief.",
  choiceExplanations:[
    "There is no evidence in Jackson's passage that he does not believe in the use of government intervention. His description of industrious men trying to survive suggests they would welcome assistance.",
    "According to his account, Jackson and the residents are highly critical of Hoover's role in the Great Depression — they named their miserable settlement after him sarcastically. He would not offer support for Hoover's performance.",
    null,
    "Jackson makes no indication that the economic situation has improved. The ongoing existence of the Hooverville and the hardships described suggest continued crisis, not improvement."
  ]
},
{
  setId:213, topic:"Period 7: Great Depression",
  stimulus:null,
  question:"Hoover's reference to 'the machinery of the country' is best understood as",
  choices:[
    "federal funds used to generate economic activity",
    "the manufacturing industry",
    "railroads that had been abandoned at the start of the Great Depression",
    "unemployed industrial workers"
  ],
  answer:0,
  explanation:"Hoover's reference to 'the machinery of the country' is immediately followed by advising that 'provision for funds' be made — making clear that he is speaking metaphorically about the <strong>government's funding mechanisms</strong> that generate economic activity, not literal machinery.",
  choiceExplanations:[
    null,
    "Taking the metaphor too literally leads to 'the manufacturing industry,' but Hoover then discusses 'provision for funds' — clearly government fiscal mechanisms, not physical industrial equipment.",
    "There is no historical basis for the idea that railroads were abandoned at the start of the Great Depression. This interprets 'machinery' far too literally and historically inaccurately.",
    "Hoover does not mention labor in this passage. The context — 'get the machinery into action' to 'make provision for funds' — clearly points to financial and governmental mechanisms, not workers."
  ]
},
{
  setId:213, topic:"Period 7: Great Depression",
  stimulus:null,
  question:"Both Jackson and Hoover would agree that",
  choices:[
    "Government investments in Hoovervilles would benefit the larger economy",
    "The immediate economic outlook appeared bleak",
    "The upcoming winter would mean the end of Hoovervilles",
    "The economy should improve by the end of the winter"
  ],
  answer:1,
  explanation:"Jackson mentions that the lazy man will not last long in Hooverville (implying ongoing hardship), and Hoover concedes that 'destitution' will continue through winter. Both sources share a <strong>bleak view of the immediate economic future</strong>.",
  choiceExplanations:[
    "There is no discussion of government investments specifically in Hoovervilles in either passage. Hoover discusses general government funds for relief, not targeted Hooverville investment.",
    null,
    "Neither passage mentions winter as signaling the end of Hoovervilles. Hoover mentions winter as a time of increased hardship, not resolution. Jackson makes no such claim.",
    "Hoover actually predicts 'considerable continuance of destitution over the winter' — suggesting the economy will not improve by winter's end. This is the opposite of the rosy scenario in option D."
  ]
},

// ── SET 14 (Q50–53) ──────────────────────────────────────────────
// Stimulus: John Lewis, March on Washington, 1963
{
  setId:214, topic:"Period 8: Civil Rights",
  source:"Princeton Review Practice Test 5",
  stimulus:{
    label:"John Lewis, chairman of the SNCC, speech at the March on Washington, August 28, 1963",
    text:"To those who have said, 'Be patient and wait,' we have long said that we cannot be patient. We do not want our freedom gradually, but we want to be free now! We are tired. We are tired of being beaten by policemen. We are tired of seeing our people locked up in jail over and over again. And then you holler, 'Be patient.' How long can we be patient? We want our freedom and we want it now. We do not want to go to jail. But we will go to jail if this is the price we must pay for love, brotherhood, and true peace.",
    attr:"John Lewis, chairman of the SNCC, March on Washington, August 28, 1963"
  },
  question:"In noting that 'we have long said that we cannot be patient,' John Lewis was most likely arguing against",
  choices:[
    "politicians who threw their support behind the Civil Rights Movement",
    "white Americans who claimed that African Americans should wait for their civil rights and avoid civil disobedience",
    "Civil Rights advocates who argued that more consideration should be given to the timing and execution of direct action",
    "African American activists critical of how slow the Civil Rights movement was progressing"
  ],
  answer:1,
  explanation:"Lewis speaks about the urgency of demanding civil rights immediately, directly addressing those who counseled patience. This echoes the critique in Martin Luther King Jr.'s 'Letter from a Birmingham Jail' — both responding to <strong>white moderates and Americans who told Black people to wait</strong> for their rights through legal channels.",
  choiceExplanations:[
    "Lewis, as a Civil Rights leader, would not argue against politicians who supported the movement — those were his allies. His message is directed at those who opposed or delayed action.",
    null,
    "Lewis would not have criticized Civil Rights advocates who shared his general goals but debated tactics — those were fellow travelers. His message is directed at opponents of civil disobedience, not internal tactical debates.",
    "Lewis would also have been critical of the slow pace of the movement, not arguing against fellow activists who shared his frustration. The 'Be patient' criticism is directed outward at the movement's opponents."
  ]
},
{
  setId:214, topic:"Period 8: Civil Rights",
  stimulus:null,
  question:"The primary goal of the March on Washington was",
  choices:[
    "to end housing discrimination",
    "to integrate public schools",
    "to end discrimination in places of public accommodation",
    "to promote black separatism"
  ],
  answer:2,
  explanation:"The March on Washington occurred less than a year before President Lyndon Johnson signed the Civil Rights Act of 1964. Marchers were motivated by their frustrations at discriminatory lunch counters and businesses — calling for an end to <strong>de jure segregation in places of public accommodation</strong>.",
  choiceExplanations:[
    "Housing discrimination would be explicitly confronted later in the decade with the Fair Housing Act of 1968. It was not the primary focus of the 1963 March on Washington.",
    "Public school desegregation had been legally mandated by Brown v. Board of Education a decade earlier in 1954. Though implementation was contested, school integration was not the primary goal of this march.",
    null,
    "The speeches at the March on Washington called upon Americans to practice unity and uphold the nation's founding ideals. Black separatism — associated with Malcolm X and later the Black Power movement — was not a significant part of this event."
  ]
},
{
  setId:214, topic:"Period 8: Civil Rights",
  stimulus:null,
  question:"When John Lewis states that he would 'go to jail if this is the price we must pay,' he echoes a sentiment that is most similar to that of",
  choices:[
    "Martin Luther King, Jr.",
    "W.E.B. Du Bois",
    "Malcolm X",
    "Marcus Garvey"
  ],
  answer:0,
  explanation:"<strong>Martin Luther King Jr.</strong> used both his words and actions to advocate civil disobedience and the importance of willingly going to jail to champion moral principles — most famously articulated in his 'Letter from a Birmingham Jail' (1963), written while imprisoned for civil disobedience.",
  choiceExplanations:[
    null,
    "W.E.B. Du Bois was an early and important Civil Rights leader, but he is not particularly associated with the strategy of going to jail as a form of protest and civil disobedience.",
    "Malcolm X and the Nation of Islam advocated Black self-defense and were skeptical of nonviolent civil disobedience. Going to jail willingly as a protest tactic was not characteristic of Malcolm X's approach.",
    "Marcus Garvey advocated Black nationalism and the 'Back to Africa' movement. He was not associated with the nonviolent civil disobedience tradition of willingly accepting jail as protest."
  ]
},
{
  setId:214, topic:"Period 8: Civil Rights",
  stimulus:null,
  question:"At the time this excerpt was written, John Lewis' following was primarily comprised of",
  choices:[
    "Black Nationalists",
    "church leaders",
    "young people",
    "teachers"
  ],
  answer:2,
  explanation:"John Lewis led the <strong>SNCC (Student Nonviolent Coordinating Committee)</strong> — an organization specifically composed of and led by young students fighting for civil rights through sit-ins, freedom rides, and voter registration drives.",
  choiceExplanations:[
    "The SNCC were seen as moderate compared to Black Nationalism movements. Black Nationalists would not have been the primary constituency of an organization advocating nonviolent integration.",
    "While the SNCC often worked with churches and the broader civil rights coalition, its membership was student-focused, not primarily composed of church leaders. That description better fits the SCLC (Southern Christian Leadership Conference).",
    null,
    "While some teachers may have been involved, the SNCC was focused on student involvement — the 'student' in its name indicates its primary constituency. Teachers were not its defining membership."
  ]
},

// ── SET 15 (Q54–55) ──────────────────────────────────────────────
// Stimulus: Barack Obama, election victory speech, 2008
{
  setId:215, topic:"Period 9: Contemporary America",
  source:"Princeton Review Practice Test 5",
  stimulus:{
    label:"Barack Obama, election victory speech, November 4, 2008",
    text:"This is our time, to put our people back to work and open doors of opportunity for our kids; to restore prosperity and promote the cause of peace; to reclaim the American dream and reaffirm that fundamental truth, that, out of many, we are one; that while we breathe, we hope. And where we are met with cynicism and doubts and those who tell us that we can't, we will respond with that timeless creed that sums up the spirit of a people: Yes, we can.",
    attr:"Barack Obama, election victory speech, November 4, 2008"
  },
  question:"The speech's call for unity ('out of many, we are one') is directed at each of the following divisions EXCEPT",
  choices:[
    "racial divides that continue to linger after the Civil Rights Movement",
    "economic disparity between the working class and the upper class",
    "ongoing tensions between Congress and the White House",
    "partisan conflicts between liberals and conservatives"
  ],
  answer:2,
  explanation:"As of election night 2008, Obama was entering the White House with <strong>both houses of Congress controlled by his own party — the Democrats</strong>. There was little tension between the executive and legislative branches at that moment, making Congressional-White House tensions the division his unity message was least directed at.",
  choiceExplanations:[
    "President Obama had spoken extensively about racial divides in America, notably in his 2008 'Philadelphia Speech' on race. His historic election as the first African-American president made racial unity central to his message.",
    "In the early stages of the 2008 Recession caused by the housing market collapse, economic disparity and working-class struggles were a real and prominent concern his message addressed directly.",
    null,
    "Obama came to prominence at the 2004 Democratic National Convention declaring 'there is no red America; there is no blue America.' Bridging partisan divisions was a defining theme of his political identity and this speech."
  ]
},
{
  setId:215, topic:"Period 9: Contemporary America",
  stimulus:null,
  question:"Which of the following pairs of issues most influenced President Obama's reference to '[restoring] prosperity and [promoting] the cause of peace?'",
  choices:[
    "The dot-com bust and the War on Terror",
    "The housing crisis and the Iraq War",
    "Student loan debt and the Oklahoma City bombing",
    "Supply-side economics and the September 11th attacks"
  ],
  answer:1,
  explanation:"Obama's campaign took place during U.S. involvement in two wars — Iraq and Afghanistan — and in the weeks before Election Day, the nation was rocked by the <strong>financial crisis caused by the failing housing market</strong>. Both issues were at the immediate forefront of American concern in November 2008.",
  choiceExplanations:[
    "The dot-com bubble burst in 2000–2002 — seven years before this speech. It would not have been a primary influence on a November 2008 victory speech where the housing crisis and Iraq War were the dominant concerns.",
    null,
    "The Oklahoma City bombing occurred in 1995 — over a decade before this speech. Student loan debt, while a concern, was not the dominant economic issue in November 2008 the way the housing market collapse was.",
    "The 2008 Recession was precipitated most immediately by the housing market collapse and subprime mortgage crisis, not by supply-side economic policies per se. The September 11 attacks occurred in 2001 and were not the immediate peace concern in 2008."
  ]
}

]; // end pt5Questions
