import React, { useState } from "react";

const MemberForm = props => {
    return (
        <form>
            <label htmlFor="member">New Member </label>
            <input type="text" name="member" placeholder="Name" />
            <label htmlFor="email"></label>
            <input type="email" name="email" placeholder="Email" />
            <label htmlFor="position"></label>
            <select name="position">
                <option value="back end developer">back end developer</option>
                <option value="glorified mail clerk">Glorified Mail Clerk</option>
                <option value="Software Engineer">Software Engineer</option>
            </select>
            <button type="submit"> Add Member</button>
        </form>
    );
}

export default MemberForm;


/*
Attempted second form:
        <form>
            <label htmlFor="email"></label>
            <input type="email" name="email" placeholder="email" />
        </form>
*/
