import Server from "./components/Server/Server";
import "./App.css"
import { IServerProps } from "./components/Server/Server.types";
import { IFriendProps } from "./components/Friend/Friend.types";
import Friend from "./components/Friend/Friend";

const App = () => {
  const servers: IServerProps[] = [
    { name: "EC2", status: "OFFLINE", ip: "127.0.0.1", port: 5000 },
    { name: "C4", status: "ONLINE", ip: "127.56.23.19", port: 5987 },
  ];

  const friends: IFriendProps[] = [
    { name: "Kaavya", email: "abcd@gmail.com", isClose: true },
    { name: "Sudheer", email: "abcd@gmail.com", isClose: false },
  ];

  return (
    <>
      <div className="ServerContainer">
        {
          servers.map(server => {
            return <Server
              key={server.name}
              name={server.name}
              status={server.status}
              ip={server.ip}
              port={server.port}
            />
          })
        }
      </div>

      <div className="FriendContainer">
        {
          friends.map(friend => {
            return (
              <Friend 
                key={friend.name}
                name={friend.name}
                email={friend.email}
                isClose={friend.isClose}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default App;