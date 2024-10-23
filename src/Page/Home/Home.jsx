import './Home.css';
import uniImage from './uni.jpg'; // เส้นทางใหม่

function Home() {
    return (
        <div className="home-container"> 
            <img src={uniImage} alt="My University" className="profile-image" />
            <h3 className="profile-title">Profile</h3>
            <div className="profile-info">
                <p><strong>Name:</strong> ปรมัตถ์ เอี่ยมองค์</p>
                <p><strong>Nickname:</strong> ขิง</p>          
                <p><strong>Age:</strong> 19</p>
                <p><strong>Hobby:</strong> อ่านหนังสือ</p>
                <p><strong>University:</strong> มหาวิทยาลัยศรีปทุม</p>
                <p><strong>Major:</strong> Software Developer</p>
            </div>
            <div className="interests">
                <h4>Interests</h4>
                <p>เทคโนโลยี, การพัฒนาซอฟต์แวร์, การลงทุน</p>
            </div>
            <div className="favorite-books">
                <h4>Favorite Books</h4>
                <p>หนังสือแนวพัฒนาตนเอง, เทคโนโลยี</p>
            </div>
        </div>
    );
}

export default Home;
