
const platformUA = navigator.userAgent || "";
const renderProfile = new URLSearchParams(location.search).get("render-profile");
const isWindowsProfile = /Windows/i.test(platformUA) || renderProfile === "windows";
const isAndroidProfile = /Android/i.test(platformUA) || renderProfile === "android";
const hasCoarsePointer = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
const savesData = Boolean(navigator.connection && navigator.connection.saveData);
const limitedHardware = (navigator.deviceMemory && navigator.deviceMemory <= 3) ||
  (navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 4);
const reducedEffectBudget = savesData || isAndroidProfile || hasCoarsePointer || limitedHardware;
document.documentElement.classList.toggle("platform-windows", isWindowsProfile);
document.documentElement.classList.toggle("platform-android", isAndroidProfile);
document.documentElement.classList.toggle("reduced-effects", reducedEffectBudget);
const concepts = {"political-theology":{"label":"政治神学","family":"权力与宗教","brief":"追问现代政治概念如何继承神学中的主权、救赎、末世与牺牲结构。","history":"卡尔·施米特以“主权者决定例外状态”著名；此后本雅明、阿甘本等人把问题扩展到暴力、历史时间与持续的紧急状态。","context":"在东亚语境中，它不能只被理解为欧洲政教关系，还要与天皇制、国家神道、殖民治理及战后宗教制度一同检验。","use":"本文用它说明耶朋不是一套私人信仰，而是规定灾难解释、技术禁忌、合法牺牲与历史纪年的社会宪法。","related":["灾难主权","无责任体系","幽灵主权"]},"disaster-sovereignty":{"label":"灾难主权","family":"本文核心概念","brief":"不必制造灾难，却垄断对灾难起因的解释，规定谁可回应、何种牺牲才算正当的权力。","history":"它综合政治神学、灾难治理与记忆政治，强调永久危机如何被制度转化为日常合法性。","context":"东亚的战争、殖民、地震与核灾难记忆提示我们：受害经验可以导向互助，也可能被国家叙事吸收为免责与动员资源。","use":"耶朋以“辛”的真实威胁为基础，把短暂有效的安宁节循环解释为教义永远正确。","related":["政治神学","死之螺旋","受害者民族主义"]},"procedural-rhetoric":{"label":"程序修辞","family":"游戏研究","brief":"游戏通过规则、反馈与可操作过程表达观点，而不只靠对白或象征。","history":"伊恩·博格斯特在《劝服性游戏》中系统提出这一术语；后续研究进一步质疑规则是否拥有单一、封闭的作者论证。","context":"程序并不天然比叙事客观。界面、商业设计、平台差异与玩家的抵抗性玩法都会改变规则被体验的方式。","use":"朝圣路线、寺院机关、CTB、幻光盘与终局召唤列表，先让玩家参与牺牲制度的运转，再迫使玩家亲手反转它。","related":["具身游玩","完成主义","程序化哀悼"]},"phenomenology":{"label":"现象学","family":"身体与经验","brief":"暂缓把世界当成对象表，转而描述它如何经由身体、时间、方向与感知向我们显现。","history":"从胡塞尔、海德格尔到梅洛-庞蒂，现象学逐渐把身体从意识的附属物转为经验成立的条件。","context":"它进入游戏研究后，焦点从屏幕图像扩展到手柄、姿势、等待、失败、声音与玩家所处空间。","use":"本文用它分析水面异界送行、强笑的持续时间、随机遇敌与召唤动画怎样先于教义解释塑造感受。","related":["具身游玩","情绪劳动","叙事学"]},"embodied-play":{"label":"具身游玩","family":"游戏现象学","brief":"玩家的手、眼、耳、姿势与游戏的输入反馈回路暂时组成一个行动身体。","history":"“具身游玩”是本文的概括性译名；“身体—游戏耦合”是本文对其机制的分析性表述。这一方向承接梅洛-庞蒂的身体图式，也吸收控制论、人机交互与化身研究。","context":"“沉浸”并非纯粹忘我；卡顿、菜单、重复劳动与设备差异同样构成身体经验。","use":"提达既是叙事人物，也是玩家进入史匹拉的感知接口；其无知与运动员姿态限制初始视野。","related":["现象学","程序修辞","内聚焦"]},"narratology":{"label":"叙事学","family":"叙事理论","brief":"研究故事怎样通过时间次序、视角、信息分配、叙述层级与重复被组织。","history":"从俄国形式主义、热奈特到后经典叙事学，研究对象已由文学扩展至电影、数字媒介与跨媒体叙事。","context":"游戏叙事还要处理可操作时间：玩家行动与预设剧情既冲突又互相塑形。","use":"营火倒叙、提达的有限知识与真相揭露后的二次着色，让玩家经历共同体“人人知道却不能说”的缄默。","related":["内聚焦","现象学","本地化"]},"focalization":{"label":"内聚焦","family":"叙事学","brief":"叙述只经由某个位置提供知识，读者无法直接取得世界的全部真相。","history":"热奈特用“谁看”区别于“谁说”；其“内聚焦”指叙事信息受某一人物的知识与感知所限。“有限聚焦”可作描述，但不宜冒充热奈特的标准分类名。","context":"在角色扮演游戏中，玩家的可探索性不等于全知；关卡、镜头和角色认知会共同过滤信息。","use":"提达的外来者身份使牺牲常识对玩家保持不可见，直到阿尔贝德家园才被迫说破。","related":["叙事学","具身游玩","情绪劳动"]},"psychoanalysis":{"label":"精神分析","family":"欲望与主体","brief":"不是给角色远程诊断，而是考察欲望、认同、症状、幻想与重复怎样组织主体。","history":"弗洛伊德从无意识、移情与驱力出发；拉康把主体置于语言与他者结构中，后续理论又进入电影、文化与政治批评。","context":"跨文化使用时须避免把欧美临床概念当成普遍人性，也不能把虚构人物简化成病历。","use":"本文分析优娜被要求认同的圣女形象、提达与父亲的症状性关系，以及世界重复牺牲的欲望结构。","related":["情绪劳动","死亡驱力","强迫性重复"]},"emotional-labor":{"label":"情绪劳动","family":"社会学／精神分析","brief":"把私人感受调整、压抑或表演为角色与制度所期待的情绪。","history":"阿莉·霍奇查尔德以服务劳动说明情绪会被组织和商品化。中文文献也常作“情感劳动”；本文为区分较稳定的情感关系，统一采用“情绪劳动”。","context":"“微笑服务”在日本企业文化与性别规范中尤其可见，但不能被本质化为单一民族性格。","use":"优娜必须把恐惧加工成共同体可消费的希望；强笑则让加工过程的接缝被听见。","related":["精神分析","现象学","内聚焦"]},"system-irresponsibility":{"label":"无责任体系","family":"日本思想史","brief":"权力与责任分离：命令持续执行，每一层参与者却把决定归给更高、更古老的权威。","history":"丸山真男所说的日文是「無責任の体系」，中文常简称“无责任体系”。他以此分析战时日本政治中既成事实、国体与职位怎样吸收个人判断。","context":"这一概念有具体日本史背景；将它用于虚构世界时必须保留天皇制、军部与帝国战争责任的不可替代性。","use":"耶朋·咒、米卡、优娜蕾丝卡与寺院官僚把选择伪装成传统必然，使牺牲机器仿佛无人驱动。","related":["政治神学","灾难主权","幽灵主权"]},"spiral-of-death":{"label":"死之螺旋","family":"制度循环","brief":"死亡制造悲伤，悲伤制造对希望的需求，希望又把新的牺牲者送向死亡。","history":"游戏内由奥隆概括；本文将其从剧情台词扩展为可由叙事、宗教与规则共同执行的制度模型。","context":"它不同于佛教轮回：这里的循环不是宇宙自然法则，而是可以追责、也可以终止的历史装置。","use":"安宁节的短期有效性正是循环长期合法性的来源，究极召唤因而既失败又在政治上“成功”。","related":["灾难主权","死亡驱力","程序化哀悼"]},"death-drive":{"label":"死亡驱力","family":"精神分析","brief":"主体并非只追求快乐与适应，也会强迫性回到造成痛苦的路径。","history":"弗洛伊德在《超越快乐原则》中由创伤梦与重复提出；它不是字面“想死”，而是一种难以被快乐原则解释的回返。","context":"用于政治分析时，应避免把制度暴力自然化为人类天性；重复总由具体机构、利益与关系维持。","use":"史匹拉一再用新的究极召唤处理同一创伤，梦城则允许内部生活变化，却拒绝让维持城市的总体召唤终止。","related":["强迫性重复","精神分析","档案热"]},"repetition-compulsion":{"label":"强迫性重复","family":"精神分析","brief":"未被整合的创伤不以清楚记忆返回，而在动作、选择与关系中反复上演。","history":"弗洛伊德从临床与战后创伤梦观察到，主体会重复无法记起或掌握的经验。","context":"重复不是命运；社会制度会选择性奖励某些回返，并压制可打断循环的叙述。","use":"父子关系、代际朝圣与“辛”的再生互为镜像；终局要求玩家停止把更强的重复误认成解决。","related":["死亡驱力","死之螺旋","哀悼"]},"working-through":{"label":"修通","family":"精神分析／创伤理论","brief":"不是一次性看懂或彻底治愈，而是反复面对抗拒、重复与其情感后果的过程。","history":"弗洛伊德的德语 Durcharbeiten 在英语中通常作 working-through。中文精神分析语境常译“修通”，也有“工作通过”“透工”等译法。","context":"将临床概念转用于集体创伤时，不能把社会仿佛一个能被治疗的个人，也不能以“修通”取代责任追究与制度改变。","use":"队伍不再用更强的究极召唤重复旧答案，而是识别重复装置，并在没有救赎保证时承担中断的后果。","related":["强迫性重复","哀悼","程序化哀悼"]},"mythic-violence":{"label":"神话暴力","family":"本雅明／法律批判","brief":"借划定边界、制造罪责与要求赎罪而奠立法律，并使法律显得命定的暴力。","history":"本雅明在《暴力批判》中区分立法与护法暴力，并以神话暴力揭示法律同暴力的循环；德语 Gewalt 还兼有强制、权力与权威等语义。","context":"神话暴力与神圣暴力不是可供政治行动者自我认证的二元选项；尤其不能因一场暴力获胜，便把它宣布为神圣。","use":"“辛”、机械禁令、异端裁决与究极召唤共同把灾难转成罪责、边界和反复奠立的牺牲法。","related":["政治神学","灾难主权","死之螺旋"]},"now-time":{"label":"当下时间","family":"本雅明／历史哲学","brief":"过去的未竟要求突然压入现在，使均质、连续而看似不可改变的历史发生中断。","history":"对应本雅明的 Jetztzeit；它不是脱离历史的神秘一刻，而是历史材料被重新排列、胜利叙事停止自证的时刻。","context":"“弥赛亚”在此不能替代具体政治行动，也不能保证中断必然成功；力量恰在有限、无担保与不能撤销既成死亡。","use":"废都、旧幻光球与祈祷者的疲惫同时进入终局，让安宁节循环不再显得自然。","related":["追念","辩证意象","程序修辞"]},"remembrance":{"label":"追念","family":"本雅明／记忆政治","brief":"不是怀旧地保存完整过去，而是让被胜利历史压低的人重新向现在提出要求。","history":"常用来转译本雅明的 Eingedenken，强调记忆对历史连续性与胜利者谱系的打断。","context":"追念不能取消史料批判；谁被记起、由谁代表、哪些加害关系被遗漏，仍须接受历史检验。","use":"结尾的“偶尔想起”让死者间歇地回来改变责任，却不要求生者永久住进纪念碑。","related":["当下时间","原爆记忆","哀悼"]},"dialectical-image":{"label":"辩证意象","family":"本雅明／图像认识论","brief":"过去与现在骤然结成星丛，使连续历史停驻，并让此前不可见的关系变得可读。","history":"这一概念贯穿本雅明的拱廊研究；它不是抽象对立的图解，也不是任何两幅相似图片的并置。","context":"数字界面很容易把“星丛”装饰化；只有当并置改变历史判断、暴露欲望和代价时，才具有辩证张力。","use":"杰克特／“辛”、梦城／废墟、水上竞技／坠入海水彼此回照，使早先场景在事后获得新的历史意义。","related":["当下时间","档案热","强迫性重复"]},"translational-afterlife":{"label":"后世生命","family":"本雅明／翻译理论","brief":"作品不靠复制固定意义延续，而在新的时代、语言与媒介差异中继续生长。","history":"本雅明在《译者的任务》中以作品的 Fortleben 思考翻译，并把“纯语言”置为语言关系的限度地平线。","context":"后世生命不表示译本越多越好；“纯语言”也不是某一原文或强势语言能够独占的最纯意义。","use":"「ありがとう」、“I love you” 与后续语种各自重排感谢、爱情和告别，使作品继续存在，也暴露无法互相覆盖的剩余。","related":["跨语际实践","本地化","延异"]},"spectral-sovereignty":{"label":"幽灵主权","family":"政治神学／幽灵学","brief":"死去的权威仍借职位、教义、债务或技术程序支配生者。","history":"概念与德里达的幽灵学、政治神学及现代官僚制批判发生联系，但并非固定学派术语。","context":"东亚祖先祭祀与怨灵传统提供另一套死者关系，不能简单等同于欧洲鬼魂意象。","use":"米卡、优娜蕾丝卡、希摩尔与耶朋·咒以不同方式拒绝退场；异界送行因此成为解除统治权的行动。","related":["幽灵学","无责任体系","程序化哀悼"]},"hauntology":{"label":"幽灵学","family":"解构与记忆","brief":"现在从不纯粹自足：被压抑的过去与尚未实现的未来像幽灵一样缠绕它。","history":"德里达在《马克思的幽灵》中以 hauntology 回应 ontology，讨论债务、继承与正义的非同时性。","context":"“幽灵”在不同宗教与文学传统中含义不同；日语的亡灵、怨灵与供养不能被单一西方术语吞没。","use":"史匹拉的死者既可能要求纪念，也可能要求继续统治；关键不是消灭幽灵，而是改变继承关系。","related":["幽灵主权","档案热","哀悼"]},"archive-fever":{"label":"档案热","family":"解构／精神分析","brief":"保存一切的欲望同时依赖权威、排除与毁灭，因此档案从不只是中性的仓库。","history":"德里达原题《Mal d’archive》兼有档案的病痛、欲望与“恶”等语义；英译《Archive Fever》突出“热”。本文沿用“档案热”，但不把它缩减为单纯的保存热情。","context":"战争纪念馆、殖民档案与数字复原说明：保存谁、以谁的分类保存，本身就是政治判断。","use":"梦中的札纳尔坎德不是静止的复制品，而是以灾前记忆为边界、允许内部生活变化，却不能停止召唤的生成性档案。","related":["死亡驱力","原爆记忆","幽灵学"]},"procedural-mourning":{"label":"程序化哀悼","family":"本文核心概念","brief":"哀悼不只被叙述；玩家还必须用先前学会的操作，在终局仪式中亲手中断依恋关系。","history":"它把弗洛伊德与德里达的哀悼问题同游戏研究的程序修辞结合，考察叙事如何借规则、界面与重复操作塑造失去。","context":"东亚丧葬与追善传统说明，送别不是忘记死者，而是重新规定死者与生者的关系。","use":"终局强制玩家召唤、目睹占据、再击败自己的召唤兽，把“放下”做成不能由对话选项替代的界面动作。","related":["程序修辞","哀悼","完成主义"]},"victim-nationalism":{"label":"受害者民族主义","family":"记忆政治","brief":"共同体强调自身受害，却把对外侵略、殖民与内部差异排除在记忆之外。","history":"战后记忆研究常以此批判单向的民族受难叙事；它不否认受害事实，而反对受害成为永久免责证。","context":"广岛长崎的平民苦难、亚洲战争受害与日本帝国责任必须同时进入视野，任何一方都不能取消另一方。","use":"札纳尔坎德确曾毁灭，但耶朋·咒以保存受害城市之名让整个史匹拉永远围绕其伤口运行。","related":["原爆记忆","档案热","灾难主权"]},"atomic-memory":{"label":"原爆记忆","family":"东亚史／灾难记忆","brief":"围绕广岛、长崎、核暴力、受害见证与战争责任形成的冲突性记忆场。","history":"原爆文学从个人见证、废墟书写到反核运动不断变化，也持续面对民族框架与冷战政治的塑形。","context":"《最终幻想X》不是原爆密码本；比较的效力在废墟、技术、失去与复原欲望的结构共振。","use":"真实札纳尔坎德的废墟承认时间不可逆，梦城的持续召唤则把断裂排除在城市的自我理解之外。","related":["受害者民族主义","档案热","京都学派"]},"kyoto-school":{"label":"京都学派","family":"日本思想史","brief":"以西田几多郎为中心、在佛教资源与欧洲哲学之间生成的近代日本哲学谱系。","history":"其成员并非观点一致的封闭集团；西田、西谷、田边等人与康德、黑格尔、海德格尔及禅佛教的关系各不相同。","context":"讨论“空”必须同时讨论战争协力、帝国话语与战后自我批判；户坂润的日常性原理及其唯物论批判构成重要外部检验。","use":"本文让西田、田边、西谷与户坂润在四幕关键处间歇回返，分别检验关系、卷入、非占有与物质责任。","related":["场所的逻辑","忏悔道","虚无与空","日常性原理"]},"metanoetics":{"label":"忏悔道","family":"田边哲学／宗教哲学","brief":"有限自力在矛盾中发现自身失败与卷入，并在这种反复的转化中改变行动。","history":"对应田边元的 zangedō／metanoetics，吸收辩证法与净土真宗他力思想；它不是一次道歉便获得纯洁。","context":"田边的战后自我批判很少具体承认自身言论与行动之责，提醒我们区分精神转化、制度改变与历史责任指认。","use":"优娜不是站在耶朋之外获得真理，而是在承认自身愿望也曾接入牺牲机器后，放弃旧答案的担保。","related":["京都学派","修通","无责任体系"]},"nihility-emptiness":{"label":"虚无与空","family":"西谷哲学／宗教哲学","brief":"虚无使存在与关系失去意义；空则解除把存在固定为实体和占有对象的要求。","history":"西谷启治区分虚无的场与空的场，主张必须穿过现代虚无主义，才可能让事物在相互关系中如其所是地显现。","context":"空不能成为删除具体生命或服从集体牺牲的口号；其政治效力必须由自由承担、退出权和制度后果检验。","use":"召唤兽不再可调用，并非证明关系从未真实，而是终止以永久可用性证明关系的占有逻辑。","related":["京都学派","自我否定","完成主义"]},"everyday-critique":{"label":"日常性原理","family":"户坂润／马克思主义","brief":"从历史时间和物质实践出发，把抽象的精神、自我与文化论述重新放回劳动、技术、媒体和制度关系中检验。","history":"对应户坂润的「日常性の原理」；他从唯物论立场批判日本的学院哲学和文化主义，与京都学派既有师承，也保持尖锐的内部边缘关系。","context":"户坂是否属于“京都学派左翼”存在定义争议，本文保留这一争议，不把他收编为无分歧的成员。","use":"梦城的关系性存在必须同时说明谁维持召唤、谁被固定、谁不能知情或退出。","related":["京都学派","场所的逻辑","无责任体系"]},"absolute-nothingness":{"label":"绝对无","family":"西田哲学","brief":"不是与“有”相反的虚无，而是主客对立得以发生并被包容、转化的根本场所。","history":"西田在吸收禅佛教、德国观念论与现象学的过程中发展这一概念，译入西方语言时争议极大。","context":"“无”若脱离历史责任，容易被浪漫化为东方神秘；思想史必须保留其近代知识生产背景。","use":"游戏的放下不是把生命抹成虚无，而是让自我保存不再要求他者永远提供牺牲。","related":["京都学派","场所的逻辑","无常"]},"logic-of-place":{"label":"场所的逻辑","family":"西田哲学","brief":"从包摄判断与主客关系的“场所”思考经验，而非先假定彼此孤立的实体。","history":"西田以「場所」重写亚里士多德式主词逻辑，并与德国观念论、宗教经验问题交织。","context":"场所不是地理风景的诗意同义词；将它用于游戏空间，须说明规则、身体与历史怎样共同构成关系。","use":"史匹拉的水、道路、寺院与废墟不是故事容器，而是人物、玩家与制度相遇并改变的条件。","related":["绝对无","现象学","京都学派"]},"self-negation":{"label":"自我否定","family":"京都学派／宗教哲学","brief":"封闭自我通过否定自身中心性而向他者与更广阔关系开放。","history":"西田晚期宗教哲学与田边的忏悔道都强调主体转化，但各自的逻辑与政治含义不同。","context":"自我否定若变成国家要求个人牺牲的道德口号，会从伦理开放滑向政治服从。","use":"提达接受消失具有伦理力量，仅因为这是终止他人被迫做梦的选择，而非国家命令的献身。","related":["京都学派","哀悼","程序化哀悼"]},"differance":{"label":"延异","family":"德里达／解构","brief":"意义依靠差异关系产生，也不断推迟一个完全自足、最终在场的中心。","history":"德里达以法语 différance 的书写差异挑战语音中心主义，并重读胡塞尔、海德格尔与结构主义。","context":"它与佛教的“空”存在可比较之处，却不应被宣布为东西方对同一真理的不同名称。","use":"多国本地化、歌声音节与梦城记忆都显示意义没有一个可被完整复原的原本。","related":["京都学派","跨语际实践","档案热"]},"completionism":{"label":"完成主义","family":"游玩文化","brief":"把穷尽收集、优化数值、解锁隐藏内容与达成百分比视为主要目标。","history":"它与成就系统、攻略文化、平台统计及玩家自我管理相互加强，却也能产生创造性路线与社群知识。","context":"完成不是道德缺陷；问题在于游戏何时让占有欲与作品要求的放下发生冲突。","use":"获得更多隐藏召唤兽会让终局送别名单更长：玩家越完整地占有世界，必须亲手放下的对象越多。","related":["程序修辞","程序化哀悼","死亡驱力"]},"translingual":{"label":"跨语际实践","family":"翻译与思想史","brief":"语言迁移会重组概念边界、语体与权力关系，而非把固定意义搬到另一套词汇。","history":"跨语际实践研究强调现代“哲学”“宗教”“社会”等概念正是在翻译与造词中被制造。","context":"近代东亚大量汉字新词在日中韩之间往返；所谓原文也已处在更早的翻译史中。","use":"Sin／シン／罪、異界送り／Sending 与ありがとう／I love you 分别重排神学、仪式和告别伦理。","related":["本地化","延异","叙事学"]},"localization":{"label":"本地化","family":"游戏翻译","brief":"由译文、配音、嘴型、时序、界面空间、平台语言配置与市场预期共同参与的再创作过程。","history":"早期游戏本地化常受字符与语音长度限制；全球同步发行又增加文化改写、QA 与多语资产管理。","context":"英语常是其他欧洲语言的语音中继层，中文则可能在日文汉字与英文术语之间摆动。","use":"结尾的「ありがとう」与 “I love you” 不是忠实／背叛二选一，而是两种版本对告别关系的不同编排。","related":["跨语际实践","叙事学","情绪劳动"]},"musicking":{"label":"作乐（musicking）","family":"音乐社会学","brief":"音乐不是孤立作品，而是演唱、聆听、排练与在场关系的整体行动。","history":"克里斯托弗·斯莫尔故意把 music 动词化为 musicking；《Musicking》的中译本题为《作乐》。本文保留英文，以避免“作乐”被误读为单纯演奏或娱乐。","context":"礼仪歌的政治含义取决于谁在何处、为谁发声；同一旋律可被压制、收编，也可被重新占用。","use":"寺院独唱、阿尔贝德丧歌、隆索合唱与终局全民歌声共享旋律，却建立不同政治关系。","related":["本地化","程序修辞","哀悼"]},"impermanence":{"label":"无常","family":"佛教／日本文学","brief":"因缘和合的一切皆变化不居；无常既是苦的条件，也是执著能够松动的契机。","history":"它贯穿佛教思想，也深刻进入《方丈记》《平家物语》等日本中世文学的灾异与盛衰书写。","context":"无常美学可能安慰失去，也可能把人为暴力自然化；必须区分自然变迁与可追责的制度牺牲。","use":"作品承认梦与人物必须消逝，却拒绝把“辛”的循环说成不可改变的宇宙法则。","related":["京都学派","哀悼","幽灵主权"]},"mourning":{"label":"哀悼","family":"精神分析／伦理","brief":"不是遗忘逝者，而是在承认失去不可逆之后，重新安排爱、记忆与未来。","history":"弗洛伊德区分哀悼与忧郁；德里达进一步指出，对他者完全成功的内化反而会消除其异质性。","context":"东亚的供养、年忌与祖先祭祀说明，继续关系与允许退场并不矛盾。","use":"优娜的革命是“带着悲伤活下去”：记住死者，却取消死者支配生者未来的权利。","related":["程序化哀悼","幽灵学","无常"]}};
const captionDemands = {"ffx_sending.jpg":"潜梦：仪式之美暂时替共同体承受死亡，却也训练玩家把“正确离去”视为唯一秩序；后来未被送行者的统治会反过来质问这份美。","ffx_system_chain.png":"潜梦：流程图看似解释循环，真正被压缩进去的却是玩家自身——推进、成长与完成欲，正是循环进入身体的接口；到了终局，这套身体习惯反过来质问自己。","ffx_cloister_sphere.jpg":"潜梦：手中的幻光球不仅是钥匙；它把服从转换成解决谜题的满足，使寺院的合法秩序以成功反馈被身体接受。","ffx_03.jpg":"潜梦：亲密构图承诺知识共享，景深却保存优娜不能说出的死亡；爱在这里首先以共同体的沉默为边界。","ffx_forced_laugh.jpg":"潜梦：夸张笑声不是表演失败，而是理想自我破裂时泄出的接缝；后来得知献祭真相，尴尬才被事后改写为哀伤。","ffx_south_seas_context.png":"潜梦：海岛越被观看成纯粹天堂，帝国、战争、基地与观光的历史阴影就越容易退到画框之外；美赋予世界触感，也可能替中心遮蔽代价。","ffx_hymn_path.png":"潜梦：旋律没有纯洁起源。反抗、禁令、收编与共同发声层层沉积，使传统成为权力无法彻底占有的剩余。","ffx_disaster_sovereignty.png":"潜梦：完美闭环制造出无人驾驶的幻觉；但每一根箭头都由具体的人推动，循环的光滑表面只是暂时把责任折射开。","ffx_ctb_battle.jpg":"潜梦：未来被排列成可以计算的次序，与教团宣称不可改变的历史循环形成裂缝；战术自由预演了政治中断。","ffx_sphere_grid.jpg":"潜梦：开放网络并不等于无结构。每次越界都要支付资源，提醒自由是一种重新布线的劳动。","ffx_repetition_compulsion.png":"潜梦：父亲与世界灾难在杰克特身上重叠，使杀敌手势近似杀父幻想；中断却不靠占据父亲的位置，而靠承认关系中不可补偿的失败。","ffx_spectral_politics.png":"潜梦：幽灵不会因送行而彻底消失。真正改变的是，痕迹能否交给后来者解释，还是继续借职位与神圣传统冻结未来。","ffx_01.jpg":"潜梦：废墟拒绝完美复原。它的缺口不是等待修补的失败，而是使毁灭不能被梦城抹去的历史证词。","ffx_dream_zanarkand_road.jpg":"潜梦：灯光道路制造开放都市的幻觉，栏杆和镜头却把身体导向唯一终点；幻想以流畅通行掩盖路径早已写定。","ffx_04.jpg":"潜梦：水中拥抱仿佛让两个身体暂时没有边界，但这份完整只在即将失去时成立；幻想给予爱以形状，也标出它无法保存之处。","ffx_kyoto_crosscurrents.png":"潜梦：概念图诱使人相信，东西思想已经在中心和解；图中的不等号与历史检验却提醒我们，任何汇流都可能再次遮蔽帝国责任与具体牺牲。","ffx_02.jpg":"潜梦：召唤兽既是伙伴又被界面折算为数值资源。崇高动画越动人，被拘禁身体的劳动越容易从意识中退场。","ffx_final_aeons_cropped.jpg":"潜梦：熟悉的召唤菜单从资源目录变为强制送行名册。按钮没有改变，欲望的方向却被迫反转：召唤不再意味着占有，而意味着最后一次让伙伴现身。","ffx_language_routes.png":"潜梦：语言选择看似属于玩家，声音轨和市场版本却预先规定了可选择的组合；转译自由始终在技术路径中发生。","ffx_memory_translation.png":"潜梦：永不忘记能保护证言，也可能把生活变成永久值勤；偶尔想起允许呼吸，也可能成为逃避。两种节律都必须接受责任的检验。","ffx_terms_triptych.png":"潜梦：三栏对照不会还原同一个纯粹原义。每种语言都制造新的神学重音，也留下无法互相覆盖的剩余。","ffx_dream_zanarkand.jpg":"潜梦：倒影并非城市的次等复制；它使看似连续的故乡显出无法抵达的另一面，观看越清晰，失去越不能被取消。","ffx_memory_rhythm.png":"潜梦：间歇的记忆允许逝者离开，也允许他们再次被想起；梦城持续生成、无法停止的召唤，则把忠诚变成永不停机的值勤。"};
const gazeQuestions = {"ffx_sending.jpg":"你正在欣赏一场为死者举行的美。这份美是否也使制度更容易被接受？","ffx_03.jpg":"你是否也借优娜的沉默，暂时保住了旅程继续向前的幻想？","ffx_forced_laugh.jpg":"当笑声令你尴尬时，你把失败归给演员，还是归给要求她微笑的世界？","ffx_south_seas_context.png":"当岛屿被观看为乐园，哪些战争、基地与劳动被留在画框之外？","ffx_dream_zanarkand_road.jpg":"你希望这座城市继续存在多久——如果代价总由画面之外的人承担？","ffx_04.jpg":"你要求这个拥抱保存什么：爱情、身体，还是一个不会失去的自己？","ffx_02.jpg":"当神圣身体成为数值资源，你的喜爱是否也参与了它的可调用性？","ffx_final_aeons_cropped.jpg":"当名单越完整、告别越漫长，你仍然希望占有全部内容吗？","ffx_dream_zanarkand.jpg":"你在寻找故乡，还是寻找一个从未遭到损坏的过去？","ffx_memory_rhythm.png":"你要求记忆持续值勤多久，才肯相信自己没有背叛死者？"};
const routeSections = [["序曲","序曲水面上的舞者屏幕前的见证人-2"],["第一幕 · 行路","第一幕　行路身体先于教义-3"],["第二幕 · 回返","第二幕　回返灾难把世界变成制度-8"],["第三幕 · 放下","第三幕　放下从未被送行者到空的政治风险-12"],["第四幕 · 转译","第四幕　转译同一场告别几种哀悼伦理-19"],["尾声","尾声记住但不要住进记忆-23"]];
const conceptEntries = Object.entries(concepts);
const scrim = document.getElementById("drawer-scrim");
const drawer = document.getElementById("context-drawer");
const atlas = document.getElementById("atlas-panel");
const atlasList = document.getElementById("atlas-list");
const search = document.getElementById("atlas-search");
const oneiricPanel = document.getElementById("oneiric-panel");
const oneiricContent = document.getElementById("oneiric-content");
const symptomArchive = new Map();
const motifArchive = new Map();
const captionStates = new WeakMap();
let lastPanelTrigger = null;
const narrativePhaseLabels = {
  abstract: "尚未分化",
  prologue: "序曲 · 未知",
  pilgrimage: "行路 · 信念",
  return: "回返 · 揭露",
  release: "放下 · 中断",
  translation: "转译 · 余义",
  epilogue: "尾声 · 哀悼"
};
const symptomReadings = {
  "希望": {
    core: "希望不是从真实走向虚假的直线；它先使人行动，继而被制度征用，最后才可能脱离献祭而重新命名。",
    readings: {
      abstract: ["尚未分化的许诺", "希望首先以继续阅读、继续行路的开放性出现，代价尚未进入视野。"],
      prologue: ["灾后仍可讲述", "营火旁的讲述让毁灭暂时拥有方向，却还不知道这个方向通向谁的死亡。"],
      pilgrimage: ["共同体的情感资源", "希望支持朝圣者与沿途居民继续生活，也把他们的恐惧集中到召唤士身上。"],
      return: ["制度化的安慰", "真相揭露后，希望显出政治价格：它让牺牲看起来既必要又自愿。"],
      release: ["拒绝献祭的行动", "希望不再保证无损结局，而成为在没有神圣保证时仍然中断循环的勇气。"],
      translation: ["不能完全对译的承诺", "不同语言把希望分配为许诺、期待或慰藉，暴露共同体对未来的不同语法。"],
      epilogue: ["带着失去继续生活", "希望终于不以复活死者为条件，而以记住、重建和允许离别并存。"]
    }
  },
  "安宁": {
    core: "安宁既是灾难间歇的真实 relief，也是循环借以获得同意的政治时间。",
    readings: {
      abstract: ["被渴望的静止", "安宁尚像灾难之外的纯粹休息，没有显露它与下一次毁灭的关系。"],
      prologue: ["毁灭后的停顿", "静水与营火把灾难隔在叙述之外，让人误以为暂停就是终止。"],
      pilgrimage: ["朝圣许诺的奖赏", "沿途共同体确实需要喘息，但这份需要被系在召唤士必死的路线终点。"],
      return: ["循环的合法性", "安宁节的短期有效性不再证明制度正确，反而解释制度为何能够长期延续。"],
      release: ["从延期走向中断", "真正的安宁不再是等待辛归来，而是取消让归来成为必然的装置。"],
      translation: ["时间感的分歧", "calm、凪与安宁各自强调静止、无风或秩序，使灾后时间获得不同伦理重音。"],
      epilogue: ["不再由牺牲购买的日常", "安宁变为可被生活填充的时间，而不是纪念下一位救世者的空档。"]
    }
  },
  "牺牲": {
    core: "牺牲从来不只是个人品德；它涉及谁命名必要、谁承担代价、谁从死亡中获得秩序。",
    readings: {
      abstract: ["崇高代价", "牺牲仍容易被读成英雄叙事中不可避免的损失。"],
      prologue: ["尚未说出的终点", "旅程已经被死亡规定，却通过倒叙把代价延迟到读者能够承受的时刻。"],
      pilgrimage: ["被爱的自我奉献", "尤娜的选择是真实的，但共同体只允许她在预设的死亡形式中证明爱。"],
      return: ["制度生产的死亡", "当究极召唤的循环被揭露，牺牲由命运重新显现为可以追责的制度选择。"],
      release: ["拒绝制造下一位死者", "中断不要求更纯洁的牺牲，而要求放弃以他人死亡换取确定性的欲望。"],
      translation: ["词语携带的神学差", "sacrifice、犠牲与牺牲把祭献、受害和主动奉献缠在同一个词场中。"],
      epilogue: ["不可兑换的失去", "提达的消失不是为旧制度补账；失去被承认，却不再兑换新的牺牲资格。"]
    }
  },
  "梦": {
    core: "梦既给予欲望以可居住的形状，也可能把保存变成拒绝历史终结的无限劳动。",
    readings: {
      abstract: ["愿望的容器", "梦先意味着另一种生活仍可想象，维持它的物质与劳动尚不可见。"],
      prologue: ["倒叙的故乡", "梦把已经失去的城市保存为仍在发声的第一人称记忆。"],
      pilgrimage: ["朝圣者的私人未来", "人物各自把尚未实现的生活投向道路尽头，却不知道终点已被制度封闭。"],
      return: ["不能停机的档案", "梦城真相使愿望显出基础设施：祈之子的持续召唤替完美故乡支付时间。"],
      release: ["允许梦结束", "醒来不是揭穿虚假，而是承认真实关系也不能要求他者永远维持自身存在。"],
      translation: ["版本间移动的幻想", "梦在语言与声音轨之间改变情感温度，任何版本都不能恢复一个无媒介的原梦。"],
      epilogue: ["可被记住而不必复原", "消逝的梦仍能参与未来，但不再以复制原样为忠诚的唯一证明。"]
    }
  },
  "辛": {
    core: "辛不断在怪物、罪责、父亲与自动化灾难之间换位，使敌我边界迟迟不能稳定。",
    readings: {
      abstract: ["灾难的专名", "辛首先像一个可被辨认和击败的外部敌人。"],
      prologue: ["摧毁故乡的他者", "城市毁灭把辛固定为绝对外部，却在提达被吞入时留下亲缘性的裂口。"],
      pilgrimage: ["组织世界的威胁", "辛使路线、禁忌与召唤士制度显得必要，敌人已经成为社会秩序的条件。"],
      return: ["父亲与铠甲", "杰克特和耶朋·咒的揭示让辛同时成为被困者、保护层与自我复制程序。"],
      release: ["必须拆除的机制", "战斗目标不再只是杀死怪物，而是阻止新的召唤兽被占据并成为下一层铠甲。"],
      translation: ["罪的语言陷阱", "Sin把怪物与罪直接同形；シン与辛的转写则保留并重新分配这种神学暗示。"],
      epilogue: ["不再规定未来的过去", "辛消失后，灾难仍需被记忆，却失去为下一次献祭立法的权力。"]
    }
  },
  "父亲": {
    core: "父亲既是私人欲望的对象，也是灾难借以进入身体、代际与玩家操作的接口。",
    readings: {
      abstract: ["私人关系的缺席", "父亲仍像人物心理背景，尚未显露与世界灾难的结构重叠。"],
      prologue: ["被怨恨的失踪者", "提达以对杰克特的敌意组织自我，讲述仿佛只需抵达一次迟到的对质。"],
      pilgrimage: ["竞争性的理想自我", "父亲作为被模仿又被拒绝的尺度，推动提达把胜利想成取代。"],
      return: ["被世界占据的亲属", "杰克特成为辛，使杀敌与杀父重合，私人创伤无法再与公共灾难分开。"],
      release: ["不以取代完成的告别", "中断循环要求承认父子关系中的失败，而不是成为更强的父亲。"],
      translation: ["称谓中的距离", "父、父亲、親父与father携带不同亲疏和男性气质，使冲突在本地化中重新定调。"],
      epilogue: ["仍有痕迹的离开", "告别没有修复全部伤口，却允许父亲不再作为必须战胜的命令继续存在。"]
    }
  },
  "送行": {
    core: "送行从安置亡魂的仪式，逐渐转为重新规定死者、生者与统治权关系的政治行动。",
    readings: {
      abstract: ["优美的死亡仪式", "水面舞蹈先以美感承接悲伤，仪式内部的权力差异尚未显露。"],
      prologue: ["叙述的预演", "提达决定把一切说出，也是在为一个尚未抵达的离别寻找形式。"],
      pilgrimage: ["共同体期待的职责", "优娜替幸存者承担哀恸，同时被要求把亡者纳入唯一正统的离去秩序。"],
      return: ["选择性执行的规范", "未发送的教团领袖证明仪式并非自然法则：谁必须离去，本身就是权力问题。"],
      release: ["解除死者的统治权", "送行不等于遗忘，而是拒绝让承诺、职位与爱继续占据生者的未来。"],
      translation: ["仪式动词的伦理差", "異界送り、sending与送行分别突出目的地、动作和人际告别，无法完全重合。"],
      epilogue: ["继续关系而不继续占有", "逝者被记住，却不再被要求保持可调用、可复现或永远在场。"]
    }
  }
};
const motifMeanings = {
  "水": {
    core: "水不提供一种总象征；它让身体、仪式、欲望、记忆与死亡在不同深度相遇。",
    fallback: ["流动的界面", "水把可见表面与不可见深处同时交给观看者。"],
    roles: [
      ["异界|送行|亡魂|死者", "仪式表面", "水承托送魂之舞，也把共同体对死亡的秩序化变得可见。"],
      ["水斗球|比赛|战斗|身体", "身体媒介", "浮力、阻力与方向感让身体先于教义认识史匹拉。"],
      ["拥抱|爱情|亲密|吻", "欲望镜面", "水暂时消解身体边界，同时预告亲密无法被永久保存。"],
      ["倒影|镜|观看|镜花水月", "反射界面", "倒影不是原物的次等复制，而是让观看位置本身显形。"],
      ["比塞德|海岛|南洋|群岛", "生活环境", "海水构成日常与乐园想象，也可能遮住岛屿的战争和劳动史。"],
      ["梦|札纳尔坎德|故乡", "记忆深处", "水使故乡像仍可抵达，却以深度提示复原欲望的代价。"]
    ]
  },
  "月": {
    core: "月光以借来的光照亮史匹拉，使记忆、周期与不可抵达之物进入同一观看。",
    fallback: ["借来的光", "月亮不自足地发光，因此适合承载由他者保存和反射的记忆。"],
    roles: [
      ["水|倒影|镜", "水中倒影", "月亮在水面被打散，提醒完整形象依赖不稳定的媒介。"],
      ["循环|安宁|辛", "周期标记", "月相把重复自然化；文章则追问制度循环为何伪装成自然周期。"],
      ["梦|远方|故乡", "不可抵达之物", "月亮看似可见却无法占有，给失去的故乡以恰当距离。"]
    ]
  },
  "废墟": {
    core: "废墟不是等待修复的残次品，而是时间不可逆、档案不完整的物质证词。",
    fallback: ["历史证词", "缺口使毁灭不能被完美复原抹去。"],
    roles: [
      ["原爆|战争|广岛|长崎", "灾难证词", "残存结构迫使受难记忆与战争责任在同一历史场中相遇。"],
      ["档案|保存|记忆", "档案限度", "废墟保存痕迹，也公开承认无法保存全部生活。"],
      ["梦城|复原|完整", "拒绝复原", "它以缺损反对把失去之物复制为永远不变的现在。"],
      ["寺院|神圣|遗迹", "失效的权威", "制度建筑成为残骸时，曾经自然化的神圣秩序重新变得可读。"]
    ]
  },
  "寺院": {
    core: "寺院在神圣空间、操作接口、合法性机器与记忆装置之间不断换位。",
    fallback: ["制度空间", "建筑把教义变成身体必须穿过的方向、门槛与权限。"],
    roles: [
      ["试炼|机关|幻光球|插槽", "操作接口", "谜题把服从转换成解题满足，使正统秩序通过成功反馈进入身体。"],
      ["教团|正统|权威|耶朋", "合法性机器", "寺院规定谁能解释灾难、调用力量并进入受保护的内部。"],
      ["祈之子|召唤|记忆", "记忆存储", "被封存的身体向召唤提供力量，也暴露档案依赖的持续劳动。"],
      ["朝圣|路线|行路", "具身门槛", "朝圣者以疲劳、解谜和仪式重复学习什么才算合法前进。"]
    ]
  },
  "幻光虫": {
    core: "幻光虫在灵魂、粒子、数据与未完成关系之间游移，拒绝被固定为单一宗教象征。",
    fallback: ["未定形的痕迹", "它们让死者既可见又不可占有，使记忆保持流动。"],
    roles: [
      ["死者|亡魂|异界|送行", "灵魂残迹", "发光粒子使死亡获得可见形式，却没有证明死者能够被完全解释。"],
      ["数据|程序|界面|召唤", "信息粒子", "灵魂被系统化为可调用效果时，宗教与技术不再是简单对立。"],
      ["祈之子|劳动|维持", "被遮蔽的劳动", "梦与召唤的辉光来自持续付出的身体，奇观因此带有生产成本。"],
      ["游荡|幽灵|痕迹", "未完成关系", "它们不要求复活，而让尚未解决的债务继续打断现在。"]
    ]
  },
  "歌声": {
    core: "歌声没有纯洁起源；反抗、禁令、收编、祈祷与共同发声在旋律中层层沉积。",
    fallback: ["共同发声", "歌声使分散身体共享呼吸，却不保证共同体没有排除。"],
    roles: [
      ["禁歌|马卡拉尼亚|反抗", "被禁止的遗存", "旋律先以禁令保存另一段历史，权力无法彻底消除它。"],
      ["耶朋|教团|寺院|祈祷", "制度收编", "反抗旋律被改写为正统圣歌，传统显示为冲突的沉积物。"],
      ["祈祷之歌|祈りの歌|Hymn", "祈祷接口", "反复旋律让玩家在理解歌词以前，先以听觉参与共同体。"],
      ["终局|召唤兽|送行", "告别的共同劳动", "歌声不替代失去，而为彼此不能独自完成的送别提供节律。"],
      ["声音|本地化|语言|版本", "不可完全转译的声纹", "音色、节奏和发音保存字幕无法穷尽的身体差异。"]
    ]
  }
};
const figureMotifMap = {
  "ffx_sending.jpg": ["水", "幻光虫"],
  "ffx_system_chain.png": ["幻光虫"],
  "ffx_cloister_sphere.jpg": ["寺院", "幻光虫"],
  "ffx_03.jpg": ["水"],
  "ffx_south_seas_context.png": ["水"],
  "ffx_hymn_path.png": ["歌声", "寺院"],
  "ffx_spectral_politics.png": ["废墟", "幻光虫"],
  "ffx_01.jpg": ["废墟", "月"],
  "ffx_dream_zanarkand_road.jpg": ["月", "废墟"],
  "ffx_04.jpg": ["水", "月"],
  "ffx_02.jpg": ["寺院", "幻光虫"],
  "ffx_final_aeons_cropped.jpg": ["幻光虫", "歌声"],
  "ffx_dream_zanarkand.jpg": ["水", "月", "废墟"],
  "ffx_memory_rhythm.png": ["水", "月"]
};
const motifPhaseColors = {
  abstract: "#a7c9c4",
  prologue: "#9fc3ff",
  pilgrimage: "#72eee0",
  return: "#e98b73",
  release: "#d4adff",
  translation: "#f0cd79",
  epilogue: "#c4ffcf"
};
const archiveTensions = {
  "political-theology": "这份档案无法裁定施米特传统是否足以解释东亚宗教政治；欧洲主权概念与天皇制、殖民治理之间仍存在不可抹平的历史差异。",
  "procedural-rhetoric": "规则并不自动说出单一观点。玩家的误读、抵抗玩法、版本差异与商业系统可能使同一程序产生冲突论证。",
  "psychoanalysis": "此处没有可以替人物或玩家作出诊断的全知分析者；精神分析只能追踪欲望怎样被语言、重复和他者期待组织。",
  "archive-fever": "档案若声称已保存全部内容，恰好遮蔽了自己的排除原则；此记录无法列出所有被梦城牺牲而未留下名字的人。",
  "kyoto-school": "“京都学派”不是意见一致的整体。哲学的宗教深度、战争协力、内部批判与战后重读不能被一份和解性谱系收束。",
  "differance": "延异与佛教的空可以相互质问，却不能由此证明它们拥有一个等待复原的共同原义。",
  "completionism": "档案无法替玩家判定何种游玩才算正确；完成的快乐与放下的伦理会继续在同一作品中冲突。",
  "mourning": "没有一次送别能够证明哀悼已经彻底完成。继续关系、必要遗忘与公共纪念之间不会被单一定义永久调停。"
};

function rememberPanelTrigger(trigger) {
  if (!trigger || trigger.closest("#context-drawer, #atlas-panel, #oneiric-panel")) return;
  lastPanelTrigger = trigger;
}

function setPanelOpen(panel, open) {
  if (!panel) return;
  panel.classList.toggle("is-open", open);
  panel.setAttribute("aria-hidden", String(!open));
  if (open) panel.removeAttribute("inert");
  else panel.setAttribute("inert", "");
}

function closePanels(restoreFocus = true) {
  setPanelOpen(drawer, false);
  setPanelOpen(atlas, false);
  setPanelOpen(oneiricPanel, false);
  scrim.classList.remove("is-open");
  if (restoreFocus && lastPanelTrigger && lastPanelTrigger.isConnected) {
    const trigger = lastPanelTrigger;
    requestAnimationFrame(() => trigger.focus({ preventScroll: true }));
  }
}

function escapeArchiveText(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function openOneiricArchive(markup) {
  if (!oneiricPanel || !oneiricContent) return;
  setPanelOpen(drawer, false);
  setPanelOpen(atlas, false);
  oneiricContent.innerHTML = markup;
  setPanelOpen(oneiricPanel, true);
  scrim.classList.add("is-open");
  oneiricPanel.querySelector(".oneiric-close").focus();
}

function phaseForAct(act) {
  if (act.includes("第一幕")) return "pilgrimage";
  if (act.includes("第二幕")) return "return";
  if (act.includes("第三幕")) return "release";
  if (act.includes("第四幕")) return "translation";
  if (act.includes("尾声")) return "epilogue";
  if (act.includes("序曲")) return "prologue";
  return "abstract";
}

function symptomReadingFor(key, phase) {
  const profile = symptomReadings[key];
  if (!profile) return ["未完成的回返", "后来的语境改变了此前语句现在能够怎样被听见。"];
  return profile.readings[phase] || profile.readings.abstract;
}

function motifRoleFor(key, record) {
  const profile = motifMeanings[key];
  if (!profile) return ["关系中的变体", "意象不服从单一释义，而在不同场景中改变作用。"];
  const context = record.section + " " + record.excerpt;
  const matched = profile.roles.find(([pattern]) => new RegExp(pattern).test(context));
  return matched ? matched.slice(1) : profile.fallback;
}

function recordsInDocumentOrder(records) {
  return records.slice().sort((left, right) => {
    const leftNode = document.getElementById(left.id);
    const rightNode = document.getElementById(right.id);
    if (!leftNode || !rightNode || leftNode === rightNode) return 0;
    const relation = leftNode.compareDocumentPosition(rightNode);
    if (relation & Node.DOCUMENT_POSITION_FOLLOWING) return -1;
    if (relation & Node.DOCUMENT_POSITION_PRECEDING) return 1;
    return 0;
  });
}

function openSymptomTrace(token) {
  const key = token.dataset.symptom;
  const currentIndex = Number(token.dataset.occurrence || 1) - 1;
  const records = symptomArchive.get(key) || [];
  const current = records[currentIndex];
  if (!current) return;
  const prior = records.slice(0, currentIndex);
  const profile = symptomReadings[key];
  const currentReading = symptomReadingFor(key, current.phase);
  const phaseGroups = [];
  prior.forEach(record => {
    let group = phaseGroups.find(item => item.phase === record.phase);
    if (!group) {
      group = { phase: record.phase, records: [] };
      phaseGroups.push(group);
    }
    group.records.push(record);
  });
  const returns = phaseGroups.length
    ? phaseGroups.map(group => {
      const earlierReading = symptomReadingFor(key, group.phase);
      const samePhase = group.phase === current.phase;
      const shift = samePhase
        ? '这些重复仍在同一叙事阶段施压；它们被保留为持续，而不伪装成新的解释。'
        : '“' + key + '”由“' + earlierReading[0] + '”折返为“' + currentReading[0] + '”。后来的知识改变了它可以如何被听见，却没有取消当时的经验。';
      const sceneLinks = group.records.map((record, index) =>
        '<button type="button" data-return-target="' + record.id + '" aria-label="返回' + escapeArchiveText(record.section) + '">' +
        '<span>' + String(index + 1).padStart(2, "0") + '</span>' + escapeArchiveText(record.section) + '</button>'
      ).join("");
      return '<article class="trace-return trace-phase' + (samePhase ? ' is-persistence' : ' is-transformation') + '">' +
        '<span class="trace-kind">' + (samePhase ? '同阶段持续' : '跨幕改写') + ' · ' + escapeArchiveText(narrativePhaseLabels[group.phase] || group.phase) + ' ×' + String(group.records.length) + '</span>' +
        '<p>' + escapeArchiveText(shift) + '</p>' +
        (samePhase ? '' : '<dl class="trace-layers"><div><dt>当时</dt><dd><b>' + escapeArchiveText(earlierReading[0]) + '</b> · ' + escapeArchiveText(earlierReading[1]) + '</dd></div>' +
        '<div><dt>此刻</dt><dd><b>' + escapeArchiveText(currentReading[0]) + '</b> · ' + escapeArchiveText(currentReading[1]) + '</dd></div></dl>') +
        '<div class="trace-scene-links" aria-label="该阶段留下的场景">' + sceneLinks + '</div></article>';
    }).join("")
    : '<p class="trace-empty">这是它第一次显现。此刻它还没有可以回看的过去；解释会随行路逐渐解锁。</p>';
  openOneiricArchive(
    '<header class="oneiric-head"><p>APRÈS-COUP / RETURN TRACE</p><h2>“' + escapeArchiveText(key) + '”的事后回返</h2></header>' +
    '<p class="oneiric-lead">' + escapeArchiveText(profile?.core || "后来语境改变了此前语句现在能够意味着什么。") + '</p>' +
    '<section class="trace-current"><span>当前语境 · ' + escapeArchiveText(narrativePhaseLabels[current.phase] || current.act) + ' · ' + escapeArchiveText(current.section) + '</span>' +
    '<p>' + escapeArchiveText(current.excerpt) + '</p><strong class="trace-role">' + escapeArchiveText(currentReading[0]) + ' · ' + escapeArchiveText(currentReading[1]) + '</strong></section>' +
    '<section class="trace-history"><h3>此前留下的痕迹</h3>' + returns + '</section>'
  );
}

function openMotifConstellation(token) {
  const key = token.dataset.motif;
  const archivedRecords = recordsInDocumentOrder(motifArchive.get(key) || []);
  const recordId = token.dataset.recordId || token.id;
  const currentIndex = Math.max(0, archivedRecords.findIndex(record => record.id === recordId));
  const records = archivedRecords.slice(0, currentIndex + 1);
  if (!records.length) return;
  const roleGroups = [];
  records.forEach(record => {
    const role = motifRoleFor(key, record);
    let group = roleGroups.find(item => item.label === role[0]);
    if (!group) {
      group = { label: role[0], reading: role[1], records: [] };
      roleGroups.push(group);
    }
    group.records.push(record);
  });
  const groupCenters = roleGroups.map((group, index) => {
    const angle = -90 + index * (360 / Math.max(roleGroups.length, 1));
    const radians = angle * Math.PI / 180;
    return { x: 50 + Math.cos(radians) * 33, y: 50 + Math.sin(radians) * 33, angle };
  });
  const lines = groupCenters.map((center, index) =>
    '<line x1="50" y1="50" x2="' + center.x.toFixed(2) + '" y2="' + center.y.toFixed(2) + '" class="constellation-link constellation-link-' + String(index % 3) + '" />'
  ).join("");
  const nodes = roleGroups.map((group, groupIndex) => group.records.map((record, recordIndex) => {
    const center = groupCenters[groupIndex];
    const spread = (recordIndex - (group.records.length - 1) / 2) * 9;
    const angle = center.angle + spread;
    const radians = angle * Math.PI / 180;
    const radius = 31 + (recordIndex % 2) * 7;
    const x = 50 + Math.cos(radians) * radius;
    const y = 50 + Math.sin(radians) * radius;
    const recordPosition = records.findIndex(item => item.id === record.id);
    const isCurrent = record.id === records[currentIndex].id;
    return '<button class="constellation-node phase-' + escapeArchiveText(record.phase) + (record.source === "image" ? ' is-image' : ' is-text') + (isCurrent ? ' is-current' : '') + '" type="button" data-return-target="' + record.id + '" ' +
      'style="--node-x:' + x.toFixed(2) + '%;--node-y:' + y.toFixed(2) + '%;--node-color:' + (motifPhaseColors[record.phase] || motifPhaseColors.abstract) + '" ' +
      'aria-label="前往' + escapeArchiveText(record.section) + '中的' + escapeArchiveText(key) + '；作用为' + escapeArchiveText(group.label) + '"' + (isCurrent ? ' aria-current="true"' : '') + '>' +
      '<span>' + String(recordPosition + 1).padStart(2, "0") + '</span></button>';
  }).join("")).join("");
  const clusters = roleGroups.map(group => {
    const isCurrent = group.records.some(record => record.id === records[currentIndex].id);
    const scenes = group.records.map(record => {
      const isCurrentScene = record.id === records[currentIndex].id;
      return '<button type="button" data-return-target="' + record.id + '"' + (isCurrentScene ? ' aria-current="true"' : '') + '>' +
        '<span>' + escapeArchiveText(record.source === "image" ? '图像／图注' : narrativePhaseLabels[record.phase] || record.phase) + ' · ' + escapeArchiveText(record.section) + '</span>' +
        '<small>' + escapeArchiveText(record.excerpt.slice(0, 82)) + '</small></button>';
    }).join("");
    return '<article class="motif-cluster' + (isCurrent ? ' is-current' : '') + '">' +
      '<header><strong>' + escapeArchiveText(group.label) + '</strong><span>星群 ×' + String(group.records.length) + '</span></header>' +
      '<p>' + escapeArchiveText(group.reading) + '</p><div class="motif-scenes">' + scenes + '</div></article>';
  }).join("");
  const profile = motifMeanings[key];
  openOneiricArchive(
    '<header class="oneiric-head"><p>MOTIF CONSTELLATION / 意象星图</p><h2>“' + escapeArchiveText(key) + '”的跨场景变体</h2></header>' +
    '<p class="oneiric-lead">' + escapeArchiveText(profile?.core || "意象不服从单一释义，而在不同场景中组成关系星座。") + ' 这里借用荣格的扩充法，但不把跨文化原型当作最终裁定。</p>' +
    '<div class="constellation-legend" aria-label="意象星图图例"><span class="legend-text">正文</span><span class="legend-image">图像／图注</span><span class="legend-phase">颜色＝叙事阶段</span></div>' +
    '<div class="motif-constellation"><svg class="constellation-lines" viewBox="0 0 100 100" aria-hidden="true">' + lines + '</svg><span class="constellation-core">' + escapeArchiveText(key) + '</span>' + nodes + '</div>' +
    '<section class="motif-routes"><h3>意义按场景作用聚集；重复场景收拢为星群</h3>' + clusters + '</section>'
  );
}

function toggleDreamCaption(button) {
  const figure = button.closest("figure");
  const state = figure ? captionStates.get(figure) : null;
  if (!figure || !state || button.disabled) return;
  const demanding = !figure.classList.contains("caption-demand");
  figure.classList.toggle("caption-demand", demanding);
  state.text.innerHTML = demanding
    ? '<span>' + escapeArchiveText(state.demand) + '</span>' +
      (state.question ? '<strong class="gaze-question">' + escapeArchiveText(state.question) + '</strong>' : '')
    : state.promise;
  state.mode.textContent = demanding ? "操作所索取／DEMAND" : "画面所许诺／PROMISE";
  button.textContent = demanding ? "返回画面所许诺" : "查看操作所索取";
  button.setAttribute("aria-pressed", String(demanding));
}

function updateCaptionDemands(progress) {
  demandFigures.forEach(figure => {
    if (figure.classList.contains("demand-ready")) return;
    if (progress < Number(figure.dataset.demandThreshold || 101)) return;
    figure.classList.add("demand-ready");
    const button = figure.querySelector("[data-caption-toggle]");
    if (button) {
      button.disabled = false;
      button.textContent = "查看操作所索取";
      button.setAttribute("aria-label", "查看这幅画面要求玩家执行或接受的操作位置");
    }
  });
}

function openConcept(key) {
  const concept = concepts[key];
  if (!concept) return;
  const archiveId = "ZA-" + key.toUpperCase().replace(/[^A-Z0-9]+/g, "-");
  const tension = archiveTensions[key] || "此条目只能记录本文此刻怎样使用概念，不能替代它在其他语言、传统与历史冲突中的变化。档案保持开放。";
  const related = concept.related.map(label => {
    const match = conceptEntries.find(([, item]) => item.label === label);
    return match
      ? '<button type="button" data-related="' + match[0] + '">' + label + '</button>'
      : '<em>' + label + '</em>';
  }).join("");
  drawer.innerHTML =
    '<button class="drawer-close" type="button" data-close aria-label="关闭注释">×</button>' +
    '<div class="archive-head"><span class="archive-sigil" aria-hidden="true"></span>' +
    '<p class="drawer-family">ZANARKAND RUIN ARCHIVE · ' + concept.family + '</p>' +
    '<small>RECOVERED MEMORY / INCOMPLETE RECORD</small></div>' +
    '<div class="archive-title"><span>' + archiveId + ' · 幻光残片</span>' +
    '<h2>' + concept.label + '</h2></div>' +
    '<p class="drawer-brief">' + concept.brief + '</p>' +
    '<section class="archive-fragment" data-fragment="FRAGMENT 01"><span>01 · 思想史</span><p>' + concept.history + '</p></section>' +
    '<section class="archive-fragment" data-fragment="FRAGMENT 02"><span>02 · 文化语境</span><p>' + concept.context + '</p></section>' +
    '<section class="archive-fragment" data-fragment="FRAGMENT 03"><span>03 · 本文用法</span><p>' + concept.use + '</p></section>' +
    '<section class="archive-fragment archive-conflict" data-fragment="CONFLICT / MISSING"><span>记录冲突 · 无最终裁定</span><p>' + tension + '</p></section>' +
    '<section class="archive-fragment related" data-fragment="LINKED REMAINS"><span>关联概念</span><div>' + related + '</div></section>';
  drawer.scrollTop = 0;
  setPanelOpen(atlas, false);
  setPanelOpen(drawer, true);
  scrim.classList.add("is-open");
  drawer.querySelector(".drawer-close").focus();
}

function renderAtlas(query = "") {
  const normalized = query.trim().toLowerCase();
  atlasList.innerHTML = conceptEntries
    .filter(([, item]) => !normalized || (item.label + item.family + item.brief).toLowerCase().includes(normalized))
    .map(([key, item]) =>
      '<button type="button" data-atlas-key="' + key + '">' +
      '<span>' + item.family + '</span><strong>' + item.label + '</strong><small>' + item.brief + '</small></button>'
    ).join("");
}

function openAtlas() {
  setPanelOpen(drawer, false);
  renderAtlas(search.value);
  setPanelOpen(atlas, true);
  scrim.classList.add("is-open");
  search.focus();
}

document.addEventListener("click", event => {
  const term = event.target.closest(".theory-term");
  const related = event.target.closest("[data-related]");
  const atlasItem = event.target.closest("[data-atlas-key]");
  const symptom = event.target.closest(".symptom-return");
  const motif = event.target.closest(".motif-token");
  const returnTarget = event.target.closest("[data-return-target]");
  const captionToggle = event.target.closest("[data-caption-toggle]");
  if (captionToggle) toggleDreamCaption(captionToggle);
  else if (symptom) {
    rememberPanelTrigger(symptom);
    openSymptomTrace(symptom);
  }
  else if (motif) {
    rememberPanelTrigger(motif);
    openMotifConstellation(motif);
  }
  else if (returnTarget) {
    const target = document.getElementById(returnTarget.dataset.returnTarget);
    closePanels(false);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" });
      target.focus({ preventScroll: true });
      target.classList.add("afterward-flash");
      window.setTimeout(() => target.classList.remove("afterward-flash"), 3600);
    }
  } else if (term) {
    rememberPanelTrigger(term);
    openConcept(term.dataset.term);
  }
  else if (related) openConcept(related.dataset.related);
  else if (atlasItem) openConcept(atlasItem.dataset.atlasKey);
  else if (event.target.closest("[data-open-atlas]")) {
    rememberPanelTrigger(event.target.closest("[data-open-atlas]"));
    openAtlas();
  }
  else if (event.target.closest("[data-close], [data-close-oneiric]") || event.target === scrim) closePanels();
  else if (event.target.closest("[data-focus-mode]")) {
    const control = event.target.closest("[data-focus-mode]");
    const active = document.body.classList.toggle("traversing-fantasy");
    control.textContent = active ? "返回水面" : "穿越幻想";
    control.setAttribute("aria-pressed", String(active));
    control.setAttribute("aria-label", active ? "返回水面，恢复幻想阅读" : "穿越幻想，显示页面安排的观看位置");
    if (active) {
      document.querySelectorAll("figure[data-demand-threshold]").forEach(figure => {
        figure.classList.add("demand-ready");
        const button = figure.querySelector("[data-caption-toggle]");
        if (button) {
          button.disabled = false;
          button.textContent = figure.classList.contains("caption-demand") ? "返回画面所许诺" : "查看操作所索取";
        }
      });
    }
  } else if (event.target.closest("[data-still-water]")) {
    const control = event.target.closest("[data-still-water]");
    const active = document.body.classList.toggle("still-water");
    control.textContent = active ? "恢复潮汐" : "静水阅读";
    control.setAttribute("aria-pressed", String(active));
    control.setAttribute("aria-label", active ? "恢复潮汐与装饰动画" : "静水阅读，暂停装饰动画");
  }
});

document.addEventListener("keydown", event => {
  const openPanel = [oneiricPanel, drawer, atlas].find(panel => panel && panel.classList.contains("is-open"));
  if (event.key === "Escape" && openPanel) {
    event.preventDefault();
    closePanels();
    return;
  }
  if (event.key !== "Tab" || !openPanel) return;
  const focusable = Array.from(openPanel.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  )).filter(element => !element.hasAttribute("inert"));
  if (!focusable.length) {
    event.preventDefault();
    openPanel.focus();
    return;
  }
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

search.addEventListener("input", event => renderAtlas(event.target.value));

let demandFigures = [];
function updateProgress() {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? Math.min(100, window.scrollY / height * 100) : 0;
  document.getElementById("top-progress").style.width = progress + "%";
  document.getElementById("rail-progress").style.height = progress + "%";
  const journeyPercent = document.getElementById("journey-percent");
  if (journeyPercent) journeyPercent.textContent = String(Math.round(progress)).padStart(2, "0") + "%";
  document.body.style.setProperty("--pilgrimage-depth", (-3 * progress / 100).toFixed(2) + "vh");
  document.body.style.setProperty("--dream-current", (progress * 0.42).toFixed(1) + "px");
  document.body.style.setProperty("--dream-veil-opacity", Math.max(0.085, 0.42 * (1 - progress / 98)).toFixed(3));
  document.body.style.setProperty("--tide-level", (Math.sin(progress * 0.12) * 8).toFixed(2) + "px");
  document.body.style.setProperty("--tide-drift", (Math.sin(progress * 0.075) * 11).toFixed(2) + "px");
  document.body.classList.toggle("past-dream", progress >= 88);
  updateCaptionDemands(progress);
  syncCurrentRoute();
}
let progressFrame = 0;
function scheduleProgressUpdate() {
  if (progressFrame) return;
  progressFrame = requestAnimationFrame(() => {
    progressFrame = 0;
    updateProgress();
  });
}
window.addEventListener("scroll", scheduleProgressUpdate, { passive: true });

const journeyPlace = document.getElementById("journey-place");
const routeHeadings = routeSections.map(([, id]) => document.getElementById(id));
const chapterRailItems = Array.from(document.querySelectorAll(".chapter-rail li"));
function syncCurrentRoute() {
  if (!journeyPlace) return;
  const threshold = window.innerHeight * 0.34;
  let currentIndex = 0;
  routeSections.forEach(([, id], index) => {
    const heading = routeHeadings[index];
    if (heading && heading.getBoundingClientRect().top <= threshold) currentIndex = index;
  });
  const [label, currentId] = routeSections[currentIndex];
  journeyPlace.textContent = label;
  document.body.dataset.currentAct = String(currentIndex);
  chapterRailItems.forEach(item => {
    item.classList.toggle("is-current", item.querySelector('a[href="#' + currentId + '"]') !== null);
  });
}
syncCurrentRoute();
updateProgress();
renderAtlas();
document.addEventListener("visibilitychange", () => {
  document.body.classList.toggle("page-hidden", document.hidden);
});
function settleHashRoute() {
  if (!window.location.hash) return syncCurrentRoute();
  let id = window.location.hash.slice(1);
  try { id = decodeURIComponent(id); } catch {}
  const target = document.getElementById(id);
  if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY, behavior: "instant" });
  syncCurrentRoute();
}
window.addEventListener("load", () => {
  window.requestAnimationFrame(settleHashRoute);
  if (window.location.hash) window.setTimeout(settleHashRoute, 420);
});
window.addEventListener("hashchange", () => window.requestAnimationFrame(settleHashRoute));

if (document.body.classList.contains("y2k-pilgrimage")) {
  const pyrePalette = ["#72eee0", "#f0cd79", "#e98b73", "#9fc3ff", "#d4adff", "#c4ffcf"];
  const wanderingField = document.getElementById("wandering-pyreflies");
  if (wanderingField) {
    const ghostCount = hasCoarsePointer ? 0 : (reducedEffectBudget ? 12 : 28);
    for (let index = 0; index < ghostCount; index += 1) {
      const ghost = document.createElement("i");
      const ghostSize = 2.1 + Math.random() * 4.5;
      ghost.style.setProperty("--start-x", (-4 + Math.random() * 108).toFixed(2) + "vw");
      ghost.style.setProperty("--start-y", (-8 + Math.random() * 116).toFixed(2) + "vh");
      ghost.style.setProperty("--ghost-size", ghostSize.toFixed(2) + "px");
      ghost.style.setProperty("--trail-length", (ghostSize * (3.2 + Math.random() * 4.8)).toFixed(2) + "px");
      ghost.style.setProperty("--ghost-color", pyrePalette[(index + Math.floor(Math.random() * pyrePalette.length)) % pyrePalette.length]);
      ghost.style.setProperty("--trail-angle", (-32 + Math.random() * 64).toFixed(2) + "deg");
      ghost.style.setProperty("--wander-duration", (24 + Math.random() * 38).toFixed(2) + "s");
      ghost.style.setProperty("--wander-delay", (-Math.random() * 52).toFixed(2) + "s");
      ghost.style.setProperty("--presence-duration", (1.4 + Math.random() * 7.2).toFixed(2) + "s");
      ghost.style.setProperty("--presence-delay", (-Math.random() * 8).toFixed(2) + "s");
      ghost.style.setProperty("--ghost-x0", (-8 + Math.random() * 16).toFixed(2) + "vw");
      ghost.style.setProperty("--ghost-y0", (-7 + Math.random() * 14).toFixed(2) + "vh");
      ghost.style.setProperty("--ghost-x1", (-18 + Math.random() * 36).toFixed(2) + "vw");
      ghost.style.setProperty("--ghost-y1", (-16 + Math.random() * 32).toFixed(2) + "vh");
      ghost.style.setProperty("--ghost-x2", (-24 + Math.random() * 48).toFixed(2) + "vw");
      ghost.style.setProperty("--ghost-y2", (-20 + Math.random() * 40).toFixed(2) + "vh");
      ghost.style.setProperty("--ghost-x3", (-29 + Math.random() * 58).toFixed(2) + "vw");
      ghost.style.setProperty("--ghost-y3", (-26 + Math.random() * 52).toFixed(2) + "vh");
      ghost.style.setProperty("--ghost-x4", (-36 + Math.random() * 72).toFixed(2) + "vw");
      ghost.style.setProperty("--ghost-y4", (-32 + Math.random() * 64).toFixed(2) + "vh");
      wanderingField.appendChild(ghost);
    }
  }

  const article = document.querySelector(".article-body");
  const notesHeading = Array.from(article?.children || []).find(child =>
    child.tagName === "H2" && child.textContent.trim() === "注释"
  );
  if (article) {
    const proseParagraphs = [];
    const contentFigures = [];
    for (const child of article.children) {
      if (child === notesHeading) break;
      if (child.tagName === "P") proseParagraphs.push(child);
      if (child.tagName === "BLOCKQUOTE") proseParagraphs.push(...child.querySelectorAll("p"));
      if (child.tagName === "FIGURE" && child.dataset.imageKey) contentFigures.push(child);
    }

    function sectionForElement(element) {
      let topLevel = element;
      while (topLevel.parentElement && topLevel.parentElement !== article) topLevel = topLevel.parentElement;
      let cursor = topLevel.previousElementSibling;
      while (cursor) {
        if (cursor.matches("h2, h3")) return cursor.textContent.trim();
        cursor = cursor.previousElementSibling;
      }
      return "摘要";
    }

    function actForElement(element) {
      let topLevel = element;
      while (topLevel.parentElement && topLevel.parentElement !== article) topLevel = topLevel.parentElement;
      let cursor = topLevel.previousElementSibling;
      while (cursor) {
        if (cursor.matches("h2")) return cursor.textContent.trim();
        cursor = cursor.previousElementSibling;
      }
      return "摘要";
    }

    function wrapArchiveWords(paragraphs, definitions, className, archive) {
      const combined = paragraphs.map(paragraph => paragraph.textContent).join("");
      const minimumOccurrences = className === "symptom-return" ? 2 : 1;
      const maximumRecords = className === "symptom-return" ? 8 : 12;
      const words = Object.keys(definitions).filter(word => combined.split(word).length - 1 >= minimumOccurrences);
      if (!words.length) return;
      const matcher = new RegExp("(" + words.sort((a, b) => b.length - a.length).join("|") + ")", "g");
      const wrappedSections = new Set();
      paragraphs.forEach(paragraph => {
        const section = sectionForElement(paragraph);
        const act = actForElement(paragraph);
        const phase = phaseForAct(act);
        const excerpt = paragraph.textContent.trim().replace(/\s+/g, " ").slice(0, 118);
        const wrappedInParagraph = new Set();
        const walker = document.createTreeWalker(paragraph, NodeFilter.SHOW_TEXT, {
          acceptNode(node) {
            const parent = node.parentElement;
            if (!node.nodeValue.trim() || !parent || parent.closest("button, a, script, style")) return NodeFilter.FILTER_REJECT;
            matcher.lastIndex = 0;
            return matcher.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
          }
        });
        const textNodes = [];
        while (walker.nextNode()) textNodes.push(walker.currentNode);
        textNodes.forEach(node => {
          matcher.lastIndex = 0;
          const fragment = document.createDocumentFragment();
          let cursor = 0;
          for (const match of node.nodeValue.matchAll(matcher)) {
            if (match.index > cursor) fragment.append(node.nodeValue.slice(cursor, match.index));
            const word = match[0];
            const records = archive.get(word) || [];
            const sectionKey = word + "::" + section;
            if (wrappedInParagraph.has(word) || wrappedSections.has(sectionKey) || records.length >= maximumRecords) {
              fragment.append(word);
              cursor = match.index + word.length;
              continue;
            }
            const occurrence = records.length + 1;
            const token = document.createElement("button");
            token.type = "button";
            token.className = className;
            token.textContent = word;
            if (className === "symptom-return") {
              token.dataset.symptom = word;
              token.dataset.occurrence = String(occurrence);
              token.id = "symptom-" + encodeURIComponent(word) + "-" + occurrence;
              token.style.setProperty("--return-depth", Math.min(1, (occurrence - 1) / 5).toFixed(2));
              token.setAttribute("aria-label", word + "，第 " + occurrence + " 个关键节点，" + narrativePhaseLabels[phase] + "；查看此前语境");
            } else {
              token.dataset.motif = word;
              token.dataset.occurrence = String(occurrence);
              token.id = "motif-" + encodeURIComponent(word) + "-" + occurrence;
              token.dataset.recordId = token.id;
              token.setAttribute("aria-label", word + "，第 " + occurrence + " 个意象变体；打开跨章节星图");
            }
            records.push({ id: token.id, section, act, phase, excerpt, source: "text" });
            archive.set(word, records);
            wrappedInParagraph.add(word);
            wrappedSections.add(sectionKey);
            fragment.append(token);
            cursor = match.index + word.length;
          }
          if (cursor < node.nodeValue.length) fragment.append(node.nodeValue.slice(cursor));
          node.replaceWith(fragment);
        });
      });
    }

    wrapArchiveWords(proseParagraphs, {
      "希望": "共同体把无法承担的恐惧移置为对召唤士的期待",
      "安宁": "短暂平静在后来显出其循环性代价",
      "牺牲": "被自然化的死亡在重复中暴露制度来源",
      "梦": "保存与拒绝失去在同一词中逐渐重叠",
      "辛": "灾难、父亲与罪责不断交换位置",
      "父亲": "私人关系被共同体灾难占据后返回",
      "送行": "同一动作从礼仪逐渐转为解除主权"
    }, "symptom-return", symptomArchive);

    wrapArchiveWords(proseParagraphs, motifMeanings, "motif-token", motifArchive);

    contentFigures.forEach((figure, figureIndex) => {
      const imageKey = figure.dataset.imageKey;
      const caption = figure.querySelector("figcaption");
      const image = figure.querySelector("img");
      const context = [caption?.textContent || "", image?.alt || "", captionDemands[imageKey] || ""].join(" ").replace(/\s+/g, " ").trim();
      const inferred = Object.keys(motifMeanings).filter(word => context.includes(word));
      const motifs = Array.from(new Set([...(figureMotifMap[imageKey] || []), ...inferred]));
      if (!motifs.length) return;
      const section = sectionForElement(figure);
      const act = actForElement(figure);
      const phase = phaseForAct(act);
      const motifBar = document.createElement("div");
      motifBar.className = "figure-motifs";
      motifBar.setAttribute("aria-label", "这幅图像中的意象星群");
      motifs.forEach((word, motifIndex) => {
        const records = motifArchive.get(word) || [];
        if (records.length >= 12) return;
        const id = "motif-figure-" + String(figureIndex + 1) + "-" + String(motifIndex + 1) + "-" + encodeURIComponent(word);
        const token = document.createElement("button");
        token.type = "button";
        token.className = "motif-token motif-figure-token";
        token.textContent = word;
        token.id = id;
        token.dataset.motif = word;
        token.dataset.recordId = id;
        token.setAttribute("aria-label", word + "，图像与图注中的意象变体；打开跨媒介星图");
        records.push({ id, section, act, phase, excerpt: context.slice(0, 118), source: "image" });
        motifArchive.set(word, records);
        motifBar.appendChild(token);
      });
      if (motifBar.childElementCount) figure.appendChild(motifBar);
    });

    let previousWasParagraph = false;
    let dreamAct = 0;
    let dreamImageIndex = 0;
    const subjectPositions = [
      ["朝圣不是背景", "你的位面：行路者／护卫"],
      ["被迫的笑", "观看位置：被安慰的共同体"],
      ["南方群岛", "观看位置：观光者／中心读者"],
      ["声音线索", "聆听位置：迟到的见证人"],
      ["灾难主权", "制度位置：服从者／解释者"],
      ["时间的两张脸", "操作位置：重排未来的人"],
      ["症状、父亲", "欲望位置：儿子／玩家"],
      ["幽灵主权", "继承位置：被死者召唤的人"],
      ["梦城、废墟", "欲望位置：想要无损故乡的人"],
      ["京都学派", "解释位置：寻找普遍真理的人"],
      ["完成主义", "欲望位置：收集者"],
      ["共同歌声", "行动位置：调用者／送行者"],
      ["本地化不是镜子", "语言位置：在版本中选择的人"],
      ["偶尔想起", "纪念位置：受命记住的人"],
      ["跨语际词典", "命名位置：把差异归拢为词的人"]
    ];
    for (const child of article.children) {
      if (child === notesHeading) break;
      if (child.tagName === "H2") {
        dreamAct += 1;
        child.classList.add("dream-threshold");
        child.dataset.dreamAct = String(dreamAct);
        child.dataset.dreamGate = "MEMORY THRESHOLD " + String(dreamAct).padStart(2, "0") + " / 梦仍未醒";
      }
      if (child.tagName === "P") {
        child.classList.add("dream-text");
        child.dataset.dreamAct = String(dreamAct);
        if (previousWasParagraph) child.classList.add("pyre-bridge");
        previousWasParagraph = true;
      } else if (child.matches("figure")) {
        dreamImageIndex += 1;
        child.classList.add("dream-image");
        child.dataset.dreamAct = String(dreamAct);
        child.dataset.dreamImage = "RECOVERING IMAGE " + String(dreamImageIndex).padStart(2, "0") + " / 幻光记录";
      } else {
        previousWasParagraph = false;
      }
      if (child.tagName === "H3") {
        const title = child.textContent.trim();
        const match = subjectPositions.find(([needle]) => title.includes(needle));
        if (match) child.dataset.subjectPosition = match[1];
      }
    }

    const scrollableHeight = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
    article.querySelectorAll("figure[data-image-key]").forEach(figure => {
      const key = figure.dataset.imageKey;
      const demand = captionDemands[key];
      const question = gazeQuestions[key] || "";
      const caption = figure.querySelector("figcaption");
      if (!demand || !caption) return;
      const promise = caption.innerHTML;
      const mode = document.createElement("span");
      mode.className = "caption-mode";
      mode.textContent = "画面所许诺／PROMISE";
      const text = document.createElement("span");
      text.className = "caption-text";
      text.innerHTML = promise;
      const toggle = document.createElement("button");
      toggle.type = "button";
      toggle.dataset.captionToggle = "";
      toggle.disabled = true;
      toggle.textContent = "操作尚未显出";
      toggle.setAttribute("aria-pressed", "false");
      toggle.setAttribute("aria-label", "继续阅读后查看这幅画面要求的操作位置");
      caption.replaceChildren(mode, text, toggle);
      captionStates.set(figure, { promise, demand: demand.replace(/^潜梦：/, ""), question, mode, text });
      const image = Array.from(figure.children).find(child => child.tagName === "IMG");
      if (image) {
        const frame = document.createElement("div");
        frame.className = "fantasy-frame";
        const screen = document.createElement("span");
        screen.className = "fantasy-screen";
        screen.setAttribute("aria-hidden", "true");
        figure.insertBefore(frame, image);
        frame.append(image, screen);
        frame.addEventListener("pointermove", event => {
          const bounds = frame.getBoundingClientRect();
          const x = (event.clientX - bounds.left) / Math.max(1, bounds.width) * 100;
          const y = (event.clientY - bounds.top) / Math.max(1, bounds.height) * 100;
          frame.style.setProperty("--gaze-x", Math.max(5, Math.min(95, x)).toFixed(2) + "%");
          frame.style.setProperty("--gaze-y", Math.max(6, Math.min(94, y)).toFixed(2) + "%");
          frame.classList.add("is-gazed");
        }, { passive: true });
        frame.addEventListener("pointerleave", () => frame.classList.remove("is-gazed"), { passive: true });
      }
      const figureProgress = figure.offsetTop / scrollableHeight * 100;
      figure.dataset.demandThreshold = Math.min(96, figureProgress + 7.5).toFixed(2);
    });
    demandFigures = Array.from(article.querySelectorAll("figure[data-demand-threshold]"));
    updateProgress();

    article.querySelectorAll(".pyre-bridge").forEach((paragraph, paragraphIndex) => {
      const motif = ["梦", "死者", "记忆", "送行"].find(word => paragraph.textContent.includes(word));
      if (reducedEffectBudget && !motif && paragraphIndex % 2 !== 0) return;
      const current = document.createElement("span");
      current.className = "pyre-current";
      current.setAttribute("aria-hidden", "true");
      if (motif) {
        current.classList.add("is-gathered");
        current.dataset.motif = motif + " · 痕迹聚集";
      }
      current.style.setProperty("--current-duration", (7 + Math.random() * 7).toFixed(2) + "s");
      current.style.setProperty("--current-delay", (-Math.random() * 7).toFixed(2) + "s");
      const particleCount = reducedEffectBudget ? (motif ? 3 : 2) : 4 + Math.floor(Math.random() * 3);
      for (let index = 0; index < particleCount; index += 1) {
        const particle = document.createElement("i");
        const driftLeft = -(4 + Math.random() * 15);
        const driftRight = 5 + Math.random() * 18;
        const rise = -(3 + Math.random() * 8);
        const sink = 1 + Math.random() * 6;
        const spreadStart = motif ? 28 : 4;
        const spreadWidth = motif ? 44 : 92;
        particle.style.setProperty("--x", (spreadStart + index * (spreadWidth / Math.max(1, particleCount - 1)) + (Math.random() * 5 - 2.5)).toFixed(2) + "%");
        particle.style.setProperty("--y", (22 + Math.random() * 55).toFixed(2) + "%");
        particle.style.setProperty("--size", (2.2 + Math.random() * 3.6).toFixed(2) + "px");
        particle.style.setProperty("--pyre-color", pyrePalette[(index + paragraphIndex + Math.floor(Math.random() * pyrePalette.length)) % pyrePalette.length]);
        particle.style.setProperty("--flow-duration", (5.2 + Math.random() * 8.8).toFixed(2) + "s");
        particle.style.setProperty("--flow-delay", (-Math.random() * 9).toFixed(2) + "s");
        particle.style.setProperty("--flicker-duration", (0.85 + Math.random() * 3.1).toFixed(2) + "s");
        particle.style.setProperty("--flicker-delay", (-Math.random() * 4).toFixed(2) + "s");
        particle.style.setProperty("--drift-left", driftLeft.toFixed(2) + "px");
        particle.style.setProperty("--drift-left-mid", (driftLeft * 0.28).toFixed(2) + "px");
        particle.style.setProperty("--drift-right", driftRight.toFixed(2) + "px");
        particle.style.setProperty("--drift-right-mid", (driftRight * 0.35).toFixed(2) + "px");
        particle.style.setProperty("--rise", rise.toFixed(2) + "px");
        particle.style.setProperty("--rise-mid", (rise * 0.45).toFixed(2) + "px");
        particle.style.setProperty("--sink", sink.toFixed(2) + "px");
        particle.style.setProperty("--sink-mid", (sink * 0.4).toFixed(2) + "px");
        current.appendChild(particle);
      }
      paragraph.prepend(current);
      paragraph.classList.add("pyre-enhanced");
    });

    article.querySelectorAll("blockquote").forEach(quote => {
      const reflection = document.createElement("div");
      reflection.className = "water-reflection";
      reflection.setAttribute("aria-hidden", "true");
      reflection.setAttribute("inert", "");
      const echo = document.createElement("p");
      const reflectedText = quote.textContent.trim().replace(/\s+/g, " ");
      echo.textContent = "……" + reflectedText.slice(-190);
      reflection.appendChild(echo);
      quote.insertAdjacentElement("afterend", reflection);
    });

    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || entry.target.classList.contains("is-present") || entry.target.dataset.waking) return;
          entry.target.dataset.waking = "true";
          const act = Number(entry.target.dataset.dreamAct || 0);
          const delay = Math.max(480, 1280 - act * 90);
          window.setTimeout(() => entry.target.classList.add("is-present"), delay);
          revealObserver.unobserve(entry.target);
        });
      }, { rootMargin: "-14% 0px -24% 0px", threshold: 0.12 });
      article.querySelectorAll(".dream-text, .dream-image").forEach(item => revealObserver.observe(item));

      const thresholdObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || entry.target.classList.contains("is-open") || entry.target.dataset.waking) return;
          entry.target.dataset.waking = "true";
          window.setTimeout(() => entry.target.classList.add("is-open"), 1200);
          thresholdObserver.unobserve(entry.target);
        });
      }, { rootMargin: "-16% 0px -36% 0px", threshold: 0.2 });
      article.querySelectorAll(".dream-threshold").forEach(heading => thresholdObserver.observe(heading));

      const mirrorObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || entry.target.dataset.reflectionSeen) return;
          entry.target.dataset.reflectionSeen = "true";
          entry.target.classList.add("is-awake");
          window.setTimeout(() => entry.target.classList.remove("is-awake"), 1400);
          mirrorObserver.unobserve(entry.target);
        });
      }, { rootMargin: "-8% 0px -18% 0px", threshold: 0.18 });
      article.querySelectorAll("blockquote").forEach(quote => mirrorObserver.observe(quote));
    } else {
      article.querySelectorAll(".dream-text, .dream-image").forEach(item => item.classList.add("is-present"));
      article.querySelectorAll(".dream-threshold").forEach(heading => heading.classList.add("is-open"));
      article.querySelectorAll("blockquote").forEach(quote => quote.classList.add("is-awake"));
    }
  }
}
