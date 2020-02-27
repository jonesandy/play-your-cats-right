export const computeScore = (cat) => {
    let score = cat.breeds[0].energy_level;
    score += cat.breeds[0].affection_level;
    score += cat.breeds[0].stranger_friendly;

    return score
}