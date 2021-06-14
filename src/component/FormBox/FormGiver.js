import React , {useRef} from 'react';
import WrapperGiver from '../WrapperBox/WrapperGiver';

function FormGiver(props) {

    let movie_name = useRef();
    let hero_name = useRef();
    let heroine_name = useRef();
    let Director_name = useRef();

    function formSubmitHandle(event) {
        event.preventDefault();
        let data = {
            movie_name : movie_name.current.value,
            hero_name : hero_name.current.value,
            heroine_name : heroine_name.current.value,
            Director_name : Director_name.current.value
        }
        props.onformSubmit(data);
    }
    return (
        <WrapperGiver className = "formContainerBox">
            <form action="#" className = "mainForm" onSubmit = {formSubmitHandle}>
                <WrapperGiver className = "forMovieName">
                    <label htmlFor="forMovie_Id">Movie Name</label><br></br>
                    <input type="text" name="movie_name" id="forMovie_Id" ref = {movie_name}/>
                </WrapperGiver>
                <hr></hr>

                <WrapperGiver className = "forHeroName">
                    <label htmlFor="forHero_Id">Hero Name</label><br></br>
                    <input type="text" name="hero_name" id="forHero_Id" ref = {hero_name}/>
                </WrapperGiver>
                <hr></hr>

                <WrapperGiver className = "forHeroineName">
                    <label htmlFor="forHeroine_Id">Heroine Name</label><br></br>
                    <input type="text" name="heroine_name" id="forHeroine_Id" ref = {heroine_name}/>
                </WrapperGiver>

                <WrapperGiver className = "forDirectorName">
                    <label htmlFor="forDirector_Id">Director Name</label><br></br>
                    <input type="text" name="Director_name" id="forDirector_Id" ref = {Director_name}/>
                </WrapperGiver>

                <WrapperGiver className = "BtnContainer">
                    <button type = "submit" className = "submitBtn">Add</button>
                </WrapperGiver>
                <hr></hr>
                <hr></hr>
            </form>
        </WrapperGiver>
    )
}

export default FormGiver
