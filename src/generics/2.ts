type TopType = Pick<AllType, 'name' | 'color'>;
type BottommType = Pick<AllType, 'position' | 'weight'>;


type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare(top: TopType, bottom: BottommType): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}
