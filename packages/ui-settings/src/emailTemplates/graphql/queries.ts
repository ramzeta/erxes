const emailTemplates = `
  query emailTemplates($page: Int, $perPage: Int) {
    emailTemplates(page: $page, perPage: $perPage) {
      _id
      name
      content
    }
  }
`;

const totalCount = `
  query emailTemplatesTotalCount {
    emailTemplatesTotalCount
  }
`;

export default {
  emailTemplates,
  totalCount,
};
