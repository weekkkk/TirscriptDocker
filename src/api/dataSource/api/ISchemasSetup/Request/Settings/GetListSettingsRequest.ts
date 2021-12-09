import PageRequest from '../../../PaginationHelper/Lib/PageRequest';

export default class GetListSettingsRequest  {
	ReleaseServerId: number = 0;
	Page: PageRequest = null;
	constructor(obj?: Partial<GetListSettingsRequest>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
