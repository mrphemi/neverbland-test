import { Person } from "@/types";
import Image from "next/image";

const Person = ({ person, character }: Person) => {
    return (
        <div className="flex gap-x-5 items-center text-sm md:text-base">
            <div className="w-14 h-14 rounded-full relative">
                <Image
                    src={
                        person.image && person.image.medium
                            ? person.image.medium
                            : "https://api.multiavatar.com/Binx Bond.svg"
                    }
                    fill
                    alt={person.name}
                    className="object-cover object-top rounded-full"
                    sizes="56px"
                />
            </div>
            <p>
                {person.name} as{" "}
                <span className="text-sh-red">{character.name}</span>
            </p>
        </div>
    );
};

export default Person;
