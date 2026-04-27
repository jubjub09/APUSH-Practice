// ═══════════════════════════════════════════════════════════════════
// PRINCETON REVIEW PRACTICE TEST 6  —  55 Questions (Current Format)
// Stimulus-based sets with per-choice explanations from answer key
// ═══════════════════════════════════════════════════════════════════

const pr6Questions = [

// ── SET 1 (Q1–3) ─────────────────────────────────────────────────
// Stimulus: Abigail Adams, Letter to John Adams, 1776
{
  setId:101, topic:"Period 3: American Revolution",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"Abigail Adams, Letter to John Adams, 1776",
    text:"I long to hear that you have declared an independency—and by the way in the new Code of Laws which I suppose it will be necessary for you to make I desire you would Remember the Ladies, and be more generous and favorable to them than your ancestors. Do not put such unlimited power into the hands of the Husbands. Remember all Men would be tyrants if they could. If particular care and attention is not paid to the Ladies we are determined to foment a Rebellion, and will not hold ourselves bound by any Laws in which we have no voice, or Representation.",
    attr:"Abigail Adams, Letter to John Adams, 1776"
  },
  question:"This passage best reflects which of the following issues?",
  choices:[
    "The pursuit of an Equal Rights Amendment",
    "Women's access to education",
    "The American Women's Suffrage Movement",
    "The disparity of rights afforded to the different genders during the Colonial period"
  ],
  answer:3,
  explanation:"Adams feared that women would have no voice in the new government, reflecting the disparity of rights available to the sexes during the Colonial period. The Equal Rights Amendment and suffrage movement did not take hold until much later in American history.",
  choiceExplanations:[
    "The fight for an Equal Rights Amendment did not take hold until much later in American history—the ERA was debated in the 20th century, not the Revolutionary era.",
    "Women of privilege already had access to education at this point, albeit training for domesticity. Adams's letter does not focus on educational access.",
    "The suffrage movement did not take hold until much later in American history, gaining momentum in the 19th century and achieving success with the 19th Amendment in 1920.",
    null
  ]
},
{
  setId:101, topic:"Period 3: American Revolution",
  stimulus:null,
  question:"According to the excerpt, which event was Abigail Adams most concerned with?",
  choices:[
    "The Declaratory Act",
    "The Boston Tea Party",
    "The creation of a post-Revolution government",
    "The ratification of the Code of Laws"
  ],
  answer:2,
  explanation:"This letter was written in March 1776, at the time Thomas Jefferson was composing the Declaration of Independence. Since the United States was about to declare its independence, it was also planning to create a new government — which is what Adams urgently addresses.",
  choiceExplanations:[
    "The Declaratory Act was a British Act from 1766 asserting the Empire's ability to levy taxes in America — do not confuse it with the Declaration of Independence. Adams's letter is not about this act.",
    "The Boston Tea Party occurred in 1773, well before this letter was written. Adams is focused on the future government, not past protests.",
    null,
    "While Adams mentions a 'Code of Laws,' the ratification of a specific Code of Laws was not an imminent event being discussed. Her concern is broader — the new government being formed."
  ]
},
{
  setId:101, topic:"Period 3: American Revolution",
  stimulus:null,
  question:"When Abigail Adams notes that she hopes her husband would 'be more generous and favorable to them than your ancestors,' she is most directly referring to",
  choices:[
    "the historical subjugation of women",
    "the loss of rights that women in the colonies experienced",
    "the high regard her husband's ancestors placed upon women",
    "the hope that the revolution will include women in the militias"
  ],
  answer:0,
  explanation:"The reference to 'ancestors' reflects a tone that reaches far back into history — a history that has largely excluded women from decision-making positions. Adams is asking her husband to break from this long pattern of patriarchal rule.",
  choiceExplanations:[
    null,
    "Women did not hold unique rights during the Colonial period that were then lost — the concern is the continuation of historical exclusion, not a recent loss of rights. This contradicts the thrust of Adams's argument.",
    "This directly contradicts Adams's meaning. She is urging her husband to be better than his ancestors, implying ancestors did NOT treat women well.",
    "There is no reference to women in the militias in this passage. Adams is focused on legal rights and representation in the new government."
  ]
},

// ── SET 2 (Q4–6) ─────────────────────────────────────────────────
// Stimulus: Puck Magazine carpetbagger cartoon, 1872
{
  setId:102, topic:"Period 5: Reconstruction",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"Puck Magazine political cartoon, 1872",
    text:"A political cartoon from Puck Magazine, 1872, showing a woman labeled 'The Solid South' bent under the enormous weight of a carpetbag labeled 'Carpet Bag and Bayonet Rule.' Sitting atop the bag is a figure labeled 'A.J.' (Ulysses Grant administration). Two Union soldiers stand guard on either side with bayonets. In the background are labeled items: 'Halls of Justice,' 'Rule or Ruin.' The image conveys a Southern critique of Reconstruction-era federal intervention.",
    attr:"Puck Magazine, 1872",
    visual:true, imageKey:"pr6_q4_carpetbagger",
    imageType:"political cartoon"
  },
  question:"The cartoon above supports which of the following points of view?",
  choices:[
    "President Grant plans to lead an armed invasion of the South.",
    "The southern states must carry the full weight of the Civil War costs.",
    "The United States government played a role in carpetbagging.",
    "The Grant Administration plans to confiscate weapons from Southerners."
  ],
  answer:2,
  explanation:"The cartoon shows Grant riding atop the carpetbag, guarded by Union soldiers — conveying that the federal government is actively using and enabling carpetbaggers to influence the South. This is the Reconstruction-era Southern critique of federal involvement.",
  choiceExplanations:[
    "While the Reconstruction Act represented the presence of the U.S. military in the South, this cartoon is not depicting an armed invasion. The image of the woman carrying a bag would not be consistent with an invasion narrative.",
    "The cartoon is not about the financial burden of the Civil War on the South — it is specifically about carpetbagging and federal intervention during Reconstruction.",
    null,
    "There is no suggestion of weapons confiscation in this image. The soldiers are guards enforcing Reconstruction policy, not confiscating arms."
  ]
},
{
  setId:102, topic:"Period 5: Reconstruction",
  stimulus:null,
  question:"Which of the following legislative acts paved the way for the event depicted in the illustration?",
  choices:[
    "The Freedmen's Bureau Bill, giving assistance to freed slaves in the Reconstruction South.",
    "The Morrill Act, offering land grants for the establishment of agricultural colleges.",
    "The Reconstruction Act, dividing the South into military districts.",
    "The Enforcement Act, protecting the rights of African Americans to vote and receive equal protection."
  ],
  answer:0,
  explanation:"The Freedmen's Bureau established schools and provided opportunities for carpetbaggers to become teachers and administrators in the South — directly enabling the carpetbagger phenomenon the cartoon depicts.",
  choiceExplanations:[
    null,
    "While the Morrill Act led to the establishment of schools, those were institutions of higher learning and were not associated with carpetbaggers or Reconstruction administration.",
    "The Reconstruction Act established a military presence in the South but was not primarily a program that attracted or enabled carpetbaggers — it created the military districts they operated within.",
    "The Enforcement Act protected African Americans from intimidation at voting booths and therefore is not directly related to the carpetbagging depicted in this image."
  ]
},
{
  setId:102, topic:"Period 5: Reconstruction",
  stimulus:null,
  question:"Supporters of President Grant would respond to the artist of this cartoon by noting which of the following?",
  choices:[
    "The protection of the rights of freedmen is necessary for a successful Reconstruction.",
    "Southern Democrats should share equally in the process of Reconstruction.",
    "The former Confederate states are responsible for their own rebuilding.",
    "Military Reconstruction is unconstitutional."
  ],
  answer:0,
  explanation:"The cartoon's perspective is that northern Republicans are exploiting Reconstruction. Grant's supporters would counter that federal presence in the South was necessary to protect the rights of formerly enslaved people — the moral justification for Radical Reconstruction.",
  choiceExplanations:[
    null,
    "Grant's supporters would not concede power to Southern Democrats, who had opposed Reconstruction and remained hostile to freedmen's rights.",
    "This is closer to the Southern Democratic position than Grant's — Republicans believed federal oversight was necessary precisely because Confederate states could not be trusted to rebuild fairly.",
    "Military Reconstruction was a Republican policy — Grant's supporters would not argue it was unconstitutional, as they had passed the legislation themselves."
  ]
},

// ── SET 3 (Q7–10) ─────────────────────────────────────────────────
// Stimulus: Congress Seats Graph 1980-2000
{
  setId:103, topic:"Period 10: Modern Era",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"Graph — Number of Seats in Congress Won by Each Party from the 1980 Election to the 2000 Election",
    text:"A bar graph showing congressional seats won by Democrats (black bars) and Republicans (gray bars) from 1980 to 2000. Democrats dominated from 1980–1992, winning roughly 240–270 seats per election while Republicans won 165–185. In 1994, a dramatic shift occurred: Republicans won approximately 230 seats while Democrats fell to around 205. This Republican majority persisted through 1996, 1998, and 2000, with both parties roughly equal in seats (approximately 205–225 each).",
    attr:"Congressional election results data"
  },
  question:"Which of the following conclusions is most directly supported by the overall trend depicted in the graph?",
  choices:[
    "For the most part, the party of the presidential election winner gained a majority of the seats in Congress.",
    "In Congressional elections, the American electorate tended to favor the party that opposed the president.",
    "Republican congressional dominance continued through much of the late 20th century.",
    "The Contract with America allowed the Democrats to maintain power."
  ],
  answer:1,
  explanation:"The incumbent president from 1982–1992 was Republican (Reagan, Bush). From 1994–2000, it was Democrat (Clinton). In both cases, the opposing party won or increased Congressional seats — suggesting voters tried to balance the ticket by voting the opposition party into Congress.",
  choiceExplanations:[
    "This is the opposite of what the graph shows. When a Republican held the presidency (1980–1992), Democrats dominated Congress. When a Democrat (Clinton) held the presidency, Republicans gained Congress.",
    null,
    "Republican congressional dominance was new in 1994 — before that, Democrats dominated Congress. The full 20-year period does not show Republican dominance.",
    "The Contract with America was a Republican plan, not a Democratic one. It contributed to the Republican gains in 1994, not Democratic maintenance of power."
  ]
},
{
  setId:103, topic:"Period 10: Modern Era",
  stimulus:null,
  question:"The trend in the graph most directly contributed to which of the following developments after 2000?",
  choices:[
    "A sustained budgetary surplus",
    "A powerful check on the power of the executive",
    "Congressional support for neoconservative legislation",
    "A wave of bipartisan cooperation in Congress"
  ],
  answer:2,
  explanation:"The Republican congressional gains of the late 1990s continued into the 2000s. Under President George W. Bush, a Republican-led Congress passed neoconservative legislation including the PATRIOT Act, tax cuts, and authorization for wars in Afghanistan and Iraq.",
  choiceExplanations:[
    "The U.S. budget surplus at the end of the 1990s disappeared after 2000 amid Republican tax cuts and wars — the GOP Congress contributed to eliminating the surplus, not sustaining it.",
    "Since Congress was the same party as President Bush, it mostly cooperated with him rather than acting as a check on his power. Congress did not powerfully check the executive in the early 2000s.",
    null,
    "With few exceptions, Congress remained largely partisan after 2000. Bipartisan cooperation was not a defining feature of the post-2000 period."
  ]
},
{
  setId:103, topic:"Period 10: Modern Era",
  stimulus:null,
  question:"The pattern depicted in the first half of this graph (pre-1990) was characterized by",
  choices:[
    "dominance of the GOP in federal politics",
    "the need for bipartisanship to pass legislation",
    "close congressional votes due to an evenly split legislature",
    "unchecked Democratic power in the U.S. government"
  ],
  answer:1,
  explanation:"With Republicans in the White House (Reagan, Bush) but Democrats controlling Congress, neither party could govern alone. To pass major legislation, both parties had to cooperate — making bipartisanship a practical necessity.",
  choiceExplanations:[
    "Republicans held the White House but not Congress — so GOP dominance of federal politics as a whole is not accurate for this period.",
    null,
    "The graph shows Democrats had a clear majority, not an even split — the difference was roughly 70–90 seats. Congressional votes were not particularly close.",
    "While Democrats controlled Congress, Republicans controlled the presidency — this prevented unchecked Democratic power in the federal government."
  ]
},
{
  setId:103, topic:"Period 10: Modern Era",
  stimulus:null,
  question:"Which of the following events highlighted the most dramatic change featured in the graph?",
  choices:[
    "The midterm elections brought about a Republican Congress to balance out the federal government during the presidency of Bill Clinton.",
    "The year of George H.W. Bush's election changed the balance of Congress.",
    "Ronald Reagan enjoyed a long period of his party's electoral success in Congress.",
    "Bill Clinton's reelection coincided with the loss of his party's control over Congress."
  ],
  answer:0,
  explanation:"Congressional power shifted most dramatically from Democrats to Republicans in 1994 — a midterm election year during Clinton's presidency. The 'Republican Revolution' led by Newt Gingrich and his Contract with America flipped Congress from Democratic to Republican control.",
  choiceExplanations:[
    null,
    "George H.W. Bush was elected in 1988, a year when Democrats retained control of Congress. There was no dramatic change in that year.",
    "Ronald Reagan had a Democratic-controlled Congress throughout his entire presidency — Reagan did not enjoy congressional success for his party.",
    "Bill Clinton was reelected in 1996, two years after his party had already lost control of Congress in 1994. The loss of congressional control preceded his reelection."
  ]
},

// ── SET 4 (Q11–14) ───────────────────────────────────────────────
// Stimulus: Cotton mills child labor report, 1909
{
  setId:104, topic:"Period 7: Progressive Era",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"Rev. A. E. Seddon, et al., 'Account of Investigations Made in the Cotton Mills of North and South Carolina,' 1909",
    text:"As to conditions in South Carolina, Mr. Hine states his opinion thus: 'In general, I found these were considerably worse than conditions in North Carolina, both as to the age and number of small children employed, though several of the mill towns in North Carolina approached the worst ones in South Carolina….In Chester, South Carolina, an overseer told me frankly that manufacturers all over the South evaded the child labor law by letting youngsters who are under age help older brothers and sisters. The names of the younger ones do not appear on the company books and the pay goes to the older child who is above twelve.'",
    attr:"Rev. A. E. Seddon, et al., 'Account of Investigations Made in the Cotton Mills of North and South Carolina,' 1909"
  },
  question:"The situation presented in the passage above was primarily driven by",
  choices:[
    "strict labor laws",
    "the demands of an agricultural economy",
    "loose enforcement of the Supreme Court's ruling",
    "the increased work opportunities presented by the Industrial Revolution"
  ],
  answer:3,
  explanation:"With increasing industrial productivity, new jobs opened up around the country. Industrialists turned to women and children as a low-cost way to fill these positions — child labor was driven by the demand for cheap industrial labor, not agricultural needs.",
  choiceExplanations:[
    "Strict labor laws would have prevented this kind of child labor — but the passage describes their circumvention, not their enforcement. The premise of this choice contradicts the passage.",
    "The passage is about manufacturing in cotton mills, not agricultural production. The demands described are industrial, not agricultural.",
    "In 1909, there was not yet a Supreme Court ruling on child labor. The courts of the day generally favored business over workers, so this is not applicable.",
    null
  ]
},
{
  setId:104, topic:"Period 7: Progressive Era",
  stimulus:null,
  question:"Which of the following trends was typical of labor situations like that in South Carolina?",
  choices:[
    "There were strict limits placed on the number of hours children may work.",
    "Women and children provided cheap labor sources for companies trying to save money.",
    "Employers preferred to hire men.",
    "A dearth of laborers drove up wages."
  ],
  answer:1,
  explanation:"Women and children, largely powerless in society, could easily be exploited for cheap labor. This made them attractive to industrial employers seeking to maximize profit — a defining feature of Gilded Age and early Progressive Era labor.",
  choiceExplanations:[
    "The text provides evidence that child labor persisted despite local laws — the limits placed on hours were not strictly enforced, and manufacturers actively evaded them.",
    null,
    "Employers preferred women and children precisely because they could be paid less and had less power to resist. The passage disproves a preference for hiring men.",
    "There were plenty of industrial jobs and workers during this era. A labor shortage was not driving conditions; rather, corporate greed and worker powerlessness were."
  ]
},
{
  setId:104, topic:"Period 7: Progressive Era",
  stimulus:null,
  question:"Mr. Hine's reference to 'letting youngsters who are under age help older brothers and sisters' most likely reflected which of the following sentiments of the era?",
  choices:[
    "The most productive labor force is often the youngest.",
    "Child labor was a positive social force with measurable benefits for children.",
    "Congress had no power to regulate business that did not participate in interstate commerce.",
    "It was more preferable for children to engage in rigorous labor than it was for women."
  ],
  answer:2,
  explanation:"The evasion of child labor laws occurred because Congress's tool for regulating business — the Commerce Clause — was interpreted narrowly. Courts of the era did not consider child labor that did not cross state lines to be 'interstate commerce,' leaving Congress powerless to regulate it.",
  choiceExplanations:[
    "This was not a sentiment of the era among reformers or legislators — the young were seen as vulnerable, not maximally productive.",
    "Reformers and the public at large were increasingly horrified by child labor during the Progressive Era. This was not a mainstream sentiment by 1909.",
    null,
    "There is no evidence in the text that women were preferred over children or vice versa. Both were exploited as cheap labor."
  ]
},
{
  setId:104, topic:"Period 7: Progressive Era",
  stimulus:null,
  question:"Which of the following actions contributed the most to reducing the circumstances faced by the children described in this excerpt?",
  choices:[
    "Widespread campaigns spearheaded by the captains of industry",
    "Executive orders from the McKinley administration",
    "Supreme Court decisions of the 1880s and 1890s",
    "Legislative successes at the state and local level during the Progressive movement"
  ],
  answer:3,
  explanation:"Progressive Era reformers achieved enough success at the state and local level to begin ending child labor — even though a lasting federal law (the Fair Labor Standards Act) did not come until 1938. Local legislative pressure was the most direct driver of change.",
  choiceExplanations:[
    "Captains of industry looked to maximize profit through cheap child labor — they would not have led campaigns to end a practice that benefited them financially.",
    "The McKinley administration was pro-business and did not prioritize labor reform, especially child labor protection.",
    "The Supreme Court of the Gilded Age was pro-business and generally did not expand protections for workers or children during the 1880s and 1890s.",
    null
  ]
},

// ── SET 5 (Q15–17) ───────────────────────────────────────────────
// Stimulus: Joseph Smith warrant + Krakauer excerpt, 1844/2004
{
  setId:105, topic:"Period 4: Antebellum / Second Great Awakening",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"Warrant for the Arrest of Joseph Smith, 1844 and Jon Krakauer, Under the Banner of Heaven, 2004",
    text:"'The People of the State of Illinois to all Constables, Sheriffs and Coroners of State, Greeting: Whereas complaint hath been made before me, one of the justices of the peace within and for the county of Hancock aforesaid, upon the oath of Francis M. Higbee of said county, that Joseph Smith, [et. al.], of said county did on the 10th day of June instant commit a riot at and within the county aforesaid, wherein they, with force and violence broke into the office of the Nauvoo Expositor, and unlawfully and with force burned and destroyed the printing press, type and fixtures of the same, being the property of William Law.' — Warrant for the Arrest of Joseph Smith, 1844\n\n'But perhaps the greatest attraction of Mormonism was the promise that each follower would be granted an extraordinarily intimate relationship with God. Joseph [Smith] taught and encouraged his adherents to receive personal communiqués straight from the Lord. Divine revelation formed the bedrock of the religion.' — Jon Krakauer, Under the Banner of Heaven, 2004",
    attr:"Warrant for the Arrest of Joseph Smith, 1844; Jon Krakauer, Under the Banner of Heaven, 2004"
  },
  question:"Religious movements such as Mormonism were facilitated by which of the following factors?",
  choices:[
    "A rejection of individualism",
    "A resistance to social reforms",
    "Greater social and geographical mobility",
    "An embracing of rationalism"
  ],
  answer:2,
  explanation:"Greater social and geographical mobility during the antebellum period allowed new religious movements to spread and find converts across regions. The rise of democratic individualism and a reaction against pure rationalism also contributed to the Second Great Awakening's religious fervor.",
  choiceExplanations:[
    "Mormonism actually embraced individualism — the promise of a personal relationship with God and individual divine revelation was central to its appeal, per the Krakauer excerpt.",
    "The Second Great Awakening was closely tied to social reforms including abolition and temperance — religious movements facilitated reform rather than resisting it.",
    null,
    "The Second Great Awakening was explicitly a reaction against Enlightenment rationalism. New religious movements appealed to emotion and personal revelation, not rationalist philosophy."
  ]
},
{
  setId:105, topic:"Period 4: Antebellum / Second Great Awakening",
  stimulus:null,
  question:"Joseph Smith's converts would most likely have been drawn from which of the following groups?",
  choices:[
    "lapsed Catholics from large Eastern cities",
    "Protestants from Western New York, Pennsylvania, and Ohio",
    "well-educated atheists from academia",
    "Massachusetts Puritans seeking freedom from a tyrannical church"
  ],
  answer:1,
  explanation:"The date of 1844 and the context of the Second Great Awakening point to rural Protestants in the 'burned-over district' of western New York, Pennsylvania, and Ohio — the heartland of revivalist activity where Smith founded the church and recruited his early followers.",
  choiceExplanations:[
    "Not many Catholics would likely be drawn to Mormonism, which had a distinctly Protestant theological framework. Catholic immigrants in Eastern cities were not the target demographic.",
    null,
    "Well-educated atheists were not drawn to religious revival movements of this era. The Second Great Awakening appealed to working-class and rural people seeking spiritual community.",
    "Puritans were active in the 17th and 18th centuries — this choice is outside the era. By the 1840s, Puritan religious culture had largely evolved into Congregationalism and other denominations."
  ]
},
{
  setId:105, topic:"Period 4: Antebellum / Second Great Awakening",
  stimulus:null,
  question:"The events surrounding the issuance of this warrant can best be understood in the context of which larger American trend?",
  choices:[
    "Populism",
    "Abolition",
    "The Second Great Awakening",
    "Manifest Destiny"
  ],
  answer:2,
  explanation:"The Second Great Awakening — a period of intense Protestant religious revival in the antebellum era — provides the fitting backdrop for the emergence of Mormonism. This period of spiritual searching produced numerous new religious movements across the American frontier.",
  choiceExplanations:[
    "The Populist movement occurred in the late 19th century as a reaction to abusive business practices, not as a religious movement. It is not relevant to the 1844 events.",
    "The Church of Jesus Christ of Latter-day Saints was not founded for the purpose of ending slavery — abolition was not its organizing mission.",
    null,
    "Even though the Mormons eventually moved West, their motivation was religious persecution rather than Manifest Destiny — the ideology of continental expansion by the U.S. government."
  ]
},

// ── SET 6 (Q18–19) ───────────────────────────────────────────────
// Stimulus: Westward the Course of Empire painting, 1861
{
  setId:106, topic:"Period 5: Antebellum / Manifest Destiny",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"Westward the Course of Empire Takes Its Way, Emanuel Leutze, 1861",
    text:"A monumental painting depicting a diverse group of American settlers — including men, women, children, and an enslaved person — scaling a rugged mountain pass and gazing westward toward a sunlit valley below. At the summit, a figure raises his arms triumphantly. Wagons, horses, and supplies fill the scene. The composition conveys a sense of providential destiny driving American westward migration.",
    attr:"Emanuel Leutze, Westward the Course of Empire Takes Its Way, 1861",
    visual:true, imageKey:"pr6_q18_westward",
    imageType:"historical painting"
  },
  question:"Which of the following concepts is depicted in the painting?",
  choices:[
    "Impressment",
    "Revivalism",
    "Manifest Destiny",
    "Transcendentalism"
  ],
  answer:2,
  explanation:"The image shows settlers discovering and moving into new western land, reflecting Manifest Destiny — the belief that Americans had a divine right and obligation to settle the continent from coast to coast. The painting's title makes this explicit.",
  choiceExplanations:[
    "Impressment refers to forcing people to join a military against their will — this has nothing to do with the westward movement depicted in the painting.",
    "Revivalism describes a movement to revive religious zeal, typically in church settings. While religion played a role in Manifest Destiny ideology, the painting depicts physical westward movement, not religious revival.",
    null,
    "Transcendentalism was a philosophical movement practiced mostly in New England intellectual circles (Emerson, Thoreau). It emphasized individual communion with nature but was not associated with mass westward settlement."
  ]
},
{
  setId:106, topic:"Period 4: Jeffersonian Era / Manifest Destiny",
  stimulus:null,
  question:"Which of the following events had the most significant impact on the image depicted above?",
  choices:[
    "The Second Great Awakening",
    "The Underground Railroad",
    "The Hartford Convention",
    "The Louisiana Purchase"
  ],
  answer:3,
  explanation:"Thomas Jefferson's Louisiana Purchase of 1803 doubled the size of the United States, creating the vast western territory that Americans spent the next several decades exploring and settling. Without the Louisiana Purchase, the westward movement depicted in Leutze's painting would not have had its vast canvas.",
  choiceExplanations:[
    "The Second Great Awakening provided some of the religious motivation for Manifest Destiny ideology, but it did not create the actual western territory available for settlement. The Louisiana Purchase did.",
    "The Underground Railroad helped enslaved people escape to freedom in the North — it is unrelated to westward expansion or the imagery in this painting.",
    "The Hartford Convention (1814) was a Federalist gathering that discussed New England's grievances about the War of 1812. It had no significant impact on westward expansion.",
    null
  ]
},

// ── SET 7 (Q20–23) ───────────────────────────────────────────────
// Stimulus: Beveridge + Anti-Imperialist League excerpts, 1898-1899
{
  setId:107, topic:"Period 7: Imperialism",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"Senator Albert Beveridge, 'The March of the Flag,' 1898; American Anti-Imperialist League Platform, 1899",
    text:"'The American people can not use a dishonest medium of exchange; it is ours to set the world its example of right and honor. We can not fly from our world duties; it is ours to execute the purpose of a fate that has driven us to be greater than our small intentions. We can not retreat from any soil where Providence has unfurled our banner; it is ours to save that soil for liberty and civilization.' — Senator Albert Beveridge, 1898\n\n'We hold that the policy known as imperialism is hostile to liberty and tends toward militarism, an evil from which it has been our glory to be free. We regret that it has become necessary in the land of Washington and Lincoln to reaffirm that all men, of whatever race or color, are entitled to life, liberty, and the pursuit of happiness. We maintain that governments derive their just powers from the consent of the governed. We insist that the subjugation of any people is \"criminal aggression\" and open disloyalty to the distinctive principles of our Government.' — American Anti-Imperialist League Platform, 1899",
    attr:"Senator Albert Beveridge, 'The March of the Flag,' 1898; American Anti-Imperialist League Platform, 1899"
  },
  question:"Which of the following would supporters of Beveridge's assert about the United States as an 'example of right and honor'?",
  choices:[
    "Intervention in the Spanish colony of Cuba",
    "Exploitation of the sugar crop in Hawaii",
    "The purchase of Alaska",
    "The Open Door Policy in China"
  ],
  answer:0,
  explanation:"Beveridge argues the U.S. must 'save that soil for liberty and civilization.' Imperialists claimed that Spain mistreated Cuban colonists and that U.S. intervention was humanitarian — an act of 'right and honor.' This was the moral justification for the Spanish-American War.",
  choiceExplanations:[
    null,
    "The exploitation of Hawaii's sugar crop was an economic motive — the opposite of the moral 'right and honor' framing Beveridge uses. This would undermine rather than support his argument.",
    "The purchase of Alaska (1867) was a straightforward territorial acquisition, not a moral crusade to bring 'liberty and civilization' to an oppressed people.",
    "The Open Door Policy in China sought commercial access to Chinese markets — primarily economic in motivation, not the moral 'example of right and honor' Beveridge invokes."
  ]
},
{
  setId:107, topic:"Period 7: Imperialism",
  stimulus:null,
  question:"In the second excerpt, the American Anti-Imperialist League most consistently criticized imperialism by claiming that it",
  choices:[
    "is unconstitutional",
    "is a waste of military spending",
    "is unjust to make profit from the land resources of a foreign people",
    "denies people in colonized lands access to core American values"
  ],
  answer:3,
  explanation:"The Anti-Imperialist League's central argument was that 'governments derive their just powers from the consent of the governed' — imperialism denies colonized peoples self-governance, the very core American value enshrined in the Declaration of Independence.",
  choiceExplanations:[
    "The Anti-Imperialist League primarily made moral and philosophical arguments, not legal/constitutional ones. The constitutionality of acquiring territories was debated but was not their central critique.",
    "Military waste is not the focus of the excerpt. The League's argument is philosophical — about liberty, consent, and the hypocrisy of applying American principles selectively.",
    "The excerpt does not focus on economic exploitation of land resources — it focuses on political subjugation and the denial of self-governance.",
    null
  ]
},
{
  setId:107, topic:"Period 7: Imperialism / Period 9: Cold War",
  stimulus:null,
  question:"These arguments from the late 1800s mirror arguments about what other foreign policy issue in American history?",
  choices:[
    "The Vietnam War",
    "World War I",
    "The Monroe Doctrine",
    "The Persian Gulf War"
  ],
  answer:0,
  explanation:"The debate between Beveridge (U.S. has a duty to spread its values abroad, even militarily) and the Anti-Imperialist League (subjugation is criminal aggression) mirrors the Vietnam War debate: whether the U.S. had the right or obligation to intervene militarily to 'save' foreign peoples from Communism.",
  choiceExplanations:[
    null,
    "The United States entered World War I due to attacks on merchant ships and the Zimmerman Telegram — it was not primarily a debate about spreading American values or the morality of subjugating foreign peoples.",
    "The Monroe Doctrine focused on keeping European powers out of the Western Hemisphere — a defensive posture rather than a debate about American intervention and subjugation abroad.",
    "The Persian Gulf War (1991) was about reversing Iraq's invasion of Kuwait — a different international law issue rather than the ideological debate about American imperialism and self-determination."
  ]
},
{
  setId:107, topic:"Period 7: Imperialism",
  stimulus:null,
  question:"In asserting that 'we can not retreat from any soil where Providence has unfurled our banner,' Albert Beveridge argues that",
  choices:[
    "the United States has a moral obligation to take care of the people in its colonies",
    "American expansion must increase at any cost",
    "military commitments have become so entrenched in the colonies that the United States cannot leave",
    "anti-imperialist groups lack patriotism"
  ],
  answer:1,
  explanation:"Beveridge's argument is that American expansion is divinely ordained ('Providence') and therefore cannot be reversed or limited. The assertion that America cannot retreat — not because of military entrenchment but because of providential fate — frames expansion as an unstoppable moral imperative.",
  choiceExplanations:[
    "While imperialists sometimes cited the 'white man's burden' of caring for colonized peoples, Beveridge's specific claim here is about destiny and the obligation to expand — not specifically about the welfare of colonized peoples.",
    null,
    "Beveridge does not discuss military entrenchment or practical military commitments in this passage. His argument is theological and nationalistic, not logistical.",
    "Beveridge did not attack the patriotism of his opponents in this passage — the argument is about destiny, not about the loyalty of those who disagree."
  ]
},

// ── SET 8 (Q24–26) ───────────────────────────────────────────────
// Stimulus: "Forcing Slavery Down the Throat of a Freesoiler" cartoon, 1856
{
  setId:108, topic:"Period 5: Antebellum / Bleeding Kansas",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"'Forcing Slavery Down the Throat of a Freesoiler' — political cartoon, 1856",
    text:"A political cartoon showing pro-slavery figures forcing an enslaved person into the mouth of a man labeled as a 'Freesoiler.' The pro-slavery men stand on a platform labeled 'Democratic Platform.' Labels identify figures as Douglas, Pierce, Buchanan, and Cass. In the background are labels 'KANSAS,' 'CUBA,' and 'CENTRAL AMERICA.' The caption reads 'FORCING SLAVERY DOWN THE THROAT OF A FREESOILER.'",
    attr:"Political cartoon, 1856",
    visual:true, imageKey:"pr6_q24_freesoiler",
    imageType:"political cartoon"
  },
  question:"What event most directly contributed to the issues presented in this image?",
  choices:[
    "The Mexican-American war",
    "The Compromise of 1850",
    "The Kansas-Nebraska Act",
    "The Dred Scott Supreme Court case"
  ],
  answer:2,
  explanation:"The Kansas-Nebraska Act (1854) effectively allowed slavery in the new territories of Kansas and Nebraska through popular sovereignty. This was the single issue the Free-Soil movement most opposed — and the cartoon's references to Kansas and Democratic platform figures who supported the Act make this connection explicit.",
  choiceExplanations:[
    "The Mexican-American War opened new territories to potential slavery but is not the direct cause referenced in this 1856 image, which specifically depicts the Kansas crisis of the mid-1850s.",
    "The Compromise of 1850 temporarily resolved the slavery question for existing territories. The Kansas-Nebraska Act undid this by reopening the question for new territories — it is the more direct cause.",
    null,
    "The Dred Scott decision came in 1857 — after this cartoon was published in 1856. It cannot be the cause of the issues depicted in the image."
  ]
},
{
  setId:108, topic:"Period 5: Antebellum",
  stimulus:null,
  question:"What were the goals of the Free Soil Party?",
  choices:[
    "To abolish slavery nationwide",
    "To prohibit the spread of slavery in new territories",
    "To provide free homesteads for farmers in the Midwest",
    "To allow voters to determine if slavery would spread to new territories"
  ],
  answer:1,
  explanation:"The Free-Soil Party — as implied by its name — aimed to prevent slavery from expanding into new territories. It did not advocate abolition nationwide (a more radical position) but specifically opposed the extension of slavery where it did not yet exist.",
  choiceExplanations:[
    "The Free-Soil Party did not take on the overly ambitious task of advocating for abolition nationwide — that was the abolitionist position. Free-Soilers were often motivated by opposition to competing with slave labor in new territories, not necessarily antislavery morality.",
    null,
    "The provision of free homesteads was a separate policy agenda — associated with the Homestead Act (1862), not the Free-Soil Party platform.",
    "Allowing voters to determine slavery's spread — 'popular sovereignty' — was actually the Democratic position (Stephen Douglas), which the Free-Soil Party opposed."
  ]
},
{
  setId:108, topic:"Period 5: Antebellum",
  stimulus:null,
  question:"In the decade following the publication of the image, which of the following parties emerged as a viable opposition to the expansion of slavery?",
  choices:[
    "The American Party",
    "The Republican Party",
    "The Populist Party",
    "The Socialist Party"
  ],
  answer:1,
  explanation:"The Republican Party came to national prominence in the 1850s specifically due to its opposition to the expansion of slavery. It absorbed many Free-Soil voters after the Free-Soil Party dissolved and elected Abraham Lincoln in 1860.",
  choiceExplanations:[
    "The American Party (Know-Nothings) opposed immigration and Catholics — it did not make opposition to slavery expansion its central platform and faded by the late 1850s.",
    null,
    "The Populist Party arose in America during the Gilded Age — decades after the slavery debate and the Civil War. It was focused on economic issues for farmers.",
    "The Socialist Party arose in the Gilded Age as well, long after slavery had been abolished. It was not a party that addressed the antebellum slavery expansion debate."
  ]
},

// ── SET 9 (Q27–28) ───────────────────────────────────────────────
// Stimulus: Ignatius Donnelly, Farmer's Alliance Convention, 1892
{
  setId:109, topic:"Period 6: Gilded Age / Populism",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"Ignatius Donnelly, Farmer's Alliance Convention, February 1892",
    text:"We meet in the midst of a nation brought to the verge of moral, political, and material ruin. Corruption dominates the ballot-box, the Legislatures, the Congress…. The people are demoralized; The newspapers are largely subsidized or muzzled, public opinion silenced, business prostrated, homes covered with mortgages, labor impoverished…. The fruits of the toil of millions are badly stolen to build up colossal fortunes for a few, unprecedented in the history of mankind; and the possessors of these, in turn, despise the Republic and endanger liberty. From the same prolific womb of governmental injustice we breed the two great classes—tramps and millionaires.",
    attr:"Ignatius Donnelly, Farmer's Alliance Convention, February 1892"
  },
  question:"Donnelly's Farmer's Alliance was most closely aligned with which of the following political parties?",
  choices:[
    "Republican",
    "Populist",
    "Green",
    "Free Soil"
  ],
  answer:1,
  explanation:"In the 1890s, the Populist Party sought to curb the power of banks and the railroad industry to further the interests of farmers and working-class people — precisely the agenda Donnelly articulates in this speech. The Grangers organized politically to form the People's (Populist) Party.",
  choiceExplanations:[
    "Republicans of this era were more closely aligned with business and banking interests — the opposite of Donnelly's critique. The GOP was the primary political vehicle for the Gilded Age corporate elite.",
    null,
    "The Green Party did not exist in 1892. It is a modern environmental and progressive political party with no connection to the Gilded Age farmer movement.",
    "The Free Soil Party had disbanded after the Civil War since it was dedicated to preventing slavery expansion. By 1892 it no longer existed."
  ]
},
{
  setId:109, topic:"Period 6: Gilded Age / Populism",
  stimulus:null,
  question:"Those aligned with Donnelly's political views would have been most organized to promote legislation to stop which of the following practices?",
  choices:[
    "Price gouging in the railroad industry",
    "The Black Codes of the Reconstruction Era",
    "Radical demonstrations by labor unions",
    "The trustbusting of the Progressive Movement"
  ],
  answer:0,
  explanation:"Even though the federal government helped build railroad infrastructure, private companies ran them and engaged in price gouging — creating difficult conditions for farmers who depended on railroads to ship crops. The Munn v. Illinois case and Granger Laws directly targeted this practice.",
  choiceExplanations:[
    null,
    "The Black Codes were a Reconstruction-era issue that predated the Populist movement. Donnelly and the Farmers' Alliance were focused on economic exploitation by corporations, not racial legislation from a previous era.",
    "The Populist movement was aligned with labor unions and workers — they would not have organized against labor demonstrations, which they viewed as allies in the fight against corporate power.",
    "Trustbusting was a Progressive Era policy designed to break up the corporate monopolies that Donnelly criticized. Donnelly's allies would have supported trustbusting, not organized against it."
  ]
},

// ── SET 10 (Q29–31) ──────────────────────────────────────────────
// Stimulus: Twentieth Century African American Migration Patterns map
{
  setId:110, topic:"Period 7–8: Great Migration",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"Twentieth Century African American Migration Patterns — map",
    text:"A map of the United States showing migration patterns of African Americans during the 20th century. Dashed arrows show movement from Southern states (particularly the Deep South, Texas, and the Southeast) northward to cities such as Chicago, Detroit, Cleveland, Philadelphia, and New York, and westward to California and Washington state. The arrows indicate massive population movements, primarily during two waves: the Great Migration (1910–1940) and the Second Great Migration (1940–1970).",
    attr:"Twentieth Century African American Migration Patterns"
  },
  question:"Which of the following trends contributed most directly to the migrations depicted in the map?",
  choices:[
    "Deregulation in the manufacturing industry",
    "The proliferation of Jim Crow Laws",
    "Supreme Court decisions striking down Civil Rights legislation",
    "Increased agricultural production in the North"
  ],
  answer:1,
  explanation:"The 1896 Plessy v. Ferguson decision expanded discriminatory Jim Crow laws throughout the South. The hostilities, economic exploitation, and violence that came with 'separate but equal' motivated many African Americans to seek better opportunities and less discrimination in northern and western cities.",
  choiceExplanations:[
    "Deregulation in manufacturing was not a major push factor driving Black Americans out of the South. The primary motivation was escaping racial oppression, not responding to industrial deregulation.",
    null,
    "Supreme Court decisions of the relevant era generally upheld rather than struck down segregation (Plessy v. Ferguson). This choice mischaracterizes the legal landscape — the Court enabled rather than opposed Jim Crow.",
    "The North did not have increased agricultural production that would attract migrants — African Americans moved to northern cities for manufacturing jobs, not farm work."
  ]
},
{
  setId:110, topic:"Period 7–8: Great Migration / World War I",
  stimulus:null,
  question:"The initial stages of the migrations shown in the map were accelerated by",
  choices:[
    "a drought in the American South",
    "young men avoiding conscription into World War I",
    "openings in manufacturing jobs caused by World War I",
    "educational opportunities in the northern and western states"
  ],
  answer:2,
  explanation:"World War I had two key effects that accelerated the Great Migration: men left factory jobs to fight overseas, and wartime industrial demand dramatically increased. Both created abundant employment opportunities in northern cities that coincided with the migrants' destinations.",
  choiceExplanations:[
    "While the boll weevil infestation of Southern cotton crops in the late 1910s contributed to migration, a specific drought was not the primary accelerant of the initial Great Migration phase.",
    "Young Black men did not avoid conscription — many served in World War I, which ironically reinforced their demand for equal rights at home. Avoiding the draft was not a driver of the migration.",
    null,
    "While northern schools were better than those in the segregated South, educational opportunity was not the primary driver of the initial Great Migration — economic opportunity (jobs) was the dominant pull factor."
  ]
},
{
  setId:110, topic:"Period 7–8: Great Migration",
  stimulus:null,
  question:"Which of the following situations resulted from the migrations depicted in the map?",
  choices:[
    "Widespread acceptance of the migrants in their new cities",
    "Congressional legislation prohibiting such migrations",
    "Increased racial tensions in northern cities",
    "Desegregation in the South"
  ],
  answer:2,
  explanation:"As African Americans sought employment in northern cities, they competed with white workers for jobs and housing. This spurred resentment and periodic violence — including the Chicago Race Riot of 1919 — making increased racial tensions a direct and documented result of the Great Migration.",
  choiceExplanations:[
    "The resistance African Americans encountered in northern cities directly contradicts widespread acceptance. Northern cities had their own forms of racism including housing discrimination, exclusionary unions, and race riots.",
    "No Congressional legislation prohibited internal migration — Americans have always had the right to move freely within the country. No such law was ever passed.",
    null,
    "Desegregation in the South did not occur as a result of the Great Migration — it came decades later through the Civil Rights Movement, Supreme Court decisions, and legislation in the 1950s–60s."
  ]
},

// ── SET 11 (Q32–33) ──────────────────────────────────────────────
// Stimulus: Louisiana Purchase Treaty, 1802
{
  setId:111, topic:"Period 4: Jeffersonian Era",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"Treaty between the United States of America and the French Republic, 1802 (Louisiana Purchase)",
    text:"Article II: In the cession made by the preceding article are included the adjacent Islands belonging to Louisiana all public lots and Squares, vacant lands and all public buildings, fortifications, barracks and other edifices which are not private property.—The Archives, papers & documents relative to the domain and Sovereignty of Louisiana and its dependances will be left in the possession of the Commissaries of the United States...\n\nArticle III: The inhabitants of the ceded territory shall be incorporated in the Union of the United States and admitted as soon as possible according to the principles of the federal Constitution to the enjoyment of all these rights, advantages and immunities of citizens of the United States, and in the mean time they shall be maintained and protected in the free enjoyment of their liberty, property and the Religion which they profess.",
    attr:"Treaty between the United States of America and the French Republic, 1802 (Louisiana Purchase)"
  },
  question:"The treaty between the United States and France was primarily driven by",
  choices:[
    "Napoleon's sudden need to divest from the New World",
    "Jefferson's aggressive approach to increasing the land mass of the United States",
    "the threat of war between the two nations",
    "pressure from New England Federalists"
  ],
  answer:0,
  explanation:"Napoleon's decision to sell was driven primarily by his failure in Saint-Domingue (Haiti), where a slave rebellion destroyed his plan for a New World empire, plus the resumption of war with Britain. Jefferson had only intended to purchase New Orleans — Napoleon offered the entire territory at a low price.",
  choiceExplanations:[
    null,
    "Jefferson had no aggressive plan to acquire the full Louisiana Territory — he wanted only to purchase the city of New Orleans for strategic access to the Gulf of Mexico. The full purchase was Napoleon's unexpected offer.",
    "Jefferson saw France as an ally rather than a threat of war. The transaction was a purchase, not a coerced or threatened acquisition.",
    "New England Federalists actually opposed the Louisiana Purchase, fearing it would add more slave states and dilute their political power. They were not a driving force behind it."
  ]
},
{
  setId:111, topic:"Period 4: Jeffersonian Era / Manifest Destiny",
  stimulus:null,
  question:"The document reflects an early incarnation of which concept?",
  choices:[
    "Non-Intercourse",
    "Embargos",
    "Manifest Destiny",
    "The Monroe Doctrine"
  ],
  answer:2,
  explanation:"Manifest Destiny — the belief that Americans had a right and obligation to settle the continent from coast to coast — was accelerated by the Louisiana Purchase. The doubling of U.S. territory opened the West and set in motion the continental expansion ideology that defined the 19th century.",
  choiceExplanations:[
    "The Non-Intercourse Act came a few years after the Louisiana Purchase and was created to restrict U.S. trade with France and Britain during their war — not related to territorial expansion.",
    "The Embargo Act (1807) was created to keep the United States from trading with France and Great Britain while the two were at war — an economic measure with no connection to the Louisiana Purchase concept.",
    null,
    "The Monroe Doctrine (1823) asserted the necessity of keeping foreign powers out of the Western Hemisphere — a defensive foreign policy posture created 20 years after the Louisiana Purchase, focused on non-colonization rather than American expansion."
  ]
},

// ── SET 12 (Q34–37) ──────────────────────────────────────────────
// Stimulus: George Kennan, Telegram to State Department, 1946
{
  setId:112, topic:"Period 9: Cold War",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"George Kennan, Telegram to the State Department ('The Long Telegram'), 1946",
    text:"...Russian rulers have invariably sensed that their rule was relatively archaic in form, fragile and artificial in its psychological foundation, unable to stand comparison or contact with political systems of Western countries. For this reason they have always feared foreign penetration, feared direct contact between Western world and their own, feared what would happen if Russians learned truth about world without or if foreigners learned truth about world within. And they have learned to seek security only in patient but deadly struggle for total destruction of rival power, never in compacts and compromises with it.",
    attr:"George Kennan, Telegram to the State Department, 1946"
  },
  question:"Kennan's message in the excerpt most directly reflected which of the following developments of the mid-twentieth century?",
  choices:[
    "A prolonged period of recession",
    "The United States' participation in proxy wars around the world",
    "The baby boom",
    "A Truman-endorsed doctrine of neutrality"
  ],
  answer:1,
  explanation:"The Long Telegram became the intellectual foundation for containment policy. Rather than directly fighting the Soviet Union, the U.S. intervened in other parts of the world where Communism was spreading — producing proxy wars in Korea, Vietnam, and elsewhere throughout the Cold War.",
  choiceExplanations:[
    "The end of World War II brought about a healthy economy, not a prolonged recession. Kennan's telegram was about strategic foreign policy, not economic conditions.",
    null,
    "While there was a baby boom following World War II, it is irrelevant to Kennan's strategic foreign policy telegram. The baby boom was a domestic demographic phenomenon, not a product of Cold War strategy.",
    "Kennan's containment policy was explicitly not neutrality — it called for active American engagement to prevent Soviet expansion. Truman endorsed intervention, not neutrality."
  ]
},
{
  setId:112, topic:"Period 9: Cold War",
  stimulus:null,
  question:"Which of the following developments best represents a logical extension of the ideas expressed in the excerpt?",
  choices:[
    "The United States joins the United Nations.",
    "The United States Congress passes the GI Bill.",
    "President Eisenhower presents Congress with the Federal Aid Highway Act.",
    "Foreign aid is given to Greece and Turkey to help rebuild after World War II."
  ],
  answer:3,
  explanation:"An effective way to prevent the spread of Communism was to help countries most at risk recover economically. Greece and Turkey — right in the Soviet sphere of influence — received U.S. aid under the Truman Doctrine, the direct policy embodiment of Kennan's containment recommendation.",
  choiceExplanations:[
    "While the United States joined the United Nations, this was a multilateral diplomatic move — not the strategic containment of Soviet power that Kennan specifically advocated.",
    "The GI Bill provided domestic benefits to returning veterans — a social policy with no direct connection to containing Soviet expansion.",
    "The Federal Aid Highway Act was a domestic infrastructure program — partly motivated by Cold War civil defense needs, but not a direct extension of Kennan's foreign policy recommendations.",
    null
  ]
},
{
  setId:112, topic:"Period 9: Cold War",
  stimulus:null,
  question:"The telegram most directly advocates a United States foreign policy that emphasizes",
  choices:[
    "continued peace talks with the Soviet Union",
    "preventing the spread of Communism beyond where it already was practiced",
    "increased trade partnerships with Soviet nations",
    "aggressive military action taken against the Soviet Union"
  ],
  answer:1,
  explanation:"Containment policy — the direct policy outcome of Kennan's Long Telegram — was intended to stop the spread of Communism without directly fighting the Soviet Union. The U.S. would hold the line wherever Communism threatened to spread, but not seek war to roll it back.",
  choiceExplanations:[
    "For much of the early Cold War, there was little meaningful peace talks with the Soviet Union. Kennan's telegram described the Soviets as seeking 'total destruction of rival power, never in compacts and compromises' — ruling out peace talks as effective.",
    null,
    "The United States created an embargo on trade with the Eastern Bloc and Soviet Union — the opposite of increased trade partnerships. Economic isolation was a key tool of containment.",
    "Containment was explicitly not about aggressive military action against the Soviet Union — it was about limiting Soviet expansion without direct war, which Kennan considered too dangerous."
  ]
},
{
  setId:112, topic:"Period 9: Cold War / McCarthyism",
  stimulus:null,
  question:"What was one domestic outcome of this increased tension between the United States and the Soviet Union?",
  choices:[
    "The Second Red Scare",
    "The creation of the Interstate Highway System",
    "The de-segregation of the U.S. military",
    "The rise of a new consumer culture in the United States"
  ],
  answer:0,
  explanation:"The fear of Communist infiltration of American institutions — stoked by the Cold War tensions Kennan described — produced McCarthyism and the Second Red Scare. Senator McCarthy exploited this paranoia to conduct witch hunts for alleged Communists in government, entertainment, and academia.",
  choiceExplanations:[
    null,
    "While the Interstate Highway Act (1956) had some Cold War motivation (facilitating military movement), it was not a direct domestic outcome of Soviet-American tension as described by Kennan.",
    "The desegregation of the U.S. military (Executive Order 9981, 1948) was driven by civil rights pressure and Truman's political calculations — not directly by Cold War tension with the Soviets.",
    "The rise of consumer culture was a postwar economic phenomenon driven by returning veterans, suburbanization, and GI Bill prosperity — not primarily a product of Cold War tension."
  ]
},

// ── SET 13 (Q38–40) ──────────────────────────────────────────────
// Stimulus: Senator Huey Long radio address, 1934
{
  setId:113, topic:"Period 8: New Deal Era",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"Senator Huey Long, radio address, 1934",
    text:"Both of these men, Mr. Hoover and Mr. Roosevelt, came out and said there had to be a decentralization of wealth, but neither one of them did anything about it. But, nevertheless, they recognized the principle. The fact that neither one of them ever did anything about it is their own problem that I am not undertaking to criticize; but had Mr. Hoover carried out what he says ought to be done, he would be retiring from the President's office, very probably, 3 years from now, instead of 1 year ago; and had Mr. Roosevelt proceeded along the lines that he stated were necessary for the decentralization of wealth, he would have gone, my friends, a long way already, and within a few months he would have probably reached a solution of all of the problems that afflict this country.",
    attr:"Senator Huey Long, radio address, 1934"
  },
  question:"Which of the following issues of the period was Long most likely concerned with in the excerpt?",
  choices:[
    "The challenges President Roosevelt will face in his reelection campaign",
    "The economic downturn experienced by business leaders",
    "The disparity between the wealthy and the poor",
    "The legacy of President Hoover"
  ],
  answer:2,
  explanation:"Long argues that both Hoover and Roosevelt recognized the need to 'decentralize wealth' but neither acted on it. Decentralization of wealth means spreading wealth from the few to the many — the disparity between rich and poor was Long's central concern.",
  choiceExplanations:[
    "Long mentions Roosevelt's electoral prospects only in passing — his primary concern is economic policy, specifically the failure to redistribute wealth. Electoral politics are secondary.",
    "Long was advocating for ordinary working people and farmers — his concern was the economic downturn experienced by the poor and working class, not business leaders.",
    null,
    "While Long mentions Hoover, he uses him only as an example of failed policy — the legacy of Hoover is not Long's primary concern. His concern is current policy and economic inequality."
  ]
},
{
  setId:113, topic:"Period 8: New Deal Era",
  stimulus:null,
  question:"When Long says 'had Mr. Hoover carried out what he says ought to be done,' Long is referring most directly to",
  choices:[
    "saving the banks from collapse",
    "ending Prohibition",
    "incentivizing businesses to hire more workers",
    "policies that impose higher taxes on wealthier Americans to benefit programs which aid the working class"
  ],
  answer:3,
  explanation:"Long advocates for the decentralization of wealth — meaning the redistribution of income from the wealthy to working people through progressive taxation and social programs. This is what 'ought to be done' according to Long's Share Our Wealth philosophy.",
  choiceExplanations:[
    "Saving the banks was Hoover's and Roosevelt's actual policy approach — Long criticized this as helping the wealthy rather than redistributing wealth downward. Bank rescue was not what Long wanted.",
    "Ending Prohibition was not part of Long's economic critique or his Share Our Wealth agenda. This choice is unrelated to the decentralization of wealth argument.",
    "Incentivizing businesses to hire workers (trickle-down approach) was the Republican economic philosophy Long was criticizing. This is the opposite of his proposed solution.",
    null
  ]
},
{
  setId:113, topic:"Period 8: New Deal Era / Period 6: Gilded Age",
  stimulus:null,
  question:"The ideas of Huey Long, as expressed in the excerpt, had the most in common with the ideas of the",
  choices:[
    "Federalists of the 1790s",
    "Whigs of the 1840s",
    "Know-Nothings of the 1850s",
    "Populists of the 1890s"
  ],
  answer:3,
  explanation:"Long's skepticism of the wealthy elite and advocacy for ordinary farmers and workers directly parallels the Populist Party of the 1890s, which also demanded wealth redistribution, regulation of railroads, and economic relief for the working class against corporate power.",
  choiceExplanations:[
    "The Federalists of the 1790s — led by Hamilton — believed in a strong central government that favored commercial and financial elite interests. This is the opposite of Long's economic populism.",
    "The Whigs of the 1840s were a loose coalition opposing Jackson but generally supportive of commercial interests and internal improvements — not a movement focused on wealth redistribution.",
    "The Know-Nothings of the 1850s were focused on nativism and anti-Catholic sentiment — entirely different from Long's economic class-based politics.",
    null
  ]
},

// ── SET 14 (Q41–44) ──────────────────────────────────────────────
// Stimulus: 1824 Presidential Election Results table
{
  setId:114, topic:"Period 4: Era of Good Feelings / Jacksonian Democracy",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"1824 Presidential Election Results",
    text:"Table showing 1824 presidential election results:\nJohn Quincy Adams (MA, Democratic-Republican): 84 electoral votes, 113,122 popular votes\nAndrew Jackson (TN, Democratic-Republican): 99 electoral votes, 151,271 popular votes\nWilliam H. Crawford (GA, Democratic-Republican): 41 electoral votes, 40,856 popular votes\nHenry Clay (KY, Democratic-Republican): 37 electoral votes, 47,531 popular votes\nNo candidate received a majority of electoral votes, sending the election to the House of Representatives.",
    attr:"1824 Presidential Election Results"
  },
  question:"The table supports which of the following conclusions about the 1824 presidential election?",
  choices:[
    "Not a single candidate earned a plurality of votes.",
    "Henry Clay was the least popular of the candidates.",
    "None of the candidates secured the necessary majority of electoral votes to claim victory.",
    "Andrew Jackson won the presidency."
  ],
  answer:2,
  explanation:"This election was decided by the House of Representatives because not a single candidate received a majority — more than half — of electoral votes. Jackson received the most votes but not a majority, so Congress chose the winner.",
  choiceExplanations:[
    "This is incorrect because a plurality means the most votes when no candidate receives a majority. Andrew Jackson received a plurality of both the popular votes and the electoral votes — he had the most of any candidate.",
    "Henry Clay was not the least popular candidate by popular vote: Clay had nearly 7,000 more popular votes than Crawford. Crawford received fewer popular votes than Clay.",
    null,
    "The House of Representatives chose Adams in this election, not Jackson. Jackson was furious — he called it a 'corrupt bargain.'"
  ]
},
{
  setId:114, topic:"Period 4: Era of Good Feelings",
  stimulus:null,
  question:"Which of the following factors most directly contributed to the closeness of this election?",
  choices:[
    "Because all candidates were from the same party and considered 'political insiders,' they were viewed by much of the public as too similar to one another.",
    "The support given the party caucus's preferred candidate was balanced out by the popular support for alternate candidates.",
    "The similar geographic origins of the candidates created an even split among the electorate.",
    "The candidates were supported by roughly the same number of voters around the country."
  ],
  answer:1,
  explanation:"Some states used a caucus system where Congressional representatives nominated their preferred candidate (Adams). But states that allowed direct election of presidential electors gave Jackson — a populist outsider — massive support, balancing the caucus-backed candidate against popular alternatives.",
  choiceExplanations:[
    "Although all candidates were from the same party, Andrew Jackson was certainly not considered a Washington 'insider' — he was a frontier hero and populist who ran explicitly against the political establishment.",
    null,
    "The candidates represented distinctly different geographic regions — New England (Adams), the South/frontier (Jackson), Georgia (Crawford), and Kentucky (Clay). Geographic origins differentiated rather than unified them.",
    "The table shows strong disparities in votes — Jackson received 151,271 popular votes while Crawford received only 40,856. The candidates were not supported by roughly equal numbers of voters."
  ]
},
{
  setId:114, topic:"Period 4: Jacksonian Democracy",
  stimulus:null,
  question:"Which of the following developments emerged due to the outcome of this election?",
  choices:[
    "A 'corrupt bargain' in which Henry Clay convinced Congress to elect Adams to the presidency",
    "A cooperative relationship between the incoming president and his Congress",
    "A renewed support for the caucus system",
    "A political alliance created between Henry Clay and Andrew Jackson"
  ],
  answer:0,
  explanation:"Speaker of the House Henry Clay threw his support to Adams, giving him the presidency. In return, Adams appointed Clay secretary of state. Jackson called this political arrangement a 'corrupt bargain,' which became a rallying cry for his successful 1828 presidential campaign.",
  choiceExplanations:[
    null,
    "The relationship between President Adams and Congress was contentious and uncooperative — Jackson's supporters in Congress blocked many of Adams's initiatives as retribution for the 'corrupt bargain.'",
    "The 1824 election's outcome actually discredited the caucus system — Jackson's followers were outraged that the will of popular voters had been overridden by congressional insiders.",
    "Henry Clay and Andrew Jackson became bitter political enemies after 1824. Clay founded the Whig Party partly in opposition to Jackson's Democratic Party."
  ]
},
{
  setId:114, topic:"Period 4: Jacksonian Democracy",
  stimulus:null,
  question:"Which of the following was a key difference between the top two vote earners?",
  choices:[
    "Adams represented an agricultural region of the United States while Jackson campaigned on urban interests.",
    "Adams advocated low tariffs while Jackson was interested in expanding the use of tariffs.",
    "Adams supported a stronger federal government while Jackson advocated for more states' rights.",
    "Adams pushed for a 'hard money' policy while Jackson ensured that the Second National Bank would continue."
  ],
  answer:2,
  explanation:"Adams — from New England and in the Federalist/National Republican tradition — supported a strong federal government including a national bank and internal improvements. Jackson — a Tennessean and states' rights advocate — believed in limited federal power and eventually destroyed the Second Bank.",
  choiceExplanations:[
    "This is reversed. Jackson, a Tennessean, represented a rural and frontier base; Adams, from New England, had more urban connections and advocated for commercial development.",
    "Adams actually supported tariffs (protective tariffs for Northern industry). Jackson's supporters — Southern farmers — opposed high tariffs, producing the 'Tariff of Abominations' controversy.",
    null,
    "Jackson vetoed the recharter of the Second National Bank, leading to its closure — he was a 'hard money' opponent of the Bank. Adams was more supportive of the national banking system."
  ]
},

// ── SET 15 (Q45–47) ──────────────────────────────────────────────
// Stimulus: MLK Montgomery Bus Boycott Speech, 1955
{
  setId:115, topic:"Period 8–9: Civil Rights Movement",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"Rev. Martin Luther King, Jr., The Montgomery Bus Boycott Speech, 1955",
    text:"And certainly, certainly, this is the glory of America, with all of its faults. This is the glory of our democracy. If we were incarcerated behind the iron curtains of a Communistic nation we couldn't do this. If we were dropped in the dungeon of a totalitarian regime we couldn't do this. But the great glory of American democracy is the right to protest for right. My friends, don't let anybody make us feel that we are to be compared in our actions with the Ku Klux Klan or with the White Citizens Council. There will be no crosses burned at any bus stops in Montgomery.",
    attr:"Rev. Martin Luther King, Jr., The Montgomery Bus Boycott Speech, 1955"
  },
  question:"Martin Luther King references 'the iron curtains of a Communistic nation' in order to",
  choices:[
    "highlight the importance of the fight against Communism",
    "reference a nation that models the ideals King espouses",
    "draw a contrast between how the United States and the Soviet Union afford civil liberties",
    "point out the flaws of American democracy"
  ],
  answer:2,
  explanation:"Dr. King precedes the reference to 'iron curtains' by celebrating 'the glory of our democracy' — specifically the freedom to protest. He uses the Soviet contrast to celebrate American civil liberties, not to criticize America or advocate anti-Communism.",
  choiceExplanations:[
    "King is not arguing for anti-Communist foreign policy — he is making a point about civil liberties at home. The reference to Communism is rhetorical, not a call to arms against the Soviet Union.",
    "King explicitly presents Communist nations as negative examples — places 'we couldn't do this.' He is not holding them up as models of the ideals he espouses.",
    null,
    "While King acknowledges America's 'faults,' his primary purpose in this passage is to celebrate America's capacity for protest — to inspire his followers with the legitimacy of their cause, not to indict American democracy."
  ]
},
{
  setId:115, topic:"Period 8–9: Civil Rights Movement",
  stimulus:null,
  question:"This speech was most directly influenced by which event?",
  choices:[
    "The passage of the Voting Rights Act",
    "The arrest of a civil rights activist in Montgomery, Alabama",
    "The backlash experienced by the Little Rock Nine",
    "The Greensboro Sit-ins"
  ],
  answer:1,
  explanation:"The date (1955) and the references to bus stops in Montgomery point to the arrest of Rosa Parks (December 1, 1955) — a civil rights activist whose refusal to give up her bus seat triggered the Montgomery Bus Boycott. King delivered this speech to launch the boycott in response to her arrest.",
  choiceExplanations:[
    "The Voting Rights Act was passed in 1965 — a full decade after this speech. It cannot have influenced a 1955 speech.",
    null,
    "The Little Rock Nine crisis occurred in 1957 — two years after this 1955 speech. It cannot have influenced this speech.",
    "The Greensboro Sit-ins occurred in 1960 — five years after this speech. They were themselves inspired partly by the Montgomery Bus Boycott, not the other way around."
  ]
},
{
  setId:115, topic:"Period 8–9: Civil Rights Movement",
  stimulus:null,
  question:"The reference to 'no crosses burned at any bus stops' underscores which ideal?",
  choices:[
    "To fight injustice by any means necessary",
    "The pursuit of black nationalism",
    "To remain neutral",
    "A commitment to nonviolence"
  ],
  answer:3,
  explanation:"Cross-burning was a signature act of KKK violence and terrorism. By explicitly contrasting the boycott with this imagery, King is committing the movement to nonviolent direct action — his defining philosophical commitment throughout the Civil Rights Movement.",
  choiceExplanations:[
    "'By any means necessary' was Malcolm X's philosophy, not King's. King explicitly rejected violence as a means of achieving justice.",
    "Black nationalism — associated with movements like the Nation of Islam — sought Black separatism. King's civil rights movement was integrationist and nonviolent, not nationalist.",
    "King was not calling for neutrality — he was actively protesting and organizing. The point is that the protest would be nonviolent, not passive or neutral.",
    null
  ]
},

// ── SET 16 (Q48–49) ──────────────────────────────────────────────
// Stimulus: Betty Friedan, The Feminine Mystique, 1963
{
  setId:116, topic:"Period 9: Women's Liberation Movement",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"Betty Friedan, The Feminine Mystique, 1963",
    text:"If I am right, the problem that has no name stirring in the minds of so many American women today is not a matter of loss of femininity or too much education, or the demands of domesticity. It is far more important than anyone recognizes. It is the key to these other new and old problems which have been torturing women and their husbands and children, and puzzling their doctors and educators for years. It may well be the key to our future as a nation and a culture. We can no longer ignore that voice within women that says: 'I want something more than my husband and my children and my home.'",
    attr:"Betty Friedan, The Feminine Mystique, 1963"
  },
  question:"Which of the following primary sources would most likely support Friedan's argument in the passage?",
  choices:[
    "Marriage records from the middle of the twentieth century",
    "Diary entries of housewives with references to their ambitions",
    "Data showing the true costs of the demands of domesticity",
    "Speeches by early twentieth-century suffragettes"
  ],
  answer:1,
  explanation:"Friedan writes about a feeling 'stirring in the minds of so many American women' — a subjective, internal experience. Diary entries by housewives expressing their frustrations and ambitions would most directly support this claim about women's inner lives and yearning for something more.",
  choiceExplanations:[
    "Marriage records would provide empirical data about marriage rates and ages — useful for demographic analysis but not for supporting Friedan's argument about women's internal psychological experience.",
    null,
    "Data about the economic costs of domesticity addresses material concerns, not the psychological and existential 'problem with no name' Friedan describes. Her argument is about fulfillment, not finances.",
    "Early twentieth-century suffragette speeches focused on voting rights — a different (though related) issue from Friedan's argument about women's domesticity and self-actualization in the 1960s."
  ]
},
{
  setId:116, topic:"Period 9: Women's Liberation Movement",
  stimulus:null,
  question:"Friedan's argument in the excerpt most strongly influenced the",
  choices:[
    "women's liberation movement",
    "lowering of the median age of first marriage",
    "ratification of the Nineteenth Amendment",
    "passage of new laws to guarantee equal wages among the sexes"
  ],
  answer:0,
  explanation:"The Feminine Mystique (1963) is widely credited as a catalyst for the women's liberation movement of the late 1960s and 1970s. Friedan went on to found NOW (the National Organization for Women), translating the book's ideas into political action.",
  choiceExplanations:[
    null,
    "The women's liberation movement that Friedan championed actually saw a rise in the median age of first marriage — not a lowering — as women increasingly prioritized education and careers before marriage.",
    "The Nineteenth Amendment was ratified in 1920 — more than 40 years before Friedan wrote The Feminine Mystique. Her book could not have influenced its ratification.",
    "While the Equal Pay Act was passed in 1963 (the same year as Friedan's book), no major federal equal wages law was directly passed as a result of her specific influence. The direct influence was on the women's liberation movement broadly."
  ]
},

// ── SET 17 (Q50–51) ──────────────────────────────────────────────
// Stimulus: Twenty-fourth Amendment, 1964
{
  setId:117, topic:"Period 9: Civil Rights Era",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"Twenty-fourth Amendment to the Constitution, 1964",
    text:"The right of citizens of the United States to vote in any primary or other election for President or Vice President, for electors for President or Vice President, or for Senator or Representative in Congress, shall not be denied or abridged by the United States or any State by reason of failure to pay any poll tax or other tax.",
    attr:"Twenty-fourth Amendment to the Constitution, 1964"
  },
  question:"Which form of voter suppression remained legal following the passage of this amendment?",
  choices:[
    "Literacy tests",
    "Property taxes",
    "Grandfather clauses",
    "Sex discrimination"
  ],
  answer:0,
  explanation:"The Twenty-fourth Amendment eliminated only poll taxes in federal elections. Literacy tests — given unfairly and impossibly to Black voters by local election boards — remained technically legal until the Voting Rights Act of 1965 specifically banned them.",
  choiceExplanations:[
    null,
    "Property taxes as a prerequisite for voting were already largely eliminated before this amendment. The amendment specifically targets poll taxes, not property taxes generally.",
    "Grandfather clauses (allowing whites whose grandfathers had voted to bypass other restrictions) had already been struck down by the Supreme Court in Guinn v. United States (1915).",
    "Sex discrimination in voting was eliminated by the Nineteenth Amendment in 1920 — well before this amendment. The 24th Amendment did not address sex discrimination."
  ]
},
{
  setId:117, topic:"Period 5: Reconstruction / Period 9: Civil Rights",
  stimulus:null,
  question:"Poll taxes in Southern states were originally created in reaction to which of the following?",
  choices:[
    "Women's suffrage",
    "The end of slavery",
    "The direct election of senators",
    "Lowering of the voting age"
  ],
  answer:1,
  explanation:"Following the Fifteenth Amendment (1870), Southern Democrats feared the newly freed African American population could control elections through sheer numbers. Poll taxes, literacy tests, and grandfather clauses were specifically designed to prevent Black voters from exercising the franchise.",
  choiceExplanations:[
    "Poll taxes were not created in response to women's suffrage — they predated the women's suffrage movement and were specifically designed to disenfranchise Black men after the Fifteenth Amendment.",
    null,
    "The direct election of senators (Seventeenth Amendment, 1913) came decades after poll taxes were established in the South during Reconstruction and its aftermath. Poll taxes were not a reaction to senatorial elections.",
    "Lowering the voting age (26th Amendment, 1971) came a full century after poll taxes were established. Poll taxes were not a reaction to younger voters."
  ]
},

// ── SET 18 (Q52–55) ──────────────────────────────────────────────
// Stimulus: Ronald Reagan, First Inaugural Address, 1981
{
  setId:118, topic:"Period 10: Reagan Era",
  source:"Princeton Review Practice Test 6",
  stimulus:{
    label:"President Ronald Reagan, First Inaugural Address, 1981",
    text:"The economic ills we suffer have come upon us over several decades. They will not go away in days, weeks, or months, but they will go away. They will go away because we as Americans have the capacity now, as we've had in the past, to do whatever needs to be done to preserve this last and greatest bastion of freedom.\n\nIn this present crisis, government is not the solution to our problem; government is the problem. From time to time we've been tempted to believe that society has become too complex to be managed by self-rule, that government by an elite group is superior to government for, by, and of the people. Well, if no one among us is capable of governing himself, then who among us has the capacity to govern someone else? All of us together, in and out of government, must bear the burden. The solutions we seek must be equitable, with no one group singled out to pay a higher price.",
    attr:"President Ronald Reagan, First Inaugural Address, 1981"
  },
  question:"Which of the following proved to be an asset to Ronald Reagan's 1980 campaign?",
  choices:[
    "His candid arguments that Americans were largely responsible for the economic crisis",
    "His status as an outsider",
    "Popular support of the Republican Party in the late 1970s",
    "His considerable experience in national politics"
  ],
  answer:1,
  explanation:"Reagan's appeal largely came from his status as a plain-spoken outsider — a former actor and California governor who had not been part of the Washington establishment that many Americans blamed for the economic crisis and Watergate scandal.",
  choiceExplanations:[
    "The argument that Americans were responsible for the economic crisis was actually made by President Carter in his 'malaise speech' (1979) — and it was widely seen as damaging. Reagan did not make this argument.",
    null,
    "The Republican Party was not particularly popular in the late 1970s in the aftermath of Watergate and Nixon's resignation. Reagan succeeded despite party perception, not because of it.",
    "Although Reagan had been governor of California, he did not yet have much experience in national politics. His outsider status was an asset, not his Washington credentials."
  ]
},
{
  setId:118, topic:"Period 10: Reagan Era",
  stimulus:null,
  question:"Which of the following is an example of the 'economic ills' Reagan refers to in the speech?",
  choices:[
    "Irresponsibly low tax rates",
    "An excessive military budget",
    "The burst of the dot-com bubble",
    "The energy crisis"
  ],
  answer:3,
  explanation:"Reagan was elected in 1980 on the heels of the energy crisis driven by OPEC's petroleum price increases — producing long lines at gas stations, skyrocketing inflation, and the 'stagflation' that Carter failed to resolve. The energy crisis was the most visible 'economic ill' of the period.",
  choiceExplanations:[
    "Reagan believed tax rates were too HIGH, not too low — his entire economic program was built on cutting taxes. Irresponsibly low tax rates were not the problem he was addressing.",
    "Reagan actually favored increasing military spending. An excessive military budget was not among the 'economic ills' he identified — if anything, he planned to add to defense spending.",
    "The dot-com bubble burst in 2000 — nearly 20 years after this 1981 speech. It cannot be the economic ill Reagan is referring to.",
    null
  ]
},
{
  setId:118, topic:"Period 10: Reagan Era",
  stimulus:null,
  question:"President Reagan supported which of the following economic policies?",
  choices:[
    "Keynesian economics",
    "Trickle-down economics",
    "Welfare state",
    "Deficit spending"
  ],
  answer:1,
  explanation:"Reagan favored tax cuts and deregulation to create a larger supply of goods and services — 'supply-side' economics, popularly called 'trickle-down' economics. The theory was that benefits to businesses and the wealthy would trickle down to workers and the broader economy.",
  choiceExplanations:[
    "Keynesian economics advocates for government spending and intervention to stimulate demand — the opposite of Reagan's philosophy of cutting government and reducing regulation.",
    null,
    "Reagan cut welfare programs as part of his economic agenda — he explicitly argued against the welfare state and sought to reduce government's role in social programs.",
    "While Reagan's tax cuts did produce budget deficits, he did not endorse deficit spending as a deliberate economic policy. The deficits were an unintended consequence he was criticized for."
  ]
},
{
  setId:118, topic:"Period 10: Reagan Era",
  stimulus:null,
  question:"When President Reagan insists that the 'solutions we seek must be equitable, with no one group singled out to pay a higher price,' the group he refers to is most likely which of the following?",
  choices:[
    "Immigrant communities",
    "Wealthy Americans and business interests",
    "African Americans",
    "The middle class"
  ],
  answer:1,
  explanation:"Reagan was responding to calls for greater taxation of wealthy Americans and corporations. As a fiscal conservative, he wanted tax rates equalized across social classes — the 'group' he did not want singled out with higher taxes was wealthy Americans and business interests.",
  choiceExplanations:[
    "Immigrant communities were not the focus of the debate about tax equity in 1981 — Reagan is specifically responding to progressive tax policy arguments, not immigration policy.",
    null,
    "While Reagan's economic policies disproportionately benefited white Americans, the specific 'group' he was defending from higher taxes in this context was the wealthy, not defined by race.",
    "The middle class was not the group being asked to 'pay a higher price' — progressive tax advocates were calling for higher taxes on the wealthy. Reagan was defending that group, not the middle class."
  ]
}

]; // end pr6Questions
