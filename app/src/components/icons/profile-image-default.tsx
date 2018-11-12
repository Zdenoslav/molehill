import React from 'react';

import Svg from '../svg';

interface IProfileImageDefaultProps {
  color?: string;
}

type Props = IProfileImageDefaultProps & React.HTMLAttributes<SVGElement>;

{/* tslint:disable:max-line-length */}
const ProfileImageDefault: React.SFC<Props> = (props) => {
  return (
    <Svg width="32" height="32" viewBox="0 0 47 47">
      <rect width="100%" height="100%" x="0" y="0" fill="none" stroke="none"/>
      <g>
        <circle fill="#A4C2F7" cx="23.410715103149414" cy="23.410715103149414" r="22.559424160924323"/>
        <ellipse fill="#E3E7F2" cx="22.133733339722653" cy="23.410715103149414" rx="21.28244379288492" ry="22.559424160924323"/>
        <path fill="#FFFFFF" d="M23.410715103149414,45.97013978873938 c0.22038993515074254,0 0.4382193233370781,-0.010425084069371225 0.6570546406880021,-0.016643555268645287 C12.60127464479953,45.604896053887906 3.405161670237779,35.64958090437949 3.405161670237779,23.410715103149414 S12.60127464479953,1.2165341524109246 24.067769743837417,0.8679339728280902 c-0.21883531735092404,-0.006218471199274065 -0.43675615364313125,-0.016643555268645287 -0.6570546406880021,-0.016643555268645287 C10.9514593667686,0.8512904175594448 0.8512904175594448,10.9514593667686 0.8512904175594448,23.410715103149414 S10.9514593667686,45.97013978873938 23.410715103149414,45.97013978873938 L23.410715103149414,45.97013978873938 z"/>
        <path fill="#7FACFA" d="M16.6961379295215,36.22469804220646 l-6.731586521320045,3.671824346959591 c-0.3872827283665538,0.21581752985715866 -0.7496001238301395,0.4737926365211606 -1.0802764746621252,0.769078570380807 c8.36091742363572,7.044704835824668 20.571068519622088,7.075797191821039 28.967833600759505,0.07389006954431535 c-0.36259173978120085,-0.31128935238718985 -0.7609396889582276,-0.5783178215324879 -1.1866306217908857,-0.7955070729777217 l-7.207756808593869,-3.603786956191063 c-0.9313989583030343,-0.46565375509858126 -1.5196846233755348,-1.417628537222743 -1.5196846233755348,-2.4589481187835336 V31.053033310845493 c0.24206313624233008,-0.2803798926025629 0.46958602365106344,-0.5730138313919306 0.6818370773792267,-0.8766215428858996 c0.9723677097335459,-1.3820552240386605 1.7279119604453443,-2.9046661868020895 2.240295697644353,-4.515067331202328 c0.9492313389480115,-0.28870167023688553 1.5999760603308677,-1.1617567369937898 1.6052800504714249,-2.153877237595618 v-3.018336182400584 c-0.0024690988585352905,-0.6394051562547683 -0.2768134164735675,-1.2476265084072948 -0.7545383215472101,-1.6726773044988514 v-4.3637207159847025 c0,0 0.8960085413306952,-6.791027790136635 -8.300195881336927,-6.791027790136635 s-8.300195881336927,6.791027790136635 -8.300195881336927,6.791027790136635 v4.3637207159847025 c-0.47772490507364274,0.4250507960915565 -0.7520692226886749,1.033272148244083 -0.7545383215472101,1.6726773044988514 v3.018336182400584 c0.0023776507526636127,0.7692614665925503 0.39542160978913304,1.484568550720811 1.0433314398899676,1.8991028146371245 c0.5009527239650488,2.053741561666131 1.4311628568917514,3.9781755016297105 2.7294516159519553,5.64646329704672 v2.7580748730897904 C18.1287639561072,34.81722024473548 17.57934373603016,35.7428579723686 16.6961379295215,36.22469804220646 z"/>
        <path fill="#A4C2F7" d="M36.27051354324818,39.88600585699081 l-9.48280278646946,-3.603786956191063 c-0.9313989583030343,-0.46565375509858126 -1.5196846233755348,-1.417628537222743 -1.5196846233755348,-2.4589481187835336 v-2.828215570293367 c0.24206313624233008,-0.2803798926025629 0.46958602365106344,-0.5730138313919306 0.6818370773792267,-0.8766215428858996 c0.9723677097335459,-1.3820552240386605 1.7279119604453443,-2.9046661868020895 2.240295697644353,-4.515067331202328 c0.9492313389480115,-0.28870167023688553 1.5999760603308677,-1.1617567369937898 1.6052800504714249,-2.153877237595618 v-3.018336182400584 c-0.0024690988585352905,-0.6394051562547683 -0.2769048645794392,-1.2476265084072948 -0.7545383215472101,-1.6726773044988514 v-4.3637207159847025 c0,0 0.8960085413306952,-6.791027790136635 -8.300195881336927,-6.791027790136635 c-0.5474083617478609,0 -1.0566828633472323,0.025514021538197998 -1.5348650089502334,0.07087228205054999 c0.055783344581723224,0.4420601437836885 -0.1923153666481376,0.8665622512400151 -0.604929220341146,1.0348267660439014 c-1.101035194694996,0.4516621949002147 -2.166588524311781,0.9854447888731956 -3.1876980744749304,1.596775376625359 c0.4207527351155877,0.0736157252267003 0.7269209935739637,0.43995683734863994 0.7246347909271718,0.867110939875245 c0.18344490037858485,3.1341094844341275 -0.8947282678484917,6.813981264710426 -1.8638038457706572,10.017499861501157 c0.029812082514166838,1.2613437242880463 0.057429410487413415,2.5229617928937076 0.09410010094195603,3.784305517181754 c0.09318561988323926,0.29117076909542083 0.18664558408409357,0.5821586419790983 0.2780022418498993,0.8736952034980059 c0.176037603802979,0.10699428386986255 0.3140327955633402,0.2665712286159396 0.394598576836288,0.4562346001937985 c0.3888373461663723,0.926094968162477 0.8223928161039948,1.8752348590046168 1.198518875554204,2.841841338068247 c0.5126580815166235,-0.14293338947743178 1.0507387364655734,0.12272335807979108 1.24899822999537,0.616543129786849 c0.3318651762083173,0.9372516370788218 0.53972672085464,1.913917407788336 0.6181891956925392,2.9051234273314477 c0.04014571847766638,0.2976635846123099 -0.10543966607004404,0.5897488347664476 -0.3672555931806564,0.736980285219848 c-0.47333539599180224,1.6394816420674325 -1.2725918413102628,3.1665735620185735 -2.349941976584494,4.489919102087617 c-0.2335584623962641,0.22752288740873336 -0.5693559071570635,0.31577030957490204 -0.8846689762026071,0.23255253323167563 c-0.315221620939672,-0.08321777634322644 -0.5637775726988912,-0.32573815311491494 -0.6545855418294668,-0.6388564676195383 c-0.045632604829967026,-0.1582966712638736 -0.08276053581386805,-0.3188795451745391 -0.11110944863408805,-0.4811084849908948 c-0.633003788843751,0.37594316323846577 -1.3116401825174688,0.704424759529531 -2.0442309586554765,1.1146609624698758 c-0.39340975145995616,0.22029848704487084 -3.3824825399816034,1.5924773156493903 -3.4571041943728926,1.9328471657037734 c-0.42239880102127786,1.9259885577633977 6.3299464403316374,4.314704531237483 9.719836276888847,5.665210158750415 c0.92298573256284,0.1209858440682292 1.8525557287484407,0.18490807007253168 2.783405998416245,0.19140088558942078 c5.494385096982121,0 12.803374958775938,-1.966134276241064 16.716439409025014,-5.230648759648204 C37.09455242525786,40.37022357758134 36.69620447608084,40.10319510843605 36.27051354324818,39.88600585699081 L36.27051354324818,39.88600585699081 z"/>
        <g>
          <path fill="#428DFF" d="M23.410715103149414,46.82143020629883 C10.481324654482304,46.82143020629883 0,36.34010555181652 0,23.410715103149414 S10.481324654482304,0 23.410715103149414,0 s23.410715103149414,10.481324654482304 23.410715103149414,23.410715103149414 C46.80652416504174,36.33388708061725 36.33388708061725,46.80652416504174 23.410715103149414,46.82143020629883 zM23.410715103149414,1.7025808351188896 C11.421685527160763,1.7025808351188896 1.7025808351188896,11.421685527160763 1.7025808351188896,23.410715103149414 S11.421685527160763,45.11884937117994 23.410715103149414,45.11884937117994 S45.11884937117994,35.39974467913806 45.11884937117994,23.410715103149414 C45.10513215529919,11.427355309724808 35.394074896574026,1.7162980509996415 23.410715103149414,1.7025808351188896 z"/>
          <path fill="#428DFF" d="M23.410715103149414,46.82143020629883 c-5.516606986708939,-0.0031092355996370324 -10.855255959391593,-1.9525999565720558 -15.075677493475377,-5.505175973474979 c-0.19002916400134562,-0.16021708148717884 -0.30049847589433193,-0.39542160978913304 -0.3026017823293805,-0.6438861134424806 c-0.0021033064350485806,-0.2484645036533475 0.10452518501132727,-0.4854979940727353 0.2918109058365226,-0.6488243111595511 c0.3774977810382843,-0.3359803409725428 0.7910261157900095,-0.6293458646088839 1.2329033633619546,-0.8746096845567226 l6.731403625108301,-3.6711842102184895 c0.6099588661640882,-0.33277965726703407 0.9893770574256778,-0.9720933654159308 0.989285609319806,-1.666824625723064 v-2.463246179759502 c-1.215528223246336,-1.6289651098921893 -2.109067665718496,-3.4748451269119975 -2.632882416151464,-5.43869320050627 c-0.7217998996451497,-0.5885600093901158 -1.1406322245374323,-1.4704855424165724 -1.1406322245374323,-2.401793052613735 v-3.017787493765354 c0.0025605469644069674,-0.7409125537723303 0.27032060095667837,-1.4564025341123343 0.754904113970697,-2.016887974999845 v-3.973054407700896 c-0.14714000234752894,-1.8105810481533409 0.4292574089616537,-3.6057073664143684 1.60281095161289,-4.992243547640741 C17.43083201209456,7.717397102616728 19.970620256468653,6.810414788581431 23.410715103149414,6.810414788581431 s5.979883091054857,0.9069823140352964 7.548583899177611,2.6968960902616383 c1.173553542651236,1.3865361812263728 1.7498595058545472,3.1816624994874 1.60281095161289,4.992243547640741 V18.472517386078835 c0.48449206490814684,0.5604854408875107 0.75234356700629,1.2759754212275147 0.754904113970697,2.016887974999845 v3.017787493765354 c0.0014631696939468386,1.1986103236600756 -0.6903417512252927,2.289860571026802 -1.7749162868633865,2.7999581055790186 c-0.5326852167025209,1.5516000123247502 -1.2824682367444038,3.0199822483062744 -2.227218618504703,4.361160169020295 c-0.18207317879050972,0.2568777293935418 -0.35829367880523205,0.4897046069428325 -0.5253693682327867,0.6958286375775933 v2.5172920103296637 c-0.0022862026467919353,0.7193308007866144 0.4046578684821725,1.3774828187450767 1.049184118665755,1.6969110525548459 l7.207756808593869,3.6038784042969345 c0.4859552346020937,0.24700133395940066 0.9405437688902021,0.5512491821944713 1.3542549998536706,0.9061592810824514 c0.19249826285988092,0.1622289398163557 0.30324191907048226,0.4012742885649204 0.3026017823293805,0.6529394759237765 c-0.000640136741101742,0.25166518735885623 -0.11266406643390656,0.4901618474721909 -0.3059853622466326,0.6513848581239581 C34.18961189413816,44.897910747393965 28.88717637138069,46.81859531501681 23.410715103149414,46.82143020629883 zM10.28205923178792,40.69440711289644 c7.7174885507225985,5.867310472726822 18.390945675641298,5.9023350972756745 26.14665953461826,0.08559542709589005 c-0.048193151794373994,-0.02578836585581303 -0.09556327063590288,-0.05075369875878096 -0.14384787053614853,-0.07480455060303212 l-7.207756808593869,-3.6038784042969345 c-1.2231184160336852,-0.6059351495057345 -1.9950318776965141,-1.854841931395233 -1.990276576191187,-3.2197963596358896 v-2.828215570293367 c0,-0.20648982305824756 0.07498744681477547,-0.405938141964376 0.21115367645770314,-0.5611255776286125 c0.22231034537404776,-0.25870669151097536 0.431452163502574,-0.528387155726552 0.6267853176444769,-0.8080354634821415 c0.92243704392761,-1.3113658381998539 1.6390244015380742,-2.7560630147606138 2.124888188034296,-4.2838865195587275 c0.08532108277827502,-0.264193577863276 0.2941885565891862,-0.4702261603921652 0.5594795117229223,-0.5519807670414447 c0.590754763931036,-0.1812501458376646 0.9968758021071553,-0.7230801731273532 1.0051061316356062,-1.3409950245022773 v-3.017787493765354 c-0.0013717215880751613,-0.3988966378122568 -0.17393429736793042,-0.7779490366503596 -0.4738840846270323,-1.0408623410314322 c-0.178872495085001,-0.16131445875763895 -0.28102002934366466,-0.3909406526014209 -0.28102002934366466,-0.6318149634674192 v-4.3637207159847025 c0,-0.03721937908977271 0.0024690988585352905,-0.07443875817954541 0.007498744681477548,-0.11138379295170307 c0.09940409108251333,-1.3523345896303653 -0.3321395205259323,-2.690128930427134 -1.202999832741916,-3.7294366536587473 c-1.2336349482089282,-1.3924803081080317 -3.3369413832575083,-2.099099822178483 -6.253312927611172,-2.099099822178483 c-2.927985453799367,0 -5.037144567623734,0.7124721928462386 -6.268310416974128,2.1165664103999733 c-0.8689399019926787,1.0328149077147246 -1.2957282120957971,2.3664940837472677 -1.188002343378961,3.7119700654372574 c0.005029645822942258,0.03694503477215767 0.007498744681477548,0.07416441386193037 0.007498744681477548,0.11138379295170307 v4.3637207159847025 c0,0.2408743108659983 -0.10214753425866366,0.47050050470978017 -0.28102002934366466,0.6318149634674192 c-0.2999497872591019,0.2629133043810725 -0.4725123630389571,0.6419657032191753 -0.4738840846270323,1.0408623410314322 v3.017787493765354 c0.001737514011561871,0.48065124446153645 0.24837305554747582,0.927192345432937 0.6543111975118518,1.1847102115675807 c0.18600544734299182,0.12043715543299915 0.317782167904079,0.3086373573169112 0.36743848939239976,0.5245463352799415 c0.4738840846270323,1.922513529740274 1.3440128119960428,3.7247728002592924 2.5547857337370514,5.2915531981587405 c0.12692997094988823,0.15344992165267468 0.19652197951823472,0.34622252883017063 0.19707066815346483,0.5453965034186841 v2.7575261844545604 c0.0002743443176150323,1.3180415499284863 -0.7197880413159728,2.530917778104544 -1.877155269227922,3.1616353643015027 l0,0 l-6.731403625108301,3.6711842102184895 C10.341957741133868,40.66029696940631 10.31205421051383,40.676940524674954 10.28205923178792,40.69440711289644 z"/>
        </g>
      </g>
    </Svg>
  );
};

export default ProfileImageDefault;
