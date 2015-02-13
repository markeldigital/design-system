using System.Collections.Generic;

namespace Markel.REMUS.DesignSystem.Contracts
{
    public interface INestLinks : INavigateSomewhere
    {
        IList<INavigateSomewhere> Links { get; }
        string ImagePath { get; }
    }
}
