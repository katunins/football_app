import { ApiPaginationResponse } from "./api";

export type TeamsResponse = ApiPaginationResponse<{ teams: Team[] }>

export type Team = {
    id: number;
    name: string;
    shortName: string;
    tla: string;
    crest: string;
    address: string;
    website: string;
    founded: number;
    clubColors: string;
    venue: string;
    lastUpdated: string; // ISO-строка даты
};

export type TeamResponse = {
    squad: Player[]
}

export type Player = {
    id: number;
    name: string;
    position: string;
    dateOfBirth: string;
    nationality: string;
}

export type MatchResponse = {
    matches: Match[]
}

export type Match = {
    area: {
        id: number;
        name: string;
        code: string;
        flag: string;
    };
    competition: {
        id: number;
        name: string;
        code: string;
        type: string;
        emblem: string;
    };
    season: {
        id: number;
        startDate: string;
        endDate: string;
        currentMatchday: number | null;
    };
    id: number;
    utcDate: string;
    status: string;
    matchday: number;
    stage: string;
    group: string | null;
    lastUpdated: string;
    homeTeam: {
        id: number;
        name: string;
        shortName: string;
        tla: string;
        crest: string;
    };
    awayTeam: {
        id: number;
        name: string;
        shortName: string;
        tla: string;
        crest: string;
    };
};
