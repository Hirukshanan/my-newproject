export interface User{

    id: number;
    firstName: string;
    lastName: string;
    email: string;
    image: string;

}

export interface UserResponse{
    users: User[];
}