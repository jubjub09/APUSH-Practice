// ═══════════════════════════════════════════════════════════════════
// APUSH FRQ PROMPT BANK
// SAQ · LEQ · DBQ — Official + Marco Learning PT1 + Princeton Review PT6
// Stimulus objects match MCQ format: visual, imageKey, imageType
// ═══════════════════════════════════════════════════════════════════

// ██████████████████████  SAQ PROMPTS  ██████████████████████████████

const saqPrompts = [
{
  type:"SAQ", source:"Marco Learning", year:"Marco Learning Practice Test 1",
  title:"Short-Answer Question 1 — Monroe Doctrine",
  context:"Use the excerpts below and your knowledge of United States history to answer all parts of the following question.",
  stimulus:{
    label:"President Monroe, Address to Congress (Monroe Doctrine), 1823 · Dr. Alejandro Alvarez, The Monroe Doctrine from the Latin-American Point of View, 1917",
    text:"Monroe (1823): 'We should consider any attempt on their part to extend their system to any portion of this hemisphere as dangerous to our peace and safety. With the existing colonies or dependencies of any European power we have not interfered and shall not interfere. But with the Governments who have declared their independence and maintain it, and whose independence we have acknowledged, we could not view any interposition for the purpose of oppressing them by any European power in any other light than as the manifestation of an unfriendly disposition toward the United States.'\n\nAlvarez (1917): 'During the nineteenth century the United States built up alongside of this Doctrine a personal policy, which does not represent the interests of the continent, but quite the reverse; wherefore it inspires fear rather than sympathy in the states of Latin-America. This so-called policy of hegemony consists of intervention by the United States, on behalf of its own interests, in the domestic affairs of certain states of Latin-America.'",
    attr:"Monroe, 1823; Alvarez, The Monroe Doctrine from the Latin-American Point of View, 1917"
  },
  parts:[
    "Briefly describe ONE major difference between Monroe's and Alvarez's historical arguments regarding United States foreign policy.",
    "Briefly explain how ONE specific historical event or development from the period 1800 to 1848 not explicitly mentioned in the excerpts could be used to support Monroe's argument.",
    "Briefly explain how ONE specific historical event or development from the period 1800 to 1848 not explicitly mentioned in the excerpts could be used to support Alvarez's argument."
  ],
  rubric:{total:3,sections:[
    {title:"Part A — One Point",rows:[{pts:1,desc:"Identifies a specific difference — Monroe frames the Doctrine as defensive and protective of newly independent Latin American nations from European re-colonization; Alvarez argues the Doctrine was reinterpreted to justify U.S. intervention in Latin America's domestic affairs for its own economic and strategic benefit — turning a protective principle into a tool of hegemony."}]},
    {title:"Part B — One Point",rows:[{pts:1,desc:"Any development supporting Monroe — e.g., U.S. recognition of Latin American independence movements (1822); U.S. opposition to European intervention in newly independent republics; American support for Greek independence movement; Jay's Treaty context showing U.S. desire to avoid European entanglement."}]},
    {title:"Part C — One Point",rows:[{pts:1,desc:"Any development supporting Alvarez — e.g., Texas annexation (1845) showing U.S. expansion at Mexico's expense; Mexican-American War (1846–48) and territorial acquisition; U.S. trade relationships economically subordinating Latin American nations; U.S. support for filibustering expeditions in Central America; the Louisiana Purchase showing U.S. territorial ambition."}]}
  ]}
},
{
  type:"SAQ", source:"Marco Learning", year:"Marco Learning Practice Test 1",
  title:"Short-Answer Question 2 — Politics and Economics (1912)",
  context:"Use the image below and your knowledge of United States history to answer all parts of the following question.",
  stimulus:{
    label:"'Wilson's Suggestion for a Cartoon' — political cartoon, 1912 campaign, Columbus Dispatch",
    visual:true, imageKey:"wilson_1912_cartoon", imageType:"political cartoon",
    text:"A 1912 political cartoon depicting Woodrow Wilson as a conductor leading a choir of large, rotund figures labeled 'TRUST' who sing 'CON-TROL US A-GAIN.' Based on Wilson's quote: 'If I were a cartoonist I would draw a picture of the biggest monopolies of the United States, drawn up in line and in front Mr. Roosevelt trying to lead them in a hallelujah chorus.' The image critiques Theodore Roosevelt's approach to trusts as regulation rather than elimination, implying big business preferred Roosevelt's approach.",
    attr:"Political cartoon, Columbus Dispatch, 1912"
  },
  parts:[
    "Briefly describe ONE perspective expressed by the artist about the relationship between politics and economics.",
    "Briefly explain ONE event or development that led to the historical situation depicted in the image.",
    "Briefly explain ONE specific impact that the relationship between politics and economics had on American society from the period 1890 to 1945."
  ],
  rubric:{total:3,sections:[
    {title:"Part A — One Point",rows:[{pts:1,desc:"Identifies the artist's perspective — big business preferred Roosevelt's regulatory approach over Wilson's more aggressive anti-monopoly New Freedom program, suggesting that political 'reform' under Roosevelt actually served corporate interests by allowing trusts to survive under government oversight."}]},
    {title:"Part B — One Point",rows:[{pts:1,desc:"Any development leading to the 1912 trust/reform debate — e.g., Gilded Age concentration of corporate power (Standard Oil, U.S. Steel, railroad trusts); Sherman Antitrust Act's (1890) weak enforcement; Roosevelt's 'Square Deal' and trust-busting that paradoxically accepted some trusts; the Panic of 1907 revealing dangers of concentrated financial power; the 1912 split of the Republican Party between Taft and Roosevelt."}]},
    {title:"Part C — One Point",rows:[{pts:1,desc:"Specific impact 1890–1945 — e.g., Progressive Era reforms (Clayton Antitrust Act, Federal Reserve Act, FTC) restructuring the government-business relationship; the New Deal's fundamental expansion of government's economic role; rise of organized labor and collective bargaining rights (Wagner Act, 1935); the income tax (16th Amendment) redistributing tax burden; military-industrial complex emerging from WWII production."}]}
  ]}
},
{
  type:"SAQ", source:"Marco Learning", year:"Marco Learning Practice Test 1",
  title:"Short-Answer Question 3 — Federalists vs. Democratic-Republicans (1754–1800)",
  context:"Answer all parts of the following question. Confine your response to the period from 1754 to 1800.",
  parts:[
    "Briefly describe ONE specific historical difference between the policies of the Federalists as typified by John Adams and the policies of the Democratic-Republicans as typified by Thomas Jefferson.",
    "Briefly describe ONE specific historical similarity between the policies of the Federalists as typified by John Adams and the policies of the Democratic-Republicans as typified by Thomas Jefferson.",
    "Briefly explain ONE specific historical effect of the election of 1800 in which Democratic-Republican Thomas Jefferson defeated Federalist John Adams."
  ],
  rubric:{total:3,sections:[
    {title:"Part A — One Point",rows:[{pts:1,desc:"Any accurate specific policy difference — e.g., Federalists supported a national bank and manufacturing-based economy vs. Democratic-Republicans favoring agriculture and states' rights; Federalists supported the Alien and Sedition Acts (1798) vs. Jefferson's opposition; Federalists favored close ties with Britain vs. Jefferson's preference for France; Hamilton's Report on Manufactures vs. Jefferson's agrarian ideal."}]},
    {title:"Part B — One Point",rows:[{pts:1,desc:"Any accurate specific similarity — e.g., both supported American neutrality in European wars (Washington's Farewell Address reflected consensus); both accepted the Constitution and federal framework; both supported westward expansion; both accepted the two-term presidential tradition; both were members of the founding generation who prioritized the survival of the republic."}]},
    {title:"Part C — One Point",rows:[{pts:1,desc:"Any specific effect of the 1800 election — e.g., the 12th Amendment (1804) requiring separate ballots for president and vice president arose from the Jefferson-Burr tie; the peaceful transfer of power between parties established a constitutional norm; Jefferson's victory produced the Louisiana Purchase (1803); the Federalist Party began its long decline; Marbury v. Madison (1803) arose from Adams's midnight appointments, establishing judicial review."}]}
  ]}
},
{
  type:"SAQ", source:"Marco Learning", year:"Marco Learning Practice Test 1",
  title:"Short-Answer Question 4 — Cold War Impacts (1945–1980)",
  context:"Answer all parts of the following question.",
  parts:[
    "Briefly describe ONE specific historical impact the Cold War had on United States foreign policy in the period 1945–1980.",
    "Briefly describe ONE specific historical impact the Cold War had on United States domestic policy in the period 1945–1980.",
    "Briefly explain ONE specific historical impact the Cold War had on United States economic development and technological changes in the period 1945–1980."
  ],
  rubric:{total:3,sections:[
    {title:"Part A — One Point",rows:[{pts:1,desc:"Any specific foreign policy impact — e.g., containment policy (Truman Doctrine, 1947); Marshall Plan (1948) rebuilding Western Europe; NATO formation (1949); Korean War (1950–53); Vietnam War as failed containment; détente and Nixon's opening to China (1972); SALT treaties limiting nuclear weapons; CIA covert operations in Iran (1953), Guatemala (1954), Congo, Chile."}]},
    {title:"Part B — One Point",rows:[{pts:1,desc:"Any specific domestic impact — e.g., McCarthyism and Second Red Scare; HUAC investigations and Hollywood blacklist; loyalty oaths for federal employees; National Security Act (1947) creating CIA and NSC; desegregation of military (1948) partly motivated by Cold War credibility; National Defense Education Act (1958) — Sputnik prompted federal education funding; civil rights movement benefiting from Cold War pressure to demonstrate democracy's superiority."}]},
    {title:"Part C — One Point",rows:[{pts:1,desc:"Any specific economic/technological impact — e.g., Space Race produced NASA (1958), satellite technology, and ARPANET (internet precursor); defense spending created military-industrial complex and drove postwar economic growth; interstate highway system (1956) built partly for military mobility; nuclear technology produced both weapons and civilian nuclear power; GI Bill expanded higher education and middle class; defense contracts concentrated in Sun Belt transforming regional economies."}]}
  ]}
},
{
  type:"SAQ", source:"Princeton Review", year:"Princeton Review Practice Test 6",
  title:"Short-Answer Question 1 — California Gold Rush",
  context:"Use the chart below and your knowledge of United States history to answer all parts of the following question.",
  stimulus:{
    label:"Production from the California Gold Rush — ounces of gold produced, 1848–1870",
    text:"A line graph showing California gold production from 1848 to 1870. Production rises sharply from near zero in 1848 to a peak of approximately 3,700,000–4,000,000 ounces around 1852–1853, then declines steadily through the 1850s and 1860s to approximately 700,000–800,000 ounces by 1870. The peak years 1851–1855 represent the height of the Gold Rush era.",
    attr:"Production from the California Gold Rush, 1848–1870"
  },
  parts:[
    "Briefly explain ONE way in which the Gold Rush transformed the West.",
    "Briefly explain ONE way in which the Gold Rush impacted the development of the United States.",
    "Briefly explain a SECOND economic boom in American history and how it impacted a particular region of the United States."
  ],
  rubric:{total:3,sections:[
    {title:"Part A — One Point",rows:[{pts:1,desc:"Any specific transformation of the West — e.g., rapid population growth forced California to statehood (1850); San Francisco grew from a small settlement into a major Pacific port; displacement and violence against Native California tribes whose populations collapsed; Chinese immigration to California and the anti-Chinese reaction; environmental transformation through hydraulic mining; development of Sacramento Valley agricultural economy to feed miners."}]},
    {title:"Part B — One Point",rows:[{pts:1,desc:"Any specific national impact — e.g., California statehood reignited the slavery debate and contributed to the Compromise of 1850; Gold Rush financed transcontinental railroad development; gold supply impacted national banking and monetary policy; expansion of Pacific trade routes; immigration from Asia permanently shaped American demographics; boosted national economic growth and confidence."}]},
    {title:"Part C — One Point",rows:[{pts:1,desc:"Any second boom with specific regional impact — e.g., post-WWII economic boom (nationwide suburbanization, Sun Belt growth); dot-com boom (Silicon Valley, Northern California, 1990s); oil boom (Texas — Spindletop 1901, or Pennsylvania — Drake well 1859); steel industry boom (Pittsburgh, Western Pennsylvania); cotton boom (antebellum Deep South); 1920s real estate bubble (Florida); coal boom (Appalachia)."}]}
  ]}
},
{
  type:"SAQ", source:"Princeton Review", year:"Princeton Review Practice Test 6",
  title:"Short-Answer Question 2 — Debs and Palmer (WWI Era)",
  context:"Use the excerpts below and your knowledge of United States history to answer all parts of the following question.",
  stimulus:{
    label:"Eugene Debs, Statement to the Court, 1918 · A. Mitchell Palmer, 'The Case Against the Reds,' 1920",
    text:"Debs (1918): 'I believe, Your Honor, in common with all Socialists, that this nation ought to own and control its own industries. I believe that all things that are jointly needed and used ought to be jointly owned... I am opposing a social order in which it is possible for one man who does absolutely nothing that is useful to amass a fortune of hundreds of millions of dollars, while millions of men and women who work all the days of their lives secure barely enough for a wretched existence.'\n\nPalmer (1920): 'Upon these two basic certainties, first that the Reds were criminal aliens and secondly that the American Government must prevent crime, it was decided that there could be no nice distinctions drawn between the theoretical ideals of the radicals and their actual violations of our national laws. An assassin may have brilliant intellectuality, he may be able to excuse his murder or robbery with fine oratory, but any theory which excuses crime is not wanted in America.'",
    attr:"Eugene Debs, Statement to the Court, 1918; A. Mitchell Palmer, 'The Case Against the Reds,' 1920"
  },
  parts:[
    "Briefly explain the impact that World War I had on both of these perspectives.",
    "Briefly explain how ONE historical event or development prior to Debs's statement could be used to support his assertion about industry.",
    "Briefly explain how ONE historical event or development prior to Palmer's statement could be used to support his assertion about radicals."
  ],
  rubric:{total:3,sections:[
    {title:"Part A — One Point",rows:[{pts:1,desc:"Explains WWI's impact on BOTH — Debs opposed WWI as a capitalist war; his anti-war speeches violated the Espionage/Sedition Acts leading to imprisonment. Palmer's position was enabled by WWI's anti-radical climate and the Russian Revolution (1917), making socialism seem a foreign threat. WWI created the legal and psychological framework — Sedition Act, wartime loyalty oaths — that made Palmer's Red Scare raids possible and turned Debs from a labor activist into a convicted criminal."}]},
    {title:"Part B — One Point",rows:[{pts:1,desc:"Any pre-1918 development supporting Debs's critique of industry — e.g., Triangle Shirtwaist Fire (1911); Pullman Strike (1894) — Debs led it and was imprisoned, radicalizing him; Standard Oil monopoly and Gilded Age concentrated wealth; child labor conditions; company towns exploiting miners; the Haymarket Affair (1886) showing labor-capital conflict."}]},
    {title:"Part C — One Point",rows:[{pts:1,desc:"Any pre-1920 development supporting Palmer's fear of radicals — e.g., Russian Revolution (1917) showing communists seizing power; Haymarket Affair (1886) associating labor radicalism with violence; assassination of President McKinley (1901) by an anarchist; 1919 bomb campaign targeting prominent Americans; Seattle General Strike (1919); IWW advocacy of revolutionary industrial unionism."}]}
  ]}
},
{
  type:"SAQ", source:"Princeton Review", year:"Princeton Review Practice Test 6",
  title:"Short-Answer Question 3 — Abolitionists",
  context:"Answer all parts of the following question.",
  parts:[
    "Briefly explain which of the three people — William Lloyd Garrison, Frederick Douglass, or Harriet Beecher Stowe — had the largest impact on the abolition of slavery.",
    "Briefly explain why the other two people did not play as large a role in abolishing slavery, making sure to explain their roles in the abolition movement.",
    "Briefly explain how one other person or group helped to abolish slavery."
  ],
  rubric:{total:3,sections:[
    {title:"Part A — One Point",rows:[{pts:1,desc:"Any defensible choice with specific supporting evidence. Garrison: founded The Liberator (1831) and American Anti-Slavery Society; immediatist position set the radical abolitionist agenda; reached white Northern audiences. Douglass: as an escaped slave turned orator and author (Narrative, 1845), personalized slavery's horror; The North Star provided a Black abolitionist platform; support for Black military service made him central to wartime abolition. Stowe: Uncle Tom's Cabin (1852) sold 1 million copies, credited with shifting Northern public opinion dramatically."}],note:"Any of the three is acceptable with specific evidence."},
    {title:"Part B — One Point",rows:[{pts:1,desc:"Explains limitations of the other two with accurate historical content. Garrison's pacifism and rejection of political action limited practical influence; his opposition to the 14th and 15th Amendments as insufficient alienated allies; he burned copies of the Constitution. Stowe's impact was primarily on public opinion rather than political structure; she was not directly involved in the political process producing emancipation. Douglass split with Garrison over whether the Constitution was an anti-slavery document."}]},
    {title:"Part C — One Point",rows:[{pts:1,desc:"Any other abolitionist with specific detail — Sojourner Truth connected abolitionism to women's rights; John Brown's Harpers Ferry raid (1859) escalated sectional tensions; Harriet Tubman and the Underground Railroad freed ~100,000 enslaved people; Liberty Party and Free Soil Party built the anti-slavery coalition that became the Republican Party; Black northern communities published newspapers and organized vigilance committees."}]}
  ]}
},
{
  type:"SAQ", source:"Princeton Review", year:"Princeton Review Practice Test 6",
  title:"Short-Answer Question 4 — The Populist Movement",
  context:"Answer all parts of the following question.",
  parts:[
    "Briefly explain ONE reason for the emergence of the Populist movement during the final decades of the nineteenth century.",
    "Briefly explain ONE example of how the goals of the Populist movement were challenged during the same time period.",
    "Briefly explain ONE way that the Populist movement impacted the United States in the years following its prominence."
  ],
  rubric:{total:3,sections:[
    {title:"Part A — One Point",rows:[{pts:1,desc:"Any specific cause of Populist emergence — e.g., railroad price gouging exploiting farmers dependent on rail transport; farmers trapped in crop-lien system of perpetual debt; deflation raising real value of farmers' debts; overproduction driving down crop prices; mortgage foreclosures; political corruption ignoring rural interests; the Panics of 1873 and 1893 devastating agricultural communities."}]},
    {title:"Part B — One Point",rows:[{pts:1,desc:"Any specific challenge — e.g., Bryan's 1896 defeat to McKinley ending the movement's political viability; Supreme Court's narrow Commerce Clause interpretation limiting federal railroad regulation; Pullman Strike's defeat (1894) showing organized labor's vulnerability; gold discoveries in the Klondike (1897) relieving currency deflation; economic recovery from the Panic of 1893 reducing urgency for reform; Wabash v. Illinois (1886) limiting state railroad regulation."}]},
    {title:"Part C — One Point",rows:[{pts:1,desc:"Any specific lasting Populist impact — e.g., Progressive Movement adopted many Populist goals (direct election of senators — 17th Amendment 1913; income tax — 16th Amendment 1913; railroad regulation — Hepburn Act 1906); Federal Reserve System (1913) reformed banking as Populists demanded; initiative/referendum/recall giving citizens direct democratic power; Bryan's campaigns made economic inequality a mainstream Democratic concern, eventually influencing FDR's New Deal."}]}
  ]}
}
]; // end saqPrompts


// ██████████████████████  LEQ PROMPTS  ██████████████████████████████

const leqPrompts = [
{
  type:"LEQ", source:"Marco Learning", year:"Marco Learning Practice Test 1",
  title:"Long Essay Question 2 — Period 2",
  prompt:"Evaluate the extent to which the Trans-Atlantic Slave Trade fostered economic change and long-term differentiation in the American colonies in the period from 1607 to 1808.",
  note:"In your argument, analyze both changes and continuities in the relevant time period.",
  rubric:{total:6,sections:[
    {title:"Thesis / Claim (0–1 point)",rows:[{pts:1,desc:"Defensible line of reasoning about EXTENT — e.g., 'The Trans-Atlantic Slave Trade fundamentally differentiated American colonial economies by creating a plantation economy in the South dependent on enslaved labor while the North developed diversified commercial and manufacturing economies, a divergence that defined American economic and political development through the Civil War.' A strong thesis addresses both the transformation AND the long-term differentiation."}]},
    {title:"Contextualization (0–1 point)",rows:[{pts:1,desc:"Relevant contexts: European mercantilist system and its role in shaping colonial economic purpose; earlier attempts at indentured servant labor and why they gave way to enslaved labor; West African societies and the political economies that made slave trading possible; the role of the Royal African Company and English/American slave traders; global sugar, tobacco, and rice economies driving demand."}]},
    {title:"Evidence (0–2 points)",rows:[{pts:1,desc:"At least TWO specific pieces of accurate evidence."},{pts:1,desc:"Evidence supporting argument — Triangular Trade routes and their economic logic; Chesapeake tobacco economy's dependence on enslaved labor after Bacon's Rebellion (1676); South Carolina and Georgia rice and indigo cultivation; New England merchants' role in the slave trade; Northern shipbuilding, rum production, and financial services tied to slave economy; Southern slave codes and their economic function; the Constitutional compromise protecting slave trade until 1808; Eli Whitney's cotton gin (1793) revitalizing slavery as it might have declined."}]},
    {title:"Analysis and Reasoning (0–2 points)",rows:[{pts:1,desc:"Historical reasoning skill applied — e.g., comparison between Southern plantation economy and Northern commercial economy; causation explaining how the slave trade created specific economic and social structures; continuity/change tracking how slave-based economic differentiation persisted and deepened over the period."},{pts:1,desc:"Complex understanding — e.g., explains how Northern economic growth was intertwined with Southern slavery (Northern merchants financed plantations, insured slave ships, manufactured goods sold to plantations) while still creating fundamentally different labor systems; or explains the irony that the slave trade's abolition in 1808 did not end slavery but instead intensified domestic slave trading."}]}
  ]}
},
{
  type:"LEQ", source:"Marco Learning", year:"Marco Learning Practice Test 1",
  title:"Long Essay Question 3 — Period 4",
  prompt:"Evaluate the extent to which the War of 1812 marked a turning point in American foreign policy, analyzing what changed and what stayed the same from the period before the war to the period after it.",
  note:"In your argument, analyze both changes and continuities.",
  rubric:{total:6,sections:[
    {title:"Thesis / Claim (0–1 point)",rows:[{pts:1,desc:"Defensible thesis addressing BOTH change AND continuity — e.g., 'The War of 1812 marked a significant turning point in American foreign policy by producing a surge of nationalist sentiment that replaced the divisive partisan foreign policy of the 1790s–1800s and enabling the assertive Monroe Doctrine (1823), though the fundamental commitment to avoiding European entanglements and protecting American commercial interests that had defined Washington's Farewell Address continued to guide U.S. foreign policy.'"}]},
    {title:"Contextualization (0–1 point)",rows:[{pts:1,desc:"Relevant contexts: Washington's Farewell Address (1796) establishing non-entanglement as a principle; the Quasi-War with France (1798–1800) and Jay's Treaty with Britain showing the partisan nature of pre-1812 foreign policy; the Napoleonic Wars creating impossible pressures on American neutrality; the role of impressment and trade restrictions in forcing the war; Native American alliance with Britain on the frontier."}]},
    {title:"Evidence (0–2 points)",rows:[{pts:1,desc:"At least TWO specific pieces of accurate evidence."},{pts:1,desc:"Change evidence: Rush-Bagot Agreement (1817) demilitarizing the Great Lakes and beginning the U.S.-Canada peaceful border; Convention of 1818 settling the northern boundary; Adams-Onís Treaty (1819) acquiring Florida; Era of Good Feelings and end of First Party System's bitter foreign policy divisions; Monroe Doctrine (1823) asserting hemispheric leadership; U.S. military confidence after Battle of New Orleans. Continuity evidence: continued avoidance of European alliances; continued focus on commercial interests and neutral shipping rights; continued westward expansion pressure (unchanged); continued use of diplomacy over military force as preferred tool."}]},
    {title:"Analysis and Reasoning (0–2 points)",rows:[{pts:1,desc:"Historical reasoning — continuity/change over time analysis comparing pre- and post-war foreign policy."},{pts:1,desc:"Complex understanding — e.g., explains the paradox that a war widely seen as a failure or draw (burning of Washington, failure to conquer Canada) nonetheless produced nationalist outcomes that transformed foreign policy confidence; or connects to later Monroe Doctrine as the clearest articulation of the changed foreign policy; or notes that the 'change' was partly narrative (Americans told themselves a different story about their foreign policy power) rather than structural."}]}
  ]}
},
{
  type:"LEQ", source:"Marco Learning", year:"Marco Learning Practice Test 1",
  title:"Long Essay Question 4 — Period 9",
  prompt:"Evaluate the extent to which the creation of the internet in the 1980s both changed communication methods in the United States and showed continuity with previous technologies.",
  note:"In your argument, analyze both changes and continuities.",
  rubric:{total:6,sections:[
    {title:"Thesis / Claim (0–1 point)",rows:[{pts:1,desc:"Defensible thesis addressing EXTENT of change AND continuity — e.g., 'While the internet fundamentally transformed communication by enabling instantaneous global information exchange and erasing the distinction between producer and consumer of media, it showed strong continuity with previous technologies in its role as a tool of commercial consolidation, government surveillance, and the persistence of information inequality based on access and literacy.'"}]},
    {title:"Contextualization (0–1 point)",rows:[{pts:1,desc:"Relevant contexts: ARPANET as the military-funded precursor (1969); Cold War context driving federal investment in communications technology; earlier communications revolutions (telegraph, telephone, radio, television) and their social impacts; the shift from broadcast to interactive media; the dot-com boom and bust (1995–2001); the role of deregulation in enabling commercial internet development."}]},
    {title:"Evidence (0–2 points)",rows:[{pts:1,desc:"At least TWO specific pieces of accurate evidence."},{pts:1,desc:"Change evidence: World Wide Web (1991) enabling mass internet access; email replacing mail and fax for business communication; e-commerce transforming retail (Amazon, eBay); social media enabling citizen journalism and viral political movements; streaming replacing broadcast television and physical media; Wikipedia democratizing information access. Continuity evidence: like telegraph and telephone, internet initially limited to elites before mass adoption; like previous media, consolidated into large corporate platforms (Google, Facebook, Amazon); like radio's early use for propaganda, internet enabled disinformation; government surveillance of internet communications (NSA PRISM program) continued tradition of monitoring communications technology."}]},
    {title:"Analysis and Reasoning (0–2 points)",rows:[{pts:1,desc:"Historical reasoning — comparison with previous communication technologies; causation explaining how internet architecture produced specific social changes."},{pts:1,desc:"Complex understanding — e.g., explains how the internet both democratized communication (anyone could publish globally) AND concentrated media power (into a handful of tech platforms) simultaneously; or traces how earlier communication revolutions (telegraph, telephone) followed similar patterns of disruption followed by consolidation, suggesting a structural continuity the internet repeated."}]}
  ]}
},
{
  type:"LEQ", source:"Princeton Review", year:"Princeton Review Practice Test 6",
  title:"Long Essay Question 2 — Period 2–3",
  prompt:"Evaluate the extent to which the Townshend Acts were a contributing factor leading to the Revolutionary War. In your argument, analyze both changes and continuities in the relevant time period.",
  rubric:{total:6,sections:[
    {title:"Thesis / Claim (0–1 point)",rows:[{pts:1,desc:"Defensible thesis about EXTENT of Townshend Acts' contribution — e.g., 'While the Townshend Acts were a critical escalating factor in the revolutionary crisis by introducing direct taxation on British goods, funding royal officials from colonial revenue, and suspending the New York legislature, they were one of several interconnected causes whose cumulative effect — rather than any single act alone — made revolution inevitable.' A strong thesis addresses both the significance of the Townshend Acts AND the broader causal context."}]},
    {title:"Contextualization (0–1 point)",rows:[{pts:1,desc:"Relevant contexts: Stamp Act (1765) and its repeal establishing colonial precedent for effective resistance; Declaratory Act (1766) asserting parliamentary supremacy even as Stamp Act was repealed; the concept of virtual representation vs. actual representation; the earlier tradition of salutary neglect and its end; the debt Britain accumulated in the Seven Years' War creating the revenue need; the colonial assemblies' tradition of controlling their own taxation."}]},
    {title:"Evidence (0–2 points)",rows:[{pts:1,desc:"At least TWO specific pieces of accurate evidence."},{pts:1,desc:"Townshend Acts evidence: taxes on British imports (glass, paper, paint, tea); revenue used to pay royal officials independent of colonial assemblies; new customs enforcement and admiralty courts; suspension of New York legislature for refusing to quarter British troops. Colonial response: Massachusetts Circular Letter calling for colonial cooperation; boycotts that united colonies and hurt British merchants; Committees of Correspondence cementing colonial unity; John Dickinson's Letters from a Farmer in Pennsylvania; Boston Massacre (1770) escalating tensions; Tea Act and Boston Tea Party leading to Intolerable Acts."}]},
    {title:"Analysis and Reasoning (0–2 points)",rows:[{pts:1,desc:"Historical reasoning — causation explaining the chain from Townshend Acts to specific revolutionary developments."},{pts:1,desc:"Complex understanding — e.g., explains how the Townshend Acts were significant not just for their specific provisions but because they demonstrated Parliament's intention to permanently subordinate colonial self-governance; or distinguishes between the economic impact (relatively minor) and the constitutional significance (profound) of the acts; or traces continuity in British revenue-raising policy from Stamp Act through Townshend Acts, showing a pattern that colonists correctly identified as a long-term threat."}]}
  ]}
},
{
  type:"LEQ", source:"Princeton Review", year:"Princeton Review Practice Test 6",
  title:"Long Essay Question 3 — Periods 5–7",
  prompt:"To what extent did the impact of immigration on the United States reflect both continuity and change in the mid-19th century (1820–1870) and in the industrial period (1880–1920)? In the development of your argument, explain the reasons for the similarities and differences.",
  rubric:{total:6,sections:[
    {title:"Thesis / Claim (0–1 point)",rows:[{pts:1,desc:"Defensible thesis addressing BOTH continuity AND change across the two periods — e.g., 'While immigration in both the mid-19th century and the industrial period produced nativist backlash, labor competition, and urban ethnic neighborhoods, the industrial-period immigration represented a significant change in its scale, origins (Southern and Eastern Europe and Asia rather than Northwestern Europe), and the federal legislative response it generated, including the first immigration restriction laws targeting specific nationalities.'"}]},
    {title:"Contextualization (0–1 point)",rows:[{pts:1,desc:"Relevant contexts: earlier colonial and early republic immigration patterns; transportation revolution (steamships) making immigration feasible; the role of economic 'push' factors (Irish famine, German political upheaval 1848) vs. 'pull' factors (American economic opportunity, land availability); the role of industrial capitalism in creating demand for immigrant labor; the shift from agricultural to industrial economy shaping where immigrants settled and worked."}]},
    {title:"Evidence (0–2 points)",rows:[{pts:1,desc:"At least TWO specific pieces of accurate evidence from EACH period."},{pts:1,desc:"Mid-19th century: Irish famine immigration (1845–52), anti-Catholic Know-Nothing Party, German political refugees of 1848, Chinese railroad workers, Homestead Act (1862) attracting land-seeking immigrants. Industrial period: 'New Immigration' from Southern and Eastern Europe (Italians, Poles, Russians, Jews), Chinese Exclusion Act (1882), tenement housing and settlement houses (Hull House), Haymarket Affair's immigrant labor associations, Immigration Act of 1924 establishing national origins quotas, Triangle Shirtwaist Fire."}]},
    {title:"Analysis and Reasoning (0–2 points)",rows:[{pts:1,desc:"Historical reasoning — comparison between the two periods; causation explaining WHY patterns were similar or different."},{pts:1,desc:"Complex understanding — e.g., explains how nativist hostility in both periods used the same arguments (immigrants taking jobs, resisting assimilation, bringing foreign values) but targeted different groups, showing how 'acceptable' and 'unacceptable' immigration was a moving cultural and racial boundary rather than a fixed standard; or explains how immigration in both periods simultaneously drove economic growth AND produced social conflict, showing immigration's consistently paradoxical role in American history."}]}
  ]}
},
{
  type:"LEQ", source:"Princeton Review", year:"Princeton Review Practice Test 6",
  title:"Long Essay Question 4 — Periods 5 and 8",
  prompt:"To what extent did the successes of two postwar periods in the United States, post–Civil War (1865–1876) and post–World War II (1945–1961), represent both continuity and change? In the development of your argument, explain the reasons for the similarities and differences.",
  rubric:{total:6,sections:[
    {title:"Thesis / Claim (0–1 point)",rows:[{pts:1,desc:"Defensible thesis comparing the two postwar periods — e.g., 'While both the post-Civil War Reconstruction era and the post-WWII period attempted to expand civil rights and rebuild national unity, the post-WWII period was significantly more successful in producing lasting economic growth and international power, whereas Reconstruction's civil rights gains were systematically dismantled, revealing how the presence or absence of sustained federal commitment determined the success of postwar reform.'"}]},
    {title:"Contextualization (0–1 point)",rows:[{pts:1,desc:"Relevant contexts: nature of each war's conclusion and the political pressures it created; economic conditions (devastated post-Civil War South vs. booming post-WWII America); role of federal government expansion in each era; international context (Reconstruction occurring in relative isolation vs. WWII ending in Cold War context that shaped domestic policy); demographic context of Black Americans' political power in each era."}]},
    {title:"Evidence (0–2 points)",rows:[{pts:1,desc:"At least TWO specific pieces of accurate evidence from EACH period."},{pts:1,desc:"Reconstruction (1865–76): 13th, 14th, 15th Amendments; Freedmen's Bureau; Black political officeholding; carpetbaggers; Compromise of 1877 ending Reconstruction; Black Codes; KKK violence. Post-WWII (1945–61): GI Bill expanding middle class; Marshall Plan and NATO establishing U.S. global leadership; Baby Boom and suburbanization; Truman's desegregation of military (1948); Korean War; McCarthyism; Brown v. Board (1954); Interstate Highway Act (1956); Civil Rights Act of 1957."}]},
    {title:"Analysis and Reasoning (0–2 points)",rows:[{pts:1,desc:"Historical reasoning — comparison explaining WHY the two postwar periods had different outcomes; causation connecting specific policies to specific results."},{pts:1,desc:"Complex understanding — e.g., explains the structural similarity: both periods saw initial progressive momentum followed by conservative backlash, but the Cold War gave the post-WWII period an external pressure (international credibility) that sustained some civil rights progress even as McCarthyism rolled back others — a complexity Reconstruction lacked; or traces how Reconstruction's failure directly shaped the conditions that made post-WWII civil rights activism necessary."}]}
  ]}
}
]; // end leqPrompts


// ██████████████████████  DBQ PROMPTS  ██████████████████████████████

const dbqPrompts = [
{
  type:"DBQ", source:"Marco Learning", year:"Marco Learning Practice Test 1",
  title:"Document-Based Question — Reconstruction (1865–1877)",
  prompt:"Evaluate the extent to which efforts to reconstruct the South immediately following the Civil War were effective in the period 1865–1877.",
  note:"Use at least SIX of the seven documents. Use at least ONE piece of outside evidence. Explain sourcing for at least THREE documents. Write a historically defensible thesis.",
  documents:[
    {
      label:"Document 1 — 13th Amendment to the United States Constitution, 1865",
      text:"Section 1. Neither slavery nor involuntary servitude, except as a punishment for crime whereof the party shall have been duly convicted, shall exist within the United States, or any place subject to their jurisdiction.\nSection 2. Congress shall have power to enforce this article by appropriate legislation.",
      attr:"13th Amendment to the United States Constitution, 1865"
    },
    {
      label:"Document 2 — The Black Code of St. Landry's Parish, Louisiana, 1865",
      text:"SECTION 1. No negro shall be allowed to pass within the limits of said parish without a special permit in writing from his employer.\nSECTION 2. Every negro who shall be found absent from the residence of his employer after 10 o'clock at night, without a written permit from his employer, shall pay a fine of five dollars.\nSECTION 3. No negro shall be permitted to rent or keep a house within said parish.\nSECTION 4. Every negro is required to be in the regular service of some white person, or former owner, who shall be held responsible for the conduct of said negro.",
      attr:"The Black Code of St. Landry's Parish, Louisiana, 1865"
    },
    {
      label:"Document 3 — Frederick Douglass, 'Reconstruction,' The Atlantic, December 1866",
      text:"Fortunately, the Constitution of the United States knows no distinction between citizens on account of color. Neither does it know any difference between a citizen of a State and a citizen of the United States. Citizenship evidently includes all the rights of citizens, whether State or national... This unfortunate blunder must now be retrieved, and the emasculated citizenship given to the negro supplanted by that contemplated in the Constitution of the United States, which declares that the citizens of each State shall enjoy all the rights and immunities of citizens of the several States.",
      attr:"Frederick Douglass, 'Reconstruction,' The Atlantic, December 1866"
    },
    {
      label:"Document 4 — 'This Is a White Man's Government,' Thomas Nast, Harper's Weekly, September 5, 1868",
      visual:true, imageKey:"white_mans_govt_1868", imageType:"political cartoon",
      text:"A Thomas Nast political cartoon showing three men — an Irish immigrant (holding a club labeled 'A Vote'), a Confederate soldier (belt buckle 'CSA'), and a wealthy Northern financier ('Capital for Votes' bag) — joining hands over the body of a fallen Black Union soldier they are pinning to the ground, preventing him from reaching a ballot box. Buildings burn in the background. The cartoon depicts the coalition of forces — Northern racism, Southern white supremacy, and immigrant Democratic Party voters — that together suppressed Black voting rights during Reconstruction.",
      attr:"Thomas Nast, Harper's Weekly, September 5, 1868"
    },
    {
      label:"Document 5 — 15th Amendment to the United States Constitution, 1870",
      text:"Section 1. The right of citizens of the United States to vote shall not be denied or abridged by the United States or by any state on account of race, color, or previous condition of servitude.\nSection 2. The Congress shall have power to enforce this article by appropriate legislation.",
      attr:"15th Amendment to the United States Constitution, 1870"
    },
    {
      label:"Document 6 — New York Times, February 26, 1870 — On the Swearing-In of Senator Hiram Revels",
      text:"Mr. Revels, the colored Senator from Mississippi, was sworn in and admitted to his seat this afternoon at 4:40 o'clock. There was not an inch of standing or sitting room in the galleries, so densely were they packed... Only one thing remained, which was that the first colored Senator elect should advance to the Speaker's desk and be sworn... Mr. Revels showed no embarrassment whatever, and his demeanor was as dignified as could be expected under the circumstances. The abuse which had been poured upon him and on his race during the last two days might well have shaken the nerves of any one.",
      attr:"New York Times, February 26, 1870"
    },
    {
      label:"Document 7 — 'Carpetbagger,' cartoon, Harper's Weekly, 1872",
      visual:true, imageKey:"carpetbagger_harpers_1872", imageType:"political cartoon",
      text:"A political cartoon from Harper's Weekly, 1872, depicting a caricatured Northern carpetbagger striding southward carrying an enormous carpetbag labeled 'C. Stump Bag from the North' and a satchel labeled 'Carpet Bagger South.' In the background a crowd of freed people looks on. The cartoon conveys the Southern Democratic critique of Reconstruction — that Northerners arrived in the South purely for personal political and financial gain.",
      attr:"'Carpetbagger,' Harper's Weekly, 1872"
    }
  ],
  rubric:{total:7,sections:[
    {title:"Thesis / Claim (0–1 point)",rows:[{pts:1,desc:"Must establish a defensible line of reasoning about the EXTENT of effectiveness — e.g., 'Reconstruction achieved significant legal milestones — abolishing slavery, establishing Black citizenship, and briefly enabling Black political participation — but was ultimately ineffective because Southern white resistance, inadequate federal enforcement, and the Compromise of 1877 allowed states to systematically reverse these gains, leaving the fundamental racial and economic power structures of the antebellum South largely intact.' A thesis that merely lists successes or failures without making an argument about extent does not earn the point."}]},
    {title:"Contextualization (0–1 point)",rows:[{pts:1,desc:"Strong contexts: Presidential vs. Radical Reconstruction plans and their philosophical differences; Lincoln's assassination and Johnson's hostility to Black equality; the economic devastation of the South and the question of how to rebuild it; the Northern public's fatigue with Reconstruction and desire to move on; the role of violence and terrorism (KKK, White League, Red Shirts) in undermining Reconstruction; the labor question and the failure of 'forty acres and a mule'; the 1873 economic depression reducing Northern commitment to Southern reconstruction."}],note:"Must describe AND explain the connection to the argument — not just mention a context."},
    {title:"Evidence — Document Use (0–3 points)",rows:[
      {pts:1,desc:"Accurately uses content from at least THREE documents."},
      {pts:1,desc:"Accurately uses content from at least SIX documents."},
      {pts:1,desc:"Explains sourcing for at least ONE document. Strong sourcing examples: Document 2 (Black Codes) — passed by a Louisiana parish in 1865, just months after the 13th Amendment; the author (local police jury) represents the immediate Southern white resistance to any real change, revealing that legal emancipation faced immediate extralegal reimposition of labor control. The date is significant — barely six months after the Civil War, already undermining legal freedom. Document 4 (Nast cartoon) — Nast was a Northern Republican artist working for Harper's Weekly, a mainstream Northern publication; his audience was Northern white voters whom he was trying to persuade to continue supporting Reconstruction by showing the coalition of forces threatening Black voting rights. Document 7 (Carpetbagger cartoon) — represents the Southern Democratic perspective (the 'Lost Cause' narrative) that Reconstruction was corrupt Northern exploitation rather than legitimate reform; its purpose was to delegitimize Reconstruction in Northern public opinion."}
    ]},
    {title:"Evidence — Beyond Documents (0–1 point)",rows:[{pts:1,desc:"Outside evidence: Enforcement Acts (1870–71) and their eventual failure to stop KKK violence; Civil Rights Act of 1875 and its gutting by the Supreme Court in Civil Rights Cases (1883); Compromise of 1877 ending Reconstruction in exchange for the presidency; sharecropping and crop-lien system recreating economic dependency for freedpeople; rise of Jim Crow laws in the 1880s–1890s; Plessy v. Ferguson (1896) ratifying segregation; the general failure to redistribute land (the core economic demand of freedpeople)."}]},
    {title:"Analysis and Reasoning (0–1 point)",rows:[{pts:1,desc:"Complex understanding: Explains how Reconstruction was simultaneously a legal success (13th, 14th, 15th Amendments; Black officeholding) and a practical failure (these gains were immediately and systematically undermined), showing that constitutional change without enforcement power and economic restructuring is insufficient for genuine social transformation. OR explains the role of the carpetbagger cartoon (Doc 7) as evidence of how the narrative of Reconstruction was constructed — the Southern Democratic story of Reconstruction as corruption and tyranny successfully persuaded Northern whites to abandon it, showing that Reconstruction failed partly because its opponents won the war of public interpretation. OR connects to the long arc — that Reconstruction's legal framework, though unused for 80 years, became the constitutional basis for the Second Reconstruction of the 1950s–60s."}]}
  ]}
},
{
  type:"DBQ", source:"Princeton Review", year:"Princeton Review Practice Test 6",
  title:"Document-Based Question — Constitutional Convention and the Declaration of Independence",
  prompt:"To what extent does the outcome of the Constitutional Convention represent change and/or continuity in respect to the ideals set out in the Declaration of Independence?",
  note:"Use at least SIX of the seven documents. Use at least ONE piece of outside evidence. Explain sourcing for at least THREE documents.",
  documents:[
    {
      label:"Document 1 — The Declaration of Independence, Thomas Jefferson, et al., 1776",
      text:"We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness. That to secure these rights, Governments are instituted among Men, deriving their just powers from the consent of the governed.",
      attr:"The Declaration of Independence, Thomas Jefferson, et al., 1776"
    },
    {
      label:"Document 2 — United States Slave Population in 1790 (bar chart)",
      text:"A bar chart showing the enslaved population by state in 1790. Virginia had the largest enslaved population (approximately 293,000), followed by South Carolina (~107,000), Maryland (~103,000), and North Carolina (~100,000). Northern states had minimal enslaved populations — Massachusetts had zero, as slavery had been abolished there. The total U.S. enslaved population in 1790 was approximately 698,000 people.",
      attr:"United States Census Bureau, Slave Population in 1790"
    },
    {
      label:"Document 3 — James Madison, Federalist #63, 1788",
      text:"Thus far I have considered the circumstances which point out the necessity of a well-constructed Senate only as they relate to the representatives of the people. To a people as little blinded by prejudice or corrupted by flattery as those whom I address, I shall not scruple to add, that such an institution may be sometimes necessary as a defense to the people against their own temporary errors and delusions.",
      attr:"James Madison, Federalist #63, 1788"
    },
    {
      label:"Document 4 — United States Population in 1790 (table)",
      text:"Northern States: Connecticut 237,255 · Massachusetts 378,566 · New Hampshire 141,889 · New Jersey 184,139 · New York 340,241 · Pennsylvania 443,611 · Rhode Island 69,112\nSouthern States: Delaware 59,096 · Georgia 82,548 · Kentucky 73,667 · Maryland 319,728 · North Carolina 395,005 · South Carolina 249,073 · Virginia 747,550",
      attr:"United States Census Bureau, Population in 1790"
    },
    {
      label:"Document 5 — George Mason, Virginia Journal, September 1787",
      text:"In the House of Representatives there is not the substance but the shadow only of representation; which can never produce proper information in the legislature, or inspire confidence in the people; the laws will therefore be generally made by men little concerned in, and unacquainted with their effects and consequences.",
      attr:"George Mason, Virginia Journal, September 1787"
    },
    {
      label:"Document 6 — Alexander Hamilton, Speech at the Philadelphia Convention, 1787",
      text:"All communities divide themselves into the few and the many. The first are the rich and wellborn, the other the mass of the people.... The people are turbulent and changing; they seldom judge or determine right. Give therefore to the first class a distinct, permanent share in the government. They will check the unsteadiness of the second, and as they cannot receive any advantage by change, they therefore will ever maintain good government.",
      attr:"Alexander Hamilton, Speech at the Philadelphia Convention, 1787"
    },
    {
      label:"Document 7 — Thomas Jefferson, Letter to Francis Hopkinson, 1789",
      text:"What I disapproved from the first moment, also, was the want of a bill of rights to guard liberty against the legislative as well as the executive branches of the government; that is to say, to secure freedom in religion, freedom of the press, freedom from monopolies, freedom from unlawful imprisonment, freedom from a permanent military, and a trial by jury, in all cases determinable by the laws of the land. I disapproved, also, the perpetual reeligibility of the President.",
      attr:"Thomas Jefferson, Letter to Francis Hopkinson, 1789"
    }
  ],
  rubric:{total:7,sections:[
    {title:"Thesis / Claim (0–1 point)",rows:[{pts:1,desc:"Must establish a defensible line of reasoning about the EXTENT of change or continuity — e.g., 'While the Constitutional Convention carried forward the Declaration's principles of popular sovereignty and natural rights by creating a republican government, the compromises on slavery, the unequal representation in the Senate, and the exclusion of a Bill of Rights represented fundamental continuities with the inequality the Declaration rhetorically rejected, producing a Constitution that fulfilled the Declaration's ideals for some Americans while explicitly or implicitly excluding others.' OR argues for primarily continuity (both documents built on Enlightenment liberal principles) or primarily change (the Constitution was a dramatic retreat from the Declaration's radical implications). Any of these positions is acceptable with evidence."}]},
    {title:"Contextualization (0–1 point)",rows:[{pts:1,desc:"Strong contexts: The Articles of Confederation and why they failed (too weak to govern); the Shays' Rebellion (1786) frightening the propertied classes into demanding a stronger government; the role of Enlightenment philosophy (Locke, Montesquieu) in shaping both documents; the international context of an America surrounded by European empires needing constitutional credibility; the economic interests of the delegates (many slaveholders, creditors) shaping the Convention's outcomes."}]},
    {title:"Evidence — Document Use (0–3 points)",rows:[
      {pts:1,desc:"Accurately uses content from at least THREE documents."},
      {pts:1,desc:"Accurately uses content from at least SIX documents."},
      {pts:1,desc:"Explains sourcing for at least ONE document. Strong examples: Document 2 (Slave population chart) — Virginia's massive enslaved population (293,000) explains why Virginia delegates at the Convention fought so hard for the Three-Fifths Compromise and the protection of the slave trade until 1808; the data reveals the economic interest driving the Constitution's accommodation of slavery despite the Declaration's 'all men are created equal.' Document 6 (Hamilton's Convention speech) — Hamilton was speaking to fellow delegates, not the public; this private audience explains why he could be frank about his elite theory of government in ways that contradict the Declaration's popular sovereignty language. He is not speaking to persuade the people — he is speaking to persuade fellow elites. Document 7 (Jefferson's letter to Hopkinson) — Jefferson was writing privately to a friend from Paris, where he was serving as ambassador; his frank expression of what he 'disapproved' reveals the gap between the Constitution as ratified and the Declaration's author's own vision of what a just government should guarantee."}
    ]},
    {title:"Evidence — Beyond Documents (0–1 point)",rows:[{pts:1,desc:"Outside evidence: Great Compromise (bicameral legislature) balancing large and small state interests; Three-Fifths Compromise counting enslaved people as 3/5 of a person for representation; slave trade protection until 1808; Electoral College rather than direct popular election of president; property requirements for voting in most states; exclusion of women, Native Americans, and non-property owners from political participation; eventual addition of the Bill of Rights (1791) addressing Jefferson's concerns; Marbury v. Madison (1803) establishing judicial review not explicitly in the Constitution; the tension between the Constitution's 'consent of the governed' and the exclusion of most people from that consent."}]},
    {title:"Analysis and Reasoning (0–1 point)",rows:[{pts:1,desc:"Complex understanding: Explains how the Constitution represents BOTH change AND continuity simultaneously — it changed the framework of government (stronger, more functional than the Articles) while showing continuity with existing inequalities (slavery, property-based suffrage, limited popular participation) that the Declaration's language rhetorically challenged but did not resolve. OR explains why the discrepancy between the Declaration's ideals and the Constitution's compromises was not hypocrisy but necessity — the Constitution had to be acceptable to slaveholders and small states to be ratified, making the compromises structurally required even if philosophically inconsistent. OR connects to the long arc of American history — that the Declaration's ideals became the standard by which Americans measured constitutional failures, producing the Civil War amendments, women's suffrage, and the civil rights movement as each generation tried to make the Constitution match the Declaration."}]}
  ]}
}
,

// ═══════════════════════════════════════════════════════════════════
// PRINCETON REVIEW PRACTICE TEST 5 — SAQ PROMPTS
// ═══════════════════════════════════════════════════════════════════

]; // end dbqPrompts

// Append PT5 entries to existing arrays
saqPrompts.push(
{
  type:"SAQ", source:"Princeton Review", year:"Princeton Review Practice Test 5",
  title:"Short-Answer Question 1 — Spanish-American War",
  context:"Use the excerpts below and your knowledge of United States history to answer all parts of the following question.",
  stimulus:{
    label:"President Theodore Roosevelt, Theodore Roosevelt: An Autobiography, 1913 · Paul Atwood, historian, War and Empire, 2010",
    text:"Roosevelt (1913): 'Our own direct interests were great, because of the Cuban tobacco and sugar, and especially because of Cuba's relation to the projected Isthmian [Panama] Canal. But even greater were our interests from the standpoint of humanity. ... It was our duty, even more from the standpoint of National honor than from the standpoint of National interest, to stop the devastation and destruction. Because of these considerations I favored war.'\n\nAtwood (2010): 'The Spanish-American War was fomented on outright lies and trumped up accusations against the intended enemy. ... War fever in the general population never reached a critical temperature until the accidental sinking of the USS Maine was deliberately, and falsely, attributed to Spanish villainy. ... In a cryptic message ... Senator Lodge wrote that \"There may be an explosion any day in Cuba which would settle a great many things. We have got a battleship in the harbor of Havana, and our fleet, which overmatches anything the Spanish have, is masked at the Dry Tortugas.\"'",
    attr:"Theodore Roosevelt, Theodore Roosevelt: An Autobiography, 1913; Paul Atwood, War and Empire, 2010"
  },
  parts:[
    "Briefly explain ONE major difference between Roosevelt's and Atwood's historical interpretations of the United States' involvement in the Spanish-American War.",
    "Briefly explain how ONE historical event or development in the relevant time period could be used to support Roosevelt's interpretation.",
    "Briefly explain how ONE historical event or development in the relevant time period could be used to support Atwood's interpretation."
  ],
  rubric:{total:3,sections:[
    {title:"Part A — One Point",rows:[{pts:1,desc:"Effective answers highlight specific differences — Roosevelt frames the war as humanitarian intervention to stop Spanish brutality against Cubans, with national honor as the primary motive; Atwood argues the war was fomented through deliberate propaganda and false accusations (yellow journalism, Maine sinking misattributed to Spain), serving economic interests (Cuban sugar, tobacco, Panama Canal route). Roosevelt emphasizes duty and honor; Atwood emphasizes deception and imperial self-interest."}]},
    {title:"Part B — One Point",rows:[{pts:1,desc:"Events supporting Roosevelt's humanitarian interpretation — Weyler's 'reconcentrado' policy forcing Cuban civilians into camps where thousands died; Cuban insurrection against Spanish colonial rule beginning in 1895; documented Spanish atrocities reported by foreign correspondents; Spain's refusal to grant Cuban autonomy despite McKinley's ultimatum; the Cuba Libre movement based in Florida appealing to American sympathy."}]},
    {title:"Part C — One Point",rows:[{pts:1,desc:"Events supporting Atwood's imperial/propaganda interpretation — Joseph Pulitzer's and William Randolph Hearst's 'yellow journalism' fabricating or exaggerating Spanish atrocities to sell newspapers; investigation findings that the Maine explosion was likely internal, not Spanish sabotage; U.S. acquisition of Puerto Rico, Guam, and the Philippines after the war — suggesting territorial ambition beyond Cuba's freedom; in 1894, 90% of Cuba's exports went to the United States, showing economic interest; the Platt Amendment giving the U.S. indefinite naval base rights at Guantanamo Bay."}]}
  ]}
},
{
  type:"SAQ", source:"Princeton Review", year:"Princeton Review Practice Test 5",
  title:"Short-Answer Question 2 — Tammany Hall and Urban Politics",
  context:"Use the image below and your knowledge of United States history to answer all parts of the following question.",
  stimulus:{
    label:"Political cartoon by Frederick Burr Opper, 'Lots of Hunters After a Very Sick Tiger,' Puck magazine, 1893",
    text:"A political cartoon showing a weakened 'Tammany Tiger' — a tiger wearing a top hat labeled 'Tammany Hall' — crouching injured on the ground while numerous 'hunters' ride toward it on elephants. The hunters' elephants are labeled with reform groups: 'National Democracy,' various state governments, and political reformers. The caption reads: 'LOTS OF HUNTERS AFTER A VERY SICK TIGER!' The cartoon depicts the growing reform movement challenging Tammany Hall's political machine in New York City.",
    attr:"Frederick Burr Opper, Puck magazine, 1893",
    visual:true,
    imageKey:"pt5_saq2_tammany",
    imageType:"political cartoon"
  },
  parts:[
    "Briefly explain ONE characteristic of urban politics in the late 19th century as portrayed in the image.",
    "Briefly explain ONE reaction or historical change to urban politics of the late 19th century.",
    "Briefly explain ANOTHER reaction or historical change to urban politics of the late 19th century."
  ],
  rubric:{total:3,sections:[
    {title:"Part A — One Point",rows:[{pts:1,desc:"Effective answers identify specific characteristics of machine politics — the dominance of a single powerful political organization (Tammany Hall) over city government; corruption and bribery as the basis of political power; the machine's control of immigrant votes in exchange for jobs and services; the boss system allowing a small group to control municipal government; Boss Tweed's embezzlement of millions through city construction contracts."}]},
    {title:"Part B — One Point",rows:[{pts:1,desc:"First reform response — muckraking journalism exposing corruption (Thomas Nast's Tammany Hall cartoons led to Boss Tweed's conviction in 1871); Progressive Era urban reform campaigns; civil service reform (Pendleton Act 1883) creating merit-based hiring; settlement house movement (Hull House, 1889) undercutting machine dependency; Australian secret ballot reducing vote-buying."}]},
    {title:"Part C — One Point",rows:[{pts:1,desc:"Second distinct reform response — direct democracy reforms: initiative, referendum, and recall; the 17th Amendment (1913) providing direct election of senators; city commission and city manager government replacing machine-controlled systems; state-level anti-corruption investigations and prosecutions; immigration restriction reducing the immigrant voter base machines depended on."}]}
  ]}
},
{
  type:"SAQ", source:"Princeton Review", year:"Princeton Review Practice Test 5",
  title:"Short-Answer Question 3 — Bill of Rights",
  context:"Answer all parts of the following question.",
  parts:[
    "Briefly explain how ONE historical development led to the creation of the Bill of Rights.",
    "Briefly explain ONE specific argument supporters of the Bill of Rights used in the 1780s to promote its inclusion in the Constitution.",
    "Briefly explain ONE specific argument opponents of the Bill of Rights used in the 1780s to prevent its inclusion in the Constitution."
  ],
  rubric:{total:3,sections:[
    {title:"Part A — One Point",rows:[{pts:1,desc:"The Philadelphia Convention (1787) initially produced a Constitution without a Bill of Rights. Anti-Federalists proposed adding one but were initially rejected by Federalists. When ratification was threatened by wavering states (Virginia, New York), Federalists promised a Bill of Rights as amendments once the Constitution was ratified. This promise secured ratification, and Madison introduced the first ten Amendments in the First Congress (1789)."}]},
    {title:"Part B — One Point",rows:[{pts:1,desc:"Anti-Federalist arguments for the Bill of Rights — a strong national government without explicit limitations threatened individual liberty; without a Bill of Rights the president could become a king-like figure; individual rights must be explicitly enshrined to be protected; Patrick Henry demanded explicit protections for speech, religion, and due process; the British experience (Magna Carta, English Bill of Rights 1689) showed written protections were necessary."}]},
    {title:"Part C — One Point",rows:[{pts:1,desc:"Federalist arguments against the Bill of Rights — Madison initially argued states could delineate individual rights in their own constitutions; Hamilton in Federalist #84 argued a Bill of Rights was unnecessary and potentially dangerous, since listing protected rights might imply all unlisted rights were unprotected; the Constitution created a limited government of enumerated powers, so individual rights needed no separate protection; listing rights might actually limit liberty by implying unlisted rights were not protected."}]}
  ]}
},
{
  type:"SAQ", source:"Princeton Review", year:"Princeton Review Practice Test 5",
  title:"Short-Answer Question 4 — The New Deal",
  context:"Answer all parts of the following question.",
  parts:[
    "Briefly describe ONE long-term success of the New Deal.",
    "Briefly describe ONE long-term failure of the New Deal.",
    "Briefly explain ONE reason why some features of the New Deal were more successful than others."
  ],
  rubric:{total:3,sections:[
    {title:"Part A — One Point",rows:[{pts:1,desc:"Any specific New Deal success with long-term impact — Social Security (1935) creating a permanent federal retirement income safety net; FDIC (1933) guaranteeing bank deposits and restoring public confidence; SEC (1934) regulating stock markets and preventing speculative abuses; federal minimum wage established by FLSA (1938); TVA electrifying rural Appalachia; collective bargaining rights protected by the Wagner Act (1935)."}]},
    {title:"Part B — One Point",rows:[{pts:1,desc:"Any specific New Deal failure — NIRA struck down by the Supreme Court in Schechter Poultry Corp. v. United States (1935) as unconstitutional; AAA harmed Black tenant farmers by reducing the need to hire sharecroppers; unemployment remained in double digits throughout the 1930s; the 'Roosevelt recession' of 1937 when FDR prematurely cut spending; New Deal coalition included Southern Democrats who blocked civil rights legislation; national debt doubled with budget remaining unbalanced."}]},
    {title:"Part C — One Point",rows:[{pts:1,desc:"Reasons for differential success — successful programs (Social Security, FDIC) required broad participation and provided universal benefits creating a wide constituency; successful programs were compatible with the Constitution while the NIRA and early AAA were struck down as overreach; programs creating permanent institutions with career bureaucracies (SEC) outlasted programs dependent on temporary political support; successful programs addressed structural problems with structural solutions while unsuccessful ones tried to artificially manipulate prices and wages."}]}
  ]}
}
);

leqPrompts.push(
{
  type:"LEQ", source:"Princeton Review", year:"Princeton Review Practice Test 5",
  title:"Long Essay Question 2 — American Revolution and Women",
  prompt:"Evaluate the extent to which the American Revolution marked a turning point in women's lives in the United States. In the development of your argument, explain what changed and what stayed the same for women as a result of the Revolutionary War period from 1776 to 1787.",
  rubric:{total:6,sections:[
    {title:"Thesis / Claim (0–1 point)",rows:[{pts:1,desc:"Defensible thesis addressing the EXTENT of change — e.g., 'While the American Revolution produced meaningful ideological shifts for women through the concept of Republican Motherhood and expanded educational access, it ultimately represented a limited turning point because women remained excluded from formal political participation, property ownership within marriage, and professional careers — changes requiring another century of activism to achieve.' A strong thesis addresses both what changed and what continuity persisted."}]},
    {title:"Contextualization (0–1 point)",rows:[{pts:1,desc:"Relevant broader context: Enlightenment ideals of natural rights and individual liberty that undergirded the Revolution; the pre-Revolutionary legal status of women under coverture; women's roles during the war itself as camp followers, household managers, and occasional spies; the contradiction between revolutionary rhetoric of liberty and women's exclusion from its benefits; Abigail Adams's 'Remember the Ladies' letter (1776)."}]},
    {title:"Evidence (0–2 points)",rows:[{pts:1,desc:"At least TWO specific pieces of accurate evidence."},{pts:1,desc:"Change evidence: Republican Motherhood elevated women's civic importance — raising virtuous citizens gave women's domestic role new public significance; girls' education expanded; New Jersey briefly granted propertied women voting rights (1776–1807); increased emphasis on companionate marriage; women's voluntary associations expanded public moral authority. Continuity evidence: coverture law remained fully in force; women could not vote in any state after 1807; women could not hold office, serve on juries, or make legal contracts; professional and educational careers remained closed; divorce remained difficult and disadvantaged women; women had no legal right to their own wages or children."}]},
    {title:"Analysis and Reasoning (0–2 points)",rows:[{pts:1,desc:"Historical reasoning — continuity/change over time comparing women's status before and after the Revolution."},{pts:1,desc:"Complex understanding — e.g., Republican Motherhood was simultaneously an expansion of women's importance AND a mechanism for confining them more firmly to the domestic sphere; or the Revolution's ideological seeds (all men are created equal) provided the argumentative foundation for the 19th-century women's rights movement, making it a turning point in ideological potential if not immediate legal change."}]}
  ]}
},
{
  type:"LEQ", source:"Princeton Review", year:"Princeton Review Practice Test 5",
  title:"Long Essay Question 3 — Market Revolution and African Americans",
  prompt:"Evaluate the extent to which the Market Revolution marked a turning point in the lives of African-Americans in the United States. In the development of your argument, explain what changed and what stayed the same for African-Americans as a result of the Market Revolution within the period 1800–1850.",
  rubric:{total:6,sections:[
    {title:"Thesis / Claim (0–1 point)",rows:[{pts:1,desc:"Defensible thesis addressing EXTENT of change AND continuity — e.g., 'The Market Revolution marked a paradoxical turning point for African Americans: in the North, industrialization created new economic opportunities and expanded free Black communities, while in the South, Northern demand for cotton actually intensified and entrenched slavery — making the Market Revolution simultaneously liberating for some and more oppressive for most.' A strong thesis must address both change and continuity."}]},
    {title:"Contextualization (0–1 point)",rows:[{pts:1,desc:"Broader context: the end of the Trans-Atlantic slave trade (1808) and its effect on the domestic slave trade; the cotton gin (1793) creating explosive demand for enslaved labor; the Second Great Awakening's connection to abolitionism; the Missouri Compromise (1820) as evidence of slavery's growing political stakes; the Articles of Confederation's weakness on slavery."}]},
    {title:"Evidence (0–2 points)",rows:[{pts:1,desc:"At least TWO specific pieces of accurate evidence."},{pts:1,desc:"Change evidence: Northern industrialization created urban free Black communities with churches, newspapers (Freedom's Journal, 1827), schools, and mutual aid societies; the abolitionist movement became more mainstream (The Liberator, 1831; American Anti-Slavery Society, 1833); Underground Railroad became more organized; Nat Turner's Rebellion (1831) showed enslaved people's continued resistance. Continuity evidence: enslaved population grew from ~1 million in 1800 to ~3.2 million by 1850; cotton boom made slavery MORE entrenched; domestic slave trade intensified; slave codes became harsher after Nat Turner's Rebellion; free Black northerners faced legal discrimination and violent white opposition."}]},
    {title:"Analysis and Reasoning (0–2 points)",rows:[{pts:1,desc:"Historical reasoning — comparison between Northern and Southern Black experiences; causation explaining how Northern demand for cotton paradoxically strengthened slavery while creating Northern free Black communities."},{pts:1,desc:"Complex understanding — e.g., the Market Revolution created the economic context making the Civil War inevitable: Northern free labor ideology directly opposed Southern slave labor capitalism; or the irony that the same Northern manufacturing economy that created opportunities for free Black workers was the primary consumer of slave-produced cotton, making Northern prosperity complicit in Southern slavery."}]}
  ]}
},
{
  type:"LEQ", source:"Princeton Review", year:"Princeton Review Practice Test 5",
  title:"Long Essay Question 4 — Great Depression as Turning Point",
  prompt:"Evaluate the extent to which the Great Depression marked a turning point in the political and economic history of the United States. In the development of your argument, explain what changed and what stayed the same from the period immediately before the Great Depression (1920s) to the period immediately after the Great Depression (1940s).",
  rubric:{total:6,sections:[
    {title:"Thesis / Claim (0–1 point)",rows:[{pts:1,desc:"Defensible thesis addressing EXTENT of change AND continuity — e.g., 'The Great Depression represented a fundamental turning point in American political economy: the federal government permanently assumed responsibility for citizens' economic welfare through Social Security, banking regulation, and labor protections, reversing the laissez-faire consensus of the 1920s — though the underlying capitalist structure, reliance on private enterprise, and skepticism of government intervention persisted as conservative countercurrents that would reassert themselves.' A strong thesis addresses specific political AND economic dimensions."}]},
    {title:"Contextualization (0–1 point)",rows:[{pts:1,desc:"Broader context: the 1920s 'New Era' of Republican laissez-faire economics (Harding-Coolidge-Hoover); the speculative bubble of the 1920s stock market; the Smoot-Hawley Tariff (1930) deepening the Depression internationally; the progressive tradition preceding the New Deal (Theodore Roosevelt, Woodrow Wilson); international context of the Depression producing fascism in Europe."}]},
    {title:"Evidence (0–2 points)",rows:[{pts:1,desc:"At least TWO specific pieces of accurate evidence."},{pts:1,desc:"Change evidence: Social Security (1935); FDIC; SEC; Wagner Act (1935) protecting collective bargaining; federal minimum wage (FLSA 1938); Democratic dominance of national politics 1932–1952; Keynesian deficit spending accepted; TVA as precedent for federal regional development. Continuity evidence: private enterprise remained the economic foundation; capitalism was preserved, not replaced; anti-government conservatism persisted; military spending in WWII, not the New Deal, ended the Depression; racial exclusions in New Deal programs continued pre-existing discrimination."}]},
    {title:"Analysis and Reasoning (0–2 points)",rows:[{pts:1,desc:"Historical reasoning — continuity/change over time comparing 1920s and 1940s political economy."},{pts:1,desc:"Complex understanding — e.g., the New Deal was a conservative turning point — it saved capitalism from more radical alternatives (Huey Long's Share Our Wealth, socialist proposals) by reforming it; or WWII military mobilization actually completed what the New Deal started, making the war's economic management as much a turning point as the Depression itself."}]}
  ]}
}
);

dbqPrompts.push(
{
  type:"DBQ", source:"Princeton Review", year:"Princeton Review Practice Test 5",
  title:"Document-Based Question — North's Victory in the Civil War",
  prompt:"Evaluate the extent to which the North won the Civil War due to advantages in regard to supplies and infrastructure.",
  note:"Use at least SIX of the seven documents. Use at least ONE piece of outside evidence. Explain sourcing for at least THREE documents.",
  documents:[
    {
      label:"Document 1 — 'Scott's Great Snake,' cartoon map illustrating the Anaconda Plan, J.B. Elliott, 1861",
      text:"'Scott's Great Snake' — a cartoon map depicting a giant snake coiling around the Confederate states. The snake represents the Union naval blockade of Southern ports and the control of the Mississippi River, designed to cut off the Confederacy from foreign trade and supplies. The plan divided the Confederacy by controlling the Mississippi River while simultaneously strangling Southern ports from the Atlantic to the Gulf of Mexico. Starting in April 1861, the Anaconda Plan depended upon a Union blockade of Southern ports and called for an advance down the Mississippi River to cut the South in two.",
      attr:"J.B. Elliott, 'Scott's Great Snake,' cartoon map illustrating General Winfield Scott's Anaconda Plan, 1861",
      visual:true,
      imageKey:"pt5_dbq_doc1_anaconda",
      imageType:"cartoon map"
    },
    {
      label:"Document 2 — Map of Confederate territory losses, 1861–1865, Office of the Chief of Military History, United States Army",
      text:"A military history map showing the progression of Union control over Confederate territory from 1861 to 1865. Areas under Union control in 1861 are shown, with additional Confederate territories lost shaded by year: coastal areas fell first (Fort Monroe 1861, Port Royal Nov 1861, New Orleans Apr 1862), followed by interior territories progressing from north to south. The Mississippi River corridor fell by mid-1863 (Vicksburg). Sherman's March accounts for the large swath of Georgia territory taken in 1864. The map shows how the Anaconda Plan's dual strategy of coastal blockade and river control progressively dismembered Confederate territory.",
      attr:"Office of the Chief of Military History, United States Army, 'The Civil War, 1861–1865'",
      visual:true,
      imageKey:"pt5_dbq_doc2_territory",
      imageType:"historical map"
    },
    {
      label:"Document 3 — J.M. Edmunds, Commissioner General Land Office, 'Manufactures of the United States in 1860,' 1865",
      text:"Without our manufacturing capacities whence could we have drawn the materials of war? Not from abroad, for there was hostility of sentiment. Who would have taken our loans? Not the capitalists of England or the Continent, for there the sympathy generally was with the other side. No, it was manufacturing and mechanical resources and the granaries of the West which enables the republic to arm, subsist, and pay immense armies, and create iron-clad fleets to meet the emergency. It was mainly for the want of these, and not for lack of courage, will, or skill, that the revolt failed.",
      attr:"J.M. Edmunds, Commissioner General Land Office, 'Manufactures of the United States in 1860: Compiled from the Original Returns of the Eighth Census,' 1865"
    },
    {
      label:"Document 4 — Comparative resources: Union and Confederate states, 1861",
      text:"Union vs. Confederate resource comparison: Total population 2.5:1 Union; Male population 18–60 yrs 4.4:1 Union; Naval ship tonnage 25:1 Union; Factory production value 10:1 Union; Textile goods production 17:1 Union; Iron production 20:1 Union; Coal production 38:1 Union; Firearms production 32:1 Union; Railroad mileage 2.4:1 Union; Merchant ship tonnage 9:1 Union; Wealth produced 3:1 Union; Farm acreage 3:1 Union; Draft animals 1.8:1 Union; Livestock 1.5:1 Union; Wheat production 4.2:1 Union; Corn production 2:1 Union. Confederate advantage: Cotton production 1:24. By 1864, free men 18–60 in military service: Union 44%, Confederacy 90%.",
      attr:"Comparison of available resources in the Union and the Confederate States in 1861",
      visual:true,
      imageKey:"pt5_dbq_doc4_resources",
      imageType:"comparative chart"
    },
    {
      label:"Document 5 — General William Tecumseh Sherman, comments to Professor David F. Boyd, December 24, 1860",
      text:"You people of the South don't know what you are doing. This country will be drenched in blood, and God only knows how it will end. It is all folly, madness, a crime against civilization! You people speak so lightly of war; you don't know what you're talking about. War is a terrible thing! You mistake, too, the people of the North. They are a peaceable people but an earnest people, and they will fight, too. They are not going to let this country be destroyed without a mighty effort to save it... Besides, where are your men and appliances of war to contend against them? The North can make a steam engine, locomotive, or railway car; hardly a yard of cloth or pair of shoes can you make. You are rushing into war with one of the most powerful, ingeniously mechanical, and determined people on Earth—right at your doors. You are bound to fail. Only in your spirit and determination are you prepared for war. In all else you are totally unprepared, with a bad cause to start with. At first you will make headway, but as your limited resources begin to fail, shut out from the markets of Europe as you will be, your cause will begin to wane. If your people will but stop and think, they must see in the end that you will surely fail.",
      attr:"General William Tecumseh Sherman, comments to Professor David F. Boyd, December 24, 1860"
    },
    {
      label:"Document 6 — General William T. Sherman, Military Division of the Mississippi Special Field Order 120, November 9, 1864",
      text:"IV. The army will forage liberally on the country during the march. To this end, each brigade commander will organize a good and sufficient foraging party, under the command of one or more discreet officers, who will gather, near the route traveled, corn or forage of any kind, meat of any kind, vegetables, corn-meal, or whatever is needed by the command, aiming at all times to keep in the wagons at least ten day's provisions for the command and three days' forage. Soldiers must not enter the dwellings of the inhabitants, or commit any trespass, but during a halt or a camp they may be permitted to gather turnips, apples, and other vegetables, and to drive in stock of their camp... V. To army corps commanders alone is entrusted the power to destroy mills, houses, cotton-gins, &c., and for them this general principle is laid down: In districts and neighborhoods where the army is unmolested no destruction of such property should be permitted; but should guerrillas or bushwhackers molest our march, or should the inhabitants burn bridges, obstruct roads, or otherwise manifest local hostility, then army commanders should order and enforce a devastation more or less relentless according to the measure of such hostility. VI. As for horses, mules, wagons, &c., belonging to the inhabitants, the cavalry and artillery may appropriate freely and without limit...",
      attr:"General William T. Sherman, Military Division of the Mississippi Special Field Order 120, November 9, 1864"
    },
    {
      label:"Document 7 — Jens Anderson, letter to a friend, Army Camp at Murfreesboro, Tennessee, March 1, 1863",
      text:"From your letter of Feb. 20th I see that you have learned about the skirmish we had on Boxing Day. That was but a foretaste of the New Year Party… In the evening of December 29, we were 6 miles from Murfreesboro and 1 mile from the enemy outposts. Due to the immediate proximity of the enemy, we were forbidden to make fires at night, and didn't it rain that night! So there was nothing to do but throw ourselves on the ground and eat a cracker and drink cold water with it, and after that humble meal we had to think about sleep. Those who had any unrolled their blankets, but on account of the rain and the coldness of the night, we did not get any sleep... At 3 p.m. we were suddenly stopped by a large enemy force, which opened a murderous fire at us with two batteries and thousands of muskets. We were immediately ordered to retreat behind a fence where we stayed until nightfall, when we withdrew to the reserve, where we lay that night, embracing our rifles, and almost froze to death... we were attacked at the front by a line three ranks deep, and at the same time they flanked us on both sides, so we were fired at from three sides; this was quite insufferable, we had to get away, and everybody took flight... Our Lieutenant Colonel together with many another brave officer and bold soldier fell here.",
      attr:"Jens Anderson, letter to a friend, Army Camp at Murfreesboro, Tennessee, March 1, 1863"
    }
  ],
  rubric:{total:7,sections:[
    {title:"Thesis / Claim (0–1 point)",rows:[{pts:1,desc:"Defensible thesis establishing a line of reasoning about the EXTENT of supply/infrastructure advantages — e.g., 'The North's overwhelming advantages in manufacturing, railroad infrastructure, naval capacity, and population were the decisive factors enabling the Union to sustain a multi-year war of attrition that the Confederacy, isolated from European markets and lacking industrial capacity, could not match — making material superiority the primary cause of Union victory.' OR more nuanced: 'While the North's enormous advantages in manufacturing and infrastructure were necessary preconditions for Union victory, they were not sufficient — Union victory also required effective military strategy, political leadership, and the Confederacy's inability to sustain morale, making supply superiority a critical but not singular cause.'"}]},
    {title:"Contextualization (0–1 point)",rows:[{pts:1,desc:"Broader historical context: the antebellum economic divergence between North (industrializing) and South (agricultural, slave-based) predating the war; the Market Revolution industrializing the North while the South invested in cotton and slavery; Northern immigration waves providing larger military manpower; the political context of Bleeding Kansas, John Brown's raid, and Lincoln's election precipitating secession; the South's military strategy of defensive war hoping for European intervention and Northern war-weariness."}]},
    {title:"Document Use (0–3 points)",rows:[
      {pts:1,desc:"Accurately describes content of at least 3 documents to address the prompt."},
      {pts:1,desc:"Uses at least 6 documents to support an argument about the extent of supply/infrastructure advantages."},
      {pts:1,desc:"For at least 3 documents, explains HOW point of view, purpose, historical situation, or audience is relevant — e.g., Doc 3 (Edmunds, 1865) is a postwar government assessment, so Edmunds has an interest in validating Union policy and may overstate the manufacturing argument; Doc 5 (Sherman, 1860) was written BEFORE the war began — a prediction, not retrospective analysis, possibly overconfident; Doc 7 (soldier's letter) is a personal account revealing supply shortages on the battlefield, potentially qualifying the 'Northern abundance' thesis."}
    ]},
    {title:"Evidence Beyond Documents (0–1 point)",rows:[{pts:1,desc:"Specific outside evidence: 70% of U.S. railroad mileage was in free states; the Lowell manufacturing system; Pacific Railway Act, Morrill Act, and Homestead Act passed while Southern Democrats were absent from Congress; only 13% of American banks were in Confederate states; Grant's effective use of rail logistics; the Emancipation Proclamation preventing British/French intervention; Sherman's March destroying Southern supply infrastructure; the Confederacy pulled men off the railroad for the war effort leaving railways understaffed."}]},
    {title:"Analysis and Reasoning (0–1 point)",rows:[{pts:1,desc:"Uses historical reasoning to frame the argument — causation: specific industrial advantages directly produced specific military outcomes (naval superiority enabled blockade → Anaconda Plan → territorial losses in Doc 2); OR comparison: contrasts Union industrial capacity with Confederate limitations; OR corroboration: uses Docs 3, 4, and 5 together to build the manufacturing argument while qualifying with Doc 7 to show battlefield complexity."}]},
    {title:"Complexity (0–1 point)",rows:[{pts:1,desc:"Complex understanding — e.g., reconciles tension within documents: Doc 7 (soldier lacking food, nearly freezing) seems to contradict 'Northern abundance' in Docs 3–5, reconciled by noting battlefield logistics were genuinely difficult while the structural advantage remained; OR argues supply/infrastructure were necessary but not sufficient — Confederate will (90% conscription rate per Doc 4) prolonged the war despite Northern material superiority; OR addresses that the Anaconda Plan was not fully successful (25% of Confederate supply lines held) while maintaining the overall argument holds."}]}
  ]}
}
);
