/**
 * Created by dbaker on 5/2/16.
 */
export default class DataStore {

  constructor(client) {
    this.client = client;
  }

  addIssue(issue) {
    const issueRef = this._getStoreReference(issue);
    return issueRef.set(issue);
  }

  removeIssue(issue) {
    const issueRef = this._getStoreReference(issue);
    return issueRef.remove();
  }

  _modifyRepoNameIfNeeded(repo) {
    return repo.replace('.', '');
  }

  _getStoreReference(issue) {
    let {
      repo:repoName,
      id:issueId
    } = issue;

    repoName = this._modifyRepoNameIfNeeded(repoName);

    const path = `issues/${repoName}/${issueId}`;
    return this.client.child(path);
  }

};
