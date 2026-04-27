const PRIMARY_DOCS = [
// ── PERIODS 1–2 ──
{period:'1',title:"John Winthrop — 'A Model of Christian Charity'",date:"1630",type:"Sermon",
  excerpt:"We shall find that the God of Israel is among us... For we must consider that we shall be as a city upon a hill. The eyes of all people are upon us.",
  attr:"John Winthrop, aboard the Arabella, 1630",
  significance:"Established the Puritan covenant theology and the concept of New England as a divinely appointed 'city upon a hill' — a model of godly community watched by the world. The sermon defined the Puritan mission and has been invoked by American leaders ever since to describe American exceptionalism.",
  keyIdeas:["City upon a hill = divine mission and global example","Covenant theology: community bound to God by mutual obligation","Established the idea of American providential destiny","Justification for tight community conformity and suppression of dissent"]},

{period:'1',title:"Mayflower Compact",date:"1620",type:"Political Document",
  excerpt:"[W]e...covenant and combine ourselves together into a civil body politic, for our better ordering and preservation...to enact, constitute, and frame, such just and equal laws, ordinances, acts, constitutions, and offices...as shall be thought most meet and convenient for the general good of the colony.",
  attr:"41 male Pilgrim passengers, November 11, 1620",
  significance:"The first written framework of self-government in British North America. Though modest in scope, it established the principle of government by consent of the governed and collective self-rule, anticipating later democratic ideology.",
  keyIdeas:["First written self-government compact in English America","Consent of the governed as basis for political authority","Born of practical necessity — no royal charter for Plymouth","Precedent for colonial traditions of representative government"]},

// ── PERIOD 3 ──
{period:'3',title:"Thomas Paine — 'Common Sense'",date:"1776",type:"Political Pamphlet",
  excerpt:"Society in every state is a blessing, but government even in its best state is but a necessary evil; in its worst state an intolerable one... For all men being originally equals, no one by birth could have a right to set up his own family in perpetual preference to all others forever.",
  attr:"Thomas Paine, January 1776",
  significance:"The most widely read pamphlet of the Revolutionary era (500,000 copies). Paine made the first public argument for complete independence from Britain in clear, accessible language that reached ordinary colonists beyond the educated elite. He attacked monarchy itself, not just British misrule.",
  keyIdeas:["First mass argument for complete independence","Attacked monarchy as an institution, not just British policy","'Common sense' framing made radical ideas accessible to ordinary people","Distinction between society (good) and government (necessary evil)","Argued republican government was both possible and preferable"]},

{period:'3',title:"Declaration of Independence",date:"1776",type:"Founding Document",
  excerpt:"We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.",
  attr:"Thomas Jefferson (primary author), Continental Congress, July 4, 1776",
  significance:"The foundational statement of American political philosophy, drawing on Lockean natural rights theory. Its universal language — 'all men are created equal' — became the standard against which subsequent generations measured American freedom, invoked by abolitionists, women's rights advocates, civil rights leaders, and anti-colonial movements worldwide.",
  keyIdeas:["Natural rights (life, liberty, pursuit of happiness) are unalienable","Governments derive just powers from consent of the governed","Right of revolution when government fails to protect rights","Drew on Locke's Second Treatise — Jefferson substituted 'happiness' for 'property'","Universal language created a promissory note future generations would demand payment on"]},

{period:'3',title:"Federalist No. 10 — James Madison",date:"1787",type:"Political Essay",
  excerpt:"The most common and durable source of factions has been the various and unequal distribution of property... If a faction consists of less than a majority, relief is supplied by the republican principle, which enables the majority to defeat its sinister views... The influence of factious leaders may kindle a flame within their particular States, but will be unable to spread a general conflagration through the other States.",
  attr:"James Madison ('Publius'), November 22, 1787",
  significance:"Madison's most original contribution to political theory: large republics are more stable than small ones because competing factions cancel each other out, preventing any single faction from seizing permanent control. This inverted the conventional wisdom (Montesquieu) that self-government required small, homogeneous communities.",
  keyIdeas:["Factions are inevitable — the cure cannot be worse than the disease","Large republic = more factions = no single faction can dominate","Representative government filters and refines public opinion","Pluralist competition as the mechanism of republican stability","Inverted Montesquieu's argument about republic size"]},

{period:'3',title:"Federalist No. 51 — James Madison",date:"1788",type:"Political Essay",
  excerpt:"If men were angels, no government would be necessary... In framing a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself.",
  attr:"James Madison ('Publius'), February 8, 1788",
  significance:"The definitive justification for separation of powers and checks and balances. Madison's argument that 'ambition must be made to counteract ambition' remains the central insight of American constitutional design.",
  keyIdeas:["Separation of powers prevents any branch from dominating","Checks and balances: ambition counteracts ambition","Federalism as a double security against tyranny","'If men were angels' — government necessary because human nature is flawed","Bicameralism protects against factional majorities"]},

{period:'3',title:"Washington's Farewell Address",date:"1796",type:"Presidential Address",
  excerpt:"The great rule of conduct for us in regard to foreign nations is in extending our commercial relations, to have with them as little political connection as possible... It is our true policy to steer clear of permanent alliances with any portion of the foreign world.",
  attr:"George Washington, September 19, 1796",
  significance:"Established the foundational principles of American foreign policy for over a century: avoid permanent foreign alliances, beware of political parties and sectionalism. Cited as justification for isolationism through WWII. Also warned against the danger of political factions.",
  keyIdeas:["Warn against permanent foreign alliances (not all alliances)","Beware the 'baneful effects' of political parties","Sectionalism threatens the Union","Commercial relations with all nations, political entanglements with none","Basis of American isolationist tradition through 1940s"]},

// ── PERIOD 4 ──
{period:'4',title:"Marbury v. Madison",date:"1803",type:"Supreme Court Decision",
  excerpt:"It is emphatically the province and duty of the judicial department to say what the law is... If two laws conflict with each other, the courts must decide on the operation of each. So if a law be in opposition to the constitution... the court must determine which of these conflicting rules governs the case. This is of the very essence of judicial duty.",
  attr:"Chief Justice John Marshall, majority opinion, 1803",
  significance:"Established judicial review — the Supreme Court's power to strike down laws that violate the Constitution. This power is not explicitly stated in the Constitution; Marshall derived it from structural logic. The decision defined the Court's role for all subsequent American history.",
  keyIdeas:["Established judicial review — power to void unconstitutional laws","Constitution is supreme law; courts must enforce its supremacy","Marshall ruled against Marbury while claiming the more important power","Power not in Constitution's text — derived from structural logic","Foundation of the independent federal judiciary"]},

{period:'4',title:"Missouri Compromise",date:"1820",type:"Congressional Legislation",
  excerpt:"[I]n all that territory ceded by France to the United States, under the name of Louisiana, which lies north of thirty-six degrees and thirty minutes north latitude, not included within the limits of the state, contemplated by this act, slavery and involuntary servitude...shall be, and is hereby, forever prohibited.",
  attr:"Congress, signed by President James Monroe, March 6, 1820",
  significance:"The first major attempt to manage slavery's expansion into western territories. Admitted Missouri (slave) and Maine (free) simultaneously and drew a line at 36°30' prohibiting slavery north of it. Jefferson called it 'a fire bell in the night.' Held for 34 years before the Kansas-Nebraska Act repealed it.",
  keyIdeas:["36°30' line: slavery prohibited north in Louisiana Territory","Maine (free) and Missouri (slave) admitted simultaneously to balance Senate","Temporary compromise — deferred rather than resolved the slavery question","Jefferson: 'fire bell in the night' — first glimpse of Civil War","Repealed by Kansas-Nebraska Act (1854), reigniting the crisis"]},

{period:'4',title:"Seneca Falls Declaration of Sentiments",date:"1848",type:"Reform Document",
  excerpt:"We hold these truths to be self-evident: that all men and women are created equal; that they are endowed by their Creator with certain inalienable rights; that among these are life, liberty, and the pursuit of happiness... The history of mankind is a history of repeated injuries and usurpations on the part of man toward woman, having in direct object the establishment of an absolute tyranny over her.",
  attr:"Elizabeth Cady Stanton (primary author), Seneca Falls Convention, July 19–20, 1848",
  significance:"The founding document of the American women's rights movement. Deliberately modeled on the Declaration of Independence to force Americans to confront whether the republic's founding principle applied to women. The suffrage resolution was the most controversial item even among attendees.",
  keyIdeas:["Modeled on Declaration of Independence — 'all men and women are created equal'","Listed grievances: no vote, no property rights in marriage, no legal personhood","Suffrage resolution was the most controversial (even Lucretia Mott hesitated)","Connected women's rights to broader natural rights tradition","Launched the organized women's suffrage movement"]},

// ── PERIOD 5 ──
{period:'5',title:"Lincoln's 'House Divided' Speech",date:"1858",type:"Political Speech",
  excerpt:"A house divided against itself cannot stand. I believe this government cannot endure, permanently, half slave and half free. I do not expect the Union to be dissolved — I do not expect the house to fall — but I do expect it will cease to be divided. It will become all one thing, or all the other.",
  attr:"Abraham Lincoln, Springfield, Illinois, June 16, 1858",
  significance:"Lincoln's acceptance speech for the Republican Senate nomination in Illinois. Though not calling for abolition, he argued the country could not permanently remain half-slave. Critics called it incendiary; the speech defined Lincoln's Senate campaign against Douglas and previewed the arguments of 1860.",
  keyIdeas:["Nation cannot permanently remain half-slave, half-free","Not a call for abolition — a prediction about national trajectory","Implied Republican goal: halt slavery's expansion until it died naturally","Douglas attacked the speech as agitating disunion","Southern Democrats saw confirmation of Republican threat to slavery"]},

{period:'5',title:"Emancipation Proclamation",date:"1863",type:"Executive Order",
  excerpt:"[A]ll persons held as slaves within any State or designated part of a State, the people whereof shall then be in rebellion against the United States, shall be then, thenceforward, and forever free; and the Executive Government of the United States, including the military and naval authority thereof, will recognize and maintain the freedom of such persons.",
  attr:"President Abraham Lincoln, January 1, 1863",
  significance:"A war measure justified under commander-in-chief powers. It applied only to Confederate states in rebellion — not border states, not Union-occupied Confederate areas. But it transformed the war's purpose, authorized Black military service, and made European intervention impossible. The 13th Amendment (1865) completed emancipation.",
  keyIdeas:["War measure only — freed slaves in rebel states, not border states","Did not free slaves in areas under Union control","Made the war explicitly about slavery, not just union","Authorized Black military service (USCT — 180,000 soldiers)","Britain and France could not support Confederacy after this proclamation","13th Amendment (1865) completed universal emancipation"]},

{period:'5',title:"Gettysburg Address",date:"1863",type:"Presidential Speech",
  excerpt:"Four score and seven years ago our fathers brought forth on this continent, a new nation, conceived in Liberty, and dedicated to the proposition that all men are created equal. Now we are engaged in a great civil war, testing whether that nation, or any nation so conceived and so dedicated, can long endure... that this nation, under God, shall have a new birth of freedom — and that government of the people, by the people, for the people, shall not perish from the earth.",
  attr:"President Abraham Lincoln, Gettysburg, Pennsylvania, November 19, 1863",
  significance:"272 words that redefined the war. By beginning with 1776 (not 1789), Lincoln located the nation's founding in the Declaration's equality principle rather than the Constitution's compromises with slavery. 'New birth of freedom' implied the war's purpose was not restoration but fulfillment of the founding promise.",
  keyIdeas:["Four score and seven = 1776, not 1789 — founding in Declaration, not Constitution","'New birth of freedom' = war transforms the nation, not just restores it","Tests whether democratic self-government can survive","The dead have given the war a higher purpose","Government of/by/for the people — democratic self-governance is the war's meaning"]},

{period:'5',title:"14th Amendment",date:"1868",type:"Constitutional Amendment",
  excerpt:"All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the State wherein they reside. No State shall make or enforce any law which shall abridge the privileges or immunities of citizens of the United States; nor shall any State deprive any person of life, liberty, or property, without due process of law; nor deny to any person within its jurisdiction the equal protection of the laws.",
  attr:"Ratified July 9, 1868",
  significance:"The most litigated constitutional provision in American history. Its citizenship, due process, and equal protection clauses became the basis for applying the Bill of Rights to states, prohibiting racial segregation (Brown), protecting reproductive rights (Griswold, Roe), and establishing same-sex marriage (Obergefell). It represents the Constitution's 'second founding.'",
  keyIdeas:["Birthright citizenship — overturned Dred Scott","Due Process Clause — basis for incorporation of Bill of Rights to states","Equal Protection Clause — basis for Brown, civil rights law, and much more","Overturned Dred Scott's denial of Black citizenship","The Constitution's most litigated provision — still shaping law today"]},

// ── PERIOD 6 ──
{period:'6',title:"Booker T. Washington — Atlanta Compromise",date:"1895",type:"Speech",
  excerpt:"In all things that are purely social we can be as separate as the fingers, yet one as the hand in all things essential to mutual progress... The wisest among my race understand that the agitation of questions of social equality is the extremest folly, and that progress in the enjoyment of all the privileges that will come to us must be the result of severe and constant struggle rather than of artificial forcing.",
  attr:"Booker T. Washington, Atlanta Cotton States Exposition, September 18, 1895",
  significance:"Washington proposed a 'Grand Compromise': Black Southerners would temporarily accept political disenfranchisement and social segregation in exchange for economic opportunity through vocational education. W.E.B. Du Bois's 'Souls of Black Folk' (1903) directly challenged this approach, demanding immediate civil and political rights.",
  keyIdeas:["Accept temporary political/social inequality; focus on economic advancement","Vocational/industrial education (Tuskegee model) over higher education","'Cast down your bucket' — build on Southern roots","Du Bois's critique: accommodation legitimizes discrimination","The Washington-Du Bois debate defined Black political strategy for decades"]},

{period:'6',title:"Plessy v. Ferguson",date:"1896",type:"Supreme Court Decision",
  excerpt:"We consider the underlying fallacy of the plaintiff's argument to consist in the assumption that the enforced separation of the two races stamps the colored race with a badge of inferiority. If this be so, it is not by reason of anything found in the act, but solely because the colored race chooses to put that construction upon it.",
  attr:"Justice Henry Billings Brown, majority opinion; Justice John Marshall Harlan, dissenting: 'Our Constitution is color-blind.'",
  significance:"Established 'separate but equal' as constitutionally permissible, providing legal foundation for the entire Jim Crow system. Justice Harlan's famous lone dissent declared 'Our Constitution is color-blind.' The decision stood until Brown v. Board of Education (1954) overturned it.",
  keyIdeas:["'Separate but equal' — segregation constitutional if facilities nominally equal","Gave legal legitimacy to the entire Jim Crow system","Justice Harlan's dissent: 'Our Constitution is color-blind'","Stood for 58 years until Brown v. Board (1954)","Court abandoned the 14th Amendment's transformative potential"]},

// ── PERIOD 7 ──
{period:'7',title:"Woodrow Wilson's Fourteen Points",date:"1918",type:"Presidential Address",
  excerpt:"What we demand in this war, therefore, is nothing peculiar to ourselves. It is that the world be made fit and safe to live in; and particularly that it be made safe for every peace-loving nation which, like our own, wishes to live its own life, determine its own institutions... The programme of the world's peace, therefore, is our programme; and that programme, the only possible programme, as we see it, is this: [fourteen points follow]",
  attr:"President Woodrow Wilson, address to Congress, January 8, 1918",
  significance:"Wilson's vision for the postwar world: national self-determination, open diplomacy, freedom of the seas, arms reduction, and a League of Nations for collective security. The Senate's rejection of the Treaty of Versailles (1919–20) repudiated Wilson's internationalism and returned the U.S. to modified isolationism.",
  keyIdeas:["14 points: open diplomacy, freedom of seas, arms reduction, self-determination","League of Nations as cornerstone of collective security","National self-determination (selectively applied — not to non-European peoples)","Senate rejected Treaty of Versailles; U.S. never joined the League","Wilson's internationalist vision vs. Lodge's reservationism"]},

{period:'7',title:"Schenck v. United States",date:"1919",type:"Supreme Court Decision",
  excerpt:"The most stringent protection of free speech would not protect a man in falsely shouting fire in a theatre and causing a panic... The question in every case is whether the words used are used in such circumstances and are of such a nature as to create a clear and present danger that they will bring about the substantive evils that Congress has a right to prevent.",
  attr:"Justice Oliver Wendell Holmes, unanimous opinion, 1919",
  significance:"Established the 'clear and present danger' test for limiting free speech — the first major First Amendment case. Holmes later modified his view in his Abrams dissent. The test was gradually replaced by Brandenburg v. Ohio (1969)'s 'imminent lawless action' standard, which is more protective of speech.",
  keyIdeas:["'Clear and present danger' test for limiting free speech","Context matters — fire in crowded theater analogy","Holmes himself later retreated from this standard (Abrams dissent)","Schenck convicted for distributing anti-draft pamphlets","Replaced by Brandenburg (1969) 'imminent lawless action' standard"]},

// ── PERIOD 8 ──
{period:'8',title:"FDR's First Inaugural Address",date:"1933",type:"Presidential Speech",
  excerpt:"Let me assert my firm belief that the only thing we have to fear is fear itself — nameless, unreasoning, unjustified terror which paralyzes needed efforts to convert retreat into advance... This nation asks for action, and action now. Our greatest primary task is to put people to work.",
  attr:"President Franklin D. Roosevelt, March 4, 1933",
  significance:"Delivered at the depths of the Great Depression with 25% unemployment and banks failing nationwide. Roosevelt conveyed confidence, promised immediate action, and framed the economic crisis as a call to national unity comparable to war. The speech restored public confidence and set the tone for the New Deal.",
  keyIdeas:["'The only thing we have to fear is fear itself' — restored national confidence","Promised immediate action against the Depression","Framed economic crisis as equivalent to wartime emergency","Blamed 'money changers' (financial sector) for the crisis","Set the template for activist executive leadership in crisis"]},

{period:'8',title:"Executive Order 9066 (Japanese American Internment)",date:"1942",type:"Executive Order",
  excerpt:"[T]he successful prosecution of the war requires every possible protection against espionage and against sabotage... the Secretary of War...is hereby authorized and directed to prescribe military areas in such places and of such extent as he or the appropriate Military Commander may determine, from which any or all persons may be excluded.",
  attr:"President Franklin D. Roosevelt, February 19, 1942",
  significance:"Authorized the forced relocation and internment of 120,000 Japanese Americans (two-thirds U.S. citizens) without trial. No Japanese American was ever convicted of espionage. Upheld by Korematsu v. United States (1944). The U.S. apologized in 1988 and paid $20,000 reparations per survivor (Civil Liberties Act).",
  keyIdeas:["Interned 120,000 Japanese Americans — 2/3 were U.S. citizens","Upheld by Korematsu (1944) — formally overturned by Trump v. Hawaii (2018)","Racial prejudice and wartime hysteria acknowledged as real causes","1988 Civil Liberties Act: formal apology + $20,000 reparations","Classic example of civil liberties failing under wartime emergency"]},

// ── PERIOD 9 ──
{period:'9',title:"Truman Doctrine",date:"1947",type:"Presidential Address",
  excerpt:"I believe that it must be the policy of the United States to support free peoples who are resisting attempted subjugation by armed minorities or by outside pressures. I believe that we must assist free peoples to work out their own destinies in their own way.",
  attr:"President Harry Truman, address to Congress, March 12, 1947",
  significance:"Articulated the containment policy: the U.S. would support any free people resisting communist subversion. Marked the definitive end of American isolationism. Critics (Lippmann) argued it committed America to defending any anti-communist government regardless of democratic character. The doctrine's logic ultimately justified Korea, Vietnam, and beyond.",
  keyIdeas:["U.S. will support free peoples resisting communist subjugation","Open-ended global commitment — not limited to Europe","Definitive end of American isolationism","Initially about Greece and Turkey — extended to the world","Logic eventually justified Vietnam, Iran, Guatemala, and more"]},

{period:'9',title:"Brown v. Board of Education",date:"1954",type:"Supreme Court Decision",
  excerpt:"We conclude that, in the field of public education, the doctrine of 'separate but equal' has no place. Separate educational facilities are inherently unequal. Therefore, we hold that the plaintiffs and others similarly situated for whom the actions have been brought are, by reason of the segregation complained of, deprived of the equal protection of the laws guaranteed by the Fourteenth Amendment.",
  attr:"Chief Justice Earl Warren, unanimous opinion, May 17, 1954",
  significance:"Overturned Plessy v. Ferguson's 'separate but equal' doctrine, declaring racially segregated schools inherently unequal. Warren's unanimous opinion drew on social science evidence (Kenneth and Mamie Clark's doll studies). 'Brown II' (1955) ordered desegregation 'with all deliberate speed' — exploited for massive resistance. The decision launched the modern civil rights movement.",
  keyIdeas:["Overturned Plessy v. Ferguson (1896) 'separate but equal'","Separate educational facilities are 'inherently unequal'","Used social science evidence (doll studies) alongside constitutional argument","Warren achieved unanimity — critical to the decision's authority","'Brown II' (1955): 'all deliberate speed' allowed years of resistance"]},

{period:'9',title:"MLK — Letter from Birmingham Jail",date:"1963",type:"Letter",
  excerpt:"We know through painful experience that freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed. Frankly, I have yet to engage in a direct action campaign that was 'well timed.' This 'Wait' has almost always meant 'Never.'... One has not only a legal but a moral responsibility to obey just laws. Conversely, one has a moral responsibility to disobey unjust laws.",
  attr:"Rev. Martin Luther King Jr., Birmingham City Jail, April 16, 1963",
  significance:"Written in response to white Alabama clergymen who called the Birmingham campaign 'unwise and untimely.' King's defense of nonviolent direct action, his critique of the 'white moderate' who preferred order to justice, and his natural law argument for civil disobedience made it the movement's most sophisticated philosophical statement.",
  keyIdeas:["Defense of nonviolent direct action and civil disobedience","Critique of white moderate who prefers 'order' over justice","Natural law distinction between just and unjust laws","'Injustice anywhere is a threat to justice everywhere'","Directed at sympathetic whites who counseled patience — not segregationists"]},

{period:'9',title:"Civil Rights Act of 1964",date:"1964",type:"Federal Legislation",
  excerpt:"All persons shall be entitled to the full and equal enjoyment of the goods, services, facilities, and privileges, advantages, and accommodations of any place of public accommodation...without discrimination or segregation on the ground of race, color, religion, or national origin.",
  attr:"Title II; signed by President Lyndon B. Johnson, July 2, 1964",
  significance:"Prohibited discrimination in public accommodations and employment; created the EEOC. Passed with more Republican than Democratic votes (over Southern Democratic filibuster). The inclusion of 'sex' in Title VII — added by Rep. Howard Smith hoping to kill the bill — became a crucial foundation for women's rights litigation.",
  keyIdeas:["Banned discrimination in public accommodations and employment","Created EEOC to enforce employment non-discrimination","'Sex' added to Title VII (by opponent Howard Smith) — crucial for women's rights","Passed over 60-day Southern Democratic filibuster","Required more Republican than Democratic votes to pass"]},

{period:'9',title:"Voting Rights Act of 1965",date:"1965",type:"Federal Legislation",
  excerpt:"[N]o voting qualification or prerequisite to voting or standard, practice, or procedure shall be imposed or applied by any State or political subdivision to deny or abridge the right of any citizen of the United States to vote on account of race or color.",
  attr:"Section 2; signed by President Lyndon B. Johnson, August 6, 1965",
  significance:"The most effective civil rights legislation of the 20th century. Banned literacy tests and other discriminatory devices; required federal 'preclearance' of voting changes in covered jurisdictions (Section 5). Mississippi Black voter registration went from 6.7% to 59.8% within a decade. Shelby County v. Holder (2013) gutted Section 5's preclearance formula.",
  keyIdeas:["Banned literacy tests and other discriminatory voting practices","Section 5 preclearance: covered states must get DOJ approval for voting changes","Immediate dramatic increase in Black voter registration in the South","Shelby County v. Holder (2013) gutted the preclearance formula","Most effective civil rights legislation — results were immediate and dramatic"]},

// ── PERIOD 10 ──
{period:'10',title:"Nixon's 'Silent Majority' Speech",date:"1969",type:"Presidential Address",
  excerpt:"And so tonight — to you, the great silent majority of my fellow Americans — I ask for your support... Let us be united for peace. Let us also be united against defeat. Because let us understand: North Vietnam cannot defeat or humiliate the United States. Only Americans can do that.",
  attr:"President Richard Nixon, television address, November 3, 1969",
  significance:"Nixon's appeal to Americans who supported the war but were not seen or heard amid the anti-war protests. The 'silent majority' framing became a lasting political strategy: positioning the administration as representing ordinary Americans against a vocal, unrepresentative minority of protesters. Foundational to modern conservative populism.",
  keyIdeas:["'Silent majority' — mainstream Americans vs. vocal anti-war minority","Framing that became a lasting conservative political strategy","'Vietnamization' policy — South Vietnamese assume combat role","Appealed to patriotism and fear of national humiliation","Template for subsequent 'real America' vs. 'elites' political framing"]},

{period:'10',title:"Roe v. Wade",date:"1973",type:"Supreme Court Decision",
  excerpt:"We...conclude that the right of personal privacy includes the abortion decision, but that this right is not unqualified and must be considered against important state interests in regulation... For the stage prior to approximately the end of the first trimester, the abortion decision and its effectuation must be left to the medical judgment of the pregnant woman's attending physician.",
  attr:"Justice Harry Blackmun, majority opinion, January 22, 1973",
  significance:"Established a constitutional right to abortion under the Due Process Clause's privacy protection, using a trimester framework. One of the most politically consequential decisions in American history, galvanizing the pro-life movement and fundamentally reshaping American politics. Overturned by Dobbs v. Jackson Women's Health Organization (2022).",
  keyIdeas:["Right to abortion found in constitutional 'right to privacy'","Trimester framework: state interest increases as pregnancy progresses","Grounded in Griswold v. Connecticut (1965) privacy precedent","Galvanized the pro-life movement — transformed American politics","Overturned by Dobbs v. Jackson (2022), returning issue to states"]},

{period:'10',title:"Reagan's First Inaugural Address",date:"1981",type:"Presidential Address",
  excerpt:"In this present crisis, government is not the solution to our problem; government is the problem... It is my intention to curb the size and influence of the Federal establishment and to demand recognition of the distinction between the powers granted to the Federal Government and those reserved to the states or to the people.",
  attr:"President Ronald Reagan, January 20, 1981",
  significance:"Articulated the Reagan Revolution's core ideology: government is the problem, not the solution. This speech shifted the ideological center of American politics, forcing Democrats to move rightward. The Clinton 'third way' — 'the era of big government is over' — demonstrated how thoroughly Reagan had transformed the political conversation.",
  keyIdeas:["'Government is not the solution to our problem; government is the problem'","Supply-side economics: tax cuts + deregulation = prosperity","Shifted the ideological center — Democrats had to argue against this baseline","'Government is the problem' became the dominant political idiom for decades","Reversed the New Deal assumption that government intervention was the default solution"]}
];
