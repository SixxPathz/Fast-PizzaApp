

import team1 from "../assets/team-1a.jpg";
import team2 from "../assets/team-2a.jpg";
import team3 from "../assets/team-3a.jpg";
import team4 from "../assets/team-4a.jpg";

const team = [
  { image: team1, name: "Richard Millie", role: "Head Chef" },
  { image: team2, name: "Hailey Doe", role: "Junior Chef" },
  { image: team3, name: "Jane Doe", role: "Cashier" },
  { image: team4, name: "Bob Smith", role: "Support Consultant" },
];

function Team() {
  return (
    <div className="mt-[10px] flex flex-wrap items-center gap-[10px]">
      {team.map((member) => {
        return (
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="center-bottom"
            key={member.image}
            className="member-box relative w-full overflow-hidden sm:w-[calc(100%/2-10px)] md:w-[calc(100%/4-10px)]"
          >
            <img src={member.image} alt="team member" className="w-full" />

            <div className="member-info absolute left-0 top-0 h-full w-full bg-lightGray p-[10px] opacity-[0.0] transition-all">
              <div
                className="flex h-full flex-col items-center justify-center gap-[10px] bg-primary p-[10px]
                 text-center font-bold text-bgWhite"
              >
                <h4 className="text-xl">{member.name}</h4>
                <p className="text-sm text-bgWhite">{member.role}</p>
                <div className="flex items-center justify-center gap-[10px]">
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Team;
