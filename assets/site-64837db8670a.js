
const platformUA = navigator.userAgent || "";
const renderProfile = new URLSearchParams(location.search).get("render-profile");
document.documentElement.classList.toggle("platform-windows", /Windows/i.test(platformUA) || renderProfile === "windows");
document.documentElement.classList.toggle("platform-android", /Android/i.test(platformUA) || renderProfile === "android");
const concepts = {"political-theology":{"label":"政治神学","family":"权力与宗教","brief":"追问现代政治概念如何继承神学中的主权、救赎、末世与牺牲结构。","history":"卡尔·施米特以“主权者决定例外状态”著名；此后本雅明、阿甘本等人把问题扩展到暴力、历史时间与持续的紧急状态。","context":"在东亚语境中，它不能只被理解为欧洲政教关系，还要与天皇制、国家神道、殖民治理及战后宗教制度一同检验。","use":"本文用它说明耶朋不是一套私人信仰，而是规定灾难解释、技术禁忌、合法牺牲与历史纪年的社会宪法。","related":["灾难主权","无责任体系","幽灵主权"]},"disaster-sovereignty":{"label":"灾难主权","family":"本文核心概念","brief":"不必制造灾难，却垄断对灾难起因的解释，规定谁可回应、何种牺牲才算正当的权力。","history":"它综合政治神学、灾难治理与记忆政治，强调永久危机如何被制度转化为日常合法性。","context":"东亚的战争、殖民、地震与核灾难记忆提示我们：受害经验可以导向互助，也可能被国家叙事吸收为免责与动员资源。","use":"耶朋以“辛”的真实威胁为基础，把短暂有效的安宁节循环解释为教义永远正确。","related":["政治神学","死之螺旋","受害者民族主义"]},"procedural-rhetoric":{"label":"程序修辞","family":"游戏研究","brief":"游戏通过规则、反馈与可操作过程表达观点，而不只靠对白或象征。","history":"伊恩·博格斯特在《劝服性游戏》中系统提出这一术语；后续研究进一步质疑规则是否拥有单一、封闭的作者论证。","context":"程序并不天然比叙事客观。界面、商业设计、平台差异与玩家的抵抗性玩法都会改变规则被体验的方式。","use":"朝圣路线、寺院机关、CTB、幻光盘与终局召唤列表，先让玩家参与牺牲制度的运转，再迫使玩家亲手反转它。","related":["身体—游戏耦合","完成主义","程序化哀悼"]},"phenomenology":{"label":"现象学","family":"身体与经验","brief":"暂缓把世界当成对象表，转而描述它如何经由身体、时间、方向与感知向我们显现。","history":"从胡塞尔、海德格尔到梅洛-庞蒂，现象学逐渐把身体从意识的附属物转为经验成立的条件。","context":"它进入游戏研究后，焦点从屏幕图像扩展到手柄、姿势、等待、失败、声音与玩家所处空间。","use":"本文用它分析水面异界送、强笑的持续时间、随机遇敌与召唤动画怎样先于教义解释塑造感受。","related":["身体—游戏耦合","情感劳动","叙事学"]},"embodied-play":{"label":"身体—游戏耦合","family":"游戏现象学","brief":"玩家的手、眼、耳、姿势与游戏的输入反馈回路暂时组成一个行动身体。","history":"这一方向承接梅洛-庞蒂的身体图式，也吸收控制论、人机交互与化身研究。","context":"“沉浸”并非纯粹忘我；卡顿、菜单、重复劳动与设备差异同样构成身体经验。","use":"提达既是叙事人物，也是玩家进入史匹拉的感知接口；其无知与运动员姿态限制初始视野。","related":["现象学","程序修辞","有限聚焦"]},"narratology":{"label":"叙事学","family":"叙事理论","brief":"研究故事怎样通过时间次序、视角、信息分配、叙述层级与重复被组织。","history":"从俄国形式主义、热奈特到后经典叙事学，研究对象已由文学扩展至电影、数字媒介与跨媒体叙事。","context":"游戏叙事还要处理可操作时间：玩家行动与预设剧情既冲突又互相塑形。","use":"营火倒叙、提达的有限知识与真相揭露后的二次着色，让玩家经历共同体“人人知道却不能说”的缄默。","related":["有限聚焦","现象学","本地化"]},"focalization":{"label":"有限聚焦","family":"叙事学","brief":"叙述只经由某个位置提供知识，读者无法直接取得世界的全部真相。","history":"热奈特用“谁看”区别于“谁说”；后续理论强调聚焦也包括情感、身体与价值框架。","context":"在角色扮演游戏中，玩家的可探索性不等于全知；关卡、镜头和角色认知会共同过滤信息。","use":"提达的外来者身份使牺牲常识对玩家保持不可见，直到阿尔贝德家园才被迫说破。","related":["叙事学","身体—游戏耦合","情感劳动"]},"psychoanalysis":{"label":"精神分析","family":"欲望与主体","brief":"不是给角色远程诊断，而是考察欲望、认同、症状、幻想与重复怎样组织主体。","history":"弗洛伊德从无意识、移情与驱力出发；拉康把主体置于语言与他者结构中，后续理论又进入电影、文化与政治批评。","context":"跨文化使用时须避免把欧美临床概念当成普遍人性，也不能把虚构人物简化成病历。","use":"本文分析优娜被要求认同的圣女形象、提达与父亲的症状性关系，以及世界重复牺牲的欲望结构。","related":["情感劳动","死亡驱力","强迫性重复"]},"emotional-labor":{"label":"情感劳动","family":"社会学／精神分析","brief":"把私人感受调整、压抑或表演为角色与制度所期待的情绪。","history":"阿莉·霍赫希尔德以服务劳动说明情感也会被组织和商品化；概念随后扩展到家庭、政治与照护。","context":"“微笑服务”在日本企业文化与性别规范中尤其可见，但不能被本质化为单一民族性格。","use":"优娜必须把恐惧加工成共同体可消费的希望；强笑则让加工过程的接缝被听见。","related":["精神分析","现象学","有限聚焦"]},"system-irresponsibility":{"label":"无责任体系","family":"日本思想史","brief":"权力与责任分离：命令持续执行，每一层参与者却把决定归给更高、更古老的权威。","history":"丸山真男以此分析战时日本政治结构，尤其关注既成事实、国体与职位怎样吸收个人判断。","context":"这一概念有具体日本史背景；将它用于虚构世界时必须保留天皇制、军部与帝国战争责任的不可替代性。","use":"耶朋·咒、米卡、优娜蕾丝卡与寺院官僚把选择伪装成传统必然，使牺牲机器仿佛无人驱动。","related":["政治神学","灾难主权","幽灵主权"]},"spiral-of-death":{"label":"死之螺旋","family":"制度循环","brief":"死亡制造悲伤，悲伤制造对希望的需求，希望又把新的牺牲者送向死亡。","history":"游戏内由奥隆概括；本文将其从剧情台词扩展为可由叙事、宗教与规则共同执行的制度模型。","context":"它不同于佛教轮回：这里的循环不是宇宙自然法则，而是可以追责、也可以终止的历史装置。","use":"安宁节的短期有效性正是循环长期合法性的来源，究极召唤因而既失败又在政治上“成功”。","related":["灾难主权","死亡驱力","程序化哀悼"]},"death-drive":{"label":"死亡驱力","family":"精神分析","brief":"主体并非只追求快乐与适应，也会强迫性回到造成痛苦的路径。","history":"弗洛伊德在《超越快乐原则》中由创伤梦与重复提出；它不是字面“想死”，而是一种难以被快乐原则解释的回返。","context":"用于政治分析时，应避免把制度暴力自然化为人类天性；重复总由具体机构、利益与关系维持。","use":"史匹拉一再用新的究极召唤处理同一创伤，梦城则允许内部生活变化，却拒绝让维持城市的总体召唤终止。","related":["强迫性重复","精神分析","档案热"]},"repetition-compulsion":{"label":"强迫性重复","family":"精神分析","brief":"未被整合的创伤不以清楚记忆返回，而在动作、选择与关系中反复上演。","history":"弗洛伊德从临床与战后创伤梦观察到，主体会重复无法记起或掌握的经验。","context":"重复不是命运；社会制度会选择性奖励某些回返，并压制可打断循环的叙述。","use":"父子关系、代际朝圣与“辛”的再生互为镜像；终局要求玩家停止把更强的重复误认成解决。","related":["死亡驱力","死之螺旋","哀悼"]},"spectral-sovereignty":{"label":"幽灵主权","family":"政治神学／幽灵学","brief":"死去的权威仍借职位、教义、债务或技术程序支配生者。","history":"概念与德里达的幽灵学、政治神学及现代官僚制批判发生联系，但并非固定学派术语。","context":"东亚祖先祭祀与怨灵传统提供另一套死者关系，不能简单等同于欧洲鬼魂意象。","use":"米卡、优娜蕾丝卡、希摩尔与耶朋·咒以不同方式拒绝退场；异界送因此成为解除统治权的行动。","related":["幽灵学","无责任体系","程序化哀悼"]},"hauntology":{"label":"幽灵学","family":"解构与记忆","brief":"现在从不纯粹自足：被压抑的过去与尚未实现的未来像幽灵一样缠绕它。","history":"德里达在《马克思的幽灵》中以 hauntology 回应 ontology，讨论债务、继承与正义的非同时性。","context":"“幽灵”在不同宗教与文学传统中含义不同；日语的亡灵、怨灵与供养不能被单一西方术语吞没。","use":"史匹拉的死者既可能要求纪念，也可能要求继续统治；关键不是消灭幽灵，而是改变继承关系。","related":["幽灵主权","档案热","哀悼"]},"archive-fever":{"label":"档案热","family":"解构／精神分析","brief":"保存一切的欲望同时依赖权威、排除与毁灭，因此档案从不只是中性的仓库。","history":"德里达借弗洛伊德与书写技术讨论档案的起源权、重复冲动及其与死亡驱力的关系。","context":"战争纪念馆、殖民档案与数字复原说明：保存谁、以谁的分类保存，本身就是政治判断。","use":"梦中的札纳尔坎德不是静止的复制品，而是以灾前记忆为边界、允许内部生活变化，却不能停止召唤的生成性档案。","related":["死亡驱力","原爆记忆","幽灵学"]},"procedural-mourning":{"label":"程序化哀悼","family":"本文核心概念","brief":"哀悼不只被叙述；玩家还必须用先前学会的操作，在终局仪式中亲手中断依恋关系。","history":"它把弗洛伊德与德里达的哀悼问题同游戏研究的程序修辞结合，考察叙事如何借规则、界面与重复操作塑造失去。","context":"东亚丧葬与追善传统说明，送别不是忘记死者，而是重新规定死者与生者的关系。","use":"终局强制玩家召唤、目睹占据、再击败自己的召唤兽，把“放下”做成不能由对话选项替代的界面动作。","related":["程序修辞","哀悼","完成主义"]},"victim-nationalism":{"label":"受害者民族主义","family":"记忆政治","brief":"共同体强调自身受害，却把对外侵略、殖民与内部差异排除在记忆之外。","history":"战后记忆研究常以此批判单向的民族受难叙事；它不否认受害事实，而反对受害成为永久免责证。","context":"广岛长崎的平民苦难、亚洲战争受害与日本帝国责任必须同时进入视野，任何一方都不能取消另一方。","use":"札纳尔坎德确曾毁灭，但耶朋·咒以保存受害城市之名让整个史匹拉永远围绕其伤口运行。","related":["原爆记忆","档案热","灾难主权"]},"atomic-memory":{"label":"原爆记忆","family":"东亚史／灾难记忆","brief":"围绕广岛、长崎、核暴力、受害见证与战争责任形成的冲突性记忆场。","history":"原爆文学从个人见证、废墟书写到反核运动不断变化，也持续面对民族框架与冷战政治的塑形。","context":"《最终幻想X》不是原爆密码本；比较的效力在废墟、技术、失去与复原欲望的结构共振。","use":"真实札纳尔坎德的废墟承认时间不可逆，梦城的持续召唤则把断裂排除在城市的自我理解之外。","related":["受害者民族主义","档案热","京都学派"]},"kyoto-school":{"label":"京都学派","family":"日本思想史","brief":"以西田几多郎为中心、在佛教资源与欧洲哲学之间生成的近代日本哲学谱系。","history":"其成员并非观点一致的封闭集团；西田、西谷、田边等人与康德、黑格尔、海德格尔及禅佛教的关系各不相同。","context":"讨论“空”必须同时讨论战争协力、帝国话语与战后自我批判；户坂润的日常性批判构成重要外部检验。","use":"本文借这些思想思考放下自我执著的可能，同时拒绝用空无美化他人的牺牲，或消解具体责任。","related":["绝对无","场所逻辑","自我否定"]},"absolute-nothingness":{"label":"绝对无","family":"西田哲学","brief":"不是与“有”相反的虚无，而是主客对立得以发生并被包容、转化的根本场所。","history":"西田在吸收禅佛教、德国观念论与现象学的过程中发展这一概念，译入西方语言时争议极大。","context":"“无”若脱离历史责任，容易被浪漫化为东方神秘；思想史必须保留其近代知识生产背景。","use":"游戏的放下不是把生命抹成虚无，而是让自我保存不再要求他者永远提供牺牲。","related":["京都学派","场所逻辑","无常"]},"logic-of-place":{"label":"场所逻辑","family":"西田哲学","brief":"从包摄判断与主客关系的“场所”思考经验，而非先假定彼此孤立的实体。","history":"西田以「場所」重写亚里士多德式主词逻辑，并与德国观念论、宗教经验问题交织。","context":"场所不是地理风景的诗意同义词；将它用于游戏空间，须说明规则、身体与历史怎样共同构成关系。","use":"史匹拉的水、道路、寺院与废墟不是故事容器，而是人物、玩家与制度相遇并改变的条件。","related":["绝对无","现象学","京都学派"]},"self-negation":{"label":"自我否定","family":"京都学派／宗教哲学","brief":"封闭自我通过否定自身中心性而向他者与更广阔关系开放。","history":"西田晚期宗教哲学与田边的忏悔道都强调主体转化，但各自的逻辑与政治含义不同。","context":"自我否定若变成国家要求个人牺牲的道德口号，会从伦理开放滑向政治服从。","use":"提达接受消失具有伦理力量，仅因为这是终止他人被迫做梦的选择，而非国家命令的献身。","related":["京都学派","哀悼","程序化哀悼"]},"differance":{"label":"延异","family":"德里达／解构","brief":"意义依靠差异关系产生，也不断推迟一个完全自足、最终在场的中心。","history":"德里达以法语 différance 的书写差异挑战语音中心主义，并重读胡塞尔、海德格尔与结构主义。","context":"它与佛教的“空”存在可比较之处，却不应被宣布为东西方对同一真理的不同名称。","use":"多国本地化、歌声音节与梦城记忆都显示意义没有一个可被完整复原的原本。","related":["京都学派","跨语际","档案热"]},"completionism":{"label":"完成主义","family":"游玩文化","brief":"把穷尽收集、优化数值、解锁隐藏内容与达成百分比视为主要目标。","history":"它与成就系统、攻略文化、平台统计及玩家自我管理相互加强，却也能产生创造性路线与社群知识。","context":"完成不是道德缺陷；问题在于游戏何时让占有欲与作品要求的放下发生冲突。","use":"获得更多隐藏召唤兽会让终局送别名单更长：玩家越完整地占有世界，必须亲手放下的对象越多。","related":["程序修辞","程序化哀悼","死亡驱力"]},"translingual":{"label":"跨语际","family":"翻译与思想史","brief":"语言迁移会重组概念边界、语体与权力关系，而非把固定意义搬到另一套词汇。","history":"跨语际实践研究强调现代“哲学”“宗教”“社会”等概念正是在翻译与造词中被制造。","context":"近代东亚大量汉字新词在日中韩之间往返；所谓原文也已处在更早的翻译史中。","use":"Sin／シン／罪、異界送り／Sending 与ありがとう／I love you 分别重排神学、仪式和告别伦理。","related":["本地化","延异","叙事学"]},"localization":{"label":"本地化","family":"游戏翻译","brief":"由译文、配音、嘴型、时序、界面空间、平台语言配置与市场预期共同参与的再创作过程。","history":"早期游戏本地化常受字符与语音长度限制；全球同步发行又增加文化改写、QA 与多语资产管理。","context":"英语常是其他欧洲语言的语音中继层，中文则可能在日文汉字与英文术语之间摆动。","use":"结尾的「ありがとう」与 “I love you” 不是忠实／背叛二选一，而是两种版本对告别关系的不同编排。","related":["跨语际","叙事学","情感劳动"]},"musicking":{"label":"musicking","family":"音乐社会学","brief":"音乐不是孤立作品，而是演唱、聆听、排练与在场关系的整体行动。","history":"克里斯托弗·斯莫尔以动词化概念反对把音乐意义只放在乐谱或作品对象中。","context":"礼仪歌的政治含义取决于谁在何处、为谁发声；同一旋律可被压制、收编，也可被重新占用。","use":"寺院独唱、阿尔贝德丧歌、隆索合唱与终局全民歌声共享旋律，却建立不同政治关系。","related":["本地化","程序修辞","哀悼"]},"impermanence":{"label":"无常","family":"佛教／日本文学","brief":"因缘和合的一切皆变化不居；无常既是苦的条件，也是执著能够松动的契机。","history":"它贯穿佛教思想，也深刻进入《方丈记》《平家物语》等日本中世文学的灾异与盛衰书写。","context":"无常美学可能安慰失去，也可能把人为暴力自然化；必须区分自然变迁与可追责的制度牺牲。","use":"作品承认梦与人物必须消逝，却拒绝把“辛”的循环说成不可改变的宇宙法则。","related":["京都学派","哀悼","幽灵主权"]},"mourning":{"label":"哀悼","family":"精神分析／伦理","brief":"不是遗忘逝者，而是在承认失去不可逆之后，重新安排爱、记忆与未来。","history":"弗洛伊德区分哀悼与忧郁；德里达进一步指出，对他者完全成功的内化反而会消除其异质性。","context":"东亚的供养、年忌与祖先祭祀说明，继续关系与允许退场并不矛盾。","use":"优娜的革命是“带着悲伤活下去”：记住死者，却取消死者支配生者未来的权利。","related":["程序化哀悼","幽灵学","无常"]}};
const captionDemands = {"ffx_sending.jpg":"潜梦：仪式之美暂时替共同体承受死亡，却也训练玩家把“正确离去”视为唯一秩序；后来未发送者的统治会反过来质问这份美。","ffx_system_chain.png":"潜梦：流程图看似解释循环，真正被压缩进去的却是玩家自身——推进、成长与完成欲，正是循环进入身体的接口；到了终局，这套身体习惯反过来质问自己。","ffx_cloister_sphere.jpg":"潜梦：手中的幻光球不仅是钥匙；它把服从转换成解决谜题的满足，使寺院的合法秩序以成功反馈被身体接受。","ffx_03.jpg":"潜梦：亲密构图承诺知识共享，景深却保存优娜不能说出的死亡；爱在这里首先以共同体的沉默为边界。","ffx_forced_laugh.jpg":"潜梦：夸张笑声不是表演失败，而是理想自我破裂时泄出的接缝；后来得知献祭真相，尴尬才被事后改写为哀伤。","ffx_south_seas_context.png":"潜梦：海岛越被观看成纯粹天堂，帝国、战争、基地与观光的历史阴影就越容易退到画框之外；美赋予世界触感，也可能替中心遮蔽代价。","ffx_hymn_path.png":"潜梦：旋律没有纯洁起源。反抗、禁令、收编与共同发声层层沉积，使传统成为权力无法彻底占有的剩余。","ffx_disaster_sovereignty.png":"潜梦：完美闭环制造出无人驾驶的幻觉；但每一根箭头都由具体的人推动，循环的光滑表面只是暂时把责任折射开。","ffx_ctb_battle.jpg":"潜梦：未来被排列成可以计算的次序，与教团宣称不可改变的历史循环形成裂缝；战术自由预演了政治中断。","ffx_sphere_grid.jpg":"潜梦：开放网络并不等于无结构。每次越界都要支付资源，提醒自由是一种重新布线的劳动。","ffx_repetition_compulsion.png":"潜梦：父亲与世界灾难在杰克特身上重叠，使杀敌手势近似杀父幻想；中断却不靠占据父亲的位置，而靠承认关系中不可补偿的失败。","ffx_spectral_politics.png":"潜梦：幽灵不会因送行而彻底消失。真正改变的是，痕迹能否交给后来者解释，还是继续借职位与神圣传统冻结未来。","ffx_01.jpg":"潜梦：废墟拒绝完美复原。它的缺口不是等待修补的失败，而是使毁灭不能被梦城抹去的历史证词。","ffx_dream_zanarkand_road.jpg":"潜梦：灯光道路制造开放都市的幻觉，栏杆和镜头却把身体导向唯一终点；幻想以流畅通行掩盖路径早已写定。","ffx_04.jpg":"潜梦：水中拥抱仿佛让两个身体暂时没有边界，但这份完整只在即将失去时成立；幻想给予爱以形状，也标出它无法保存之处。","ffx_kyoto_crosscurrents.png":"潜梦：概念图诱使人相信，东西思想已经在中心和解；图中的不等号与历史检验却提醒我们，任何汇流都可能再次遮蔽帝国责任与具体牺牲。","ffx_02.jpg":"潜梦：召唤兽既是伙伴又被界面折算为数值资源。崇高动画越动人，被拘禁身体的劳动越容易从意识中退场。","ffx_final_aeons_cropped.jpg":"潜梦：熟悉的召唤菜单从资源目录变为强制送行名册。按钮没有改变，欲望的方向却被迫反转：召唤不再意味着占有，而意味着最后一次让伙伴现身。","ffx_language_routes.png":"潜梦：语言选择看似属于玩家，声音轨和市场版本却预先规定了可选择的组合；转译自由始终在技术路径中发生。","ffx_memory_translation.png":"潜梦：永不忘记能保护证言，也可能把生活变成永久值勤；偶尔想起允许呼吸，也可能成为逃避。两种节律都必须接受责任的检验。","ffx_terms_triptych.png":"潜梦：三栏对照不会还原同一个纯粹原义。每种语言都制造新的神学重音，也留下无法互相覆盖的剩余。","ffx_dream_zanarkand.jpg":"潜梦：倒影并非城市的次等复制；它使看似连续的故乡显出无法抵达的另一面，观看越清晰，失去越不能被取消。","ffx_memory_rhythm.png":"潜梦：间歇的记忆允许逝者离开，也允许他们再次被想起；梦城持续生成、无法停止的召唤，则把忠诚变成永不停机的值勤。"};
const gazeQuestions = {"ffx_sending.jpg":"你正在欣赏一场为死者举行的美。这份美是否也使制度更容易被接受？","ffx_03.jpg":"你是否也借优娜的沉默，暂时保住了旅程继续向前的幻想？","ffx_forced_laugh.jpg":"当笑声令你尴尬时，你把失败归给演员，还是归给要求她微笑的世界？","ffx_south_seas_context.png":"当岛屿被观看为乐园，哪些战争、基地与劳动被留在画框之外？","ffx_dream_zanarkand_road.jpg":"你希望这座城市继续存在多久——如果代价总由画面之外的人承担？","ffx_04.jpg":"你要求这个拥抱保存什么：爱情、身体，还是一个不会失去的自己？","ffx_02.jpg":"当神圣身体成为数值资源，你的喜爱是否也参与了它的可调用性？","ffx_final_aeons_cropped.jpg":"当名单越完整、告别越漫长，你仍然希望占有全部内容吗？","ffx_dream_zanarkand.jpg":"你在寻找故乡，还是寻找一个从未遭到损坏的过去？","ffx_memory_rhythm.png":"你要求记忆持续值勤多久，才肯相信自己没有背叛死者？"};
const routeSections = [["序曲","序曲水面上的舞者屏幕前的见证人-2"],["第一幕 · 行路","第一幕　行路身体先于教义-3"],["第二幕 · 回返","第二幕　回返灾难把世界变成制度-8"],["第三幕 · 放下","第三幕　放下从未发送者到空的政治风险-12"],["第四幕 · 转译","第四幕　转译同一场告别几种哀悼伦理-19"],["尾声","尾声记住但不要住进记忆-23"]];
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
const motifMeanings = {
  "水": "它既承载出生、战斗与送行，也把倒影和深处同时交给观看者。",
  "月": "月光不是自足的光；它以反射、周期与借来的记忆照亮史匹拉。",
  "废墟": "废墟保存不可逆性，使城市无法被复原为没有发生过灾难的完整现在。",
  "寺院": "寺院既是神圣内部，也是把正统拆成插槽、通路和合法操作的制度机器。",
  "幻光虫": "幻光虫游移于灵魂、记忆、数据与未完成关系之间，拒绝单一象征。",
  "歌声": "歌声的意义随发声者、场所与历史关系改变，不属于任何永恒的解释者。"
};
const symptomRevisions = {
  "希望": "后来的希望使这里的安慰显出制度价格：它安抚恐惧，也把行动资格交给既定牺牲者。",
  "安宁": "后来重返此处，短暂平静不再只是奖赏，也成为循环能够继续取得同意的条件。",
  "牺牲": "后来出现的牺牲把这一次死亡从命运改写为制度选择，责任因而可以被追问。",
  "梦": "后来关于梦城的知识使这里的梦不再只是愿望，而显出维持愿望所需的他者劳动。",
  "辛": "后来杰克特与耶朋·咒的揭示，使这里的敌人同时成为父亲、铠甲与重复装置。",
  "父亲": "后来重返这个称呼，私人怨恨已经被世界灾难重新占据，胜利不能再等同于取代父亲。",
  "送行": "后来发生的送行使这里的仪式不再只是安置亡魂，也成为解除死者统治权的政治行动。"
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

function openSymptomTrace(token) {
  const key = token.dataset.symptom;
  const currentIndex = Number(token.dataset.occurrence || 1) - 1;
  const records = symptomArchive.get(key) || [];
  const current = records[currentIndex];
  if (!current) return;
  const prior = records.slice(0, currentIndex);
  const revision = symptomRevisions[key] || "后来的语境没有恢复一个原始真义；它只改变了此前这句话现在能够怎样被听见。";
  const returns = prior.length
    ? prior.map((record, index) =>
      '<button class="trace-return" type="button" data-return-target="' + record.id + '" data-afterward="' + escapeArchiveText(revision) + '" aria-label="返回第 ' + String(index + 1) + ' 次出现；事后改写：' + escapeArchiveText(revision) + '">' +
      '<span>' + String(index + 1).padStart(2, "0") + ' · ' + escapeArchiveText(record.section) + '</span>' +
      '<p>' + escapeArchiveText(record.excerpt) + '</p>' +
      '<small class="trace-afterward">事后改写：' + escapeArchiveText(revision) + '</small></button>'
    ).join("")
    : '<p class="trace-empty">这是它第一次显现。此刻它还没有可以承认的过去。</p>';
  openOneiricArchive(
    '<header class="oneiric-head"><p>APRÈS-COUP / RETURN TRACE</p><h2>“' + escapeArchiveText(key) + '”的事后回返</h2></header>' +
    '<p class="oneiric-lead">第 ' + String(currentIndex + 1) + ' 次出现并不恢复一个藏在开头的答案；后来语境改变了此前语句现在能够意味着什么。</p>' +
    '<section class="trace-current"><span>当前语境 · ' + escapeArchiveText(current.section) + '</span><p>' + escapeArchiveText(current.excerpt) + '</p></section>' +
    '<section class="trace-history"><h3>此前留下的痕迹</h3>' + returns + '</section>'
  );
}

function openMotifConstellation(token) {
  const key = token.dataset.motif;
  const records = motifArchive.get(key) || [];
  if (!records.length) return;
  const nodes = records.map((record, index) => {
    const angle = -90 + index * (360 / Math.max(records.length, 1));
    const radians = angle * Math.PI / 180;
    const x = 50 + Math.cos(radians) * 38;
    const y = 50 + Math.sin(radians) * 36;
    return '<button class="constellation-node" type="button" data-return-target="' + record.id + '" ' +
      'style="--node-x:' + x.toFixed(2) + '%;--node-y:' + y.toFixed(2) + '%" ' +
      'aria-label="前往' + escapeArchiveText(record.section) + '中的' + escapeArchiveText(key) + '">' +
      '<span>' + String(index + 1).padStart(2, "0") + '</span></button>';
  }).join("");
  const routes = records.map((record, index) =>
    '<button class="motif-route" type="button" data-return-target="' + record.id + '">' +
    '<span>' + String(index + 1).padStart(2, "0") + ' · ' + escapeArchiveText(record.section) + '</span>' +
    '<p>' + escapeArchiveText(record.excerpt) + '</p></button>'
  ).join("");
  openOneiricArchive(
    '<header class="oneiric-head"><p>JUNGIAN AMPLIFICATION FIELD</p><h2>“' + escapeArchiveText(key) + '”的意象星图</h2></header>' +
    '<p class="oneiric-lead">' + escapeArchiveText(motifMeanings[key] || "意象不服从单一释义，而在不同场景中组成关系星座。") + '</p>' +
    '<div class="motif-constellation"><span class="constellation-core">' + escapeArchiveText(key) + '</span>' + nodes + '</div>' +
    '<section class="motif-routes"><h3>跨章节变体</h3>' + routes + '</section>'
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
  document.querySelectorAll("figure[data-demand-threshold]").forEach(figure => {
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
  else if (event.target.closest("[data-reader-size]")) {
    const size = event.target.closest("[data-reader-size]").dataset.readerSize;
    document.body.classList.toggle("reader-small", size === "small");
    document.body.classList.toggle("reader-large", size === "large");
  } else if (event.target.closest("[data-focus-mode]")) {
    const control = event.target.closest("[data-focus-mode]");
    const active = document.body.classList.toggle("traversing-fantasy");
    control.textContent = active ? "返回水面" : "穿越幻想";
    control.setAttribute("aria-pressed", String(active));
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
function syncCurrentRoute() {
  if (!journeyPlace) return;
  const threshold = window.innerHeight * 0.34;
  let currentIndex = 0;
  routeSections.forEach(([, id], index) => {
    const heading = document.getElementById(id);
    if (heading && heading.getBoundingClientRect().top <= threshold) currentIndex = index;
  });
  const [label, currentId] = routeSections[currentIndex];
  journeyPlace.textContent = label;
  document.body.dataset.currentAct = String(currentIndex);
  document.querySelectorAll(".chapter-rail li").forEach(item => {
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
    const ghostCount = window.innerWidth < 760 ? 20 : 34;
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
  const notesHeading = document.getElementById("注释-23");
  if (article) {
    const proseParagraphs = [];
    for (const child of article.children) {
      if (child === notesHeading) break;
      if (child.tagName === "P") proseParagraphs.push(child);
      if (child.tagName === "BLOCKQUOTE") proseParagraphs.push(...child.querySelectorAll("p"));
    }

    function sectionForParagraph(paragraph) {
      let topLevel = paragraph;
      while (topLevel.parentElement && topLevel.parentElement !== article) topLevel = topLevel.parentElement;
      let cursor = topLevel.previousElementSibling;
      while (cursor) {
        if (cursor.matches("h2, h3")) return cursor.textContent.trim();
        cursor = cursor.previousElementSibling;
      }
      return "摘要";
    }

    function wrapArchiveWords(paragraphs, definitions, className, archive) {
      const combined = paragraphs.map(paragraph => paragraph.textContent).join("");
      const words = Object.keys(definitions).filter(word => combined.split(word).length - 1 >= 2);
      if (!words.length) return;
      const matcher = new RegExp("(" + words.sort((a, b) => b.length - a.length).join("|") + ")", "g");
      paragraphs.forEach(paragraph => {
        const section = sectionForParagraph(paragraph);
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
            if (wrappedInParagraph.has(word) || records.length >= 16) {
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
              token.setAttribute("aria-label", word + "，第 " + occurrence + " 次出现；查看此前语境");
            } else {
              token.dataset.motif = word;
              token.dataset.occurrence = String(occurrence);
              token.id = "motif-" + encodeURIComponent(word) + "-" + occurrence;
              token.setAttribute("aria-label", word + "，第 " + occurrence + " 个意象变体；打开跨章节星图");
            }
            records.push({ id: token.id, section, excerpt });
            archive.set(word, records);
            wrappedInParagraph.add(word);
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
    updateProgress();

    article.querySelectorAll(".pyre-bridge").forEach((paragraph, paragraphIndex) => {
      const current = document.createElement("span");
      current.className = "pyre-current";
      current.setAttribute("aria-hidden", "true");
      const motif = ["梦", "死者", "记忆", "送行"].find(word => paragraph.textContent.includes(word));
      if (motif) {
        current.classList.add("is-gathered");
        current.dataset.motif = motif + " · 痕迹聚集";
      }
      current.style.setProperty("--current-duration", (7 + Math.random() * 7).toFixed(2) + "s");
      current.style.setProperty("--current-delay", (-Math.random() * 7).toFixed(2) + "s");
      const particleCount = 4 + Math.floor(Math.random() * 3);
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
        });
      }, { rootMargin: "-14% 0px -24% 0px", threshold: 0.12 });
      article.querySelectorAll(".dream-text, .dream-image").forEach(item => revealObserver.observe(item));

      const thresholdObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting || entry.target.classList.contains("is-open") || entry.target.dataset.waking) return;
          entry.target.dataset.waking = "true";
          window.setTimeout(() => entry.target.classList.add("is-open"), 1200);
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



var activeSoundCard=null;
function submergeSound(card,restoreFocus){
  var player=card.querySelector('.sound-player');
  var button=card.querySelector('.sound-load');
  player.replaceChildren();
  card.dataset.loaded='false';
  card.classList.add('has-echo');
  button.textContent='再次让声音浮出水面';
  if(activeSoundCard===card)activeSoundCard=null;
  if(restoreFocus)button.focus({preventScroll:true});
}
document.querySelectorAll('.sound-threshold').forEach(function(card){
  var button=card.querySelector('.sound-load');
  var player=card.querySelector('.sound-player');
  button.addEventListener('click',function(){
    if(card.dataset.loaded==='true')return;
    if(activeSoundCard&&activeSoundCard!==card)submergeSound(activeSoundCard,false);
    var frame=document.createElement('iframe');
    var close=document.createElement('button');
    frame.src='https://music.163.com/outchain/player?type=2&id='+encodeURIComponent(card.dataset.soundId)+'&auto=1&height=66';
    frame.title=card.querySelector('h3').textContent+'——网易云音乐外链播放器';
    frame.loading='lazy';
    frame.allow='autoplay; encrypted-media';
    close.type='button';
    close.className='sound-submerge';
    close.textContent='沉回水下';
    close.addEventListener('click',function(){submergeSound(card,true);});
    player.appendChild(frame);
    player.appendChild(close);
    card.dataset.loaded='true';
    card.classList.remove('has-echo');
    activeSoundCard=card;
    player.setAttribute('tabindex','-1');
    player.focus({preventScroll:true});
  });
});
