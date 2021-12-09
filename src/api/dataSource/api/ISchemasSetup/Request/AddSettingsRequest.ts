import VariableType from '../../Database/Models/VariableType';

export default class AddSettingsRequest  {
	ReleaseServerId: number = 0;
	Type: VariableType = null;
	Key?: string = '';
	Value?: string = '';
	constructor(obj?: Partial<AddSettingsRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
