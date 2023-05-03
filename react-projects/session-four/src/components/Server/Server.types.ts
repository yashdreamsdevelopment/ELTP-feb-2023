export interface IServerProps {
    name: string;
    status: "ONLINE" | "OFFLINE";
    port: number;
    ip: string;
}