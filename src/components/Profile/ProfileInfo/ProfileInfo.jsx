import React from 'react';
import s from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return(
        <div className ={s.content}>
            <div>
                <img src='https://lhtravel.ru/wp-content/uploads/2018/10/1-11.jpg'/>
                <div className={s.descriptionBlock}>
                    ava+description
                </div>
            </div>


        
    </div>
    )
}

export default ProfileInfo;