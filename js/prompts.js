const saqPrompts = [
{
  type:"SAQ", year:"2019 AP Exam (Official)",
  title:"Short-Answer Question 1 — Periods 3–5",
  context:"Use the image and your knowledge of United States history to answer all parts of the following question.",
  stimulus:{
    label:"Political Cartoon — 'The Tammany Tiger Loose,' Thomas Nast, Harper's Weekly, 1871",
    visual:true, imageType:"political cartoon", imageKey:"tammany_tiger",
    searchQuery:"Thomas Nast Tammany Tiger Loose Harper's Weekly 1871",
    text:"The cartoon depicts a ferocious tiger (labeled 'Tammany') attacking a woman representing 'The Republic' in a Roman colosseum, while well-dressed officials (Boss Tweed and associates) sit in the royal box watching and applauding. The crowd looks on in horror. Bodies of earlier victims — labeled 'ballot,' 'law,' 'justice' — lie scattered on the arena floor.",
    attr:"Thomas Nast, Harper's Weekly, November 11, 1871"
  },
  parts:[
    "Briefly explain ONE historically specific cause of the political corruption depicted in the cartoon.",
    "Briefly explain ONE way in which reformers in the late nineteenth century attempted to address the political corruption depicted in the cartoon.",
    "Briefly explain ONE way in which the Progressive Era (1890s–1920) continued or changed the reform efforts described in part (b)."
  ],
  rubric:{
    total:3,
    sections:[
      {
        title:"Part A — One Point",
        rows:[
          {pts:1,desc:"Responds to the prompt with a historically defensible thesis/claim that establishes a line of reasoning. Must describe a historically specific cause — e.g., the spoils/patronage system incentivized corruption; rapid urbanization and immigration created clients dependent on machine services; weak civil service laws left government hiring to political discretion; city governments controlled lucrative contracts (streetcar lines, gas mains, construction) that machines sold for kickbacks."}
        ],
        note:"Must be historically specific — 'corruption was common' or 'politicians were greedy' are insufficient."
      },
      {
        title:"Part B — One Point",
        rows:[
          {pts:1,desc:"Explains a specific reform effort to address Gilded Age political corruption — e.g., Pendleton Civil Service Act (1883) established merit-based federal hiring; muckraking journalism (Nast's cartoons, Jacob Riis) exposed corruption to public; state-level civil service reform; direct primaries to reduce boss control over nominations; initiative/referendum/recall to increase democratic accountability; secret ballot (Australian ballot) to reduce vote buying."}
        ]
      },
      {
        title:"Part C — One Point",
        rows:[
          {pts:1,desc:"Explains a specific Progressive Era continuation or change — e.g., 17th Amendment (1913) established direct election of senators, reducing machine influence over Senate appointments; city commission and city manager systems reformed urban governance; Robert La Follette's Wisconsin Idea applied professional expertise to state government; Progressives extended civil service reform to more federal positions; OR argues Progressives shifted focus from political corruption to corporate regulation, representing a change in reform priorities."}
        ]
      }
    ]
  }
},
{
  type:"SAQ", year:"2022 AP Exam (Official)",
  title:"Short-Answer Question 3 — Period 7",
  context:"Answer all parts of the following question.",
  prompt:"Use the following excerpt and your knowledge of United States history to answer all parts of the question.",
  stimulus:{
    label:"Primary Source — W.E.B. Du Bois, 'The Souls of Black Folk,' 1903",
    text:"Mr. Washington represents in Negro thought the old attitude of adjustment and submission; but adjustment at such a peculiar time as to make his programme unique. This is an age of unusual economic development, and Mr. Washington's programme naturally takes an economic cast, becoming a gospel of Work and Money to such an extent as apparently almost completely to overshadow the higher aims of life… Mr. Washington distinctly asks that black people give up, at least for the present, three things: First, political power, Second, insistence on civil rights, Third, higher education of Negro youth — and concentrate all their energies on industrial education, the accumulation of wealth, and the conciliation of the South.",
    attr:"W.E.B. Du Bois, The Souls of Black Folk, 1903"
  },
  parts:[
    "Briefly explain ONE specific aspect of Washington's program that Du Bois criticized in the excerpt.",
    "Briefly explain ONE historical development in the period 1865–1910 that would support Du Bois's critique of Washington's approach.",
    "Briefly explain ONE way in which the debate between Washington and Du Bois reflected a broader tension in American reform movements of the late nineteenth and early twentieth centuries."
  ],
  rubric:{
    total:3,
    sections:[
      {
        title:"Part A — One Point",
        rows:[
          {pts:1,desc:"Identifies and explains a specific criticized aspect — e.g., Du Bois criticizes Washington for asking Black Americans to surrender political power/voting rights; to accept social inequality; to forgo higher education in favor of industrial/vocational training; to adopt a conciliatory posture toward white Southerners who were actively denying rights; to pursue economic progress within the existing discriminatory system rather than challenging the system itself."}
        ]
      },
      {
        title:"Part B — One Point",
        rows:[
          {pts:1,desc:"Provides a historically specific development supporting Du Bois's critique — e.g., passage of Jim Crow laws and Plessy v. Ferguson (1896) showed accommodation did not produce equal rights; systematic disenfranchisement through poll taxes/grandfather clauses/literacy tests that continued despite Black economic progress; lynching epidemic (Ida B. Wells's documentation) demonstrated that economic success did not protect Black Southerners; sharecropping/debt peonage showed economic autonomy was impossible without political rights."}
        ]
      },
      {
        title:"Part C — One Point",
        rows:[
          {pts:1,desc:"Connects the debate to a broader reform tension — e.g., tension between incremental vs. transformative approaches to reform; whether change should work within existing systems or challenge them fundamentally; whether economic improvement or legal/political rights should be the primary focus; parallel debates within the women's suffrage movement (AWSA state approach vs. NWSA federal amendment approach); debate within the labor movement between craft unionism (AFL) and industrial unionism (IWW)."}
        ]
      }
    ]
  }
},
{
  type:"SAQ", year:"2017 AP Exam (Official)",
  title:"Short-Answer Question 2 — Period 5",
  context:"Use the following image and your knowledge of United States history to answer all parts of the question.",
  stimulus:{
    label:"'Reconstruction' — Thomas Nast, Harper's Weekly, 1867",
    visual:true, imageType:"political cartoon", imageKey:"reconstruction",
    searchQuery:"Thomas Nast Reconstruction Harper's Weekly 1867 Franchise",
    text:"The cartoon depicts a Black soldier and a white Union soldier standing side by side, shaking hands over a grave marked 'Slavery.' In the background, freedpeople are shown working fields, attending school, and voting. Broken chains and a document labeled '14th Amendment' appear prominently. Above the scene, Nast wrote: 'Franchise — and Not This Man?'",
    attr:"Thomas Nast, Harper's Weekly, August 5, 1867"
  },
  parts:[
    "Briefly explain ONE argument Nast was making about Reconstruction policy in the cartoon.",
    "Briefly explain ONE specific historical development between 1865 and 1877 that supports Nast's optimistic vision for Reconstruction.",
    "Briefly explain ONE specific historical development between 1865 and 1900 that challenges or complicates Nast's optimistic vision."
  ],
  rubric:{
    total:3,
    sections:[
      {
        title:"Part A — One Point",
        rows:[
          {pts:1,desc:"Identifies a specific argument — e.g., Nast argues that Black men who fought for the Union deserve voting rights (franchise); that Reconstruction should provide full civil and political equality regardless of race; that the 14th Amendment represents genuine national transformation; that formerly enslaved people are capable of self-governance and should not be denied rights granted to others; that racial reconciliation is possible through equal rights rather than mere emancipation."}
        ]
      },
      {
        title:"Part B — One Point",
        rows:[
          {pts:1,desc:"Identifies a specific supporting development — e.g., ratification of 13th, 14th, 15th Amendments; passage of Civil Rights Acts (1866, 1875); Freedmen's Bureau providing education and services; Black men elected to Congress (Hiram Revels, Blanche Bruce) and state legislatures; establishment of historically Black colleges (Howard, Fisk); Republican Reconstruction governments built public school systems in the South."}
        ]
      },
      {
        title:"Part C — One Point",
        rows:[
          {pts:1,desc:"Identifies a specific challenging development — e.g., Compromise of 1877 and withdrawal of federal troops enabling Redeemer governments; KKK and white supremacist violence suppressing Black voting; Black Codes restricting freedpeople's rights; sharecropping replacing slavery as economic exploitation; Plessy v. Ferguson (1896) establishing 'separate but equal'; poll taxes, literacy tests, and grandfather clauses systematically disenfranchising Black voters by 1900."}
        ]
      }
    ]
  }
},
{
  type:"SAQ", year:"2023 AP Exam (Official)",
  title:"Short-Answer Question 1 — Periods 3–4",
  context:"Answer all parts of the following question. Use the excerpt and your knowledge of United States history.",
  stimulus:{
    label:"Primary Source — Alexis de Tocqueville, Democracy in America, 1835",
    text:"I know of no country in which there is so little independence of mind and real freedom of discussion as in America… In America the majority raises formidable barriers around the liberty of opinion; within these barriers an author may write what he pleases, but woe to him if he goes beyond them… He is exposed to continued obloquy and persecution. His political career is closed forever, since he has offended the only authority that is able to open it.",
    attr:"Alexis de Tocqueville, Democracy in America, Volume I, 1835"
  },
  parts:[
    "Briefly explain ONE piece of evidence that would support de Tocqueville's argument about limits on freedom of opinion in the United States in the period 1790–1835.",
    "Briefly explain ONE piece of evidence that would challenge or complicate de Tocqueville's argument in the period 1790–1835.",
    "Briefly explain ONE way in which American democratic culture in the period 1820–1840 either expanded or contracted opportunities for political participation."
  ],
  rubric:{
    total:3,
    sections:[
      {
        title:"Part A — One Point",
        rows:[
          {pts:1,desc:"Evidence supporting de Tocqueville — e.g., Alien and Sedition Acts (1798) criminalized criticism of the federal government; suppression of abolitionist mail in Southern states; social ostracism of those who challenged slavery even in the North; the 'gag rule' in Congress (1836, though slightly later) preventing discussion of antislavery petitions; persecution of Quakers and other religious minorities who deviated from majority norms; social pressure against women who spoke in public on controversial topics."}
        ]
      },
      {
        title:"Part B — One Point",
        rows:[
          {pts:1,desc:"Evidence challenging de Tocqueville — e.g., thriving partisan press with sharp political criticism of every administration; William Lloyd Garrison's Liberator (1831) published radical abolitionism despite hostility; growing women's reform organizations speaking on temperance and other public issues; the Second Great Awakening produced diverse competing religious movements and theological debate; Federalist Papers demonstrated robust constitutional debate; state legislatures debated slavery's legality (Virginia Debate, 1831–32)."}
        ]
      },
      {
        title:"Part C — One Point",
        rows:[
          {pts:1,desc:"Expansion or contraction of political participation — e.g., Jacksonian democracy removed property requirements for white male voting (expansion); Second Great Awakening created new public space for women's moral reform activism (expansion); disenfranchisement of free Black voters in most Northern states in this period (contraction); Indian Removal Act (1830) eliminated Native political presence in the Southeast (contraction); growing role of party conventions and mass rallies in mobilizing ordinary voters (expansion)."}
        ]
      }
    ]
  }
},
{
  type:"SAQ", year:"Princeton Review Style — Period 4/5",
  title:"Short-Answer Question — Periods 4–5",
  context:"Use the image and your knowledge of United States history to answer all parts of the following question.",
  stimulus:{
    label:"John Gast, 'American Progress,' 1872",
    visual:true, imageType:"allegorical painting", imageKey:"american_progress",
    searchQuery:"John Gast American Progress 1872 painting Manifest Destiny",
    text:"An allegorical painting depicting a large angelic female figure (representing 'Columbia' or 'America') floating westward across a vast landscape. She carries a schoolbook under one arm and strings telegraph wire behind her as she moves. To her right (east): railroads, stagecoaches, farms, cattle, and settled towns under a bright sky. To her left (west): darkness, storm clouds, and retreating figures of Native Americans, bison, and bears fleeing into the shadows. Below her, miners, farmers, and settlers move westward.",
    attr:"John Gast, 'American Progress,' 1872. Commissioned by George Crofutt for reproduction in his travel guides."
  },
  parts:[
    "Briefly explain ONE historically specific idea or belief about westward expansion that the painting expresses.",
    "Briefly explain ONE historical development in the period 1820–1860 that would support the painting's portrayal of westward expansion as positive and inevitable.",
    "Briefly explain ONE historical development in the period 1820–1880 that would challenge or complicate the painting's portrayal of westward expansion."
  ],
  rubric:{
    total:3,
    sections:[
      {title:"Part A — One Point",rows:[{pts:1,desc:"Identifies a specific idea expressed — e.g., Manifest Destiny ideology that American expansion was divinely ordained; the belief that Anglo-American 'civilization' (represented by telegraph, schoolbook, farms) was inherently superior to and would naturally replace Native cultures; the notion that western lands were 'empty' and available for settlement despite Native occupation; the idea that technological progress (railroads, telegraph) justified and accompanied expansion; Social Darwinist ideas that stronger civilizations naturally displaced weaker ones."}]},
      {title:"Part B — One Point",rows:[{pts:1,desc:"Specific supporting development — e.g., the Mexican-American War (1846–48) adding California and the Southwest; the Homestead Act (1862) offering 160 acres to settlers; the Oregon Trail and mass westward migration in the 1840s; the California Gold Rush (1848–49) and '49ers; the Transcontinental Railroad completed (1869); the Gadsden Purchase (1853) completing the continental U.S.; booster publications like Crofutt's travel guides (the painting's commissioner) promoting western settlement."}]},
      {title:"Part C — One Point",rows:[{pts:1,desc:"Specific challenging development — e.g., the Trail of Tears (1838–39) and forced removal of Native peoples contradicting the peaceful displacement depicted; Sand Creek Massacre (1864) demonstrating violent reality of westward expansion; Wounded Knee (1890); the destruction of the Great Plains bison herds through commercial hunting; the reservation system and its destruction of Native economies and cultures; the Chinese Exclusion Act (1882) showing that 'progress' was racially defined; John Wesley Powell's report demonstrating the West's ecological limits for agriculture."}]}
    ]
  }
},
{
  type:"SAQ", year:"Princeton Review Style — Period 6",
  title:"Short-Answer Question — Period 6",
  context:"Use the image and your knowledge of United States history to answer all parts of the following question.",
  stimulus:{
    label:"Thomas Nast, '\"Who Stole the People's Money?\" — Do Tell. N.Y. Times. \"'Twas Him.\"' Harper's Weekly, August 19, 1871",
    visual:true, imageType:"political cartoon", imageKey:"who_stole",
    searchQuery:"Thomas Nast Who Stole the Peoples Money Tammany Ring Harper's Weekly 1871",
    text:"A political cartoon depicting a circle of Tammany Hall politicians — each pointing at the others — with the caption '\"Who Stole the People's Money?\" — Do Tell. N.Y. Times. \"'Twas Him.\"' The men stand in a ring, each blaming his neighbor, with their backs labeled with the names of corrupt contractors who overbilled the city: Keyser & Co. Gas Pipes, J.W. Smith Awnings, Carpenter, Miller, John Smith Furniture. Boss Tweed (the largest figure, center-left) is recognizable by his distinctive build.",
    attr:"Thomas Nast, Harper's Weekly, August 19, 1871. Signed 'Th. Nast' in the upper right."
  },
  parts:[
    "Briefly explain ONE argument Nast is making about Gilded Age political corruption in the cartoon.",
    "Briefly explain ONE historically specific cause of the political corruption depicted in the cartoon.",
    "Briefly explain ONE way in which Progressive Era reformers attempted to address the type of political corruption depicted in the cartoon."
  ],
  rubric:{
    total:3,
    sections:[
      {title:"Part A — One Point",rows:[{pts:1,desc:"Identifies a specific argument — e.g., that corrupt politicians avoid individual accountability by collectively blaming each other (the circular pointing); that the Tammany Ring's corruption was systematic rather than individual (multiple labeled contractors); that the New York Times's exposure ('Do Tell') was essential to revealing the corruption; that corrupt officials publicly disclaimed responsibility while privately profiting; that the ring protected each other through collective guilt and collective denial."}]},
      {title:"Part B — One Point",rows:[{pts:1,desc:"Identifies a historically specific cause — e.g., the spoils/patronage system incentivized corruption by making government contracts political rewards; the rapid urbanization of New York created enormous opportunities for profit through city infrastructure contracts; weak civil service laws left government hiring to political discretion; Tammany's control of city government gave it authority over lucrative contracts for gas lines, courthouses, paving, etc.; the absence of effective investigative journalism until muckrakers like the Times; corruption was structural — officeholders expected to profit from office."}]},
      {title:"Part C — One Point",rows:[{pts:1,desc:"Identifies a specific Progressive Era reform — e.g., Pendleton Civil Service Act (1883) and its expansion established merit-based hiring; direct primary elections reduced machine control over nominations; the Australian (secret) ballot reduced vote-buying; the 17th Amendment (1913) direct election of senators reduced machine influence over Senate; initiative, referendum, and recall gave citizens direct democratic tools; city commission and city manager governments professionalized city administration; muckraking journalism (Lincoln Steffens's 'Shame of the Cities') sustained public pressure for reform."}]}
    ]
  }
},
{
  type:"SAQ", year:"Princeton Review Style — Period 9",
  title:"Short-Answer Question — Period 9",
  context:"Use the following excerpts and your knowledge of United States history to answer all parts of the question.",
  stimulus:{
    label:"Primary Sources — Vietnam War and the Credibility Gap, 1968",
    text:"'We have been too often disappointed by the optimism of the American leaders, both in Vietnam and Washington, to have faith any longer in the silver linings they find in the darkest clouds... For it seems now more certain than ever that the bloody experience of Vietnam is to end in a stalemate... it is increasingly clear to this reporter that the only rational way out then will be to negotiate, not as victors, but as an honorable people who lived up to their pledge to defend democracy, and did the best they could.' — Walter Cronkite, CBS Evening News editorial, February 27, 1968, following the Tet Offensive",
    attr:"Walter Cronkite, CBS Evening News, February 27, 1968. President Johnson reportedly said after watching: 'If I've lost Cronkite, I've lost Middle America.'"
  },
  parts:[
    "Briefly explain ONE historically specific event or development that contributed to the 'credibility gap' between official government statements about Vietnam and public perception by 1968.",
    "Briefly explain ONE way in which the Tet Offensive (January 1968) affected American public opinion about the Vietnam War.",
    "Briefly explain ONE long-term consequence of the Vietnam War for American political culture or foreign policy after 1973."
  ],
  rubric:{
    total:3,
    sections:[
      {title:"Part A — One Point",rows:[{pts:1,desc:"Identifies a specific contributing event — e.g., the Gulf of Tonkin Resolution (1964) based on a disputed or fabricated second attack; the 'Five O'Clock Follies' (daily military briefings in Saigon that journalists found misleading); systematic underreporting of casualties; the 'body count' metric that created perverse incentives for inflated numbers; the Pentagon Papers (published 1971, revealing earlier decisions) — though published after 1968, their content documented the earlier gap; William Westmoreland's optimistic public statements in November 1967 ('we have reached an important point when the end begins to come into view') followed immediately by Tet."}]},
      {title:"Part B — One Point",rows:[{pts:1,desc:"Explains a specific effect on public opinion — e.g., the simultaneous attacks on over 100 South Vietnamese cities including the U.S. Embassy compound directly contradicted official assurances of progress; Cronkite's editorial reached tens of millions and gave anti-war sentiment mainstream legitimacy; LBJ's approval ratings fell sharply; LBJ announced he would not seek re-election (March 31, 1968); the 'credibility gap' became the dominant media frame for the war; anti-war protests escalated; Eugene McCarthy's near-victory in New Hampshire primary reflected Democratic anti-war sentiment."}]},
      {title:"Part C — One Point",rows:[{pts:1,desc:"Identifies a specific long-term consequence — e.g., the 'Vietnam Syndrome' — public and congressional reluctance to commit military force abroad without clear objectives and exit strategies; the War Powers Resolution (1973) requiring congressional notification and authorization of troop deployments; increased media skepticism of government military claims (affecting coverage of subsequent conflicts); the template of anti-war protest movements; the normalization of conscientious objection and draft resistance; Carter's and Reagan's different responses to the syndrome (Carter's restraint vs. Reagan's attempt to restore 'pride'); the all-volunteer military replacing the draft."}]}
    ]
  }
}
];

// ═══════════════════════════════════════════════════════════════════════
// ██████████████  LEQ PROMPTS  ████████████████████████████████████████
// ═══════════════════════════════════════════════════════════════════════
const leqPrompts = [
{
  type:"LEQ", year:"2019 AP Exam (Official)",
  title:"Long Essay Question 2 — Period 4",
  prompt:"Evaluate the extent to which the market revolution of the early nineteenth century transformed the United States economy and society.",
  note:"In your essay, develop a historically defensible thesis. Use specific evidence. Demonstrate complex understanding through one of the following: explaining nuance by analyzing multiple variables; explaining both similarity AND difference, both continuity AND change, both cause AND effect; explaining relevant connections across time periods, geographical areas, or themes; qualifying or modifying the argument by considering diverse or alternative perspectives.",
  rubric:{
    total:6,
    sections:[
      {
        title:"Thesis / Claim (0–1 point)",
        rows:[
          {pts:1,desc:"Responds to the prompt with a historically defensible thesis that establishes a line of reasoning. Must be more than a restatement of the prompt. Must make a historically defensible claim about the EXTENT of transformation — e.g., 'The market revolution fundamentally transformed American society by commercializing agriculture, expanding wage labor, and creating distinct regional economies, though it reinforced rather than eliminated existing social hierarchies based on race and gender.'"}
        ],
        note:"A thesis that only identifies one aspect without establishing a line of reasoning about extent does NOT earn the point."
      },
      {
        title:"Contextualization (0–1 point)",
        rows:[
          {pts:1,desc:"Accurately describes a broader historical context relevant to the prompt AND explains its connection. Relevant contexts: Jeffersonian agrarian ideal and its tension with commercial development; transportation revolution (canals, railroads, steamboats) enabling national markets; Second Great Awakening's relationship to reform culture; international cotton economy linking American agriculture to British industrialization; tensions with Native American removal as market expansion required land; earlier colonial mercantile economy."}
        ],
        note:"Must be more than a phrase — must explain how the context is relevant to the argument."
      },
      {
        title:"Evidence (0–2 points)",
        rows:[
          {pts:1,desc:"Uses at least TWO specific pieces of accurate evidence relevant to the argument."},
          {pts:1,desc:"Uses specific evidence to support an argument in response to the prompt (not merely describing evidence). Examples: Lowell System's factory girls representing new wage labor; Erie Canal (1825) transforming western agricultural markets; cotton gin's expansion of plantation slavery; growth of cities (NYC population growth); interchangeable parts / mass production; decline of artisan crafts; cult of domesticity separating market and domestic spheres; growth of middle class with disposable income."}
        ]
      },
      {
        title:"Analysis and Reasoning (0–2 points)",
        rows:[
          {pts:1,desc:"Uses historical reasoning skill — causation, comparison, or continuity/change over time — to frame an argument addressing the prompt. E.g., explains how causes of market revolution (transportation improvements, technological innovation, legal changes) led to specific social effects; or compares regional differences in how the market revolution transformed North vs. South vs. West."},
          {pts:1,desc:"Demonstrates complex understanding — explains both transformation AND continuity (e.g., market revolution transformed the economy but reinforced gender hierarchy through cult of domesticity); or explains causes AND effects; or makes relevant connection to another period (e.g., how market revolution developments directly shaped Civil War-era sectional crisis)."}
        ]
      }
    ]
  }
},
{
  type:"LEQ", year:"2022 AP Exam (Official)",
  title:"Long Essay Question 3 — Period 7",
  prompt:"Evaluate the extent to which the First World War (1914–1918) transformed American society.",
  note:"In your essay, develop a historically defensible thesis. Use specific evidence. Demonstrate complex understanding.",
  rubric:{
    total:6,
    sections:[
      {
        title:"Thesis / Claim (0–1 point)",
        rows:[
          {pts:1,desc:"Must establish a defensible line of reasoning about the EXTENT of transformation — e.g., 'WWI profoundly transformed American society by accelerating the Great Migration, expanding government's role in the economy, and producing the First Red Scare's assault on civil liberties, but its transformative potential was limited by the rejection of Wilsonian internationalism and a postwar return to conservative normalcy.'"}
        ]
      },
      {
        title:"Contextualization (0–1 point)",
        rows:[
          {pts:1,desc:"Relevant contexts: Progressive Era reform movements that shaped the wartime state; the existing status of African Americans under Jim Crow that the war disrupted; American immigration patterns and nativist sentiment that preceded and shaped wartime anxiety; the tradition of American non-entanglement that Wilson had to overcome; the Russian Revolution (1917) as context for Red Scare."}
        ]
      },
      {
        title:"Evidence (0–2 points)",
        rows:[
          {pts:1,desc:"Uses at least two specific pieces of accurate evidence."},
          {pts:1,desc:"Specific evidence used to support the argument: Great Migration accelerated by war labor demands; women entering the industrial workforce; War Industries Board, Food Administration, CPI — government intervention in the economy; Espionage Act (1917) and Sedition Act (1918) restricting dissent; conscription / Selective Service Act (1917); victory gardens / liberty bonds normalizing federal mobilization; soldiers' experiences with racial segregation in the military; Harlem Renaissance partly a product of Great Migration demographic shift."}
        ]
      },
      {
        title:"Analysis and Reasoning (0–2 points)",
        rows:[
          {pts:1,desc:"Uses historical reasoning skill to frame the argument — e.g., continuity/change: identifies both transformative aspects AND areas of continuity (women's wartime work did not produce suffrage immediately; Black soldiers returned to Jim Crow; Red Scare represented continuity with prewar nativism)."},
          {pts:1,desc:"Complex understanding — explains tensions or contradictions (war expanded government power but produced backlash against government power in the 1920s; mobilized African Americans for democracy abroad while facing oppression at home — 'Double V' precursor); or connects to longer arc of civil liberties development; or explains how different groups experienced the war's transformations differently."}
        ]
      }
    ]
  }
},
{
  type:"LEQ", year:"2021 AP Exam (Official)",
  title:"Long Essay Question 2 — Period 5",
  prompt:"Evaluate the extent to which the Mexican-American War (1846–1848) was a turning point in the coming of the Civil War.",
  note:"In your essay, develop a historically defensible thesis. Use specific evidence. Demonstrate complex understanding.",
  rubric:{
    total:6,
    sections:[
      {
        title:"Thesis / Claim (0–1 point)",
        rows:[
          {pts:1,desc:"Must establish a defensible line of reasoning about whether the war was a turning point — e.g., 'The Mexican-American War represented a critical turning point in the sectional crisis by forcing the question of slavery's expansion into newly acquired territory onto the national agenda, destroying the decades-long pattern of compromise and producing the political realignment that made Southern secession all but inevitable.'"}
        ]
      },
      {
        title:"Contextualization (0–1 point)",
        rows:[
          {pts:1,desc:"Relevant contexts: Missouri Compromise (1820) and the existing political system for managing slavery's expansion; Manifest Destiny ideology driving territorial ambition; the annexation of Texas controversy (1845) that immediately preceded the war; the earlier pattern of sectionalism over tariffs and the nullification crisis; the existing compromise politics of Clay and others."}
        ]
      },
      {
        title:"Evidence (0–2 points)",
        rows:[
          {pts:1,desc:"Uses at least two specific pieces of accurate evidence."},
          {pts:1,desc:"Evidence used to support the argument: Wilmot Proviso (1846) — first direct congressional proposal to exclude slavery from new territories; Compromise of 1850 (California, Fugitive Slave Act, popular sovereignty) as attempt to manage the crisis the war created; Free Soil Party formation (1848) demonstrating new political alignment; Kansas-Nebraska Act (1854) — direct consequence of need to organize territory acquired (indirectly) from Mexican Cession; Dred Scott decision ruling on status of Mexican Cession territory; Republican Party formation (1854) completing the political realignment."}
        ]
      },
      {
        title:"Analysis and Reasoning (0–2 points)",
        rows:[
          {pts:1,desc:"Uses causation or continuity/change reasoning to frame the argument — e.g., explains how the war's territorial acquisition directly caused specific subsequent political crises; or argues the war accelerated but did not originate sectional tensions (which dated to the Missouri Crisis)."},
          {pts:1,desc:"Complex understanding — qualifies the argument (the war was a turning point but the underlying sectional conflict over slavery predated it by decades — the war accelerated rather than created the crisis); or explains multiple effects (economic, political, social); or connects to the longer arc of sectionalism from Missouri Crisis through secession."}
        ]
      }
    ]
  }
},
{
  type:"LEQ", year:"2023 AP Exam (Official)",
  title:"Long Essay Question 3 — Period 8",
  prompt:"Evaluate the extent to which the New Deal represented a significant departure from previous approaches to the relationship between the federal government and the economy.",
  note:"In your essay, develop a historically defensible thesis. Use specific evidence. Demonstrate complex understanding.",
  rubric:{
    total:6,
    sections:[
      {
        title:"Thesis / Claim (0–1 point)",
        rows:[
          {pts:1,desc:"Must establish a defensible line of reasoning about the extent of departure — e.g., 'The New Deal represented a fundamental departure from the laissez-faire tradition by establishing the federal government's permanent responsibility for citizens' economic security, though it preserved the capitalist system and fell far short of the structural transformation that European social democracies undertook during the same period.'"}
        ]
      },
      {
        title:"Contextualization (0–1 point)",
        rows:[
          {pts:1,desc:"Relevant contexts: Gilded Age laissez-faire ideology and Social Darwinism; Progressive Era precedents for federal economic regulation (Sherman Act, ICC, Federal Reserve, FTC); Hoover's response to the Depression (voluntarism, limited intervention); international context of Keynesian economics and European social democracy; fears of fascism and communism as alternatives to liberal capitalism."}
        ]
      },
      {
        title:"Evidence (0–2 points)",
        rows:[
          {pts:1,desc:"Uses at least two specific pieces of accurate evidence."},
          {pts:1,desc:"Evidence: Bank Holiday and FDIC (federal bank regulation); AAA (federal agricultural price support); NIRA and later Wagner Act (federal labor relations); Social Security Act (federal social insurance); PWA, WPA, CCC (direct federal employment); TVA (federal regional development); Securities Exchange Act and SEC (federal financial regulation); Glass-Steagall separating commercial and investment banking; OR continuity evidence: New Deal preserved private ownership, restored rather than replaced capitalism, excluded many workers from benefits."}
        ]
      },
      {
        title:"Analysis and Reasoning (0–2 points)",
        rows:[
          {pts:1,desc:"Uses historical reasoning skill — causation (Depression conditions caused political space for unprecedented federal action); or continuity/change (identifies both departures AND continuities with Progressive Era)."},
          {pts:1,desc:"Complex understanding — explains the New Deal's internal contradictions (expanded federal power while appeasing Southern Democrats by excluding Black workers; helped agriculture by reducing supply while farmers needed income); or compares American New Deal to international alternatives (less transformative than Scandinavian social democracy, more moderate than fascist or communist state control); or traces long-term consequences for American political economy."}
        ]
      }
    ]
  }
},
{
  type:"LEQ", year:"Princeton Review Style — Period 3",
  title:"Long Essay Question — Period 3",
  prompt:"Evaluate the extent to which the Articles of Confederation represented an inadequate framework for governing the new United States in the period 1781–1789.",
  note:"In your essay, develop a historically defensible thesis. Use specific evidence. Demonstrate complex understanding.",
  rubric:{
    total:6,
    sections:[
      {
        title:"Thesis / Claim (0–1 point)",
        rows:[
          {pts:1,desc:"Must establish a defensible line of reasoning about the extent of inadequacy — e.g., 'The Articles of Confederation created a fatally weak national government that could neither tax, enforce laws, nor manage interstate commerce, making the Constitutional Convention essential — though the Articles did successfully manage western land policy through the Northwest Ordinance, demonstrating that the framework was not entirely without achievement.'"}
        ],
        note:"A thesis that only says 'the Articles were weak' without specifying why or qualifying the claim does NOT earn the point."
      },
      {
        title:"Contextualization (0–1 point)",
        rows:[
          {pts:1,desc:"Relevant contexts: The revolutionary experience of resisting a powerful central government (Parliament/Crown) that made colonists deeply suspicious of concentrated national power; the tradition of colonial self-governance through assemblies; the Confederation Congress's successful conduct of the Revolutionary War despite structural weaknesses; the international context of post-war debt and diplomatic isolation that stressed the new government; the philosophical influence of republicanism and fear of tyranny. <strong>Example of strong contextualization:</strong> 'The revolutionaries' bitter experience with British parliamentary taxation without representation created a foundational distrust of centralized fiscal authority — making the Articles' prohibition on federal taxation not a design flaw but a deliberately chosen protection against repeating what colonists saw as Parliament's tyranny. This revolutionary inheritance made the Articles' weaknesses features, not bugs, from the perspective of those who wrote them.'"}
        ],
        note:"Must be more than a brief mention — must explain how the context is relevant to understanding why the Articles were designed as they were."
      },
      {
        title:"Evidence (0–2 points)",
        rows:[
          {pts:1,desc:"Uses at least TWO specific pieces of accurate evidence relevant to the argument."},
          {pts:1,desc:"Uses specific evidence to support an argument about the Articles' adequacy or inadequacy. Examples of evidence: Congress could not compel states to pay requisitions — by 1786 the federal government was effectively bankrupt; Congress could not regulate interstate commerce, producing trade wars between states; Congress could not enforce treaties (Jay-Gardoqui Treaty negotiations exposed this); Shays's Rebellion (1786) — Congress had no power to fund a military response; Northwest Ordinance (1787) — successful land policy; Articles required unanimous consent for amendment, making reform impossible; no federal judiciary to resolve interstate disputes; no executive to enforce legislation."}
        ]
      },
      {
        title:"Analysis and Reasoning (0–2 points)",
        rows:[
          {pts:1,desc:"Uses historical reasoning skill to frame the argument — e.g., continuity/change: the Articles represented continuity with colonial legislative supremacy and change from British executive power; or causation: explains how specific structural weaknesses caused specific policy failures (inability to tax → inability to fund army → inability to respond to Shays's Rebellion)."},
          {pts:1,desc:"Complex understanding — qualifies the argument by acknowledging the Articles' genuine achievements (Northwest Ordinance, managing the war) while explaining why fiscal and enforcement weaknesses were ultimately fatal; or explains how different groups (debtors, creditors, merchants, farmers, large vs. small states) had conflicting assessments of whether the Articles were adequate; or connects the Articles' failure to the specific design choices made in the Constitution that directly addressed each weakness."}
        ]
      }
    ]
  }
},
{
  type:"LEQ", year:"Princeton Review Style — Period 9",
  title:"Long Essay Question — Period 9",
  prompt:"Evaluate the extent to which the Cold War shaped American domestic society and politics in the period 1945–1968.",
  note:"In your essay, develop a historically defensible thesis. Use specific evidence. Demonstrate complex understanding.",
  rubric:{
    total:6,
    sections:[
      {
        title:"Thesis / Claim (0–1 point)",
        rows:[
          {pts:1,desc:"Must establish a defensible line of reasoning about the extent of the Cold War's domestic impact — e.g., 'The Cold War profoundly shaped American domestic life by fueling McCarthyism's assault on civil liberties, accelerating suburbanization through defense spending, and paradoxically empowering the civil rights movement — whose leaders exploited America's Cold War need for international credibility to pressure the federal government into racial reform.'"}
        ]
      },
      {
        title:"Contextualization (0–1 point)",
        rows:[
          {pts:1,desc:"Relevant contexts: The post-WWII economic boom and consumer culture that Cold War military spending partly fueled; the legacy of wartime sacrifice and patriotism that made anti-communist sentiment politically potent; the demographic shifts of the Great Migration that created the Northern Black political constituency that could pressure federal civil rights action; the New Deal's expansion of federal government that made government a more consequential arena for Cold War competition; the international decolonization movement that connected American racial politics to Cold War competition in Africa and Asia. <strong>Example of strong contextualization:</strong> 'The Soviet Union's systematic exploitation of American racial segregation as anti-American propaganda — broadcasting photographs of Jim Crow violence to newly independent African and Asian nations — transformed the civil rights movement from a domestic moral question into a Cold War strategic imperative, giving Presidents Eisenhower and Kennedy foreign policy reasons to act on civil rights that purely domestic politics had not compelled.'"}
        ],
        note:"Must explain the connection between the context and the extent of Cold War domestic impact — not just describe the Cold War setting."
      },
      {
        title:"Evidence (0–2 points)",
        rows:[
          {pts:1,desc:"Uses at least TWO specific pieces of accurate evidence relevant to the argument."},
          {pts:1,desc:"Evidence supporting the Cold War's domestic impact: HUAC investigations and Hollywood blacklist; Loyalty Review Boards (Executive Order 9835); McCarthyism and Senate investigations; Federal Civil Defense Administration (duck-and-cover drills); Interstate Highway Act (1956) — justified partly for military evacuation routes; GI Bill and suburban expansion; National Defense Education Act (1958) — direct Cold War response to Sputnik; NSC-68 and permanent military-industrial complex; Lavender Scare (persecution of gay federal employees as security risks); civil rights leaders explicitly invoking Cold War logic; Korean War's domestic political fallout (1952 election)."}
        ]
      },
      {
        title:"Analysis and Reasoning (0–2 points)",
        rows:[
          {pts:1,desc:"Uses historical reasoning skill — causation: explains how Soviet international pressure or military competition caused specific domestic policy changes; or continuity/change: identifies both Cold War-driven changes (NDEA, McCarthyism) and continuities with pre-war patterns (racism, red scares dating to 1919)."},
          {pts:1,desc:"Complex understanding — explains the paradox that the Cold War simultaneously suppressed domestic dissent (McCarthyism) AND created space for civil rights reform (Cold War credibility argument); or distinguishes between groups differently affected (Black Americans, women who entered and exited workforce, suburban white middle class, union members subject to anti-communist purges); or connects the Cold War's domestic effects to longer-term consequences (the Vietnam War's domestic political impact, the 1960s counterculture as reaction against Cold War conformity)."}
        ]
      }
    ]
  }
}
];

// ═══════════════════════════════════════════════════════════════════════
// ██████████████  DBQ PROMPTS  ████████████████████████████████████████
// ═══════════════════════════════════════════════════════════════════════
const dbqPrompts = [
{
  type:"DBQ", year:"2019 AP Exam (Official)",
  title:"Document-Based Question — Period 6",
  context:"Evaluate the extent to which the Gilded Age political machines represented a democratic or anti-democratic force in American political life.",
  prompt:"Using the documents AND your knowledge of the period 1865–1900, construct an argument that evaluates the extent to which political machines were a democratic or anti-democratic force.",
  documents:[
    {
      label:"Document 1 — George Washington Plunkitt, 'Plunkitt of Tammany Hall,' 1905",
      text:"I've been readin' a lot in the papers about civil service reform, and I want to give you my opinion of it. I may be wrong, but I think I'm right. When the people elect a man to office, they expect him to look after their interests and after the interests of his friends. I see my opportunity and I take it. I go to every fire in my district. If a family is burned out, I don't ask whether they are Republicans or Democrats, I just get quarters for them, buy clothes for them if their clothes were burned up, and fix them up till they get things runnin' again.",
      attr:"George Washington Plunkitt, Tammany Hall district leader, as recorded by William Riordon, 1905"
    },
    {
      label:"Document 2 — Thomas Nast, 'The Tammany Tiger Loose,' Harper's Weekly, 1871",
      visual:true, imageType:"political cartoon", imageKey:"tammany_tiger",
      searchQuery:"Thomas Nast Tammany Tiger Loose Harper's Weekly 1871",
      text:"A political cartoon depicting a ferocious tiger labeled 'Tammany' attacking a woman representing 'The Republic' on the floor of a Roman colosseum. Boss Tweed and his ring of associates sit in the royal box, watching and applauding. The crowd looks on in horror from the stands. Bodies of earlier victims — labeled 'ballot,' 'law,' and 'justice' — lie scattered on the arena floor. The caption reads: 'What are you going to do about it?'",
      attr:"Thomas Nast, Harper's Weekly, November 11, 1871"
    },
    {
      label:"Document 3 — New York World, Interview with Irish Immigrant, 1886",
      text:"When my family came off the boat at Castle Garden, we didn't know a soul in New York. It was the ward boss, Michael Murphy, who met us and helped us find rooms in the Sixth Ward. When my husband got sick, Mr. Murphy found him work as soon as he recovered. My oldest boy, when he got in trouble with the police — not serious trouble — it was Mr. Murphy who smoothed things over. We vote Tammany, yes. What other party has ever done a single thing for us?",
      attr:"New York World, interview with recent Irish immigrant, 1886"
    },
    {
      label:"Document 4 — Josephine Shaw Lowell, 'Public Relief and Private Charity,' 1884",
      text:"The indiscriminate giving of relief by political clubs and ward bosses is one of the most powerful instruments for the degradation and pauperization of the poor. It teaches the poor to look to politics for subsistence instead of to honest work. It creates a class of voters who are essentially dependent — not upon their own exertions — but upon the bounty of political masters who expect and receive their votes as the price of assistance. This is not democracy; it is feudalism in modern dress.",
      attr:"Josephine Shaw Lowell, social reformer, 1884"
    },
    {
      label:"Document 5 — Theodore Roosevelt, 'American Ideals,' 1897",
      text:"The spoils system, the application of the maxim that 'to the victors belong the spoils,' treats public office as the reward of political service and turns the civil service into a vast political machine. It poisons politics at the source; it destroys efficiency in the public service; and it makes it almost impossible for an honest man who tries to serve the people well to remain in public life. The pendleton Act was a first step; the reform must go further.",
      attr:"Theodore Roosevelt, 'American Ideals and Other Essays,' 1897"
    },
    {
      label:"Document 6 — Charles Francis Murphy, Tammany Hall Leader, Interview, 1910",
      text:"People say Tammany is corrupt. I say Tammany performs the functions that organized charity and government bureaucracy have failed to perform. We are the intermediaries between the poor immigrant and the indifferent machinery of government. Our 'corruption,' as they call it, is the fee we charge for services rendered. The reformers want to reform the poor out of our help. They would replace practical assistance with settlement houses run by college women who don't speak the language and don't understand the neighborhood.",
      attr:"New York Times, interview with Charles Francis Murphy, Tammany Hall Leader, 1910"
    },
    {
      label:"Document 7 — New York State Legislature, Report of the Lexow Committee, 1895",
      text:"The evidence before this committee establishes beyond any reasonable doubt that the Police Department of the City of New York has for years been conducted primarily for the benefit of the Tammany Hall political organization. Promotions in the police force were sold for thousands of dollars. Gambling houses, houses of prostitution, and policy shops operated under police protection purchased from Tammany's nominees. Election fraud was systematic: ballot boxes were stuffed, opposition poll watchers were driven away, and the naturalization of thousands of non-eligible voters was arranged in the weeks before elections.",
      attr:"New York State Senate, Lexow Committee Report on the New York City Police Department, 1895"
    }
  ],
  note:"Note: A full response will use AT LEAST four of the documents to construct the argument. Use the documents AND your outside knowledge.",
  rubric:{
    total:7,
    sections:[
      {
        title:"Thesis / Claim (0–1 point)",
        rows:[
          {pts:1,desc:"Responds with a historically defensible thesis establishing a line of reasoning. Must go beyond restating the prompt. A strong thesis might argue: 'Political machines were fundamentally anti-democratic because they corrupted elections and government for private gain (Docs 2,4,5,7), but they simultaneously provided genuine democratic representation for immigrant communities ignored by mainstream reform politics (Docs 1,3,6) — creating a paradox in which the most accessible democratic institution for marginalized urban populations was itself undemocratic in its methods.'"}
        ]
      },
      {
        title:"Contextualization (0–1 point)",
        rows:[
          {pts:1,desc:"Accurately describes and explains the BROADER context relevant to the prompt — must be more than a phrase, must explain how it is relevant. Strong contexts: rapid urbanization and immigration creating populations who needed services machines provided; weak government social safety net leaving machine welfare as the only alternative; Gilded Age laissez-faire ideology that opposed government social services; the patronage/spoils system that made machine control of jobs politically powerful; the reformers' nativist undertones (settlement houses for immigrants who 'don't understand the neighborhood' — Doc 6)."}
        ]
      },
      {
        title:"Evidence — Document Use (0–3 points)",
        rows:[
          {pts:1,desc:"Uses content from at least THREE documents accurately to address the argument."},
          {pts:1,desc:"Uses content from at least SIX documents accurately to address the argument."},
          {pts:1,desc:"Explains how or why at least ONE document's point of view, purpose, historical situation, or audience is relevant to the argument. E.g., Plunkitt (Doc 1) is a self-interested party defending his own practices — his claim that machines served all regardless of party reflects the machine's transactional logic but may understate its coercive elements; Josephine Shaw Lowell (Doc 4) represents upper-class reform perspectives that may underestimate immigrants' genuine need for machine services; Harper's Weekly (Doc 2) reflects middle-class reformer perspective that prioritizes fiscal integrity over social services."}
        ]
      },
      {
        title:"Evidence — Beyond the Documents (0–1 point)",
        rows:[
          {pts:1,desc:"Uses at least ONE piece of outside evidence not found in the documents to support the argument. Examples: Tammany Hall's role in Irish-American political incorporation; Boss Tweed's actual conviction and imprisonment in 1871; Pendleton Civil Service Act (1883) as reform response; the Lexow Committee's documented electoral fraud; settlement house movement (Jane Addams, Hull House) as reformer alternative to machine services; Progressives' use of direct primaries and Australian ballot to reduce machine power; specific machine-built infrastructure (courthouses, Tweed Ring's courthouse cost overruns); or examples from other cities (Chicago's Hinky Dink, Kansas City's Pendergast)."}
        ]
      },
      {
        title:"Analysis and Reasoning (0–1 point)",
        rows:[
          {pts:1,desc:"Demonstrates COMPLEX understanding of the historical development. Options: Explains both democratic AND anti-democratic dimensions rather than treating machines as simply one or the other; connects the debate about machines to broader Progressive Era reform arguments; explains how machines' democratic inclusivity for some (immigrants) was achieved at the cost of democratic process (electoral fraud) affecting all; qualifies the argument by acknowledging that reformers' alternatives (civil service, settlement houses) had their own exclusions; explains the historical contingency — machines were most powerful before the welfare state made their services redundant."}
        ]
      }
    ]
  }
},
{
  type:"DBQ", year:"2016 AP Exam (Official)",
  title:"Document-Based Question — Period 7",
  context:"Evaluate the extent to which the Progressive movement transformed American society and government in the period 1890–1920.",
  prompt:"Using the documents AND your knowledge of the period, construct an argument that evaluates the extent to which the Progressive movement transformed American society and government.",
  documents:[
    {
      label:"Document 1 — Upton Sinclair, The Jungle, 1906 (excerpt)",
      text:"There was never the least attention paid to what was cut up for sausage; there would come all the way back from Europe old sausage that had been rejected, and that was moldy and white — it would be dosed with borax and glycerine, and dumped into the hoppers, and made over again for home consumption. There would be meat stored in great piles in rooms; and the water from leaky roofs would drip over it, and thousands of rats would race about on it.",
      attr:"Upton Sinclair, The Jungle, 1906"
    },
    {
      label:"Document 2 — Robert La Follette, Speech to the Senate, 1908",
      text:"The test of democracy is not the voting of a majority but whether all men — the workers, the farmers, the small businessman — have genuine access to political power. The great corporations which dominate our national life buy our legislatures, corrupt our courts, and own our senators. I call upon this body to enact railroad regulation, direct election of senators, and the income tax — not as radical measures, but as the minimum necessary to restore democratic governance.",
      attr:"Senator Robert M. La Follette Sr. (R-WI), speech to the U.S. Senate, 1908"
    },
    {
      label:"Document 3 — Ida B. Wells-Barnett, 'Lynch Law in America,' 1900",
      text:"Somebody must show that the Afro-American race is more sinned against than sinning, and it seems to have fallen upon a few of us to tell the whole truth. The lynching record for a quarter of a century merits the thoughtful study of the American people. It shows three thousand men, women and children — human beings, American citizens — have been put to death by mobs. Not one of these killers has been brought to justice. Where is the reformers' voice?",
      attr:"Ida B. Wells-Barnett, 'Lynch Law in America,' Arena Magazine, 1900"
    },
    {
      label:"Document 4 — Florence Kelley, 'Women in Industry,' 1905",
      text:"The eight-hour day for women and children is not charity — it is justice. The present system sacrifices the health of women workers to the greed of their employers and the indifference of legislators. The state has an interest in the health of mothers who will bear the next generation of citizens. We do not ask for special treatment; we ask that the law protect those who cannot protect themselves against the unequal power of capital.",
      attr:"Florence Kelley, National Consumers League, 1905"
    },
    {
      label:"Document 5 — Booker T. Washington, Letter to Theodore Roosevelt, 1906",
      text:"I write to bring to your attention the Brownsville Affair, in which soldiers of the 25th Infantry have been dishonorably discharged without trial based on unproven accusations. I do not understand how a president who has championed equal justice under law can discharge without hearing 167 soldiers who have served their country faithfully. If Progressivism means justice, it must mean justice for Black Americans as well as white ones.",
      attr:"Booker T. Washington, private letter to President Theodore Roosevelt, October 1906"
    },
    {
      label:"Document 6 — Walter Lippmann, 'Drift and Mastery,' 1914",
      text:"We can no longer treat the great corporation as a negligible factor in democratic life. It is the corporation that determines where men shall work, for how much, and under what conditions. The progressive's task is not to restore some imaginary competitive past — it is to develop new democratic instruments adequate to control the new economic powers. This means not breaking up great corporations but subjecting them to democratic accountability through expert regulation.",
      attr:"Walter Lippmann, Drift and Mastery, 1914"
    },
    {
      label:"Document 7 — Evelyn Rumsey Cary, 'Woman Suffrage' Poster, 1905",
      visual:true, imageType:"allegorical poster", imageKey:"suffrage_poster",
      searchQuery:"Evelyn Rumsey Cary Woman Suffrage poster 1905",
      text:"An allegorical suffrage campaign poster depicting a woman in classical white robes standing before a government building, her arms raised holding fruit-laden branches. 'WOMAN SUFFRAGE' is lettered vertically on the left and right borders. At the bottom, a biblical inscription reads: 'Give her of the fruit of her hands and let her own works praise her in the gates' (Proverbs 31:31). The warm golden background and classical imagery associate suffrage with civilization, prosperity, and divine sanction.",
      attr:"Evelyn Rumsey Cary, 'Woman Suffrage' poster, 1905. Buffalo and Erie County Historical Society."
    }
  ],
  note:"A full response will use AT LEAST four documents. Use both the documents AND your outside knowledge to construct the argument.",
  rubric:{
    total:7,
    sections:[
      {
        title:"Thesis / Claim (0–1 point)",
        rows:[
          {pts:1,desc:"Historically defensible thesis establishing a line of reasoning about the EXTENT of transformation. Example: 'The Progressive movement fundamentally transformed government's relationship to the economy and dramatically expanded democratic participation, but its transformation was selective — benefiting white middle-class Americans while largely excluding African Americans and ethnic minorities from its promised reforms.'"}
        ]
      },
      {
        title:"Contextualization (0–1 point)",
        rows:[
          {pts:1,desc:"Describes and explains broader historical context: Gilded Age inequality and corporate power that Progressivism responded to; muckraking journalism that created public awareness of abuses; the Social Gospel movement providing religious justification for reform; immigration and urbanization creating the social problems Progressives addressed; Jim Crow and the racial exclusion that shaped Progressive reform's limitations."}
        ]
      },
      {
        title:"Evidence — Document Use (0–3 points)",
        rows:[
          {pts:1,desc:"Accurately uses content from at least THREE documents."},
          {pts:1,desc:"Accurately uses content from at least SIX documents."},
          {pts:1,desc:"Explains sourcing for at least ONE document — point of view, purpose, historical situation, or audience relevant to the argument. Example: Wells-Barnett (Doc 3) writes as a Black woman activist excluded from mainstream Progressive reform circles — her critique that reformers ignored racial violence reveals Progressivism's racial limits; La Follette (Doc 2) writes as a progressive politician advocating for specific legislative reforms, making his speech an example of Progressive legislative agenda rather than neutral analysis."}
        ]
      },
      {
        title:"Evidence — Beyond the Documents (0–1 point)",
        rows:[
          {pts:1,desc:"Uses at least ONE piece of outside evidence. Examples: Pure Food and Drug Act / Meat Inspection Act (1906) as legislative response to Sinclair; 16th–19th Amendments as Progressive constitutional transformation; Federal Reserve Act (1913); Clayton Antitrust Act (1914); the 1908 Muller v. Oregon Supreme Court decision upholding women's labor laws; NAACP founding (1909) as response to Progressive racial exclusion; National Origins Act (1924) as nativist Progressive legacy; Wilson's segregation of federal government; birth of the administrative state."}
        ]
      },
      {
        title:"Analysis and Reasoning (0–1 point)",
        rows:[
          {pts:1,desc:"Complex understanding: Explains how Progressivism simultaneously expanded democracy for some (white women via 19th Amendment, workers via labor regulation) while restricting it for others (Black Americans via Wilson's segregation, immigrants via nativism); or explains how different strands of Progressivism (social gospel, muckraking, political reform) worked through different mechanisms toward overlapping goals; or connects Progressive Era administrative state to longer-term development of regulatory government in New Deal and Great Society."}
        ]
      }
    ]
  }
},
{
  type:"DBQ", year:"Princeton Review Style — Period 5",
  title:"Document-Based Question — Period 5",
  context:"Evaluate the extent to which slavery was the primary cause of the Civil War.",
  prompt:"Using the documents AND your knowledge of the period 1820–1861, construct an argument that evaluates the extent to which slavery was the primary cause of the Civil War.",
  documents:[
    {
      label:"Document 1 — John C. Calhoun, Speech in the U.S. Senate, March 4, 1850",
      text:"How can the Union be saved? By adopting measures that will satisfy the states belonging to the Southern section that they can remain in the Union consistently with their honor and their safety. The South asks for justice, simple justice, and less she ought not to take. The equilibrium between the two sections has been destroyed. The North has acquired a decided ascendancy over every department of government, and through these, control over all the powers of the system.",
      attr:"Senator John C. Calhoun, final Senate speech, delivered by James Mason, March 4, 1850"
    },
    {
      label:"Document 2 — Abraham Lincoln, 'House Divided' Speech, June 16, 1858",
      text:"A house divided against itself cannot stand. I believe this government cannot endure, permanently, half slave and half free. I do not expect the Union to be dissolved — I do not expect the house to fall — but I do expect it will cease to be divided. It will become all one thing, or all the other. Either the opponents of slavery will arrest the further spread of it, and place it where the public mind shall rest in the belief that it is in the course of ultimate extinction; or its advocates will push it forward, till it shall become alike lawful in all the States, old as well as new.",
      attr:"Abraham Lincoln, Republican Senate nominee, Springfield, Illinois, June 16, 1858"
    },
    {
      label:"Document 3 — South Carolina Declaration of Secession, December 24, 1860",
      text:"The State of South Carolina has resumed her position among the nations of the world, as a separate and independent State; with full power to levy war, conclude peace, contract alliances, establish commerce, and to do all other acts and things which independent States may of right do. An increasing hostility on the part of the non-slaveholding States to the institution of slavery, has led to a disregard of their obligations. The election of a man to the high office of President of the United States, whose opinions and purposes are hostile to slavery, is now considered a manifest indication of the purpose of the whole North to deny to the South these rights.",
      attr:"South Carolina Declaration of the Immediate Causes of Secession, December 24, 1860"
    },
    {
      label:"Document 4 — Alexander Stephens, 'Cornerstone Speech,' March 21, 1861",
      text:"Our new Government is founded upon exactly the opposite ideas; its foundations are laid, its cornerstone rests, upon the great truth that the negro is not equal to the white man; that slavery, subordination to the superior race, is his natural and normal condition. This, our new government, is the first, in the history of the world, based upon this great physical, philosophical, and moral truth.",
      attr:"Alexander Stephens, Confederate Vice President, 'Cornerstone Speech,' Savannah, Georgia, March 21, 1861"
    },
    {
      label:"Document 5 — Jefferson Davis, Message to Confederate Congress, April 29, 1861",
      text:"The people of the States now confederated became convinced that the Government of the United States had fallen into the hands of a sectional majority who would pervert that most sacred of all trusts to the destruction of the rights which it was pledged to protect. They believed that to remain longer in the Union would subject them to a continuance of a disparaging discrimination, submission to which would be inconsistent with their welfare and intolerable to a proud people.",
      attr:"Confederate President Jefferson Davis, Message to the Confederate Congress, April 29, 1861"
    },
    {
      label:"Document 6 — Abraham Lincoln, Letter to Horace Greeley, August 22, 1862",
      text:"My paramount object in this struggle is to save the Union, and is not either to save or to destroy slavery. If I could save the Union without freeing any slave I would do it, and if I could save it by freeing all the slaves I would do that; and if I could save it by freeing some and leaving others alone I would also do that. What I do about slavery, and the colored race, I do because I believe it helps to save the Union.",
      attr:"President Abraham Lincoln, letter to New York Tribune editor Horace Greeley, August 22, 1862"
    },
    {
      label:"Document 7 — Charles Adams, 'Slavery, Secession, and Civil War,' 1862",
      text:"The question whether the States have a constitutional right to secede from the Union was never settled by argument. It was at last submitted to the arbitrament of war. And the decision of war has been that the right of secession does not exist. But let us not forget that underlying this constitutional controversy was always the great moral and political question of slavery. The two questions were inseparable: the right to perpetuate slavery produced the claim of a right to secede, and the claim of the right to secede was made only to protect slavery.",
      attr:"Charles Francis Adams Jr., 'Slavery, Secession, and Civil War,' 1862"
    }
  ],
  note:"A full response will use AT LEAST four documents AND outside knowledge.",
  rubric:{
    total:7,
    sections:[
      {
        title:"Thesis / Claim (0–1 point)",
        rows:[
          {pts:1,desc:"Must establish a defensible line of reasoning about the extent to which slavery was the primary cause. A strong thesis might be: 'Slavery was unquestionably the primary cause of the Civil War — as Confederate leaders themselves declared in their secession documents — though the constitutional question of states' rights and the political failure of compromise were the mechanisms through which the slavery conflict produced actual disunion.'"}
        ]
      },
      {
        title:"Contextualization (0–1 point)",
        rows:[
          {pts:1,desc:"Relevant contexts: The Missouri Compromise (1820) establishing the precedent of sectional compromise; the Compromise of 1850 and the explosive Fugitive Slave Act; the Kansas-Nebraska Act (1854) and 'Bleeding Kansas'; the Dred Scott decision (1857); John Brown's Harpers Ferry raid (1859) intensifying Southern fears; the collapse of the Second Party System along sectional lines; the 1860 election of Lincoln without a single Southern electoral vote. <strong>Strong contextualization example:</strong> 'The Missouri Crisis of 1820 — which Thomas Jefferson called a fire bell in the night — established that slavery's expansion into western territories was the issue capable of fracturing the Union. For the next 40 years, every major political crisis (Texas annexation, Mexican Cession, Kansas-Nebraska) was a variant of the same underlying question, and every compromise provided only a temporary deferral. By 1860, the pattern of compromise had broken down completely, and the political system had no remaining mechanism for managing the slavery conflict within constitutional bounds.'"}
        ]
      },
      {
        title:"Evidence — Document Use (0–3 points)",
        rows:[
          {pts:1,desc:"Accurately uses content from at least THREE documents."},
          {pts:1,desc:"Accurately uses content from at least SIX documents."},
          {pts:1,desc:"Explains sourcing for at least ONE document. E.g., Stephens (Doc 4) speaks as Confederate Vice President immediately after secession — his explicit statement that slavery is the 'cornerstone' of the Confederacy is highly credible as evidence of Confederate leaders' actual motivations, since he had no strategic reason to misstate his government's founding principle to a Southern audience. Lincoln (Doc 6) writes to a Northern newspaper editor during wartime — his framing of the war as being about Union rather than slavery reflects political strategy (maintaining border state loyalty), not his private convictions, and should not be taken as equivalent evidence about the war's causes."}
        ]
      },
      {
        title:"Evidence — Beyond Documents (0–1 point)",
        rows:[
          {pts:1,desc:"Specific outside evidence: The Missouri Compromise line and its repeal; Dred Scott v. Sanford ruling that Congress could not restrict slavery in territories; the formation of the Republican Party explicitly on the platform of containing (not abolishing) slavery; the Wilmot Proviso debate; William Seward's 'irrepressible conflict' speech (1858); the 1860 Democratic Party split between Northern and Southern wings over slavery in territories; specific provisions of various states' declarations of secession; the Crittenden Compromise's failure; Lincoln's First Inaugural."}
        ]
      },
      {
        title:"Analysis and Reasoning (0–1 point)",
        rows:[
          {pts:1,desc:"Complex understanding: Explains the distinction between slavery as root cause and states' rights/constitutional arguments as proximate mechanisms — the South's states' rights argument was specifically about the right to maintain slavery, not states' rights as an abstract principle (Southern states actually opposed states' rights when Northern states used them to resist the Fugitive Slave Act); or distinguishes between what Confederate leaders said publicly (slavery as cornerstone) vs. what post-war Lost Cause mythology claimed (states' rights, tariffs); or acknowledges Lincoln's (Doc 6) instrumental framing of the war while explaining why this does not contradict slavery being the war's fundamental cause."}
        ]
      }
    ]
  }
},
{
  type:"DBQ", year:"Princeton Review Style — Period 8",
  title:"Document-Based Question — Period 8",
  context:"Evaluate the extent to which World War II transformed the lives of American women and minorities on the home front.",
  prompt:"Using the documents AND your knowledge of the period 1941–1945, construct an argument that evaluates the extent to which WWII transformed the lives of American women and minorities on the home front.",
  documents:[
    {
      label:"Document 1 — J. Howard Miller, \"We Can Do It!\" Poster, Westinghouse, 1943",
      visual:true, imageType:"government propaganda poster", imageKey:"rosie_riveter",
      searchQuery:"Rosie the Riveter We Can Do It poster 1943 Westinghouse",
      text:"A government propaganda poster depicting a white woman in blue coveralls and a red polka-dot headscarf, flexing her arm with the caption 'We Can Do It!' The poster was produced for Westinghouse Electric & Manufacturing Co. and displayed in war production plants to encourage female workers. It became the iconic image of women's wartime industrial participation.",
      attr:"J. Howard Miller for Westinghouse Electric, 1943 (commissioned by War Production Coordinating Committee)"
    },
    {
      label:"Document 2 — Oral History of Sybil Lewis, African American Riveter, 1942",
      text:"When I got to California I went to a little employment agency. And the man there asked me, 'What kind of work do you do?' I told him I was a waitress. He said, 'Oh no, we don't have anything like that. But we do have war work.' I told him I'd never done anything like that. But he said, 'You can learn.' And I did. I became a riveter. I was making more money in a week than I had made in a month as a waitress. But they didn't let us in the union. The white women wouldn't let us in.",
      attr:"Sybil Lewis, oral history interview, recorded c. 1980, describing her wartime work experience in California, 1942"
    },
    {
      label:"Document 3 — A. Philip Randolph, Keynote Address to the March on Washington Movement, 1942",
      text:"We loyal Negro Americans demand the right to work and fight for our country. We are Americans — not second-class citizens. We demand the abolition of segregation and discrimination in the Army, Navy, Marine Corps, Air Corps, and Coast Guard. We demand the right to work in defense industries. We demand the end of discrimination in government departments. We call upon the President of the United States to issue an executive order abolishing discrimination in all government departments.",
      attr:"A. Philip Randolph, keynote address, March on Washington Movement rally, June 1942"
    },
    {
      label:"Document 4 — Letter from Japanese American soldier, 442nd Regimental Combat Team, 1944",
      text:"I am writing from Italy, where we have been fighting for months. We of the 442nd have proven that Japanese Americans are as loyal and brave as any other Americans. My family sits in a relocation center in California while I fight for the country that imprisoned them. We fight not only for America but to prove that our people deserve the same rights as any citizen. When we return, things must change. We will not accept second-class citizenship.",
      attr:"Letter from a soldier of the 442nd Regimental Combat Team, Italy, 1944 (paraphrased from composite of period letters)"
    },
    {
      label:"Document 5 — Margaret Hickey, Women's Advisory Committee to the War Manpower Commission, 1943",
      text:"Women have proved themselves indispensable in every type of war work. They are building planes, tanks, ships, and ammunition. They have demonstrated that they can operate machinery that men said they could never handle. The question is not whether women can do this work — that question has been answered. The question is whether, when the war is over, American society will remember what women have demonstrated they are capable of, or whether we will be expected to return quietly to the kitchen as if none of this had happened.",
      attr:"Margaret Hickey, Chair, Women's Advisory Committee to the War Manpower Commission, speech, 1943"
    },
    {
      label:"Document 6 — Report of the War Relocation Authority on Japanese American Internment, 1943",
      text:"The loyalty of the Japanese American population as a whole has been demonstrated by their record both in the relocation centers and in military service. The vast majority of persons of Japanese ancestry in the United States, both citizens and aliens, are loyal to the United States. The small minority who are not loyal should be dealt with individually, not collectively. Continued mass exclusion of all persons of Japanese ancestry from the Pacific Coast cannot be justified on grounds of military necessity.",
      attr:"Dillon Myer, Director, War Relocation Authority, internal report, 1943"
    },
    {
      label:"Document 7 — Hanson Baldwin, Military Correspondent, New York Times, 1945",
      text:"The war has altered the American home front more profoundly than any previous conflict. Women have entered the workforce in unprecedented numbers; minorities have served in combat and demanded equal rights in return; labor has achieved new power through wartime contracts. Whether these changes will prove permanent or temporary depends on whether American society chooses to honor the democratic principles for which the war was fought, or whether it will attempt to restore the prewar social order as if four years of sacrifice had meant nothing.",
      attr:"Hanson Baldwin, 'The Changed Home Front,' New York Times, August 1945"
    }
  ],
  note:"A full response will use AT LEAST four documents AND outside knowledge.",
  rubric:{
    total:7,
    sections:[
      {
        title:"Thesis / Claim (0–1 point)",
        rows:[
          {pts:1,desc:"Must establish a defensible line of reasoning about the extent of transformation — e.g., 'WWII dramatically expanded economic opportunity for women and minorities through wartime labor demand, but the transformation was fundamentally limited: women were expected to return home after the war, racial segregation persisted in the military, and Japanese Americans were simultaneously interned — demonstrating that wartime necessity produced temporary opportunity rather than genuine social transformation.'"}
        ]
      },
      {
        title:"Contextualization (0–1 point)",
        rows:[
          {pts:1,desc:"Relevant contexts: The Great Migration's concentration of Black Americans in Northern cities creating communities with greater political power; the pre-war New Deal's mixed record on racial equality (CCC segregation, Social Security exclusions); the preceding generation of women's rights activism (19th Amendment, 1920) whose achievements had not translated into economic equality; the Depression's role in pushing women out of the workforce and reinforcing traditional gender roles; A. Philip Randolph's threatened March on Washington (1941) that produced Executive Order 8802. <strong>Strong contextualization example:</strong> 'The wartime transformation of women's and minorities' economic roles occurred within a social context deeply shaped by the Depression decade, during which campaigns had been waged to remove women from jobs they supposedly held at men's expense, and New Deal programs had systematically excluded Black agricultural and domestic workers from their benefits. WWII's demographic disruption thus collided with a pre-war social order that had actively reinforced the very inequalities the war briefly disrupted.'"}
        ]
      },
      {
        title:"Evidence — Document Use (0–3 points)",
        rows:[
          {pts:1,desc:"Accurately uses content from at least THREE documents."},
          {pts:1,desc:"Accurately uses content from at least SIX documents."},
          {pts:1,desc:"Explains sourcing for at least ONE document. E.g., Sybil Lewis (Doc 2) speaks from personal experience as a Black woman war worker, giving her account high credibility for documenting the racial barriers Black women faced even within the expanded wartime opportunity — she benefited from wartime labor demand but was excluded from unions, illustrating the limits of transformation. The WRA Report (Doc 6) is an internal government document, not public propaganda — its admission that mass exclusion 'cannot be justified on grounds of military necessity' is significant precisely because it came from within the administration that implemented internment."}
        ]
      },
      {
        title:"Evidence — Beyond Documents (0–1 point)",
        rows:[
          {pts:1,desc:"Outside evidence: Executive Order 8802 (1941) prohibiting discrimination in defense industries; the Zoot Suit Riots (1943) demonstrating continued racial violence; the 'Double V' campaign (victory abroad and at home); Korematsu v. United States (1944); military segregation throughout the war (99th Pursuit Squadron / Tuskegee Airmen; 442nd RCT); the GI Bill's racially unequal implementation; post-war reconversion layoffs that disproportionately displaced women and Black workers; the National War Labor Board's 'equal pay for equal work' policy (technically required but rarely enforced); women's wartime wages still averaging 60% of men's."}
        ]
      },
      {
        title:"Analysis and Reasoning (0–1 point)",
        rows:[
          {pts:1,desc:"Complex understanding: Explains the difference between opportunity born of necessity (wartime labor shortage) and structural social change (altering attitudes, laws, and institutions) — using the gap between wartime rhetoric of democracy and actual discriminatory practice; or distinguishes between different groups' experiences (white women, Black women, Black men, Japanese Americans, Mexican Americans in the Zoot Suit Riots) showing the war's impact was highly uneven; or traces the post-war reversion (women pushed out of industry, GI Bill's racially unequal application) to argue the transformation was ultimately more limited than the wartime experience suggested."}
        ]
      }
    ]
  }
},
{
  type:"DBQ", year:"Princeton Review Style — Period 3",
  title:"Document-Based Question — Period 3",
  context:"Evaluate the extent to which the American Revolution represented a fundamental break from colonial political traditions.",
  prompt:"Using the documents AND your knowledge of the period 1763–1800, construct an argument that evaluates the extent to which the American Revolution represented a fundamental break from colonial political traditions.",
  documents:[
    {
      label:"Document 1 — John Trumbull, 'Declaration of Independence,' 1819",
      visual:true, imageType:"history painting", imageKey:"declaration",
      searchQuery:"John Trumbull Declaration of Independence painting 1819 Capitol Rotunda",
      text:"A monumental oil painting depicting the five-member Committee of Five (Jefferson, Adams, Franklin, Sherman, and Livingston) presenting the draft Declaration of Independence to John Hancock, President of the Continental Congress, in Independence Hall, Philadelphia. The assembled delegates — all male, all wealthy, all of European descent — are shown in formal attire in an elegant chamber. The painting was commissioned by Congress and hangs in the Capitol Rotunda. It has become the canonical image of the founding moment, though it depicts the presentation of the draft rather than the actual signing.",
      attr:"John Trumbull, 'Declaration of Independence,' 1817–1819. U.S. Capitol Rotunda, Washington, D.C."
    },
    {
      label:"Document 2 — Virginia Declaration of Rights, June 12, 1776",
      text:"That all men are by nature equally free and independent and have certain inherent rights, of which, when they enter into a state of society, they cannot, by any compact, deprive or divest their posterity; namely, the enjoyment of life and liberty, with the means of acquiring and possessing property, and pursuing and obtaining happiness and safety. That all power is vested in, and consequently derived from, the people; that magistrates are their trustees and servants and at all times amenable to them.",
      attr:"Virginia Declaration of Rights, drafted by George Mason, June 12, 1776"
    },
    {
      label:"Document 3 — Abigail Adams, Letter to John Adams, March 31, 1776",
      text:"I long to hear that you have declared an independency. And, by the way, in the new code of laws which I suppose it will be necessary for you to make, I desire you would remember the ladies and be more generous and favorable to them than your ancestors. Do not put such unlimited power into the hands of the husbands. Remember, all men would be tyrants if they could. If particular care and attention is not paid to the ladies, we are determined to foment a rebellion, and will not hold ourselves bound by any laws in which we have no voice or representation.",
      attr:"Abigail Adams, letter to John Adams, March 31, 1776"
    },
    {
      label:"Document 4 — Thomas Jefferson, Notes on the State of Virginia, 1781",
      text:"The whole commerce between master and slave is a perpetual exercise of the most boisterous passions, the most unremitting despotism on the one part, and degrading submissions on the other. Our children see this and learn to imitate it... With what execration should the statesman be loaded, who, permitting one half the citizens thus to trample on the rights of the other, transforms those into despots, and these into enemies, destroys the morals of the one part, and the amor patriae of the other.",
      attr:"Thomas Jefferson, Notes on the State of Virginia, Query XVIII, 1781"
    },
    {
      label:"Document 5 — Benjamin Banneker, Letter to Thomas Jefferson, August 19, 1791",
      text:"Sir, I freely and cheerfully acknowledge, that I am of the African race, and in that color which is in natural connection with slavery... but how pitiable is it to reflect, that although you were so fully convinced of the benevolence of the Father of mankind, and of his equal and impartial distribution of these rights and privileges which he had conferred upon them, that you should at the same time counteract his mercies, in detaining by fraud and violence so numerous a part of my brethren under groaning captivity and cruel oppression.",
      attr:"Benjamin Banneker, letter to Thomas Jefferson, August 19, 1791"
    },
    {
      label:"Document 6 — Mercy Otis Warren, 'History of the Rise, Progress and Termination of the American Revolution,' 1805",
      text:"The principles of the revolution were the principles of civil and religious liberty. The object was the establishment of a free government, in which the rights of all men should be secured. But it must be acknowledged that the voice of justice has not always been heard; that the claims of humanity have sometimes been disregarded; and that the blessings of freedom have not been extended to all who had an equal right to participate in them.",
      attr:"Mercy Otis Warren, 'History of the Rise, Progress and Termination of the American Revolution,' Vol. III, 1805"
    },
    {
      label:"Document 7 — James Madison, Federalist No. 51, February 8, 1788",
      text:"If men were angels, no government would be necessary. If angels were to govern men, neither external nor internal controls on government would be necessary. In framing a government which is to be administered by men over men, the great difficulty lies in this: you must first enable the government to control the governed; and in the next place oblige it to control itself. A dependence on the people is, no doubt, the primary control on the government; but experience has taught mankind the necessity of auxiliary precautions.",
      attr:"James Madison, Federalist No. 51, February 8, 1788"
    }
  ],
  note:"A full response will use AT LEAST four documents AND outside knowledge.",
  rubric:{
    total:7,
    sections:[
      {
        title:"Thesis / Claim (0–1 point)",
        rows:[{pts:1,desc:"Must establish a defensible line of reasoning about the EXTENT of the break — e.g., 'The American Revolution established unprecedented principles of popular sovereignty and natural rights that represented a genuine ideological break from British colonial authority, but the Revolution failed to extend these principles to enslaved people, women, or propertyless men — revealing that it was a revolution in theory far more than in social practice.'"}]
      },
      {
        title:"Contextualization (0–1 point)",
        rows:[{pts:1,desc:"Relevant contexts: The Whig political tradition of English constitutional rights that colonists claimed as their inheritance; the Enlightenment philosophical framework (Locke, Montesquieu) that gave colonists ideological vocabulary; the colonial experience of self-governance through assemblies; the long tradition of English common law rights; the Seven Years War's role in shaping colonial identity. Strong contextualization example: 'Paradoxically, the Revolution's most radical language — that all men are created equal and possess unalienable rights — drew directly from English Whig political theory that colonists had claimed throughout the imperial crisis as their inherited rights as Englishmen. The Revolution radicalized existing English constitutional tradition rather than inventing entirely new principles, which is why the founders simultaneously proclaimed universal equality and maintained slavery — they were expanding an existing tradition with selective application rather than creating a truly universal new order.'"}]
      },
      {
        title:"Evidence — Document Use (0–3 points)",
        rows:[
          {pts:1,desc:"Accurately uses content from at least THREE documents."},
          {pts:1,desc:"Accurately uses content from at least SIX documents."},
          {pts:1,desc:"Explains sourcing for at least ONE document. E.g., Trumbull's painting (Doc 1) was commissioned by Congress decades after the Revolution — its purpose was to create a founding mythology, which explains why it depicts all-white, wealthy men in an idealized formal setting rather than the messier reality of revolutionary politics. The absence of women, enslaved people, and working-class colonists from the image is itself evidence of who the Revolution's benefits were designed for. OR: Abigail Adams (Doc 3) writes to her husband privately, making her letter more candid than a public document — her challenge to John Adams reveals that even within the founding generation, women recognized the Revolution's failure to include them, and that they were prepared to 'foment a rebellion' if excluded."}
        ]
      },
      {
        title:"Evidence — Beyond Documents (0–1 point)",
        rows:[{pts:1,desc:"Outside evidence: The Haitian Revolution (1791) inspired by American principles but going much further; the gradual abolition of slavery in Northern states post-Revolution vs. its entrenchment in the South; the 1780 Massachusetts Constitution as the model of popular sovereignty; Shays's Rebellion demonstrating the Revolution's social limits; the Three-Fifths Compromise embedding slavery in the Constitution; the failure to include women in the franchise despite their wartime contributions; Phyllis Wheatley's poetry as evidence of Black intellectual life under slavery; the Society of Friends (Quakers) as the first organized antislavery movement in America."}]
      },
      {
        title:"Analysis and Reasoning (0–1 point)",
        rows:[{pts:1,desc:"Complex understanding: Explains the Revolution's internal contradictions — that its universal language created a standard by which subsequent generations would demand inclusion (Banneker to Jefferson; later abolitionist and women's rights movements all invoked the Declaration); or distinguishes between political/ideological transformation (real and significant) and social transformation (very limited); or explains how different groups experienced the Revolution differently — wealthy white men gained expanded rights, women's roles were reframed through Republican Motherhood, enslaved people saw their condition worsen in the South, and Native peoples lost land regardless of which side they supported."}]
      }
    ]
  }
},
{
  type:"DBQ", year:"Princeton Review Style — Period 9",
  title:"Document-Based Question — Period 9",
  context:"Evaluate the extent to which the civil rights movement achieved its goals in the period 1954–1968.",
  prompt:"Using the documents AND your knowledge of the period 1954–1968, construct an argument that evaluates the extent to which the civil rights movement achieved its goals.",
  documents:[
    {
      label:"Document 1 — Photograph: Birmingham, Alabama, May 1963",
      visual:true, imageType:"documentary photograph", imageKey:"birmingham",
      searchQuery:"Birmingham 1963 fire hose civil rights protesters Charles Moore",
      text:"A documentary photograph showing young African American demonstrators being knocked back by high-pressure fire hoses directed by Birmingham Public Safety Commissioner Bull Connor's police force. The demonstrators brace against a brick building as the water hits them with force sufficient to strip bark from trees. The image was broadcast nationally and internationally, appearing on front pages across the world and generating widespread public outrage at the violent suppression of nonviolent protest.",
      attr:"Photograph by Charles Moore, Birmingham, Alabama, May 1963. Published in Life magazine, May 17, 1963."
    },
    {
      label:"Document 2 — Martin Luther King Jr., 'Letter from Birmingham Jail,' April 16, 1963",
      text:"We know through painful experience that freedom is never voluntarily given by the oppressor; it must be demanded by the oppressed. Frankly, I have yet to engage in a direct action campaign that was 'well timed' in the view of those who have not suffered unduly from the disease of segregation. For years now I have heard the word 'Wait!' It rings in the ear of every Negro with piercing familiarity. This 'Wait' has almost always meant 'Never.' We must come to see, with one of our distinguished jurists, that 'justice too long delayed is justice denied.'",
      attr:"Martin Luther King Jr., 'Letter from Birmingham Jail,' April 16, 1963"
    },
    {
      label:"Document 3 — Civil Rights Act of 1964, Title VII",
      text:"It shall be an unlawful employment practice for an employer to fail or refuse to hire or to discharge any individual, or otherwise to discriminate against any individual with respect to his compensation, terms, conditions, or privileges of employment, because of such individual's race, color, religion, sex, or national origin.",
      attr:"Civil Rights Act of 1964, Title VII, Section 703(a), signed by President Lyndon B. Johnson, July 2, 1964"
    },
    {
      label:"Document 4 — Federal Civil Defense Administration, 'Bert the Turtle Says Duck and Cover,' 1951",
      visual:true, imageType:"government educational poster", imageKey:"duck_cover",
      searchQuery:"Bert the Turtle Duck and Cover Federal Civil Defense Administration 1951",
      text:"A government civil defense poster featuring Bert the Turtle, an animated character used to teach American schoolchildren to 'duck and cover' in the event of a nuclear attack. The poster, part of a broader civil defense campaign, instructs children to duck under their desks and cover their heads if they see a bright flash. The campaign was widely distributed in schools and public spaces throughout the 1950s. Critics later argued it gave Americans false reassurance about surviving a nuclear attack, while defenders maintained it was a reasonable precaution for conventional explosions and taught preparedness habits.",
      attr:"Federal Civil Defense Administration, 'Bert the Turtle Says Duck and Cover,' 1951"
    },
    {
      label:"Document 5 — Stokely Carmichael, 'Black Power' Speech, October 1966",
      text:"Every courthouse in Mississippi ought to be burned down tomorrow to get rid of the dirt and the mess. Now I said that to say this: integration is irrelevant. Political power is what Black people have to have... Black Power means Black people coming together to form a political force and either electing representatives or forcing their representatives to speak to their needs... It's time for Black people to stop being ashamed of being Black.",
      attr:"Stokely Carmichael, Chairman of SNCC, speech at University of California Berkeley, October 1966"
    },
    {
      label:"Document 6 — Lyndon B. Johnson, Speech to Congress on Voting Rights, March 15, 1965",
      text:"There is no Negro problem. There is no Southern problem. There is no Northern problem. There is only an American problem. And we are met here tonight as Americans — not as Democrats or Republicans — we are met here as Americans to solve that problem. This was the first nation in the history of the world to be founded with a purpose. The great phrases of that purpose still sound in every American heart... 'All men are created equal' — 'government by consent of the governed' — 'give me liberty or give me death.' Those words are a promise to every citizen.",
      attr:"President Lyndon B. Johnson, address to joint session of Congress, 'We Shall Overcome,' March 15, 1965"
    },
    {
      label:"Document 7 — Kerner Commission Report (National Advisory Commission on Civil Disorders), 1968",
      text:"This is our basic conclusion: Our nation is moving toward two societies, one black, one white — separate and unequal. Reaction to last summer's disorders has quickened the movement and deepened the division. Discrimination and segregation have long permeated much of American life; they now threaten the future of every American. This deepening racial division is not inevitable. The movement apart can be reversed. Choice is still possible. Our principal task is to define that choice and to press for a national resolution.",
      attr:"Report of the National Advisory Commission on Civil Disorders (Kerner Commission), February 1968"
    }
  ],
  note:"A full response will use AT LEAST four documents AND outside knowledge. Note that Document 4 is from a different historical context — consider what its presence in this document set suggests about the period's broader historical significance.",
  rubric:{
    total:7,
    sections:[
      {
        title:"Thesis / Claim (0–1 point)",
        rows:[{pts:1,desc:"Must establish a defensible line of reasoning about the EXTENT of achievement — e.g., 'The civil rights movement achieved landmark formal legal equality through the Civil Rights Act and Voting Rights Act, but the Kerner Commission's 1968 conclusion that America was moving toward two separate and unequal societies demonstrated that legal victories had not translated into economic equality or an end to systemic racism — the movement achieved its legislative goals while leaving its deepest social goals unmet.'"}]
      },
      {
        title:"Contextualization (0–1 point)",
        rows:[{pts:1,desc:"Relevant contexts: The Cold War's role in making racial inequality a strategic liability (Soviet propaganda exploiting American racism); the Great Migration's transformation of Black political power in Northern cities; the legal framework established by Brown v. Board (1954) that the movement built upon; the global decolonization movement that connected American civil rights to anti-colonial struggles; post-WWII prosperity that made economic inequality more visible. Strong contextualization example: 'The civil rights movement operated in a Cold War context that simultaneously empowered and constrained it — the Soviet Union's systematic exploitation of American racial violence as anti-American propaganda gave presidents Eisenhower, Kennedy, and Johnson Cold War strategic reasons to support civil rights legislation. But the same Cold War context that empowered the movement's legislative demands also led the FBI to surveil King as a potential communist and suppressed more radical demands for economic redistribution that threatened the American capitalist system the Cold War was being fought to defend.'"}]
      },
      {
        title:"Evidence — Document Use (0–3 points)",
        rows:[
          {pts:1,desc:"Accurately uses content from at least THREE documents."},
          {pts:1,desc:"Accurately uses content from at least SIX documents."},
          {pts:1,desc:"Explains sourcing for at least ONE document. E.g., The Birmingham photograph (Doc 1) was taken by professional photographer Charles Moore for Life magazine — its purpose and audience (mass national circulation) explain its political impact: images of nonviolent Black demonstrators being brutalized by police, seen by millions of white Americans who had been indifferent to distant Southern segregation, generated the emotional response that created political will for the Civil Rights Act. The photograph's power derived from its audience seeing something they had been able to ignore in text form. OR: The Kerner Commission Report (Doc 7) was an official government document commissioned by President Johnson — his decision not to embrace its findings (which called for massive federal investment to address systemic inequality) is itself historically significant, revealing the limits of liberal political will to address the movement's deeper economic demands."}
        ]
      },
      {
        title:"Evidence — Beyond Documents (0–1 point)",
        rows:[{pts:1,desc:"Outside evidence: NAACP legal strategy culminating in Brown v. Board (1954); Montgomery Bus Boycott (1955–56); sit-ins and SNCC formation (1960); Freedom Riders (1961); March on Washington and 'I Have a Dream' speech (1963); Freedom Summer (1964); Selma and Bloody Sunday (1965); Voting Rights Act (1965) and its immediate impact on Black voter registration; urban rebellions (Watts 1965, Detroit/Newark 1967) revealing Northern dimensions of racism; King's assassination (1968) and its aftermath; the Fair Housing Act (1968); persistent racial wealth gap and residential segregation despite legal equality."}]
      },
      {
        title:"Analysis and Reasoning (0–1 point)",
        rows:[{pts:1,desc:"Complex understanding: Explains the distinction between formal legal equality (achieved) and substantive economic equality (not achieved) — and why the movement's successes in eliminating de jure segregation could not address de facto segregation rooted in economic inequality and residential patterns; or distinguishes between the movement's different phases and goals (desegregation vs. voting rights vs. economic justice) showing different levels of success; or explains how the inclusion of the Duck and Cover document (Doc 4) in this DBQ is not accidental — it represents the Cold War context that shaped what the civil rights movement could demand and achieve, as the movement had to frame demands in terms acceptable to a society primarily focused on communist containment."}]
      }
    ]
  }
}
];
