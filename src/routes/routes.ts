type route = {
  path: string
  page: () => JSX.Element
  layout: (props: any) => JSX.Element
}
type RoutePageType = {
  private: route[]
  public: route[]
}

const RoutePages: RoutePageType = {
  private: [],
  public: []
}

export default RoutePages
