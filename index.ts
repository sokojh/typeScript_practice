type MyObject = {
    name? : string,
    age : number
  }
  let 철수 :MyObject = { 
    name : 'kim',
    age : 50
  }
  type proobject = {
    [key :string] : number,
  }
  let 영희 :proobject = { 
    age : 50,
    weight : 100,
  }
 
let 이름: String = "김지호"
let 나이: Number = 29
type object3 = {서울 : String}
let 출생지역:object3 = {서울:"성북구"}
type 가수 = {노래제목:String,가수이름:String}
let 오브 :가수= {노래제목:"오오",가수이름:"희말라야"}
let 좋아하는거 :{song : String, singer : String}={song:'사랑하기',singer:'유재하'}
let project :{member:[String,String]//이렇게해도 되지만 두개만 올수있기 때문에 String[] 이런식으로 써야 모두 스트링 배열이 와도 문제가 없다.
,days:Number,started:Boolean} = {
  member : ['kim', 'park'],
  days : 30,
  started : true,
}
console.log(project)