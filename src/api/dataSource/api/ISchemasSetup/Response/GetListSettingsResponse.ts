import SettingsResponse from '../../ISchemasSetup/Response/SettingsResponse';
import PageResponse from '../../PaginationHelper/Lib/PageResponse';

export default class GetListSettingsResponse  {
	Items: Array<SettingsResponse> = null;
	Page: PageResponse = null;
	constructor(obj?: Partial<GetListSettingsResponse>) {
		if (obj) {
			Object.assign(this, obj);
		}
	}
}
