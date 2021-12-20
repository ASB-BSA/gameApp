import type { CharacterDataType } from '@/types/CharacterDataType';

/**
 * キャラクターのデータを取得します
 * @param id キャラクターのID
 * @param characterData reacoilで保持している全キャラクターのデータ
 * @returns {CharacterDataType}
 */
const getCharData = (id: number, characterData: CharacterDataType[]) => characterData.find(data => data.id === id);

export default getCharData;