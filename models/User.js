import mongoose from 'mongoose'; //1. mongoose 모듈 가져오기

const userSchema = mongoose.Schema({ //2. 가져온 mongoose 모듈을 이용해서 Schema를 생성한다. 
    //3. 그리고 이 안에서 필드들을 작성한다.
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //입력한 글에서 스페이스를 없애주는 역할
        unique: 1  //이메일은 유니크 햇으면 좋겠으니까 똑같은 이메일을 쓰지 못하도록 한다.
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number, //ex) number가 1이면 관리자, 0이면 일반유저
        default: 0
    },
    image: String, //✨ object를 사용하지 않고, 그냥 이렇게도 작성해줄 수도 있다.
    token: { //토큰을 이용해서 유효성 관리
        type: String
    },
     tokenExp: {  //토큰이 사용될 수 있는 기간
        type: Number
    }
});


export const User = mongoose.model('User', userSchema);

