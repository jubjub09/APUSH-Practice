// ═══════════════════════════════════════════════════════════════
// MARCO LEARNING PRACTICE TEST 1  —  55 Questions
// Stimulus-based sets · Single explanations
// Per-choice explanations to be added after Princeton Review style review
// ═══════════════════════════════════════════════════════════════

const marcoQuestions = [

// ── SET 1 (Q1–3) ── Las Casas, 1552
{setId:1,topic:"Period 1: Pre-Colonial",source:"Marco Learning",
stimulus:{label:"Bartolomé de las Casas, A Brief Account of the Destruction of the Indies, 1552",text:"Now this infinite multitude of Men are by the Creation of God innocently simple, altogether void of and averse to all manner of Craft, Subtlety and Malice, and most Obedient and Loyal Subjects to their Native Sovereigns; and behave themselves very patiently, submissively and quietly towards the Spaniards, to whom they are subservient and subject; so that finally they live without the least thirst after revenge, laying aside all litigiousness, Commotion and hatred. This is a most tender and effeminate people, and so imbecile and unequal-balanced temper, that they are altogether incapable of hard labor, and in few years, by one Distemper or other soon expire, so that the very issue of Lords and Princes, who among us live with great affluence, and fare deliciously, are not more effeminate and tender than the Children of their Husbandmen or Laborers.",attr:"Bartolomé de las Casas, A Brief Account of the Destruction of the Indies, 1552"},
question:"Las Casas's description most directly supports which prevailing sixteenth-century idea?",
choices:["The religious supremacy of the Roman Catholic Church","The divine right of monarchs to rule over citizens","The intellectual and moral superiority of Europeans","The centrality of human beliefs, values, and ideas"],
answer:2,
explanation:"Las Casas characterizes indigenous people as passive, 'imbecile,' and incapable of hard labor — traits defined against a tacit European standard. This portrayal most directly supports the prevailing sixteenth-century European belief in <strong>European intellectual and moral superiority</strong> over non-European peoples, which was used to rationalize colonization."},

{setId:1,topic:"Period 1: Pre-Colonial",stimulus:null,
question:"The ideas expressed in the excerpt foreshadowed which of the following practices?",
choices:["European colonization","Trans-Atlantic slavery","Protestant Reformation","Exploitation of resources"],
answer:1,
explanation:"Las Casas's description of indigenous people as 'altogether incapable of hard labor' who 'soon expire' under work was ironically used to justify importing enslaved Africans. Las Casas himself later advocated this position, making his writing a direct forerunner of the <strong>Trans-Atlantic slave trade</strong>."},

{setId:1,topic:"Period 1: Pre-Colonial",stimulus:null,
question:"The ideas expressed in this excerpt differ from the ideas of the British colonists in what way?",
choices:["The British viewed the American Indians as a threat and engaged in open warfare against them.","The British viewed the American Indians as models for political organization and attempted to emulate Native American practices in their own government.","The British viewed the American Indians as a source of great economic power and robbed them of gold and silver.","The British viewed the American Indians as equals and sought to learn as much as possible about North America from them."],
answer:0,
explanation:"Unlike the Spanish who sometimes sought to use Native labor (as Las Casas describes), the British colonists primarily viewed Native Americans as <strong>obstacles and threats</strong> to land acquisition, resulting in conflicts like King Philip's War (1675–76) and the Pequot War (1637). British colonization was driven by land seizure rather than labor extraction."},

// ── SET 2 (Q4–6) ── Colonial Territory Maps
{setId:2,topic:"Period 2: Colonial Era",source:"Marco Learning",
stimulus:{label:"Maps — 'Claims Before and After French and Indian Wars,' Library of Congress",text:"Two maps showing European territorial claims in North America before and after the French and Indian War (Seven Years' War). The left map (before) shows competing French, British, and Spanish claims. The right map (after, c. 1763) shows Britain's dramatically expanded territorial control east of the Mississippi River following France's defeat, with Spain retaining territory west of the Mississippi.",attr:"Courtesy of Library of Congress: 2009581137",visual:true,imageKey:"marco_q4_map_colonial",imageType:"historical map"},
question:"The maps most directly illustrate which of the following?",
choices:["Westward movement of British colonists","American Indian resistance to colonization","Declining influence of the Spanish Empire","Increasing economic value of coastal property"],
answer:0,
explanation:"The maps show Britain's acquisition of all French territory east of the Mississippi after 1763, dramatically expanding the territory available for British colonial settlement. This most directly illustrates the <strong>conditions enabling westward movement of British colonists</strong>, which led directly to the Proclamation of 1763 attempting to limit that expansion."},

{setId:2,topic:"Period 2: Colonial Era",stimulus:null,
question:"The change in Great Britain's territorial boundaries directly resulted in which of the following?",
choices:["Greater animosity between Great Britain and Spain","A significant decrease in Atlantic coastal populations","Less economic dependency on cotton and tobacco crops","Increased conflict between settlers and American Indian tribes"],
answer:3,
explanation:"Britain's acquisition of former French territory east of the Mississippi opened vast new lands to settlement, bringing colonists into direct conflict with the Native American tribes who had previously allied with France. This resulted in <strong>Pontiac's Rebellion (1763)</strong> and persistent conflicts with tribes throughout the interior, prompting the Proclamation of 1763 to limit colonial expansion."},

{setId:2,topic:"Period 2: Colonial Era",stimulus:null,
question:"The change in territorial boundaries best explains the passage of which of the following?",
choices:["Treaty of Paris, 1763","Currency Act of 1764","Stamp Act of 1765","Articles of Association, 1774"],
answer:2,
explanation:"Britain's new territorial responsibilities required maintaining a large military presence to defend the expanded frontier. Parliament passed the <strong>Stamp Act of 1765</strong> to raise revenue to pay for this defense — the first direct tax on the colonies — which ignited colonial resistance and set the Revolution in motion. The Treaty of Paris (A) preceded and caused the territorial change, not the reverse."},

// ── SET 3 (Q7–10) ── Jackie Robinson Letter, 1958
{setId:3,topic:"Period 8: Post-WWII",source:"Marco Learning",
stimulus:{label:"Jackie Robinson, professional baseball player, letter to President Eisenhower, May 13, 1958",text:"I was sitting in the audience at the Summit Meeting of Negro Leaders yesterday when you said we must have patience. On hearing you say this, I felt like standing up and saying, 'Oh no! Not again.' I respectfully remind you sir, that we have been the most patient of all people. When you said we must have self-respect, I wondered how we could have self-respect and remain patient considering the treatment accorded us through the years. 17 million Negros cannot do as you suggest and wait for the hearts of men to change. We want to enjoy now the rights we feel we are entitled to as Americans. This we cannot do unless we pursue aggressively goals which all other Americans achieved 150 years ago.",attr:"Jackie Robinson, professional baseball player, letter to President Eisenhower, May 13, 1958"},
question:"Robinson's appeal most directly refers to the need for which of the following civil rights goals?",
choices:["Suffrage","Desegregation","Nonviolent protest","Labor rights"],
answer:1,
explanation:"Writing in 1958 — four years after <em>Brown v. Board</em> (1954) had declared school segregation unconstitutional but change remained slow — Robinson's demand to enjoy 'now the rights we feel we are entitled to as Americans' most directly refers to <strong>desegregation</strong>: the immediate end of the separate and unequal treatment embedded in Jim Crow law."},

{setId:3,topic:"Period 8: Post-WWII",stimulus:null,
question:"The ideas expressed by Robinson most directly contributed to which of the following?",
choices:["The Montgomery bus boycott","The Supreme Court decision in Brown v. Board of Education","Passage of the Civil Rights Act of 1964","The civil rights campaign led by Martin Luther King Jr."],
answer:2,
explanation:"Robinson's letter was written in 1958, <em>after</em> the Montgomery Bus Boycott (1955–56) and Brown (1954), so it could not have contributed to those. His public advocacy — as the first Black Major League player and a nationally prominent figure — helped build the political momentum and mainstream white support that ultimately produced the <strong>Civil Rights Act of 1964</strong>."},

{setId:3,topic:"Period 8: Post-WWII",stimulus:null,
question:"Which of the following groups most strongly opposed Robinson's point of view?",
choices:["Southern Democrats","Northern Republicans","Congress of Racial Equality","Student Nonviolent Coordinating Committee"],
answer:0,
explanation:"<strong>Southern Democrats</strong> (Dixiecrats) were the primary political opponents of civil rights in 1958, using Senate filibusters and state laws to maintain segregation. Groups like CORE (C) and SNCC (D) actively supported Robinson's position. Northern Republicans, while not universally supportive, were not the primary opposition."},

{setId:3,topic:"Period 9: Civil Rights Era",stimulus:null,
question:"The argument delineated by Robinson regarding rights of citizens most directly influenced which of the following in the late twentieth century?",
choices:["The legalization of abortion","The expansion of LGBT rights","Superfund legislation","The decline of unions"],
answer:1,
explanation:"Robinson's core argument — that all citizens possess inherent rights that cannot be denied because of who they are — provided the most direct template for <strong>LGBT rights movements</strong> in the late twentieth century, which used the same natural rights language and constitutional equal protection arguments to demand legal equality."},

// ── SET 4 (Q11–13) ── Lewis Hine Child Labor Photo
{setId:4,topic:"Period 7: Progressive Era",source:"Marco Learning",
stimulus:{label:"Photograph by Lewis Wickes Hine, c. 1908 — child mill worker in textile factory",text:"A photograph showing a young girl, approximately 8–10 years old, standing at textile machinery in a cotton mill. She is barefoot, wearing a simple dress, and dwarfed by the industrial machinery surrounding her. The photograph was part of Hine's documentary work for the National Child Labor Committee, used to expose and ultimately end child labor in American industry.",attr:"Lewis Wickes Hine, photographer, c. 1908. Courtesy of Library of Congress LC-DIG-nclc-01824",visual:true,imageKey:"marco_q11_child_labor",imageType:"documentary photograph"},
question:"Images that focused on conditions like these directly influenced which of the following?",
choices:["Greater participation by factory workers in labor unions","Increased lobbying for national child labor laws","Decreased production at American textile mills","Fewer international markets for American cotton products"],
answer:1,
explanation:"Lewis Hine's photographs were commissioned specifically by the <strong>National Child Labor Committee</strong> to document and publicize the exploitation of child workers. His images directly fueled lobbying that resulted in the Keating-Owen Child Labor Act (1916) and ultimately the Fair Labor Standards Act (1938), which set federal minimum ages for employment."},

{setId:4,topic:"Period 7: Progressive Era",stimulus:null,
question:"The situation depicted in this image illustrates which of the following trends in late-nineteenth-century America?",
choices:["The transition from slave labor to child labor in the American cotton industry","The waning economic value of cotton products manufactured in America","The rise of the Populist Party in American agrarian communities","The increasing influence of Progressive politics and labor reform movements"],
answer:3,
explanation:"The documentary photography movement exemplified by Lewis Hine's work was a signature strategy of the <strong>Progressive Era</strong>. By making the hidden suffering of child workers visible to middle-class Americans, muckraking photographers and journalists created public pressure for labor reform — one of the defining features of Progressive politics (1890s–1920s)."},

{setId:4,topic:"Period 7: Progressive Era",stimulus:null,
question:"Those who supported individuals like the young girl in this photo would likely have also supported which of the following ideas?",
choices:["Workers have the right to organize and campaign for better wages and working conditions.","Government should regulate food production, as outlined in the Federal Meat Inspection Act.","Segregation, as upheld by the Supreme Court in Plessy v. Ferguson, should be maintained.","The United States government has the right of control over lands that benefit the United States economy, including the Panama Canal."],
answer:0,
explanation:"Progressive reformers who advocated for child labor protections operated within a broader worldview that <strong>workers have fundamental rights</strong> that government must protect against exploitative employers. They would have supported labor organizing — the same movement that pushed for shorter hours, workplace safety, and minimum wages alongside child labor abolition."},

// ── SET 5 (Q14–16) ── John Locke, 1690
{setId:5,topic:"Period 2: Colonial Era",source:"Marco Learning",
stimulus:{label:"John Locke, philosopher, Of the State of Nature, 1690",text:"To understand political power right, and derive it from its original, we must consider, what state all men are naturally in, and that is, a state of perfect freedom to order their actions, and dispose of their possessions and persons, as they think fit, within the bounds of the law of nature, without asking leave, or depending upon the will of any other man.",attr:"John Locke, Of the State of Nature, 1690"},
question:"The excerpt was written to refute which of the following seventeenth-century political practices?",
choices:["Hereditary monarchs","Colonization of the New World","Protestant Reformation","Republican governments"],
answer:0,
explanation:"Locke's argument that all men are naturally free — 'without asking leave, or depending upon the will of any other man' — directly refuted the doctrine of <strong>hereditary monarchy</strong> and divine right, which held that kings ruled by God's authority and subjects were born into obedience. This was the dominant political institution Locke was challenging."},

{setId:5,topic:"Period 3: American Revolution",stimulus:null,
question:"Locke's ideas most directly influenced which of the following key rights delineated in the Declaration of Independence?",
choices:["Consent of the governed","All men are created equal","Mankind are more disposed to suffer","Right to life, liberty, and the pursuit of happiness"],
answer:3,
explanation:"Locke's natural rights theory held that all men possess natural rights to <strong>life, liberty, and property</strong>. Jefferson directly borrowed this framework for the Declaration, substituting 'pursuit of happiness' for 'property.' The phrase in option A (consent of the governed) is also Lockean, but D most directly corresponds to Locke's specific enumeration of natural rights."},

{setId:5,topic:"Period 9: Civil Rights Era",stimulus:null,
question:"Which legislative action in twentieth-century American politics reflects a continuation of the ideas expressed in this excerpt?",
choices:["Federal Income Tax Amendment","Prohibition Amendment","Civil Rights Act of 1964","Bilingual Education Act"],
answer:2,
explanation:"Locke's core argument — that all men possess natural freedom 'without depending upon the will of any other man' — is directly continued by the <strong>Civil Rights Act of 1964</strong>, which prohibited discrimination that denied Black Americans the ability to order their own lives freely. The income tax (A) and Prohibition (B) actually restricted freedoms rather than expanded them."},

// ── SET 6 (Q17–18) ── King Andrew Cartoon, 1833
{setId:6,topic:"Period 4: Jacksonian Era",source:"Marco Learning",
stimulus:{label:"'King Andrew the First' — political cartoon, 1833",text:"A political cartoon depicting President Andrew Jackson dressed in royal robes and a crown, holding a scepter and a document labeled 'VETO.' He stands atop documents including the 'Constitution' and 'Internal Improvements.' Text at the top reads 'BORN TO COMMAND.' The cartoon was produced by Jackson's Whig opponents to criticize his aggressive use of executive power, particularly his veto of the Second Bank of the United States recharter (1832) and his threat to use force against South Carolina during the Nullification Crisis.",attr:"Political cartoon, 'King Andrew the First,' 1833. Courtesy of the Library of Congress, LC-DIG-ppmsca-15771",visual:true,imageKey:"marco_q17_king_andrew",imageType:"political cartoon"},
question:"This image most directly reflects which of the following?",
choices:["The emergence of a constitutional monarchy in the United States","The expansion of the executive branch through the powers of veto and executive order","The limitations of the Constitution to preserve and protect the Second Bank of the United States against corruption","The decreasing power of the legislative branch to make laws regarding the economy"],
answer:1,
explanation:"The cartoon directly criticizes Jackson's <strong>expansion of executive power</strong> — particularly his unprecedented use of the veto (used more times than all previous presidents combined) and his unilateral actions during the Bank War and Nullification Crisis. His Whig opponents depicted him as a king to argue he had dangerously overreached constitutional limits on presidential authority."},

{setId:6,topic:"Period 9: Cold War Era",stimulus:null,
question:"Which of the following provides a later example of the continuation of the conflict represented in this image?",
choices:["President Truman's use of executive authority to deploy United States troops against North Korea","President Truman's development of the Truman Doctrine to shape foreign policy","President Ford's official pardon of President Nixon in 1974","President Eisenhower's dispatch of federal troops to Little Rock"],
answer:0,
explanation:"<strong>Truman's unilateral commitment of U.S. troops to Korea (1950)</strong> without a formal congressional declaration of war is the closest parallel to Jackson's expansive use of executive authority. Truman acted under his commander-in-chief powers alone — the same type of executive overreach the cartoon depicts. Congress protested but did not stop him, just as Jackson's opponents failed despite their cartoon campaigns."},

// ── SET 7 (Q19–21) ── Jefferson Letter to Congress, 1803
{setId:7,topic:"Period 4: Jeffersonian Era",source:"Marco Learning",
stimulus:{label:"Thomas Jefferson, Letter to Congress, January 18, 1803",text:"The Indian tribes residing within the limits of the United States, have, for a considerable time, been growing more and more uneasy at the constant diminution of the territory they occupy, although effected by their own voluntary sales: and the policy has long been gaining strength with them, of refusing absolutely all further sale, on any conditions... In order peaceably to counteract this policy of theirs, and to provide an extension of territory which the rapid increase of our numbers will call for, two measures are deemed expedient. First: to encourage them to abandon hunting, to apply to the raising stock, to agriculture and domestic manufacture, and thereby prove to themselves that less land and labor will maintain them in this, better than in their former mode of living. The extensive forests necessary in the hunting life, will then become useless, and they will see advantage in exchanging them for the means of improving their farms.",attr:"Thomas Jefferson, Letter to Congress, January 18, 1803"},
question:"Jefferson's ideas regarding American Indian tribal attitudes toward white settlers reflects which prevailing belief about territorial expansion?",
choices:["American Indians should be compensated for any land acquired by the United States government that is considered a tribal territory.","Expansion of United States territory should not come at the expense of American Indian tribes, and white settlers should respect tribal boundaries.","American Indian tribes should be relocated from tribal territories to make room for white settlers in newly acquired territories.","Expansion of United States territory will lead to increased cooperation and trade with American Indian tribes."],
answer:2,
explanation:"Jefferson's 'civilizing' plan — pressuring tribes to abandon hunting, rendering their forests 'useless,' and making them willing to sell their land — was a calculated strategy to <strong>relocate Native peoples</strong> from their territories to make room for white settlement. This policy of cultural assimilation-as-displacement directly foreshadowed the Indian Removal Act (1830)."},

{setId:7,topic:"Period 4: Jeffersonian Era",stimulus:null,
question:"Jefferson envisioned that his plan for the lands west of the Mississippi would result in which of the following?",
choices:["A decrease in American dependence on overseas imports","An increase in American agricultural production and export","An expansion of interstate highways and water routes","A decline in American manufacturing and trade"],
answer:1,
explanation:"Jefferson's vision was fundamentally agrarian — he believed the republic's health depended on independent farmers working the land. His plan for western lands centered on converting Native territories into American farms, which would <strong>increase agricultural production and export</strong>, reinforcing the agrarian ideal of a nation of yeoman farmers."},

{setId:7,topic:"Period 4: Jeffersonian Era",stimulus:null,
question:"The beliefs expressed in this excerpt regarding American economic opportunity differ from the prevailing beliefs of the Federalists in which way?",
choices:["The Federalists believed in an economic system that was centered around a national bank and increased industry.","The Federalists wanted to cultivate the lands west of the Mississippi River to build an economy centered around agricultural production.","The Federalists sought to expand trade with American Indian tribes to be less financially dependent on foreign powers.","The Federalists hoped to secure trade routes west of the Mississippi River to increase exports to France and Spain."],
answer:0,
explanation:"Jefferson (Democratic-Republican) championed an agricultural republic of independent farmers. The <strong>Federalists</strong> — led by Hamilton — believed in a commercial and industrial economy centered on a <strong>national bank, manufacturing, and urban trade</strong>. This fundamental disagreement about economic vision was the core of the first American party conflict."},

// ── SET 8 (Q22–24) ── Immigration Graph
{setId:8,topic:"Period 6: Gilded Age",source:"Marco Learning",
stimulus:{label:"Graph — Foreign-Born Population and Percentage of Total Population for the United States: 1850 to 2010",text:"A bar and line graph showing: foreign-born population (bars) rising from 2.2 million in 1850 to a peak of 14.8 million in 1890, then declining to a low of 9.7 million in 1970, before rising sharply to 40.0 million in 2010. The percentage of total population (line) follows a similar pattern, peaking around 14–15% in the 1890s, declining through the mid-twentieth century, and rising again to 12.9% in 2010.",attr:"Courtesy of the U.S. Census Bureau"},
question:"Which of the following was a primary contributor to the trend shown from 1850 to 1890 in the graph?",
choices:["Financial incentives offered by the United States government to entice migrants to populate the West","Political and economic upheavals in Western Europe and Southeast Asia","Emerging transportation innovations that made immigration easier and more affordable","Increased industrial progress and the need for workers to manufacture products in the United States"],
answer:2,
explanation:"While multiple factors contributed, <strong>transportation innovations</strong> — particularly the shift from sail to steam (reducing Atlantic crossing from weeks to 10 days) and falling ticket prices — were the enabling factor throughout the entire 1850–1890 period. Without affordable, reliable steamship travel, even those with strong push factors could not emigrate in the numbers shown."},

{setId:8,topic:"Period 6: Gilded Age",stimulus:null,
question:"The information represented in the graph from 1860 to 1890 contributed most significantly to which of the following cultural changes?",
choices:["Increased segregation in the South with the legalization of Jim Crow laws through Plessy v. Ferguson","Deportation of American Indians from the Southeast to Oklahoma through the Indian Removal Act","Emergence of literary realism with works like The Adventures of Huckleberry Finn and the introduction of American jazz music","Growth of social reform movements like the Temperance Movement, the Salvation Army, and Hull House"],
answer:3,
explanation:"The wave of immigration between 1860 and 1890 concentrated poor immigrants in urban slums — creating exactly the poverty, vice, and social dysfunction that galvanized Progressive-era reformers. Jane Addams's <strong>Hull House</strong>, the <strong>Salvation Army</strong>, and the <strong>Temperance Movement</strong> all arose directly in response to the social conditions created by this rapid urban immigration."},

{setId:8,topic:"Period 6: Gilded Age",stimulus:null,
question:"The change in data represented in the graph from 1860 to 1880 most directly influenced which of the following trends?",
choices:["Increased suburban migration and the development of intercity transportation to ferry workers from the suburbs to the city","Passage of the Dawes Act to dismantle tribal governments and open new lands for increasing numbers of white settlers","Increased agricultural production in the South and decreased dependence on industrialization for economic growth","Passage of the Civil Rights Act of 1875, which prohibited discrimination based on race in public places like hotels and railroads"],
answer:1,
explanation:"The population surge from immigration (4.1M to 6.7M foreign-born, 1860–1880) created intense pressure for new western agricultural land. This contributed directly to federal Indian policy — the <strong>Dawes Severalty Act (1887)</strong> broke up tribal communal lands into individual allotments, opening 'surplus' tribal lands to white settlers."},

// ── SET 9 (Q25–28) ── Phillis Wheatley, 1773
{setId:9,topic:"Period 3: American Revolution",source:"Marco Learning",
stimulus:{label:"Phillis Wheatley, poet, To the Right and Honorable William, Earl of Dartmouth, 1773",text:"No more, America, in mournful strain / Of wrongs, and grievance unredressed complain, / No longer shalt thou dread the iron chain, / Which wanton Tyranny with lawless hand / Had made, and with it meant to enslave the land. / Should you, my lord, while you peruse my song, / Wonder from whence my love of Freedom sprung, / Whence flow these wishes for the common good, / By feeling hearts alone best understood, / I, young in life, by seeming cruel fate / Was snatched from Africa's fancied happy seat... / Such, such my case. And can I then but pray / Others may never feel tyrannical sway?",attr:"Phillis Wheatley, To the Right and Honorable William, Earl of Dartmouth, 1773"},
question:"The comparison established in this excerpt most directly supports the development of which of the following ideas?",
choices:["American independence","Manifest Destiny","Religious freedom","Capitalism"],
answer:0,
explanation:"Wheatley draws a deliberate parallel between America's struggle against British 'tyranny' and her own enslavement — arguing that if tyranny is wrong when imposed on Americans by Britain, it is equally wrong when imposed on Africans by Americans. This parallel most directly supports the cause of <strong>American independence</strong> while simultaneously exposing its contradiction with slavery."},

{setId:9,topic:"Period 5: Antebellum",stimulus:null,
question:"Wheatley's experiences and expression of ideas would most directly impact which movements in the late nineteenth century?",
choices:["Labor reform and child welfare","Civil rights and women's suffrage","Social Gospel and temperance","Conservation and environmentalism"],
answer:1,
explanation:"Wheatley's poem — written by an enslaved Black woman demanding universal freedom — became a foundational text in American abolitionist and women's rights traditions. Her work directly foreshadowed <strong>civil rights and women's suffrage movements</strong> that used the same natural rights arguments: if freedom is a universal human birthright, it cannot be denied based on race or sex."},

{setId:9,topic:"Period 3: American Revolution",stimulus:null,
question:"Which of the following amendments to the Constitution most directly refuted the ideas expressed in Wheatley's excerpt?",
choices:["Voting laws that tied suffrage to race, gender, and property rights","Right of citizens to maintain an organized militia and to bear arms","Inability of states to administer formal treaties with foreign powers","Freedom of religion, speech, assembly, and the press"],
answer:0,
explanation:"Wheatley's poem argues for universal freedom from tyranny. Constitutional provisions that <strong>tied voting and rights to race, gender, and property</strong> directly contradicted this by maintaining the very inequality Wheatley protested — denying freedom to women and people of color despite the founding generation's universal-sounding rhetoric."},

{setId:9,topic:"Period 3: American Revolution",stimulus:null,
question:"The ideas expressed in Wheatley's poem most directly reflect a national political debate regarding which of the following?",
choices:["Establishment of a national bank","Interstate commerce controlled by the Federal government","Participation in the trans-Atlantic slave trade","Limits of the presidential term of office"],
answer:2,
explanation:"Wheatley's poem — written by a formerly enslaved African woman — most directly reflects the contradiction at the heart of the Revolutionary era: Americans claiming universal freedom while participating in the <strong>trans-Atlantic slave trade</strong>. The debate about slavery's compatibility with republican ideals was the central unresolved tension of the founding generation."},

// ── SET 10 (Q29–30) ── Dred Scott, 1857
{setId:10,topic:"Period 5: Civil War Era",source:"Marco Learning",
stimulus:{label:"United States Supreme Court, Dred Scott v. John F.A. Sanford, March 6, 1857",text:"The Constitution has conferred on Congress the right to establish an uniform rule of naturalization, and this right is evidently exclusive, and has always been held by this court to be so. Consequently, no State, since the adoption of the Constitution, can, by naturalizing an alien, invest him with the rights and privileges secured to a citizen of a State under the Federal Government... And, for the same reason, it cannot introduce any person or description of persons who were not intended to be embraced in this new political family which the Constitution brought into existence, but were intended to be excluded from it.",attr:"United States Supreme Court, Dred Scott v. John F. A. Sanford, March 6, 1857"},
question:"Which of the following was the most immediate impact of the decision outlined in this excerpt?",
choices:["Democrats and Republicans began a war of words in the nation's papers regarding the decision.","Abolitionist groups gained supporters, and John Brown organized a raid on Harpers Ferry to encourage a slave rebellion.","Southern politicians began formulating a plan of secession to leave the Union and form the Confederate States of America.","The Missouri Compromise of 1820 was deemed unconstitutional and slavery could expand to free territories."],
answer:3,
explanation:"The most <strong>immediate</strong> legal impact of Dred Scott was Chief Justice Taney's declaration that Congress had never had the authority to restrict slavery in the territories — rendering the <strong>Missouri Compromise of 1820 unconstitutional</strong> and opening all territories to slavery. This was the direct, immediate holding of the case. John Brown's raid (B) came two years later in 1859."},

{setId:10,topic:"Period 5: Reconstruction",stimulus:null,
question:"The decision in the Dred Scott case was directly overturned by which post–Civil War amendments?",
choices:["The Twelfth and Thirteenth Amendments","The Thirteenth and Fourteenth Amendments","The Fifteenth and Sixteenth Amendments","The Sixteenth and Seventeenth Amendments"],
answer:1,
explanation:"The <strong>Thirteenth Amendment (1865)</strong> abolished slavery, directly contradicting Taney's holding that enslaved people were property. The <strong>Fourteenth Amendment (1868)</strong> granted citizenship to all persons born in the United States — explicitly overturning Dred Scott's declaration that Black Americans 'had no rights which the white man was bound to respect.'"},

// ── SET 11 (Q31–32) ── Mayflower Women, 1920
{setId:11,topic:"Period 2: Colonial Era",source:"Marco Learning",
stimulus:{label:"Annie Russell Marble, The Women Who Came in the Mayflower, 1920",text:"It would be unjust to assume that these women were conscious heroines. They wrought with courage and purpose equal to these traits in the men, but probably none of the Pilgrims had a definite vision of the future. With words of appreciation that are applicable to both sexes, ex-President Charles W. Eliot has said: 'The Pilgrims did not know the issue and they had no vision of it. They just loved liberty and toleration and truth, and hoped for more of it, for more liberty, for a more perfect toleration, for more truth, and they put their lives, their labors, at the disposition of those loves without the least vision of this republic, or of what was going to come out of their industry, their devotion, their dangerous and exposed lives.'",attr:"Annie Russell Marble, The Women Who Came in the Mayflower, 1920"},
question:"The excerpt suggests an alternative perspective for early British migration to North America that most sharply contrasts with which of the following popular ideas?",
choices:["Early British colonists wanted to establish a Christian community that would serve as a model for the rest of the world.","Early British colonists came to North America to escape religious persecution and practice their faith quietly and inconspicuously.","Early British colonists sought political stability, wealth, and freedom from social caste systems.","Early British colonists cultivated relationships with American Indian tribes for the sole purpose of religious conversion."],
answer:0,
explanation:"Marble's excerpt argues the Pilgrims 'had no vision of it' — they had no grand plan. This directly contrasts with the popular narrative (derived from Winthrop's 'city upon a hill' sermon) that Puritan colonists had a <strong>deliberate mission to establish a model Christian community</strong> for the world to imitate. Marble humanizes them as people motivated by personal values, not providential destiny."},

{setId:11,topic:"Period 3: American Revolution",stimulus:null,
question:"In which way did Puritan religious beliefs most directly influence the decisions of the United States founders in framing the Constitution?",
choices:["Belief in a monotheistic God influenced the decision to have a sole figurehead represent the United States to the world in the form of president.","The Christian doctrine of salvation led to the implementation of a legal system based on judicial review.","The desire of the Puritans to worship free from government influence was expressed in the legal separation of church and state.","A focus on acts of mercy and charity developed into the establishment of laws that maintained the well-being of citizens."],
answer:2,
explanation:"The most direct line from Puritan experience to constitutional design runs through religious freedom. The Puritans came to America partly to escape the Church of England's governmental control of religion — this experience of <strong>government interference in worship</strong> directly shaped the First Amendment's Establishment Clause, prohibiting government establishment of religion."},

// ── SET 12 (Q33–35) ── Transcontinental Railroad Cartoon, 1869
{setId:12,topic:"Period 6: Gilded Age",source:"Marco Learning",
stimulus:{label:"'Does Not Such a Meeting Make Amends?' — Frank Beard, Frank Leslie's Illustrated Newspaper, May 29, 1869",text:"A political cartoon from May 29, 1869, depicting two locomotive trains facing each other with outstretched human hands meeting in a handshake at the center. One train is labeled 'SAN FRANCISCO' and the other 'NEW YORK.' The image celebrates the completion of the first transcontinental railroad at Promontory Summit, Utah on May 10, 1869.",attr:"Frank Beard, Frank Leslie's Illustrated Newspaper, May 29, 1869. Courtesy of the Library of Congress, 2002720304",visual:true,imageKey:"marco_q33_railroad",imageType:"political cartoon / newspaper illustration"},
question:"The image most directly reflects which of the following?",
choices:["The increasing diversity of American citizens","The reunification of the nation around a central goal","The rising sense of national unity that occurred after the Civil War","The growing animosity between former slaves and American Indians"],
answer:1,
explanation:"The cartoon — showing San Francisco and New York trains meeting in a symbolic handshake — most directly reflects <strong>the reunification of the nation around the common goal</strong> of continental connection. The transcontinental railroad (completed 1869) was framed as a national achievement that stitched together a country still healing from the Civil War."},

{setId:12,topic:"Period 6: Gilded Age",stimulus:null,
question:"The event showcased in the image most directly resulted in which of the following trends?",
choices:["Increasing immigration to the western states as railroads offered steady and relatively unskilled employment opportunities","Increased mobility for American citizens that resulted in the Great Migration to northern cities","Violent conflicts between American Indians and the United States government that resulted in a decline in American Indian populations","New forms of communication that resulted in a faster sharing of news and greater political participation by citizens"],
answer:2,
explanation:"The transcontinental railroad's most historically significant direct result was opening the Great Plains and West to mass white settlement, which <strong>destroyed the remaining buffalo herds</strong> (the foundation of Plains Indian economies) and brought the U.S. Army into sustained conflict with Native tribes. The Indian Wars of the 1860s–1890s and the decimation of Native populations directly followed the railroad's completion."},

{setId:12,topic:"Period 4: Antebellum / Period 6: Gilded Age",stimulus:null,
question:"The ideas depicted in the illustration most directly reflect which of the following concepts?",
choices:["American exceptionalism","Government support for industry","American isolationism","Manifest Destiny"],
answer:3,
explanation:"The transcontinental railroad as the literal iron fulfillment of continental connection is the definitive material expression of <strong>Manifest Destiny</strong> — the belief that American civilization was destined to stretch from Atlantic to Pacific. The railroad completed what the ideology had promised, physically realizing the continental nation across territory seized from Mexico and indigenous peoples."},

// ── SET 13 (Q36–37) ── Haymarket Affair, 1886
{setId:13,topic:"Period 6: Gilded Age",source:"Marco Learning",
stimulus:{label:"'The Anarchist Riot in Chicago — A Dynamite Bomb Exploded Among the Police' — Harper's Weekly, 1886",text:"An illustration from Harper's Weekly depicting the Haymarket Affair of May 4, 1886, in Chicago. The scene shows police officers falling amid an explosion in the foreground, while a crowd of workers and a man throwing a bomb are visible. The caption identifies the event as an anarchist riot. The image portrays the labor demonstrators as violent and chaotic, emphasizing the bomb explosion and fallen police officers.",attr:"Harper's Weekly illustration, 1886. Courtesy of the Library of Congress, 99614182",visual:true,imageKey:"marco_q36_haymarket",imageType:"newspaper illustration"},
question:"What is most likely the purpose of this image?",
choices:["To discredit labor unions by characterizing their members as violent anarchists","To build sympathy for working class citizens by illustrating their economic plight","To honor police officers by showing their fortitude and order during a dangerous situation","To highlight the dangers of urbanization and encourage citizens to move to the suburbs"],
answer:0,
explanation:"Harper's Weekly was a mainstream illustrated newspaper that generally reflected middle-class, anti-labor perspectives. This image — emphasizing the bomb, the chaos, and labeling the workers 'anarchists' — was designed to <strong>discredit the labor movement</strong> by associating all union activity with violence and radicalism. The Haymarket Affair set back the labor movement for years by creating this exact association."},

{setId:13,topic:"Period 6: Gilded Age",stimulus:null,
question:"Which of the following was a major contrast between labor unions as depicted in the image and farm movements like the Grange?",
choices:["The public was more sympathetic to the plights of farmers than to the plights of laborers.","Farm movements spread rapidly across the country given the high proportion of the population engaged in farming, while labor unions struggled to spread outside of major urban centers.","Labor unions had less economic power than farm movements because union members were from poorer classes.","The goal of the farm movement was to decrease exports, while the goal of the labor movement was to increase imports."],
answer:0,
explanation:"Images like this Haymarket illustration successfully framed urban labor unions as dangerous and foreign, while farm movements (the Grange, Farmers' Alliance) were seen as authentically American yeomen. <strong>Public sympathy consistently favored farmers</strong> — widely romanticized as the backbone of the republic — over industrial workers, who were easier to portray as foreign radicals threatening social order."},

// ── SET 14 (Q38–41) ── Du Bois at Harpers Ferry, 1906
{setId:14,topic:"Period 7: Progressive Era",source:"Marco Learning",
stimulus:{label:"W. E. B. Du Bois, American civil rights activist, Speech Given at Harpers Ferry, 1906",text:"In the past year the work of the Negro hater has flourished in the land. Step by step the defenders of the rights of American citizens have retreated. The work of stealing the black man's ballot has progressed and fifty and more representatives of stolen votes still sit in the nation's capital. Discrimination in travel and public accommodation has so spread that some of our weaker brethren are actually afraid to thunder against color discrimination as such and are simply whispering for ordinary decencies. Against this the Niagara Movement eternally protests. We will not be satisfied to take one jot or tittle less than our full manhood rights. We claim for ourselves every single right that belongs to a freeborn American, political, civil, and social; and until we get these rights we will never cease to protest and assail the ears of America.",attr:"W. E. B. Du Bois, Speech Given at Harpers Ferry, 1906"},
question:"This excerpt was written in direct response to which of the following?",
choices:["The effects of the legalization of segregation through Plessy v. Ferguson","Progressive laws mandating United States senators be elected through popular vote","Voter laws legalizing poll taxes and literacy tests to disenfranchise black voters","The growing economic disparity between laborers, farmers, and corporate leaders"],
answer:0,
explanation:"Du Bois's Niagara Movement (1905) was founded explicitly as a rejection of Booker T. Washington's accommodationist response to <strong>Plessy v. Ferguson (1896)</strong> and the entire Jim Crow system it legitimized. The speech denounces discrimination in travel and public accommodation (directly addressing Plessy's 'separate but equal' doctrine) and the theft of political rights."},

{setId:14,topic:"Period 7: Progressive Era",stimulus:null,
question:"Historians would most likely use the information presented in this excerpt to support which of the following claims?",
choices:["Reformers during the Progressive Era championed voting rights for African Americans.","The Niagara Movement marked the beginning of the modern civil rights movement.","W. E. B. Du Bois worked to extend John Brown's legacy by speaking at Harpers Ferry.","The efforts of civil rights activists were weakened by United States involvement in World War I."],
answer:1,
explanation:"Historians consistently cite the Niagara Movement (1905–1910), which led directly to the founding of the NAACP (1909), as the institutional beginning of the <strong>modern civil rights movement</strong>. Du Bois's speech — with its demand for 'every single right that belongs to a freeborn American' — provided the philosophical framework that the movement would carry for the next six decades."},

{setId:14,topic:"Period 7: Progressive Era",stimulus:null,
question:"Which of the following Progressive Era ideas most directly contrasts Du Bois's argument in this excerpt?",
choices:["Educational and economic growth comes before social and political change.","Political and social reform is a prerequisite for gaining economic opportunity.","Voting is a fundamental right that should be granted to all citizens.","American idealism cannot be spread throughout the world if not practiced by citizens."],
answer:0,
explanation:"Booker T. Washington's <strong>Atlanta Compromise</strong> (1895) argued that Black Americans should accept temporary political and social inequality and focus on economic self-sufficiency and vocational education — 'educational and economic growth comes before social and political change.' Du Bois's speech directly attacks this approach, demanding immediate full civil and political rights."},

{setId:14,topic:"Period 8: WWII Era",stimulus:null,
question:"Which international event most contributed to the continuation of ideas expressed in Du Bois's excerpt?",
choices:["World War I","World War II","Korean War","Cuban Missile Crisis"],
answer:1,
explanation:"<strong>World War II</strong> most directly continued Du Bois's argument through the 'Double V' campaign — Black Americans demanded victory against fascism abroad AND against racism at home. The irony of Black soldiers fighting for freedom while experiencing segregation at home, and the Cold War's need for American racial credibility, created the political conditions that finally forced federal action on civil rights in the 1950s–60s."},

// ── SET 15 (Q42–43) ── Elizabeth Cady Stanton, 1892
{setId:15,topic:"Period 6: Gilded Age / Progressive Era",source:"Marco Learning",
stimulus:{label:"Elizabeth Cady Stanton, women's rights activist, Solitude of Self, January 18, 1892",text:"The strongest reason for giving woman all the opportunities for higher education, for the full development of her faculties, forces of mind and body; for giving her the most enlarged freedom of thought and action; a complete emancipation from all forms of bondage, of custom, dependence, superstition; from all the crippling influences of fear, is the solitude and personal responsibility of her own individual life. The strongest reason why we ask for woman a voice in the government under which she lives; in the religion she is asked to believe; equality in social life, where she is the chief factor; a place in the trades and professions, where she may earn her bread, is because of her birthright to self-sovereignty; because, as an individual, she must rely on herself.",attr:"Elizabeth Cady Stanton, Solitude of Self, January 18, 1892"},
question:"Stanton's claim that a woman should be given equal opportunities 'because of her birthright to self-sovereignty' was most directly reflected in which of the following?",
choices:["Roe v. Wade","Title IX","Affirmative action","Nineteenth Amendment"],
answer:3,
explanation:"Stanton's central argument — that women possess 'self-sovereignty' as individuals and therefore deserve 'a voice in the government under which she lives' — most directly found its constitutional expression in the <strong>Nineteenth Amendment (1920)</strong>, which granted women the right to vote. Stanton had been demanding this since the Seneca Falls Convention (1848)."},

{setId:15,topic:"Period 6: Gilded Age",stimulus:null,
question:"The ideas expressed in Stanton's excerpt most directly resulted in which of the following during the late nineteenth century?",
choices:["Emergence of women pursuing work in the fields of social science and home economics","Increased number of women obtaining graduate degrees from predominately male universities","Decreased number of women participating in manufacturing jobs and joining labor unions","Waning support for higher education among middle and upper class white women"],
answer:0,
explanation:"Stanton's call for women's education and professional opportunity contributed to women entering <strong>social science and home economics</strong> — fields that were seen as appropriately 'feminine' extensions of women's domestic expertise, while also providing a path to public professional life. Jane Addams, Florence Kelley, and other Progressive Era reformers exemplified this pattern."},

// ── SET 16 (Q44–46) ── Reagan Economy Address, 1981
{setId:16,topic:"Period 10: Modern Era",source:"Marco Learning",
stimulus:{label:"President Ronald Reagan, Address to the Nation on the Economy, February 5, 1981",text:"Some say shift the tax burden to business and industry, but business doesn't pay taxes. Oh, don't get the wrong idea. Business is being taxed, so much so that we're being priced out of the world market. But business must pass its costs of operations—and that includes taxes—on to the customer in the price of the product. Only people pay taxes, all the taxes. Government just uses business in a kind of sneaky way to help collect the taxes. They're hidden in the price; we aren't aware of how much tax we actually pay.",attr:"President Ronald Reagan, Address to the Nation on the Economy, February 5, 1981"},
question:"Reagan's address was delivered as a direct result of which of the following?",
choices:["Release of American hostages in Iran","High inflation and double-digit unemployment","Stock market crash and movement to recession","Decreasing participation in labor unions"],
answer:1,
explanation:"Reagan took office in January 1981 amid the 'stagflation' of the Carter years — the combination of <strong>high inflation (around 13%) and rising unemployment</strong> that seemed to defy traditional economic fixes. This address launched Reagan's supply-side economic program (tax cuts, deregulation) as his solution to the economic crisis."},

{setId:16,topic:"Period 10: Modern Era",stimulus:null,
question:"Reagan's tax initiatives, outlined in this excerpt, most directly resulted in which of the following trends?",
choices:["An increase in money supply as a result of lower tax obligations","Deregulation in industry that negatively impacted the environment","A growing middle class and service industry to support them","Lower unemployment rates and an increase in manufacturing"],
answer:0,
explanation:"Reagan's supply-side argument — that high taxes are 'hidden in the price' — justified the Economic Recovery Tax Act of 1981, which dramatically cut individual and corporate tax rates. The most <strong>direct and immediate result was an increase in disposable income</strong> through lower tax obligations, putting more money in private hands (though critics noted it disproportionately benefited the wealthy)."},

{setId:16,topic:"Period 10: Modern Era",stimulus:null,
question:"Which of the following trends, brought about by the policies initiated by Reagan in this excerpt, has continued through the twenty-first century?",
choices:["Low unemployment rates in manufacturing","Decreased value of the American dollar","Increasing disparity between the wealthy and poor","Emergence of a stronger, more diverse middle class"],
answer:2,
explanation:"The Reagan tax cuts reduced the top marginal income tax rate from 70% to 28%, disproportionately benefiting the wealthy. The <strong>growing wealth gap</strong> that accelerated in the 1980s has continued uninterrupted through the twenty-first century — the share of national income going to the top 1% has more than doubled since 1980, making rising inequality the most enduring structural legacy of Reaganomics."},

// ── SET 17 (Q47–48) ── SF Examiner Newspaper, 1942
{setId:17,topic:"Period 8: WWII Era",source:"Marco Learning",
stimulus:{label:"San Francisco Examiner, 1942 — newspaper headline photograph",text:"A photograph showing multiple copies of the San Francisco Examiner newspaper on display at a newsstand. The front page headline in large bold type reads: 'OUSTER OF ALL JAPS IN CALIFORNIA NEAR.' The newspaper is a 6AM Extra edition. The use of the slur in the headline and the framing of Japanese Americans as a threat reflect the wartime anti-Japanese hysteria following the attack on Pearl Harbor.",attr:"San Francisco Examiner, 1942. Courtesy of the Library of Congress, LC-USZ62-17121",visual:true,imageKey:"marco_q47_newspaper",imageType:"documentary photograph of newspaper headlines"},
question:"The ideas captured in this image were most directly influenced by which of the following?",
choices:["Emergence of American nationalism and expansion of populist ideas","Diminished economic growth and the increased political influence of labor unions","Continued support of isolationist policies and the desire to avoid international conflict","Long-held prejudices against Asian immigrants and the attack on Pearl Harbor"],
answer:3,
explanation:"The newspaper's dehumanizing language and demand for expulsion reflect the combination of <strong>pre-existing anti-Asian prejudice</strong> (reinforced by decades of immigration restrictions including the Chinese Exclusion Act and 'Gentlemen's Agreement') with the acute wartime hysteria triggered by <strong>Japan's attack on Pearl Harbor</strong> (December 7, 1941). Neither factor alone would have produced internment — both together did."},

{setId:17,topic:"Period 8: WWII Era",stimulus:null,
question:"Which of the following was the direct result of the ideas captured in this image?",
choices:["Development of the atomic bomb","Relocation of Japanese Americans to internment camps","War bond sales and victory gardens","Increasing number of females in the workforce"],
answer:1,
explanation:"The anti-Japanese sentiment in these headlines directly contributed to political pressure that produced <strong>Executive Order 9066 (February 19, 1942)</strong>, which authorized the forced relocation and incarceration of approximately 120,000 Japanese Americans — two-thirds of whom were U.S. citizens — in internment camps. The Supreme Court upheld the order in Korematsu v. United States (1944)."},

// ── SET 18 (Q49–52) ── Truman Address to Congress, 1947
{setId:18,topic:"Period 9: Cold War Era",source:"Marco Learning",
stimulus:{label:"President Harry Truman, Address Before a Joint Session of Congress, 1947",text:"One way of life is based upon the will of the majority, and is distinguished by free institutions, representative government, free elections, guarantees of individual liberty, freedom of speech and religion, and freedom from political oppression. The second way of life is based upon the will of a minority forcibly imposed upon the majority. It relies upon terror and oppression, a controlled press and radio; fixed elections, and the suppression of personal freedoms.",attr:"President Harry Truman, Address Before a Joint Session of Congress, 1947"},
question:"In this excerpt, Truman's primary goal was which of the following?",
choices:["Contrast Communist totalitarianism with United States democracy","Reestablish the foreign policy practice of American isolationism","Encourage a military conflict with the Soviet Union","Build political momentum for an invasion of the Soviet Union"],
answer:0,
explanation:"Truman explicitly describes two competing 'ways of life' — one (American democracy) defined by freedom, elections, and individual liberty; the other (Soviet communism) by terror, suppression, and forced minority rule. His primary rhetorical goal was to <strong>contrast American democracy with Soviet communism</strong>, creating a moral framework to justify American intervention to support Greece and Turkey."},

{setId:18,topic:"Period 9: Cold War Era",stimulus:null,
question:"The arguments delineated by Truman in this excerpt were used as justification for which of the following actions?",
choices:["Division of Germany into zones","Birth of the German Democratic Republic","Establishment of the United Nations Atomic Energy Commission","Passage of the Marshall Plan to provide aid to Europe after WWII"],
answer:3,
explanation:"The Truman Doctrine's framework — that the U.S. must support 'free peoples resisting attempted subjugation by armed minorities or by outside pressures' — provided the ideological justification for the <strong>Marshall Plan (1948)</strong>, which provided $13 billion in economic aid to rebuild Western European democracies and make them less vulnerable to communist political movements."},

{setId:18,topic:"Period 9: Cold War Era",stimulus:null,
question:"In which way were the ideas in Truman's excerpt inadvertently refuted by the actions of anti-Communist groups in the mid-twentieth century?",
choices:["Anti-Communist groups encouraged tolerance and 'freedom from political oppression.'","Anti-Communist groups encouraged nationalism and 'suppression of personal freedoms.'","Anti-Communist groups encouraged a free press and 'guarantees of personal liberty.'","Anti-Communist groups encouraged isolationism and 'the will of the minority.'"],
answer:1,
explanation:"Truman claimed America stood for 'guarantees of individual liberty, freedom of speech and religion, and freedom from political oppression.' Yet <strong>McCarthyism</strong> — HUAC investigations, blacklists, loyalty oaths, and the persecution of suspected communists — was precisely the 'suppression of personal freedoms' and 'terror and oppression' that Truman attributed to the Soviet system, inadvertently refuting his own moral framework."},

{setId:18,topic:"Period 9: Cold War Era",stimulus:null,
question:"Which of the following was a long-term effect of the United States foreign policy as outlined in the Truman Doctrine?",
choices:["Lagging economic growth due to increased dependence on imports from Europe","Growing agricultural markets due to decreased consumption of European wheat","Long-term economic growth due to favorable trade relationships with Europe","Declining manufacturing jobs due to lack of need for war materials"],
answer:2,
explanation:"The Marshall Plan — justified by the Truman Doctrine framework — successfully rebuilt Western European economies, which became major trading partners for the United States. The resulting <strong>long-term economic growth</strong> benefited both sides: American manufacturing produced the goods Europe needed to rebuild, and a prosperous Western Europe became a permanent market for American exports."},

// ── SET 19 (Q53–55) ── 1860 Slave Population Map
{setId:19,topic:"Period 5: Civil War Era",source:"Marco Learning",
stimulus:{label:"Map Showing the Distribution of the Slave Population of the Southern States, United States Census Bureau, 1861",text:"A shaded map of the Southern United States compiled from the Census of 1860, showing the distribution and density of enslaved people by county. The darkest shading (highest concentration) runs through coastal South Carolina and Georgia, the Mississippi River Delta, the Alabama black belt, and coastal Virginia and North Carolina — the primary cotton and tobacco plantation regions. Lighter shading extends through the Appalachian highlands and Texas frontier.",attr:"Map Showing the Distribution of the Slave Population of the Southern States, U.S. Census Bureau, September 1861. Courtesy of the Library of Congress, 99447026",visual:true,imageKey:"marco_q53_slave_map",imageType:"historical map"},
question:"The map most directly reflects which of the following trends in the mid-nineteenth century?",
choices:["Southern economic growth","Emergence of industrialization","Westward expansion of slavery","Increasing dependency on slave labor"],
answer:3,
explanation:"The map's concentration of enslaved people in the Deep South's agricultural belts (Mississippi Delta, Alabama Black Belt, coastal Carolinas) most directly reflects the Southern economy's <strong>increasing dependency on slave labor</strong> for cotton, tobacco, and rice cultivation. By 1860 the South had 4 million enslaved people — making slavery not a dying institution but the foundation of a booming export economy."},

{setId:19,topic:"Period 5: Civil War Era",stimulus:null,
question:"The growing separation between slave and free areas reflected in this map primarily resulted in which of the following?",
choices:["The Missouri Compromise","Dred Scott v. Sandford","The Great Migration","Kansas-Missouri Border War"],
answer:3,
explanation:"The sharp geographic divide between slave and free territory — particularly the volatile border between slave Missouri and the territories to its west — produced the <strong>Kansas-Missouri Border War ('Bleeding Kansas,' 1854–1861)</strong>, the most direct violent consequence of the slave/free geographic tension visible in this map. The Kansas-Nebraska Act's attempt to resolve this through popular sovereignty instead ignited civil war in miniature."},

{setId:19,topic:"Period 5: Civil War / Reconstruction",stimulus:null,
question:"The pattern of population distribution reflected in the map best explains which of the following?",
choices:["The Texas oil boom in the latter decades of the nineteenth century","The post-war economic decline of the South's agricultural economy","The influx of Irish and Italian immigrants in the late nineteenth century","The growth of the transcontinental railroad and westward migration"],
answer:1,
explanation:"The map reveals the Deep South's total economic dependency on enslaved labor in the plantation belt (the darkest-shaded regions). When emancipation ended this system, the South had <strong>no alternative economic infrastructure</strong> — no significant industry, no diversified agriculture. This explains the <strong>post-war economic collapse</strong>: sharecropping replaced slavery but could not replicate the plantation system's productivity, leaving the South economically depressed for generations."}

]; // end marcoQuestions
